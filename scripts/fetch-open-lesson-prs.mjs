import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { principalKey, modelFamilyKey, canonical, extractStructured, allowedReviewStates, reviewerAuthorConflict } from "./lib/provenance.mjs";
import { githubApiJson } from "./lib/github-api.mjs";
import {
  eligibleReviewVerdicts,
  resolveRule,
  reviewInputMinimum,
  reviewVerdictCounts,
  validateFinalizationRecord
} from "./lib/quorum-policy.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const explicitOutputPath = process.env.EK_OPEN_PRS_OUTPUT || null;
const repository = process.env.GITHUB_REPOSITORY || "VSBDev/EmbeddedKnowledge";
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const apiBase = process.env.GITHUB_API_URL || "https://api.github.com";
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
const lessonSchema = readJson("site/schemas/lesson.schema.json");
const reviewSchema = readJson("site/schemas/review.schema.json");
const adjudicationSchema = readJson("site/schemas/adjudication.schema.json");
const policy = readJson("site/agent/quorum-policy.json");
const courseTopics = new Map([
  ["PREM-", { course: "premed", ids: new Set(readJson("site/data/premed-graph.json").nodes.filter((node) => node.kind === "topic").map((node) => node.id)) }],
  ["PSY-", { course: "psychiatry", ids: new Set(readJson("site/data/psychiatry-graph.json").nodes.filter((node) => node.kind === "topic").map((node) => node.id)) }]
]);
const topicIds = new Set([...courseTopics.values()].flatMap(({ ids }) => [...ids]));
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
ajv.addSchema(lessonSchema).addSchema(reviewSchema).addSchema(adjudicationSchema);
const validateLesson = ajv.getSchema(lessonSchema.$id);
const validateReview = ajv.getSchema(reviewSchema.$id);
const validateAdjudication = ajv.getSchema(adjudicationSchema.$id);

function validationErrors(validate) {
  return (validate.errors || []).map((error) => `${error.instancePath || "/"} ${error.message}`);
}

async function api(relativePath) {
  return githubApiJson({
    url: `${apiBase}${relativePath}`,
    token,
    headers: { "User-Agent": "EmbeddedKnowledge-lesson-index" }
  });
}

function encodePath(filePath) {
  return filePath.split("/").map(encodeURIComponent).join("/");
}

function headRepository(pullRequest) {
  const fullName = pullRequest.head?.repo?.full_name;
  if (!fullName) throw new Error(`PR #${pullRequest.number} head repository is unavailable (the fork may have been deleted).`);
  return fullName;
}

async function readHeadFile(pullRequest, filePath, optional = false) {
  try {
    const sourceRepository = headRepository(pullRequest);
    const payload = await api(`/repos/${sourceRepository}/contents/${encodePath(filePath)}?ref=${encodeURIComponent(pullRequest.head.sha)}`);
    if (payload.type !== "file" || payload.encoding !== "base64") throw new Error(`${filePath} is not a base64 GitHub file response.`);
    return Buffer.from(payload.content, "base64").toString("utf8");
  } catch (error) {
    if (optional && error.status === 404) return null;
    throw error;
  }
}

async function listHeadDirectory(pullRequest, directoryPath) {
  try {
    const sourceRepository = headRepository(pullRequest);
    const payload = await api(`/repos/${sourceRepository}/contents/${encodePath(directoryPath)}?ref=${encodeURIComponent(pullRequest.head.sha)}`);
    return Array.isArray(payload) ? payload : [];
  } catch (error) {
    if (error.status === 404) return [];
    throw error;
  }
}

async function listPullFiles(number) {
  const files = [];
  for (let page = 1; ; page += 1) {
    const batch = await api(`/repos/${repository}/pulls/${number}/files?per_page=100&page=${page}`);
    files.push(...batch);
    if (batch.length < 100) break;
  }
  return files;
}

async function listPullReviews(number) {
  const reviews = [];
  for (let page = 1; ; page += 1) {
    const batch = await api(`/repos/${repository}/pulls/${number}/reviews?per_page=100&page=${page}`);
    reviews.push(...batch);
    if (batch.length < 100) break;
  }
  return reviews;
}

function parseJson(text, label, errors) {
  try {
    return JSON.parse(text);
  } catch (error) {
    errors.push(`${label} is not valid JSON: ${error.message}`);
    return null;
  }
}

function verifyGitHubProvenance(artifact, kind, githubReviews) {
  const identityField = kind === "review" ? "reviewId" : "adjudicationId";
  const actor = kind === "review" ? artifact.reviewer : artifact.adjudicator;
  const submission = githubReviews.find((githubReview) => {
    const embedded = extractStructured(githubReview.body, kind);
    return embedded?.[identityField] === artifact[identityField] && canonical(embedded) === canonical(artifact);
  });
  if (!submission) return { ok: false, error: `${artifact[identityField]} has no equivalent structured GitHub ${kind} submission.` };
  if (principalKey(actor.principalId) !== principalKey(`github:${submission.user.login}`)) {
    return { ok: false, error: `${artifact[identityField]} principal does not match GitHub reviewer ${submission.user.login}.` };
  }
  if (kind === "review" && artifact.candidateCommit !== submission.commit_id) {
    return { ok: false, error: `${artifact[identityField]} candidate commit does not match its GitHub review commit.` };
  }
  const allowedStates = allowedReviewStates(artifact, kind, policy);
  if (!allowedStates.has(String(submission.state).toLowerCase())) {
    return { ok: false, error: `${artifact[identityField]} requires GitHub state ${[...allowedStates].join(" or ")}; found ${String(submission.state).toLowerCase()}.` };
  }
  return { ok: true, submission };
}

function currentCandidateCohort(reviewInputs, blockers) {
  const groups = new Map();
  for (const review of reviewInputs) {
    if (!groups.has(review.candidateCommit)) groups.set(review.candidateCommit, []);
    groups.get(review.candidateCommit).push(review);
  }
  if (groups.size > 1) {
    blockers.push("The current lesson version has review inputs for multiple candidate commits. Freeze one candidate and collect one exact-candidate review set.");
    return [];
  }
  return [...groups.values()][0] || [];
}

export function evaluateProposal(metadata, reviews, adjudication, metadataErrors, artifactErrors, githubReviews, pullRequestAuthor) {
  if (!metadata || !validateLesson(metadata)) {
    if (metadata) metadataErrors.push(...validationErrors(validateLesson).map((error) => `lesson.json ${error}`));
    return {
      state: "invalid",
      stateLabel: "METADATA INVALID",
      reviewSummary: { reviewInputs: 0, requiredReviewInputs: reviewInputMinimum(policy.tiers.standard), approvals: 0, requiredApprovals: policy.tiers.standard.minimumApprovingReviews, roleCounts: {}, roleMinimums: {} },
      blockers: [...new Set(["A valid lesson.json is required before review quorum can be evaluated.", ...metadataErrors, ...artifactErrors])]
    };
  }

  if (metadataErrors.length) {
    return {
      state: "invalid",
      stateLabel: "PROPOSAL INVALID",
      reviewSummary: { reviewInputs: 0, requiredReviewInputs: reviewInputMinimum(policy.tiers[metadata.riskTier]), approvals: 0, requiredApprovals: policy.tiers[metadata.riskTier].minimumApprovingReviews, roleCounts: {}, roleMinimums: {} },
      blockers: [...new Set(metadataErrors)]
    };
  }

  const rule = resolveRule(policy, {
    lessonId: metadata.id,
    lessonVersion: metadata.version,
    riskTier: metadata.riskTier,
    policyId: adjudication?.policyId
  });
  const authorPrincipals = new Set(metadata.authors.map((author) => principalKey(author.principalId)));
  authorPrincipals.add(principalKey(`github:${pullRequestAuthor}`));
  const authorAgentRuns = new Set(metadata.authors.map((author) => author.agent?.runId).filter(Boolean));
  const validReviewInputs = [];
  const blockers = [...artifactErrors];
  const seenReviewIds = new Set();
  for (const review of reviews) {
    if (!validateReview(review)) {
      blockers.push(`Review artifact failed schema validation: ${validationErrors(validateReview).join("; ")}`);
      continue;
    }
    if (seenReviewIds.has(review.reviewId)) {
      blockers.push(`Duplicate review ID: ${review.reviewId}.`);
      continue;
    }
    seenReviewIds.add(review.reviewId);
    if (review.lessonId !== metadata.id) {
      blockers.push(`${review.reviewId} targets a different lesson identity.`);
      continue;
    }
    // Older lesson versions remain public traceability records. They cannot
    // count toward the current cycle and do not create current-cycle blockers.
    if (review.lessonVersion !== metadata.version) continue;
    const provenance = verifyGitHubProvenance(review, "review", githubReviews);
    if (!provenance.ok) {
      blockers.push(provenance.error);
      continue;
    }
    if (!eligibleReviewVerdicts(rule).has(review.verdict)) continue;
    if (!review.reviewer.agent) {
      blockers.push(`${review.reviewId} lacks required founding-stage agent provenance.`);
      continue;
    }
    if (authorAgentRuns.has(review.reviewer.agent.runId)) {
      blockers.push(`${review.reviewId} reuses an authoring agent run.`);
      continue;
    }
    if (rule.reviewMode === "approval-quorum" && review.findings.some((finding) => finding.severity === "blocking" && !finding.resolution)) {
      blockers.push(`${review.reviewId} contains an unresolved blocking finding.`);
      continue;
    }
    validReviewInputs.push(review);
  }

  let adjudicationSchemaValid = false;
  let adjudicationValid = false;
  let adjudicationSummary = null;
  let selectedReviews = currentCandidateCohort(validReviewInputs, blockers);
  if (adjudication) {
    if (!validateAdjudication(adjudication)) {
      blockers.push(`adjudication.json failed schema validation: ${validationErrors(validateAdjudication).join("; ")}`);
    } else {
      adjudicationSchemaValid = true;
      const provenance = verifyGitHubProvenance(adjudication, "adjudication", githubReviews);
      if (!provenance.ok) blockers.push(provenance.error);
      else adjudicationValid = true;
      selectedReviews = adjudication.reviewIds.map((reviewId) => validReviewInputs.find((review) => review.reviewId === reviewId)).filter(Boolean);
      for (const reviewId of adjudication.reviewIds) {
        if (!selectedReviews.some((review) => review.reviewId === reviewId)) blockers.push(`Adjudication cites missing or ineligible review input ${reviewId}.`);
      }
      adjudicationSummary = {
        decision: adjudication.decision,
        adjudicator: adjudication.adjudicator.principalId,
        satisfied: adjudication.quorum.satisfied,
        githubProvenanceVerified: provenance.ok
      };
    }
  }

  const eligible = [];
  const reviewPrincipals = new Set();
  const reviewAgentRuns = new Set();
  for (const review of selectedReviews) {
    const reviewerPrincipal = principalKey(review.reviewer.principalId);
    const runId = review.reviewer.agent?.runId;
    if (!runId) continue;
    if (reviewAgentRuns.has(runId)) {
      blockers.push(`${review.reviewId} duplicates selected review agent run ${runId}.`);
      continue;
    }
    const authorConflict = reviewerAuthorConflict(policy, authorPrincipals, review.reviewer.principalId);
    if (authorConflict) {
      blockers.push(`${review.reviewId} ${authorConflict}`);
      continue;
    }
    reviewPrincipals.add(reviewerPrincipal);
    reviewAgentRuns.add(runId);
    eligible.push(review);
  }
  const commits = new Set(eligible.map((review) => review.candidateCommit));
  const roleCounts = {
    academic: eligible.filter((review) => review.role === "academic").length,
    learningDesign: eligible.filter((review) => review.role === "learning-design").length,
    accessibilityRights: eligible.filter((review) => review.role === "accessibility-rights").length
  };
  const modelFamilies = new Set(eligible.filter((review) => review.reviewer.agent).map((review) => modelFamilyKey(review.reviewer.agent)));
  const verdictCounts = reviewVerdictCounts(eligible);
  const roleMinimums = {
    academic: rule.roleMinimums.academic,
    learningDesign: rule.roleMinimums["learning-design"],
    accessibilityRights: rule.roleMinimums["accessibility-rights"]
  };
  const quorumSatisfied = eligible.length >= reviewInputMinimum(rule) &&
    verdictCounts.approvals >= rule.minimumApprovingReviews &&
    reviewPrincipals.size >= rule.minimumDistinctPrincipals &&
    reviewAgentRuns.size >= rule.minimumDistinctAgentRuns &&
    roleCounts.academic >= roleMinimums.academic &&
    roleCounts.learningDesign >= roleMinimums.learningDesign &&
    roleCounts.accessibilityRights >= roleMinimums.accessibilityRights &&
    commits.size === 1 &&
    modelFamilies.size >= rule.minimumDistinctAgentModelFamilies;

  if (eligible.length < reviewInputMinimum(rule)) blockers.push(`${reviewInputMinimum(rule) - eligible.length} additional eligible review input(s) required.`);
  if (verdictCounts.approvals < rule.minimumApprovingReviews) blockers.push(`${rule.minimumApprovingReviews - verdictCounts.approvals} additional approval(s) required.`);
  if (reviewPrincipals.size < rule.minimumDistinctPrincipals) blockers.push(`${rule.minimumDistinctPrincipals - reviewPrincipals.size} additional distinct reviewer principal(s) required.`);
  if (reviewAgentRuns.size < rule.minimumDistinctAgentRuns) blockers.push(`${rule.minimumDistinctAgentRuns - reviewAgentRuns.size} additional isolated review agent run(s) required.`);
  for (const [role, minimum] of Object.entries(roleMinimums)) {
    if (roleCounts[role] < minimum) blockers.push(`${minimum - roleCounts[role]} additional ${role} approval(s) required.`);
  }
  if (modelFamilies.size < rule.minimumDistinctAgentModelFamilies) blockers.push(`Review quorum requires ${rule.minimumDistinctAgentModelFamilies} disclosed agent providers.`);

  if (adjudication && adjudicationSchemaValid) {
    const adjudicationRun = adjudication.adjudicator?.agent?.runId;
    if (!adjudicationRun) blockers.push("Founding-stage adjudication requires disclosed agent provenance.");
    else if (authorAgentRuns.has(adjudicationRun) || reviewAgentRuns.has(adjudicationRun)) blockers.push("The adjudication agent run is not fresh and distinct from authoring and review runs.");
    if (adjudication.lessonId !== metadata.id || adjudication.lessonVersion !== metadata.version || adjudication.riskTier !== metadata.riskTier) blockers.push("Adjudication identity or risk tier differs from lesson.json.");
    if (adjudication.policyId !== rule.policyId) blockers.push(`Adjudication must use policy ${rule.policyId}.`);
    if (adjudication.candidateCommit !== [...commits][0]) blockers.push("Adjudication targets a different candidate commit from the selected reviews.");
    if (adjudication.quorum.approvals !== verdictCounts.approvals || adjudication.quorum.distinctPrincipals !== reviewPrincipals.size || adjudication.quorum.distinctAgentRuns !== reviewAgentRuns.size) blockers.push("Adjudication approval, principal, or agent-run counts do not match the eligible review set.");
    if (rule.reviewMode === "advisory-finalization" && (adjudication.quorum.reviewInputs !== verdictCounts.reviewInputs || adjudication.quorum.changeRequests !== verdictCounts.changeRequests)) blockers.push("Adjudication review-input counts do not match the eligible review set.");
    if (adjudication.quorum.roleCounts.academic !== roleCounts.academic || adjudication.quorum.roleCounts.learningDesign !== roleCounts.learningDesign || adjudication.quorum.roleCounts.accessibilityRights !== roleCounts.accessibilityRights) blockers.push("Adjudication role counts do not match the eligible review set.");
    if (adjudication.quorum.distinctAgentModelFamilies !== modelFamilies.size) blockers.push("Adjudication model-family count does not match the eligible review set.");
    blockers.push(...validateFinalizationRecord(adjudication, eligible, rule));
    if (adjudication.decision === "merge" && metadata.status !== "published") blockers.push("A merge adjudication requires lesson.json status published before merge.");
  }

  let state = "awaiting-reviews";
  let stateLabel = "AWAITING REVIEWS";
  if (quorumSatisfied) {
    state = "awaiting-adjudication";
    stateLabel = rule.reviewMode === "advisory-finalization" ? "REVIEWS COMPLETE · FINALIZATION PENDING" : "QUORUM MET · ADJUDICATION PENDING";
  }
  if (quorumSatisfied && adjudicationValid && adjudicationSummary?.decision === "merge" && adjudicationSummary.satisfied && blockers.length === 0) {
    state = "ready-to-merge";
    stateLabel = "ADJUDICATED · READY TO MERGE";
  } else if (adjudicationValid && adjudicationSummary?.decision === "revise") {
    state = "revision-requested";
    stateLabel = "ADJUDICATION · REVISE";
  } else if (adjudicationValid && adjudicationSummary?.decision === "reject") {
    state = "rejected";
    stateLabel = "ADJUDICATION · REJECTED";
  }

  return {
    state,
    stateLabel,
    reviewSummary: {
      reviewInputs: verdictCounts.reviewInputs,
      requiredReviewInputs: reviewInputMinimum(rule),
      approvals: verdictCounts.approvals,
      requiredApprovals: rule.minimumApprovingReviews,
      changeRequests: verdictCounts.changeRequests,
      distinctPrincipals: reviewPrincipals.size,
      requiredDistinctPrincipals: rule.minimumDistinctPrincipals,
      distinctAgentRuns: reviewAgentRuns.size,
      requiredDistinctAgentRuns: rule.minimumDistinctAgentRuns,
      candidateCommit: commits.size === 1 ? [...commits][0] : null,
      roleCounts,
      roleMinimums,
      distinctAgentModelFamilies: modelFamilies.size,
      githubProvenanceVerifiedApprovals: eligible.length,
      quorumSatisfied
    },
    adjudication: adjudicationSummary,
    blockers: [...new Set(blockers)]
  };
}

export async function resolveGeneratedAt(pullRequests, loadFallbackTimestamp) {
  const newestPullUpdate = pullRequests.map((pullRequest) => pullRequest.updated_at).filter(Boolean).sort().at(-1);
  const timestamp = newestPullUpdate || await loadFallbackTimestamp();
  const parsed = Date.parse(timestamp);
  if (!timestamp || Number.isNaN(parsed)) throw new Error("Could not determine a valid generatedAt timestamp for the open lesson PR index.");
  return new Date(parsed).toISOString();
}

async function buildProposal(pullRequest, packPath, githubReviews) {
  const metadataErrors = [];
  const artifactErrors = [];
  const metadataText = await readHeadFile(pullRequest, `${packPath}/lesson.json`, true);
  const metadata = metadataText ? parseJson(metadataText, `${packPath}/lesson.json`, metadataErrors) : null;
  if (!metadataText) metadataErrors.push(`${packPath}/lesson.json is missing.`);

  const reviewEntries = await listHeadDirectory(pullRequest, `${packPath}/reviews`);
  const reviews = [];
  for (const entry of reviewEntries.filter((item) => item.type === "file" && item.name.endsWith(".json"))) {
    const reviewText = await readHeadFile(pullRequest, entry.path);
    const review = parseJson(reviewText, entry.path, artifactErrors);
    if (review) reviews.push(review);
  }
  const adjudicationText = await readHeadFile(pullRequest, `${packPath}/adjudication.json`, true);
  const adjudication = adjudicationText ? parseJson(adjudicationText, `${packPath}/adjudication.json`, artifactErrors) : null;
  if (metadata) {
    const expectedTopics = [...courseTopics.entries()].find(([prefix]) => metadata.id?.startsWith(prefix))?.[1];
    for (const outcomeId of [...(metadata.outcomes || []), ...(metadata.prerequisites || [])]) {
      if (!topicIds.has(outcomeId)) metadataErrors.push(`Unknown course outcome ID: ${outcomeId}.`);
      else if (expectedTopics && !expectedTopics.ids.has(outcomeId)) metadataErrors.push(`Outcome ${outcomeId} belongs to another course graph.`);
    }
  }
  const evaluation = evaluateProposal(metadata, reviews, adjudication, metadataErrors, artifactErrors, githubReviews, pullRequest.user.login);
  return {
    packPath,
    id: metadata?.id || null,
    version: metadata?.version || null,
    title: metadata?.title || pullRequest.title,
    riskTier: metadata?.riskTier || null,
    outcomeIds: metadata?.outcomes?.filter((id) => topicIds.has(id)) || [],
    metadataErrors,
    ...evaluation
  };
}

async function buildPullRequest(pullRequest) {
  const [files, githubReviews] = await Promise.all([listPullFiles(pullRequest.number), listPullReviews(pullRequest.number)]);
  const packPaths = [...new Set(files.map((file) => file.filename.match(/^(lessons\/[^/]+)\//)?.[1]).filter(Boolean))].sort();
  const lessons = [];
  for (const packPath of packPaths) lessons.push(await buildProposal(pullRequest, packPath, githubReviews));
  return {
    number: pullRequest.number,
    title: pullRequest.title,
    url: pullRequest.html_url,
    draft: pullRequest.draft,
    author: pullRequest.user.login,
    updatedAt: pullRequest.updated_at,
    headSha: pullRequest.head.sha,
    lessons
  };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  if (!token) {
    console.error("GITHUB_TOKEN or GH_TOKEN is required to build the open lesson PR index.");
    process.exit(1);
  }

  const pulls = [];
  for (let page = 1; ; page += 1) {
    const batch = await api(`/repos/${repository}/pulls?state=open&per_page=100&sort=updated&direction=desc&page=${page}`);
    pulls.push(...batch);
    if (batch.length < 100) break;
  }
  const pullRequests = [];
  for (const pullRequest of pulls) {
    try {
      const indexed = await buildPullRequest(pullRequest);
      if (indexed.lessons.length) pullRequests.push(indexed);
    } catch (error) {
      console.warn(`Warning: skipping PR #${pullRequest.number} (${pullRequest.html_url}): ${error.message}`);
    }
  }
  // Derive the timestamp from versioned GitHub state rather than the wall clock
  // so scheduled rebuilds remain stable. An empty PR queue falls back to the
  // checked-out main commit instead of emitting a schema-invalid null.
  const generatedAt = await resolveGeneratedAt(pulls, async () => {
    const commitRef = process.env.GITHUB_SHA || "main";
    const commit = await api(`/repos/${repository}/commits/${encodeURIComponent(commitRef)}`);
    return commit.commit?.committer?.date || commit.commit?.author?.date;
  });
  for (const course of [
    { id: "premed", prefix: "PREM-" },
    { id: "psychiatry", prefix: "PSY-" }
  ]) {
    if (explicitOutputPath && course.id !== "premed") continue;
    const coursePullRequests = pullRequests
      .map((pullRequest) => ({ ...pullRequest, lessons: pullRequest.lessons.filter((lesson) => lesson.id?.startsWith(course.prefix)) }))
      .filter((pullRequest) => pullRequest.lessons.length);
    const outcomeIdsWithProposals = new Set(coursePullRequests.flatMap((pullRequest) => pullRequest.lessons.flatMap((lesson) => lesson.outcomeIds)));
    const output = {
      schemaVersion: 1,
      generatedAt,
      repository,
      source: "github-pull-requests",
      summary: {
        openPullRequests: coursePullRequests.length,
        lessonProposals: coursePullRequests.reduce((total, pullRequest) => total + pullRequest.lessons.length, 0),
        outcomesWithOpenProposals: outcomeIdsWithProposals.size
      },
      pullRequests: coursePullRequests
    };
    const outputPath = explicitOutputPath || path.join(root, `site/data/${course.id}-open-prs.json`);
    fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
    console.log(`Indexed ${course.id}: ${output.summary.lessonProposals} lesson proposal(s) from ${output.summary.openPullRequests} open PR(s), mapping ${output.summary.outcomesWithOpenProposals} outcome(s).`);
  }
}
