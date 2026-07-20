const { test, expect } = require("@playwright/test");

const siteUrl = process.env.EK_SITE_URL || "http://127.0.0.1:4173/site/";
const route = (path = "") => new URL(path, siteUrl).href;

async function getJson(request, path) {
  const response = await request.get(route(path));
  expect(response.ok(), `${path} should be available`).toBeTruthy();
  return response.json();
}

function formattedCoverage(covered, total) {
  const percentage = total ? (covered / total) * 100 : 0;
  return Number.isInteger(percentage) ? `${percentage}%` : `${percentage.toFixed(1)}%`;
}

function proposalOutcomeIds(openPullRequests) {
  return new Set((openPullRequests.pullRequests || []).flatMap((pullRequest) => (
    (pullRequest.lessons || []).flatMap((lesson) => lesson.outcomeIds || [])
  )));
}

function collectRuntimeErrors(page) {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  return errors;
}

async function advanceUntilVisible(page, selector, maximumFrames = 20) {
  const target = page.locator("[data-scene-container]").locator(selector);
  for (let index = 0; index < maximumFrames; index += 1) {
    if (await target.isVisible()) return target;
    await page.keyboard.press("ArrowRight");
  }
  throw new Error(`${selector} did not become visible within ${maximumFrames} guided frames.`);
}

test("the root is an EmbeddedKnowledge landing page with a book library", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await page.goto(route(), { waitUntil: "networkidle" });

  await expect(page.locator("h1")).toContainText(/University\s*knowledge/);
  await expect(page.locator("#ethos h2")).toContainText("Only one of those is necessary");
  await expect(page.locator("#method h2")).toContainText("Understanding is a loop");
  await expect(page.locator(".book-link")).toHaveAttribute("href", "premed/");
  await expect(page.locator(".book-link .poster-title")).toContainText(/THE SCIENCE\s*BEFORE\s*THE MEDICINE/);
  await expect(page.locator("#closing-title")).toContainText("Understanding should not depend");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://embeddedknowledge.io/");
  await expect(page.locator('link[rel="alternate"][href="llms.txt"]')).toHaveCount(1);
  await expect(page.locator('a[href$=".md"]')).toHaveCount(0);
  await expect(page.locator(".hero-copy")).toHaveClass(/is-visible/);
  expect(errors).toEqual([]);
});

test("Premed opens as a course workspace with explicit scientific disciplines", async ({ page }) => {
  const progress = await getJson(page.request, "data/premed-progress.json");
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/"), { waitUntil: "networkidle" });

  await expect(page.locator("h1")).toHaveText("Premed");
  await expect(page.locator(".discipline")).toHaveCount(9);
  await expect(page.locator(".discipline.gen-chem")).toContainText(/General chemistry.*220h/s);
  await expect(page.locator(".discipline.organic")).toContainText(/Organic chemistry.*150h/s);
  await expect(page.locator(".discipline.biochem")).toContainText(/Biochemistry.*200h/s);
  await expect(page.locator("[data-coverage-percentage]")).toHaveText(formattedCoverage(progress.outcomes.coveredByOpenLessons, progress.outcomes.total));
  await expect(page.locator("[data-covered-outcomes]")).toHaveText(progress.outcomes.coveredByOpenLessons.toLocaleString());
  await expect(page.locator("[data-total-outcomes]")).toHaveText(progress.outcomes.total.toLocaleString());
  await expect(page.locator("[data-contributed-lessons]")).toHaveText(progress.lessons.contributed.toLocaleString());
  await expect(page.locator("[data-open-lessons]")).toHaveText(progress.lessons.publishedOpen.toLocaleString());
  await expect(page.locator(".corpus-contribute")).toContainText("not yet open");
  await expect(page.locator('.course-action.primary[href="lessons/"]')).toContainText("Open the lesson commons");
  await expect(page.locator('.course-action[href="syllabus/"]')).toBeVisible();
  await expect(page.locator('.course-action[href="graph/"]')).toBeVisible();
  await expect(page.locator('.course-header-cta[href="lessons/"]')).toContainText("Open the lesson commons");
  await expect(page.locator('a[href$=".md"]')).toHaveCount(0);
  const coverTitleFits = await page.locator(".portal-book-title strong").evaluate((title) => {
    const text = document.createRange();
    text.selectNodeContents(title);
    const textBounds = text.getBoundingClientRect();
    const coverBounds = title.closest(".portal-book").getBoundingClientRect();
    return textBounds.left >= coverBounds.left && textBounds.right <= coverBounds.right;
  });
  expect(coverTitleFits).toBeTruthy();
  expect(errors).toEqual([]);
});

test("the collaboration page defines an agent-first PR interface and accountable quorum", async ({ page }) => {
  const [lessonIndex, openPullRequests] = await Promise.all([
    getJson(page.request, "data/premed-lessons.json"),
    getJson(page.request, "data/premed-open-prs.json")
  ]);
  const claimed = proposalOutcomeIds(openPullRequests);
  const available = lessonIndex.outcomes.filter((outcome) => !(outcome.lessonIds || []).length && !claimed.has(outcome.id));
  const errors = collectRuntimeErrors(page);
  await page.goto(route("contribute/"), { waitUntil: "networkidle" });

  await expect(page.locator("h1")).toContainText(/People and agents propose\.\s*Independent review decides\./);
  await expect(page.locator(".door-grid article")).toHaveCount(3);
  await expect(page.locator(".door-grid")).toContainText("Load the contract");
  await expect(page.locator(".door-grid")).toContainText("Open one focused PR");
  await expect(page.locator(".quorum-tier-grid article")).toHaveCount(3);
  await expect(page.locator(".quorum-tier-grid .is-standard")).toContainText(/3 \+ 1/);
  await expect(page.locator(".review-gates li")).toHaveCount(4);
  await expect(page.locator(".review-gates")).toContainText("Academic");
  await expect(page.locator(".governance-grid")).toContainText("three distinct providers");
  await expect(page.locator(".license-policy")).toContainText("CC BY 4.0");
  await expect(page.locator(".license-policy")).toContainText("Application code uses the MIT licence");
  await expect(page.locator(".collaboration-page")).toContainText(/intake not yet open/i);
  await expect(page.locator('a[href="format/"]')).toBeVisible();
  await expect(page.locator("[data-contribution-open-count]")).toHaveText(available.length.toLocaleString());
  await expect(page.locator("[data-contribution-available]")).toHaveText(available.length.toLocaleString());
  await expect(page.locator("[data-contribution-claimed]")).toHaveText(claimed.size.toLocaleString());
  await expect(page.locator("[data-agent-skill]")).toHaveCount(5);
  await expect(page.locator(".skill-grid")).toContainText("Build the candidate");
  await expect(page.locator(".skill-grid")).toContainText("Adjudication");
  await expect(page.locator(".skill-grid a[download]")).toHaveCount(5);
  expect(await page.locator("[data-agent-prompt]").inputValue()).toContain(route("llms.txt"));
  expect(await page.locator("[data-agent-prompt]").inputValue()).toContain(route("skills/author-embeddedknowledge-lesson/SKILL.md"));
  expect(await page.locator("[data-agent-prompt]").inputValue()).toContain(route("content-standard.txt"));
  await expect(page.locator("[data-agent-prompt]")).toHaveValue(new RegExp(`${available.length} available contribution targets`));
  await expect(page.locator("[data-copy-agent-prompt]")).toContainText("Copy agent prompt");
  expect(errors).toEqual([]);
});

test("the portal publishes the complete Lesson Format v1 contract", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await page.goto(route("contribute/format/"), { waitUntil: "networkidle" });

  await expect(page.locator("h1")).toContainText(/Write meaning\.\s*Render many ways\./);
  await expect(page.locator(".door-grid article")).toHaveCount(3);
  await expect(page.locator(".contract-grid")).toContainText("content/*.md");
  await expect(page.locator(".review-gates li")).toHaveCount(5);
  await expect(page.locator(".governance-grid")).toContainText("Math + chemistry");
  await expect(page.locator(".governance-grid")).toContainText("*.diagram.json");
  await expect(page.locator(".content-science")).toContainText("Retrieve before reveal");
  await expect(page.locator('a[href="../../content-standard.txt"]')).toBeVisible();
  await expect(page.locator(".collaboration-page")).toContainText("non-executable");
  await expect(page.getByRole("link", { name: "Open the Format specimen" })).toBeVisible();
  const specimenPathPosition = await page.locator(".collaboration-next code", { hasText: "examples/lesson-pack/" }).evaluate((code) => {
    const item = code.closest("li").getBoundingClientRect();
    const path = code.getBoundingClientRect();
    return { itemLeft: item.left, pathLeft: path.left };
  });
  expect(specimenPathPosition.pathLeft).toBeGreaterThan(specimenPathPosition.itemLeft + 45);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://embeddedknowledge.io/contribute/format/");
  await expect(page.locator('a[href$=".md"]')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("agent discovery endpoints are public, typed, and internally consistent", async ({ request }) => {
  const paths = [
    "llms.txt",
    "llms-full.txt",
    "content-license.txt",
    "content-standard.txt",
    "agent/contribution.json",
    "agent/skills.json",
    "agent/quorum-policy.json",
    "data/premed-lessons.json",
    "data/premed-open-prs.json",
    "schemas/lesson.schema.json",
    "schemas/review.schema.json",
    "schemas/adjudication.schema.json",
    "schemas/lesson-index.schema.json",
    "schemas/open-lesson-prs.schema.json",
    "schemas/agent-skills.schema.json",
    "skills/author-embeddedknowledge-lesson/SKILL.md",
    "skills/author-embeddedknowledge-lesson/author-embeddedknowledge-lesson.zip",
  ];
  for (const path of paths) {
    const response = await request.get(route(path));
    expect(response.ok(), `${path} should be public`).toBeTruthy();
  }

  const concise = await (await request.get(route("llms.txt"))).text();
  expect(concise).toContain("# EmbeddedKnowledge");
  expect(concise).toContain("Pull requests are the only write path");
  expect(concise).toContain("Learning-content standard");
  expect(concise).toContain("Agent Skills manifest");

  const contentStandard = await (await request.get(route("content-standard.txt"))).text();
  expect(contentStandard).toContain("# EmbeddedKnowledge Learning-Content Standard v1");
  expect(contentStandard).toContain("Required agent workflow");

  const contract = await (await request.get(route("agent/contribution.json"))).json();
  expect(contract).toMatchObject({
    canonicalBaseUrl: "https://embeddedknowledge.io/",
    canonicalWriteMechanism: "pull-request",
    contentLicense: "CC-BY-4.0",
    webmcp: { mode: "read-only" },
    agentEntryPoints: {
      learningContentStandard: "/content-standard.txt",
      agentSkills: "/agent/skills.json",
      lessonAuthorSkill: "/skills/author-embeddedknowledge-lesson/SKILL.md",
    },
    agentSkills: { canonicalDirectory: ".agents/skills", roleIsolationRequired: true },
  });
  expect(contract.webmcp.tools).toHaveLength(7);

  const skills = await (await request.get(route("agent/skills.json"))).json();
  expect(skills.skills).toHaveLength(5);
  expect(skills.skills.map((skill) => skill.role)).toEqual([
    "author",
    "academic-review",
    "learning-design-review",
    "accessibility-rights-review",
    "adjudicator",
  ]);
  const authorSkill = await (await request.get(route("skills/author-embeddedknowledge-lesson/SKILL.md"))).text();
  expect(authorSkill).toContain("# Author an EmbeddedKnowledge lesson");
  expect(authorSkill).toContain("Do not invoke review or adjudication skills");
  const authorBundle = await (await request.get(route("skills/author-embeddedknowledge-lesson/author-embeddedknowledge-lesson.zip"))).body();
  expect(authorBundle.subarray(0, 2).toString("ascii")).toBe("PK");
});

test("WebMCP progressively registers seven read-only discovery tools", async ({ page }) => {
  const [lessonIndex, openPullRequests, progress] = await Promise.all([
    getJson(page.request, "data/premed-lessons.json"),
    getJson(page.request, "data/premed-open-prs.json"),
    getJson(page.request, "data/premed-progress.json")
  ]);
  const claimed = proposalOutcomeIds(openPullRequests);
  const covered = new Set(progress.outcomes.coveredOutcomeIds || []);
  const uncoveredCount = lessonIndex.outcomes.filter((outcome) => !covered.has(outcome.id)).length;
  const emptyCount = lessonIndex.outcomes.filter((outcome) => (
    !(outcome.publishedLessonIds || []).length && !claimed.has(outcome.id)
  )).length;
  await page.addInitScript(() => {
    window.__registeredEmbeddedKnowledgeTools = [];
    Object.defineProperty(document, "modelContext", {
      configurable: true,
      value: {
        registerTool(tool) {
          window.__registeredEmbeddedKnowledgeTools.push(tool);
          return Promise.resolve();
        },
      },
    });
  });
  const errors = collectRuntimeErrors(page);
  await page.goto(route("contribute/"), { waitUntil: "networkidle" });

  const tools = await page.evaluate(() => window.__registeredEmbeddedKnowledgeTools.map((tool) => ({
    name: tool.name,
    readOnly: tool.annotations?.readOnlyHint,
  })));
  expect(tools).toHaveLength(7);
  expect(tools.every((tool) => tool.readOnly)).toBeTruthy();
  expect(tools.map((tool) => tool.name)).toContain("embeddedknowledge.list_uncovered_outcomes");
  expect(tools.map((tool) => tool.name)).toContain("embeddedknowledge.list_lesson_states");
  expect(tools.map((tool) => tool.name)).toContain("embeddedknowledge.get_lesson_state");

  const uncovered = await page.evaluate(async () => {
    const tool = window.__registeredEmbeddedKnowledgeTools.find((item) => item.name === "embeddedknowledge.list_uncovered_outcomes");
    return tool.execute({ limit: 3, offset: 0 });
  });
  expect(uncovered.structuredContent).toMatchObject({ ok: true, total: uncoveredCount, limit: 3, offset: 0 });
  expect(uncovered.structuredContent.outcomes).toHaveLength(Math.min(3, uncoveredCount));

  const states = await page.evaluate(async () => {
    const tool = window.__registeredEmbeddedKnowledgeTools.find((item) => item.name === "embeddedknowledge.list_lesson_states");
    return tool.execute({ state: "empty", limit: 2, offset: 0 });
  });
  expect(states.structuredContent).toMatchObject({ ok: true, total: emptyCount, limit: 2, offset: 0 });
  expect(states.structuredContent.states).toHaveLength(Math.min(2, emptyCount));
  expect(errors).toEqual([]);
});

test("the Premed open book reflects generated publication counts and open PR quorum states", async ({ page }) => {
  const lessonIndex = await getJson(page.request, "data/premed-lessons.json");
  const proposalOutcomeId = "topic-acids-bases-acid-base-models";
  const publishedCount = lessonIndex.outcomes.filter((outcome) => (outcome.publishedLessonIds || []).length).length;
  const proposalIsPublished = lessonIndex.outcomes.some((outcome) => outcome.id === proposalOutcomeId && (outcome.publishedLessonIds || []).length);
  const reviewCount = proposalIsPublished ? 0 : 1;
  const emptyCount = lessonIndex.outcomes.length - publishedCount - reviewCount;
  await page.route("**/data/premed-open-prs.json", async (route) => {
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        schemaVersion: 1,
        generatedAt: "2026-07-19T00:00:00Z",
        repository: "VSBDev/EmbeddedKnowledge",
        source: "test",
        summary: { openPullRequests: 1, lessonProposals: 1, outcomesWithOpenProposals: 1 },
        pullRequests: [{
          number: 17,
          title: "Acid-base models and buffer reasoning",
          url: "https://github.com/VSBDev/EmbeddedKnowledge/pull/17",
          lessons: [{
            id: "PREM-CHE-001",
            version: "0.1.0",
            title: "Acid-base models and buffer reasoning",
            riskTier: "standard",
            outcomeIds: [proposalOutcomeId],
            state: "awaiting-reviews",
            stateLabel: "AWAITING REVIEWS",
            metadataErrors: [],
            blockers: ["1 additional eligible approval required."],
            reviewSummary: {
              approvals: 2,
              requiredApprovals: 3,
              roleCounts: { academic: 1, learningDesign: 1, accessibilityRights: 0 },
              roleMinimums: { academic: 1, learningDesign: 1, accessibilityRights: 1 },
              quorumSatisfied: false
            },
            adjudication: null
          }]
        }]
      })
    });
  });
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/lessons/"), { waitUntil: "networkidle" });

  await expect(page.locator(".lesson-reader-app")).toBeVisible();
  await expect(page.locator("[data-course-state]")).toContainText(`${publishedCount} of ${lessonIndex.outcomes.length} outcomes published · ${reviewCount} under review · ${emptyCount} empty`);
  await expect(page.locator("[data-lesson-results]")).toHaveText(`${lessonIndex.outcomes.length} of ${lessonIndex.outcomes.length} outcomes`);
  await expect(page.locator("[data-index-coverage]")).toHaveText(`${formattedCoverage(publishedCount, lessonIndex.outcomes.length)} published`);
  const courseBanner = page.locator(".reader-course-banner");
  await expect(courseBanner.locator('a[href="specimen/"]')).toBeVisible();
  expect(await courseBanner.evaluate((element) => getComputedStyle(element).backgroundColor)).toBe("rgb(230, 226, 216)");
  await expect(page.locator(".reader-outcome-link")).toHaveCount(lessonIndex.outcomes.length);
  await page.locator("[data-lesson-search]").fill("Acid-base models");
  await expect(page.locator(".reader-outcome-link")).toHaveCount(1);
  await page.locator(".reader-outcome-link").click();
  await expect(page.locator(".outcome-page-header h1")).toHaveText("Acid-base models");
  await expect(page.locator(".review-book-state")).toContainText("2/3");
  await expect(page.locator(".review-book-state")).toContainText("Adjudication pending");

  expect(lessonIndex.summary).toMatchObject({
    outcomes: lessonIndex.outcomes.length,
    mergedLessons: lessonIndex.lessons.length,
    publishedLessons: lessonIndex.lessons.filter((lesson) => lesson.status === "published").length
  });
  expect(errors).toEqual([]);
});

test("Opening the lesson commons lets an empty outcome invite contribution", async ({ page }) => {
  const [lessonIndex, openPullRequests] = await Promise.all([
    getJson(page.request, "data/premed-lessons.json"),
    getJson(page.request, "data/premed-open-prs.json")
  ]);
  const claimed = proposalOutcomeIds(openPullRequests);
  const emptyOutcome = lessonIndex.outcomes.find((outcome) => (
    !(outcome.publishedLessonIds || []).length && !claimed.has(outcome.id)
  ));
  expect(emptyOutcome, "the contribution-path test requires at least one empty outcome").toBeTruthy();
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/"), { waitUntil: "networkidle" });
  await page.locator('.course-action.primary[href="lessons/"]').click();
  await expect(page).toHaveURL(/\/premed\/lessons\/$/);
  await expect(page.locator(".lesson-reader-app")).toBeVisible();
  await expect(page.locator(".reader-outcome-link")).toHaveCount(lessonIndex.outcomes.length);
  await page.locator("[data-lesson-search]").fill(emptyOutcome.code);
  await expect(page.locator(".reader-outcome-link")).toHaveCount(1);
  await expect(page.locator(".reader-outcome-link").locator(".reader-outcome-state")).toHaveAttribute("aria-label", "Empty — contribution needed");
  await page.locator(".reader-outcome-link").click();
  await expect(page.locator(".outcome-page-header h1")).toHaveText(emptyOutcome.title);
  const viewportLayout = await page.evaluate(() => ({
    documentHeight: document.documentElement.scrollHeight,
    viewportHeight: window.innerHeight,
    bodyOverflow: getComputedStyle(document.body).overflow,
  }));
  expect(viewportLayout.documentHeight).toBe(viewportLayout.viewportHeight);
  expect(viewportLayout.bodyOverflow).toBe("hidden");
  const invitation = page.locator(".lesson-contribute-link");
  await expect(invitation).toContainText("Contribute this lesson");
  await expect(invitation).toHaveAttribute("href", /\/contribute\/\?outcome=topic-/);
  await page.locator("[data-theme-toggle]").click();
  expect(await page.locator(".reader-course-banner").evaluate((element) => getComputedStyle(element).backgroundColor)).toBe("rgb(32, 36, 40)");
  await invitation.hover();
  const darkHoverPalette = await invitation.evaluate((element) => ({
    background: getComputedStyle(element).backgroundColor,
    foreground: getComputedStyle(element).color,
  }));
  expect(darkHoverPalette).toEqual({
    background: "rgb(9, 11, 13)",
    foreground: "rgb(236, 233, 225)",
  });
  await invitation.click();
  await expect(page).toHaveURL(/\/contribute\/\?outcome=topic-/);
  await expect(page.locator("[data-copy-agent-status]")).toContainText(/Prompt is scoped to PREM-/);
  await expect(page.locator("[data-agent-prompt]")).toHaveValue(/Work on this requested outcome if it is still available/);
  expect(errors).toEqual([]);
});

test("the generated lesson specimen behaves as a no-body-scroll interactive book", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/lessons/specimen/"), { waitUntil: "networkidle" });

  await expect(page.locator("[data-scene-nav] .reader-scene-link")).toHaveCount(8);
  await expect(page.locator("[data-artifact-id]")).toHaveText("PREM-CHE-001");
  await expect(page.locator(".reader-specimen-banner")).toContainText("NON-PRODUCTION");
  await expect(page.locator(".reader-margin")).toContainText("Does not count");
  await expect(page.locator(".reader-scene-header h1")).toHaveText("One reaction, two models");
  await expect(page.locator("[data-reader-app]")).toHaveClass(/reader-guided-mode/);
  await expect(page.locator("[data-view-label]")).toHaveText("Guided");

  const viewportLayout = await page.evaluate(() => ({
    documentHeight: document.documentElement.scrollHeight,
    viewportHeight: window.innerHeight,
    bodyOverflow: getComputedStyle(document.body).overflow,
  }));
  expect(viewportLayout.documentHeight).toBe(viewportLayout.viewportHeight);
  expect(viewportLayout.bodyOverflow).toBe("hidden");

  await page.locator(".reader-scene-link", { hasText: "Proton transfer and electron-pair acceptance" }).click();
  await expect(page).toHaveURL(/#scene-concept$/);
  await advanceUntilVisible(page, '[data-directive="chemistry"] math');
  await expect(page).toHaveURL(/#scene-concept\/frame-bronsted-lowry-model/);
  await advanceUntilVisible(page, '[data-directive="diagram"]');
  await expect(page.locator("[data-scene-container] .ek-long-description")).toContainText("Read the diagram as text");

  await page.locator(".reader-scene-link", { hasText: "Annotating conjugate pairs" }).click();
  await advanceUntilVisible(page, '[data-directive="figure"]');
  const specimenImage = page.locator('[data-scene-container] [data-directive="figure"] img');
  await expect(specimenImage).toBeVisible();
  expect(await specimenImage.evaluate((image) => image.complete && image.naturalWidth > 0)).toBeTruthy();
  await expect(specimenImage).toHaveAttribute("src", /\/assets\/lesson-specimen\/assets\/conjugate-pairs\.svg$/);

  await page.locator(".reader-scene-link", { hasText: "A buffer under perturbation" }).click();
  await advanceUntilVisible(page, '[data-directive="equation"] math');
  await expect(page.locator('[data-scene-container] [data-directive="equation"] math')).toBeVisible();
  await expect(page.locator('[data-scene-container] [data-directive="equation"] annotation')).toContainText("A^- + H^+");

  await page.locator(".reader-scene-link", { hasText: "Model-choice practice" }).click();
  await page.locator("[data-view-toggle]").click();
  await expect(page.locator("[data-reader-app]")).toHaveClass(/reader-reading-mode/);
  await expect(page.locator("[data-view-label]")).toHaveText("Reading");
  const check = page.locator('[data-check-id="item-conjugate-pair"]');
  await check.locator('input[value="option-ammonia-ammonium"]').check();
  await check.locator('button[type="submit"]').click();
  await expect(check.locator(".reader-feedback")).toHaveClass(/is-correct/);
  await expect(check.locator(".reader-feedback")).toContainText("Reasoning holds");

  const artifactResponse = await page.request.get(route("data/lessons/specimen.json"));
  expect(artifactResponse.ok()).toBeTruthy();
  const artifact = await artifactResponse.json();
  expect(artifact).toMatchObject({ artifactType: "lesson-specimen", nonProduction: true, countsTowardCoverage: false });
  expect(errors).toEqual([]);
});

test("a published lesson opens through its production route with keyboard and complete print paths", async ({ page }) => {
  const [lessonIndex, specimen] = await Promise.all([
    getJson(page.request, "data/premed-lessons.json"),
    getJson(page.request, "data/lessons/specimen.json")
  ]);
  const lessonId = "PREM-LPP-001";
  const targetOutcome = lessonIndex.outcomes[0];
  const assessmentSceneId = specimen.assessment.items[0].sceneId;
  const baselineAssessmentItems = [
    {
      id: "item-separate-confidence",
      type: "multiple-choice",
      sceneId: assessmentSceneId,
      prompt: "Across three untimed probes, a learner independently answers accurately, explains the governing relation, and adapts it to a new representation, but reports low confidence. Select the two statements that best preserve the evidence.",
      responseSpec: {
        mode: "multiple-choice",
        options: [
          { id: "option-confidence-secure", text: "Record secure performance provisionally." },
          { id: "option-confidence-fragile", text: "Downgrade the knowledge state to fragile solely because confidence is low." },
          { id: "option-confidence-flag", text: "Add a confidence-calibration flag and recheck after delay." },
          { id: "option-confidence-ignore", text: "Discard the performance record and keep only the self-rating." }
        ],
        maxSelections: 2
      },
      answer: {
        correct: ["option-confidence-secure", "option-confidence-flag"],
        summary: "Keep performance and confidence as related but distinct evidence.",
        reasoning: "The varied, accurate, independent performance supports a provisional secure classification. Low confidence identifies a calibration issue worth revisiting after a delay.",
        commonErrors: ["Treating low confidence as direct proof of fragile knowledge confuses self-rating with observed performance."]
      }
    },
    {
      id: "item-build-baseline",
      type: "open-response",
      sceneId: assessmentSceneId,
      prompt: "Classify each fictional node, justify the classification, and choose the next study action.",
      stimulus: "Node Cedar: no attempted response on either prompt; learner writes that the notation has not been encountered. Node Flint: accurate on two familiar prompts, explanation names the relevant relation, but a bounded representation change produces an inconsistent strategy. Node Harbor: accurate and independently explained across two forms and one bounded application; medium confidence throughout.",
      responseSpec: { mode: "text", maxLength: 5000 },
      answer: {
        correct: "Cedar is unfamiliar, Flint is fragile, and Harbor is provisionally secure.",
        summary: "Classify nodes separately and make the route follow the evidence.",
        reasoning: "Cedar needs a bounded explanation, Flint needs contrasting practice, and Harbor can advance with delayed verification. Each classification remains provisional."
      }
    }
  ];
  const digest = `sha256:${"a".repeat(64)}`;
  const productionArtifact = {
    ...specimen,
    artifactType: "production-lesson",
    id: lessonId,
    version: "1.0.0",
    status: "published",
    nonProduction: undefined,
    countsTowardCoverage: undefined,
    disclaimer: undefined,
    assessment: {
      ...specimen.assessment,
      items: [...specimen.assessment.items, ...baselineAssessmentItems]
    },
    attributionHtml: `${specimen.attributionHtml}<p>Material-instructions digest: <code data-test-long-digest>${digest}</code></p>`
  };
  const productionLesson = {
    id: lessonId,
    version: productionArtifact.version,
    title: productionArtifact.title,
    status: "published",
    riskTier: productionArtifact.riskTier,
    estimatedMinutes: productionArtifact.estimatedMinutes,
    outcomeIds: [targetOutcome.id],
    prerequisiteIds: [],
    license: productionArtifact.license,
    sourceConfidence: productionArtifact.sourceConfidence,
    dataUrl: `/data/lessons/${lessonId}.json`,
    readerUrl: `/premed/lessons/read/?lesson=${lessonId}`
  };
  const routedIndex = structuredClone(lessonIndex);
  routedIndex.lessons = [...routedIndex.lessons.filter((lesson) => lesson.id !== lessonId), productionLesson];
  const routedOutcome = routedIndex.outcomes.find((outcome) => outcome.id === targetOutcome.id);
  routedOutcome.lessonIds = [...new Set([...(routedOutcome.lessonIds || []), lessonId])];
  routedOutcome.publishedLessonIds = [...new Set([...(routedOutcome.publishedLessonIds || []), lessonId])];

  await page.route("**/data/premed-lessons.json", (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(routedIndex) }));
  await page.route(`**/data/lessons/${lessonId}.json`, (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(productionArtifact) }));
  const errors = collectRuntimeErrors(page);
  await page.goto(route(`premed/lessons/?outcome=${targetOutcome.id}`), { waitUntil: "networkidle" });

  const openLesson = page.getByRole("link", { name: "Open reviewed lesson" });
  await expect(openLesson).toHaveAttribute("href", new RegExp(`/premed/lessons/read/\\?lesson=${lessonId}$`));
  await openLesson.click();
  await expect(page).toHaveURL(new RegExp(`/premed/lessons/read/\\?lesson=${lessonId}$`));
  await expect(page.locator("[data-artifact-id]")).toHaveText(lessonId);
  await expect(page.locator("[data-artifact-status]")).toHaveText("published · 1.0.0");
  await expect(page.locator(".reader-production-banner")).toContainText("OPEN PREMED LESSON");
  await expect(page.locator("[data-scene-location]")).not.toHaveText("Artifact unavailable");

  await expect(page.locator(".reader-scene-header h1")).toHaveText(productionArtifact.scenes[0].title);
  await page.keyboard.press("End");
  await expect(page.locator(".reader-scene-header h1")).toHaveText(productionArtifact.scenes.at(-1).title);
  await expect(page).toHaveURL(new RegExp(`#${productionArtifact.scenes.at(-1).id}$`));
  await page.keyboard.press("Home");
  await expect(page.locator(".reader-scene-header h1")).toHaveText(productionArtifact.scenes[0].title);
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("[data-reader-announcer]")).toContainText(/frame 2 of/i);

  const shortAnswer = productionArtifact.assessment.items.find((item) => item.responseSpec?.mode === "text");
  const shortAnswerScene = productionArtifact.scenes.find((scene) => scene.id === shortAnswer.sceneId);
  await page.locator(".reader-scene-link", { hasText: shortAnswerScene.title }).click();
  const shortAnswerSelector = `textarea[name="response-${shortAnswer.id}"]`;
  await advanceUntilVisible(page, shortAnswerSelector);
  await expect(page.locator(shortAnswerSelector)).toHaveAttribute("placeholder", "Write your response in your own words.");

  const assessmentScene = productionArtifact.scenes.find((scene) => scene.id === assessmentSceneId);
  await page.locator(".reader-scene-link", { hasText: assessmentScene.title }).click();
  await page.locator("[data-view-toggle]").click();
  await expect(page.locator("[data-reader-app]")).toHaveClass(/reader-reading-mode/);

  const multipleChoice = page.locator('[data-check-id="item-separate-confidence"]');
  const multipleChoiceFieldset = multipleChoice.locator("fieldset");
  const checkboxes = multipleChoice.getByRole("checkbox");
  await expect(multipleChoiceFieldset.locator("legend")).toContainText("Select the two statements");
  await expect(multipleChoiceFieldset).toHaveAttribute("aria-describedby", "item-separate-confidence-selection-instructions");
  await expect(multipleChoice.locator(".reader-check-instructions")).toHaveText("Select up to 2 responses.");
  await expect(checkboxes).toHaveCount(4);
  await expect(multipleChoice.locator(".reader-feedback")).toBeHidden();

  await checkboxes.nth(0).focus();
  await page.keyboard.press("Space");
  await multipleChoice.locator('label:has(input[value="option-confidence-flag"])').click();
  await expect(checkboxes.nth(0)).toBeChecked();
  await expect(checkboxes.nth(2)).toBeChecked();
  await expect(multipleChoice.locator(".reader-selection-status")).toContainText("2 of 2 selected");
  await expect(checkboxes.nth(1)).toBeDisabled();
  await expect(checkboxes.nth(3)).toBeDisabled();
  await expect(multipleChoice.locator(".reader-feedback")).toBeHidden();
  await multipleChoice.getByRole("button", { name: "Check answer" }).click();
  await expect(multipleChoice.locator(".reader-feedback")).toHaveClass(/is-correct/);
  await expect(multipleChoice.locator(".reader-feedback")).toContainText("varied, accurate, independent performance");
  await multipleChoice.getByRole("button", { name: "Try again" }).click();
  await expect(multipleChoice.locator(".reader-feedback")).toBeHidden();
  await expect(checkboxes.nth(1)).toBeEnabled();
  await expect(checkboxes.nth(3)).toBeEnabled();

  const cedarResponse = page.locator('[data-check-id="item-build-baseline"]');
  const cedarStimulus = cedarResponse.locator(".reader-check-stimulus");
  await expect(cedarStimulus).toContainText("Node Cedar");
  await expect(cedarStimulus).toContainText("Node Flint");
  await expect(cedarStimulus).toContainText("Node Harbor");
  await expect(cedarResponse.locator("textarea")).toHaveAttribute("aria-describedby", "item-build-baseline-stimulus");
  expect(await cedarResponse.evaluate((form) => {
    const stimulus = form.querySelector(".reader-check-stimulus");
    const control = form.querySelector("textarea");
    return Boolean(stimulus.compareDocumentPosition(control) & Node.DOCUMENT_POSITION_FOLLOWING);
  })).toBeTruthy();

  const resourceScene = productionArtifact.scenes.findLast((scene) => ["synthesis", "references"].includes(scene.kind));
  await page.locator(".reader-scene-link", { hasText: resourceScene.title }).click();
  const attributionFrame = page.locator('[data-frame-id="frame-attribution"]');
  await expect(attributionFrame).toHaveCount(1);
  await expect(attributionFrame.locator("h1")).toHaveCount(0);
  await expect(attributionFrame.locator("h2")).toHaveCount(1);
  await expect(attributionFrame.locator("h2")).toHaveText("Attribution and provenance");

  // A 390 CSS-pixel layout exercises the same reflow constraint as a 780-pixel
  // browser viewport zoomed to 200%, without changing the exact digest text.
  await page.setViewportSize({ width: 390, height: 844 });
  const attribution = attributionFrame.locator("details.reader-attribution");
  await attribution.locator("summary").click();
  const digestCode = attribution.locator("[data-test-long-digest]");
  await expect(digestCode).toHaveText(digest);
  const attributionReflow = await digestCode.evaluate((code) => {
    const container = code.closest(".reader-scene-content");
    return { clientWidth: container.clientWidth, scrollWidth: container.scrollWidth };
  });
  expect(attributionReflow.scrollWidth).toBeLessThanOrEqual(attributionReflow.clientWidth + 1);

  await page.emulateMedia({ media: "print" });
  const printDocument = page.locator("[data-print-document]");
  await expect(printDocument).toBeVisible();
  await expect(printDocument.locator(".reader-print-scene")).toHaveCount(productionArtifact.scenes.length);
  await expect(printDocument.locator('.reader-print-scene[data-required="true"]')).toHaveCount(productionArtifact.scenes.filter((scene) => scene.required).length);
  await expect(printDocument.locator(".reader-print-assessment-item")).toHaveCount(productionArtifact.assessment.items.length);
  const printedBaseline = printDocument.locator('[data-assessment-item-id="item-build-baseline"]');
  await expect(printedBaseline.locator(".reader-print-stimulus")).toContainText("Node Cedar");
  await expect(printedBaseline.locator(".reader-print-answer")).toContainText("Cedar needs a bounded explanation");
  await expect(printDocument.locator(".reader-references")).toContainText(productionArtifact.references.sources[0].title);
  await expect(printDocument.locator(".reader-glossary dt")).toHaveCount(productionArtifact.glossary.terms.length);
  await expect(printDocument.locator(".reader-print-attribution")).toContainText("Attribution and provenance");
  await expect(printDocument.locator("h1")).toHaveCount(1);
  const duplicateIds = await page.locator("body").evaluate((body) => {
    const counts = new Map();
    body.querySelectorAll("[id]").forEach((element) => counts.set(element.id, (counts.get(element.id) || 0) + 1));
    return [...counts].filter(([, count]) => count > 1).map(([id]) => id);
  });
  expect(duplicateIds).toEqual([]);
  await expect(page.locator(".reader-shell")).toBeHidden();
  expect(errors).toEqual([]);
});

test("guided frames keep dense prose screen-sized while reading mode restores continuous flow", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/lessons/specimen/"), { waitUntil: "networkidle" });
  await page.locator(".reader-scene-link", { hasText: "Deep reading: choosing the useful model" }).click();

  await expect(page.locator(".reader-frame")).toHaveCount(14);
  await page.keyboard.press("ArrowRight");
  const activeFrame = page.locator(".reader-frame.is-active");
  await expect(activeFrame.locator(".reader-frame-header h2")).toHaveText("A model answers a particular question");
  expect((await activeFrame.innerText()).length).toBeGreaterThan(500);
  const guidedFit = await activeFrame.evaluate((element) => ({
    clientHeight: element.clientHeight,
    scrollHeight: element.scrollHeight,
  }));
  expect(guidedFit.scrollHeight).toBeLessThanOrEqual(guidedFit.clientHeight + 2);

  await page.locator("[data-view-toggle]").click();
  await expect(page.locator("[data-reader-app]")).toHaveClass(/reader-reading-mode/);
  await expect(page.locator(".reader-frame")).toHaveCount(14);
  const readingFlow = await page.locator("[data-reader-stage]").evaluate((element) => ({
    clientHeight: element.clientHeight,
    scrollHeight: element.scrollHeight,
  }));
  expect(readingFlow.scrollHeight).toBeGreaterThan(readingFlow.clientHeight * 2);

  await page.emulateMedia({ media: "print" });
  await expect(page.locator("[data-print-document]")).toBeVisible();
  await expect(page.locator("[data-print-document] .reader-print-scene")).toHaveCount(8);
  await expect(page.locator(".reader-shell")).toBeHidden();
  expect(errors).toEqual([]);
});

test("an overflowing guided frame is a labelled keyboard scroll region without replacing global navigation", async ({ page }) => {
  await page.setViewportSize({ width: 1100, height: 620 });
  const specimen = await getJson(page.request, "data/lessons/specimen.json");
  const markers = Array.from({ length: 72 }, (_, index) => `Overflow paragraph ${String(index + 1).padStart(2, "0")}`);
  specimen.scenes[0].contentHtml = [
    `<h1>${specimen.scenes[0].title}</h1>`,
    "<h2>Overflowing guided content</h2>",
    `<div>${markers.map((marker, index) => `<p data-overflow-marker="${index}">${marker}. This deliberately indivisible block exercises measured overflow.</p>`).join("")}</div>`
  ].join("");
  await page.route("**/data/lessons/specimen.json", (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(specimen) }));
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/lessons/specimen/"), { waitUntil: "networkidle" });
  await page.keyboard.press("ArrowRight");

  const scrollRegion = page.locator('[data-frame-id="frame-overflowing-guided-content"]');
  await expect(page.getByRole("region", { name: "Overflowing guided content" })).toBeVisible();
  await expect(scrollRegion).toHaveAttribute("tabindex", "0");
  await expect(scrollRegion).toHaveAttribute("data-guided-scroll-region", "");
  const dimensions = await scrollRegion.evaluate((element) => ({
    clientHeight: element.clientHeight,
    scrollHeight: element.scrollHeight,
  }));
  expect(dimensions.scrollHeight).toBeGreaterThan(dimensions.clientHeight + 2);

  await scrollRegion.focus();
  for (const key of ["ArrowDown", "Space", "PageDown"]) {
    await scrollRegion.evaluate((element) => { element.scrollTop = 0; });
    await page.keyboard.press(key);
    await expect.poll(() => scrollRegion.evaluate((element) => element.scrollTop), `${key} should scroll the focused frame`).toBeGreaterThan(0);
    await expect(scrollRegion).toBeVisible();
  }

  await page.locator("[data-view-toggle]").click();
  await expect(page.locator("[data-reader-app]")).toHaveClass(/reader-reading-mode/);
  await expect(scrollRegion).not.toHaveAttribute("tabindex");
  await expect(scrollRegion).not.toHaveAttribute("role");
  expect(await page.locator("[data-scene-container] [data-overflow-marker]").evaluateAll((elements) => elements.map((element) => element.textContent.split(".")[0]))).toEqual(markers);

  await page.locator("[data-view-toggle]").click();
  await expect(scrollRegion).toHaveAttribute("data-guided-scroll-region", "");
  const locationBeforeNavigation = await page.locator("[data-scene-location]").textContent();
  await page.locator("[data-scene-container]").focus();
  await page.keyboard.press("PageDown");
  await expect(page.locator("[data-scene-location]")).not.toHaveText(locationBeforeNavigation);
  expect(errors).toEqual([]);
});

test("every guided specimen frame fits a 1280 by 720 viewport without internal scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/lessons/specimen/"), { waitUntil: "networkidle" });
  const sceneLinks = page.locator("[data-scene-index]");
  const sceneCount = await sceneLinks.count();
  const overflowing = [];
  let auditedFrames = 0;

  for (let sceneIndex = 0; sceneIndex < sceneCount; sceneIndex += 1) {
    await sceneLinks.nth(sceneIndex).click();
    const frameCount = await page.locator(".reader-frame").count();
    for (let frameIndex = 0; frameIndex < frameCount; frameIndex += 1) {
      if (frameIndex > 0) await page.keyboard.press("ArrowRight");
      const dimensions = await page.locator(".reader-frame.is-active").evaluate((element) => ({
        clientHeight: element.clientHeight,
        scrollHeight: element.scrollHeight,
        title: element.dataset.frameTitle,
      }));
      auditedFrames += 1;
      if (dimensions.scrollHeight > dimensions.clientHeight + 2) {
        overflowing.push({ sceneIndex: sceneIndex + 1, frameIndex: frameIndex + 1, ...dimensions });
      }
    }
  }

  expect(auditedFrames).toBeGreaterThan(40);
  expect(overflowing).toEqual([]);
  expect(errors).toEqual([]);
});

test("the lesson reader collapses its rails and preserves focus and theme controls", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/lessons/specimen/"), { waitUntil: "networkidle" });

  const app = page.locator("[data-reader-app]");
  const contents = page.locator("[data-index-open]");
  const info = page.locator("[data-margin-toggle]");
  const focus = page.locator("[data-focus-toggle]");
  const theme = page.locator("[data-theme-toggle]");

  const typeScale = await page.evaluate(() => ({
    copy: parseFloat(getComputedStyle(document.querySelector("[data-copy-link]")).fontSize),
    theme: parseFloat(getComputedStyle(document.querySelector("[data-theme-toggle]")).fontSize),
    sceneTitle: parseFloat(getComputedStyle(document.querySelector(".reader-scene-link strong")).fontSize),
    marginLabel: parseFloat(getComputedStyle(document.querySelector(".reader-margin dt")).fontSize),
  }));
  expect(typeScale.copy).toBeGreaterThanOrEqual(11);
  expect(typeScale.theme).toBeGreaterThanOrEqual(11);
  expect(typeScale.sceneTitle).toBeGreaterThanOrEqual(12);
  expect(typeScale.marginLabel).toBeGreaterThanOrEqual(10);

  await contents.click();
  await expect(app).toHaveClass(/is-index-collapsed/);
  await expect(page.locator("[data-reader-index]")).toBeHidden();
  await expect(contents).toHaveAttribute("aria-expanded", "false");
  const collapsedGeometry = await page.evaluate(() => ({
    bookWidth: document.querySelector(".reader-book").getBoundingClientRect().width,
    stageWidth: document.querySelector(".reader-stage").getBoundingClientRect().width,
    viewportWidth: window.innerWidth,
  }));
  expect(collapsedGeometry.bookWidth).toBeGreaterThan(collapsedGeometry.viewportWidth * 0.5);
  expect(collapsedGeometry.stageWidth).toBe(collapsedGeometry.bookWidth);
  await contents.click();
  await expect(page.locator("[data-reader-index]")).toBeVisible();

  await info.click();
  await expect(app).toHaveClass(/is-margin-collapsed/);
  await expect(page.locator("#reader-margin")).toBeHidden();
  await info.click();
  await expect(page.locator("#reader-margin")).toBeVisible();

  await focus.click();
  await expect(page.locator("body")).toHaveClass(/reader-focus-mode/);
  await expect(page.locator(".specimen-site-header")).toBeHidden();
  await expect(page.locator("[data-reader-index]")).toBeHidden();
  await expect(focus).toHaveAttribute("aria-pressed", "true");
  await page.keyboard.press("Escape");
  await expect(page.locator("body")).not.toHaveClass(/reader-focus-mode/);

  await theme.click();
  await expect(page.locator("body")).toHaveClass(/reader-dark/);
  await expect(theme).toHaveAttribute("aria-pressed", "true");
  expect(await page.locator(".reader-page").evaluate((element) => getComputedStyle(element).backgroundColor)).toBe("rgb(24, 27, 30)");
  await page.reload({ waitUntil: "networkidle" });
  await expect(page.locator("body")).toHaveClass(/reader-dark/);
  expect(errors).toEqual([]);
});

test("the narrow Contents drawer receives and returns keyboard focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/lessons/specimen/"), { waitUntil: "networkidle" });

  const contents = page.locator("[data-index-open]");
  const drawer = page.locator("[data-reader-index]");
  const close = page.locator("[data-index-close]");
  await contents.focus();
  await page.keyboard.press("Enter");
  await expect(drawer).toBeVisible();
  await expect(contents).toHaveAttribute("aria-expanded", "true");
  await expect(close).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(drawer).toBeHidden();
  await expect(contents).toHaveAttribute("aria-expanded", "false");
  await expect(contents).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(close).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(drawer).toBeHidden();
  await expect(contents).toBeFocused();
  expect(errors).toEqual([]);
});

test("the narrow lesson header keeps its controls inside the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/lessons/specimen/"), { waitUntil: "networkidle" });

  await expect(page.locator(".reader-location")).toBeHidden();
  const headerGeometry = await page.locator(".reader-toolbar").evaluate((header) => ({
    clientWidth: header.clientWidth,
    scrollWidth: header.scrollWidth,
    controls: [...header.querySelectorAll("button:not([hidden]), a:not([hidden])")]
      .filter((control) => getComputedStyle(control).display !== "none")
      .map((control) => {
        const bounds = control.getBoundingClientRect();
        return { left: bounds.left, right: bounds.right };
      })
  }));
  expect(headerGeometry.scrollWidth).toBeLessThanOrEqual(headerGeometry.clientWidth + 1);
  expect(headerGeometry.controls.every(({ left, right }) => left >= -1 && right <= 321)).toBeTruthy();
  expect(errors).toEqual([]);
});

test("chemistry and equation cards fit narrow pages without lateral scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/lessons/specimen/#scene-concept"), { waitUntil: "networkidle" });

  const assertFormulaFits = async (selector) => {
    const block = page.locator("[data-scene-container]").locator(selector);
    await expect(block.locator('math[display="block"]')).toBeVisible();
    await expect.poll(() => block.locator("math").getAttribute("data-fit-scale")).not.toBeNull();
    const dimensions = await block.evaluate((element) => {
      const math = element.querySelector('math[display="block"]');
      const blockBounds = element.getBoundingClientRect();
      const mathBounds = math.getBoundingClientRect();
      return {
        blockOverflowX: getComputedStyle(element).overflowX,
        blockClientWidth: element.clientWidth,
        blockScrollWidth: element.scrollWidth,
        mathLeft: mathBounds.left,
        mathRight: mathBounds.right,
        blockLeft: blockBounds.left,
        blockRight: blockBounds.right,
      };
    });
    expect(dimensions.blockOverflowX).toBe("hidden");
    expect(dimensions.blockScrollWidth).toBeLessThanOrEqual(dimensions.blockClientWidth + 1);
    expect(dimensions.mathLeft).toBeGreaterThanOrEqual(dimensions.blockLeft - 1);
    expect(dimensions.mathRight).toBeLessThanOrEqual(dimensions.blockRight + 1);
  };

  await advanceUntilVisible(page, '[data-directive="chemistry"]');
  await assertFormulaFits('[data-directive="chemistry"]');
  await advanceUntilVisible(page, '[data-directive="diagram"] .ek-diagram-visual');
  const diagramDimensions = await page.locator('[data-scene-container] [data-directive="diagram"] .ek-diagram-visual').evaluate((element) => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth,
    direction: getComputedStyle(element).flexDirection,
  }));
  expect(diagramDimensions.scrollWidth).toBeLessThanOrEqual(diagramDimensions.clientWidth + 1);
  expect(diagramDimensions.direction).toBe("column");

  await page.locator("[data-index-open]").click();
  await page.locator(".reader-scene-link", { hasText: "Annotating conjugate pairs" }).click();
  await advanceUntilVisible(page, '[data-directive="chemistry"]');
  await assertFormulaFits('[data-directive="chemistry"]');

  await page.locator("[data-index-open]").click();
  await page.locator(".reader-scene-link", { hasText: "A buffer under perturbation" }).click();
  await advanceUntilVisible(page, '[data-directive="equation"]');
  await assertFormulaFits('[data-directive="equation"]');
  expect(errors).toEqual([]);
});

test("the syllabus page renders and searches the complete academic contract", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/syllabus/"), { waitUntil: "networkidle" });

  await expect(page.locator("h1").first()).toContainText("Premed syllabus");
  await expect(page.locator(".syllabus-section")).toHaveCount(27);
  await expect(page.locator(".syllabus-document")).toContainText("CHE-110");
  await expect(page.locator(".syllabus-document")).toContainText("ORG-230");
  await expect(page.locator(".syllabus-document")).toContainText("BCH-240");
  await expect(page.locator(".syllabus-document")).toContainText("Appendix C — Versioning convention");
  await expect(page.locator('a[href$=".md"]')).toHaveCount(0);

  await page.locator("[data-syllabus-search]").fill("stereochemistry");
  await expect(page.locator("[data-search-status]")).toContainText(/of 27 sections match/);
  const visibleSections = page.locator(".syllabus-section:not(.is-search-hidden)");
  expect(await visibleSections.count()).toBeGreaterThan(0);
  expect(await visibleSections.count()).toBeLessThan(27);
  expect(errors).toEqual([]);
});

test("the graph page renders every node and relationship", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await page.goto(route("premed/graph/"), { waitUntil: "networkidle" });

  await expect(page.locator(".graph-node")).toHaveCount(462);
  await expect(page.locator(".graph-link")).toHaveCount(1092);
  await expect(page.locator("[data-graph-status]")).toContainText("462 of 462 nodes");
  const viewportLayout = await page.evaluate(() => ({
    documentHeight: document.documentElement.scrollHeight,
    viewportHeight: window.innerHeight,
    bodyOverflow: getComputedStyle(document.body).overflow,
  }));
  expect(viewportLayout.documentHeight).toBe(viewportLayout.viewportHeight);
  expect(viewportLayout.bodyOverflow).toBe("hidden");

  const initialTransform = await page.locator("[data-graph-viewport]").getAttribute("transform");
  await page.locator("[data-zoom-in]").click();
  await expect(page.locator("[data-graph-viewport]")).not.toHaveAttribute("transform", initialTransform || "");

  await page.locator("[data-graph-search]").fill("Acids, Bases & Buffers");
  const acidsEntry = page.locator(".directory-item", { hasText: "Acids, Bases & Buffers" }).first();
  await expect(acidsEntry).toBeVisible();
  await acidsEntry.click();
  await expect(page.locator("[data-inspector-title]")).toContainText("Acids, Bases & Buffers");
  await expect(page.locator('a[href$=".md"]')).toHaveCount(0);

  const graphResponse = await page.request.get(route("data/premed-graph.json"));
  expect(graphResponse.ok()).toBeTruthy();
  const graph = await graphResponse.json();
  expect(graph.metrics).toMatchObject({ domains: 10, modules: 48, topics: 404, links: 1092 });
  expect(errors).toEqual([]);
});

test("mobile navigation and all routes avoid horizontal page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  for (const path of ["", "premed/", "premed/syllabus/", "premed/graph/", "premed/lessons/", "premed/lessons/read/?lesson=PREM-LPP-001", "premed/lessons/specimen/", "contribute/", "contribute/format/"]) {
    await page.goto(route(path), { waitUntil: "networkidle" });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, `${path || "root"} should not overflow`).toBeLessThanOrEqual(1);
  }

  await page.goto(route(), { waitUntil: "networkidle" });
  const menuButton = page.locator("[data-menu-button]");
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#primary-nav")).toHaveClass(/is-open/);
  await page.locator("#primary-nav a[href='#ethos']").click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
});

test("mobile navigation keeps every item readable in light and dark themes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  const assertOpenMenu = async ({ background, foreground }) => {
    const nav = page.locator("#primary-nav");
    await expect(nav).toHaveClass(/is-open/);

    const appearance = await nav.evaluate((element) => {
      const bounds = element.getBoundingClientRect();
      return {
        background: getComputedStyle(element).backgroundColor,
        bottom: bounds.bottom,
        foregrounds: [...element.querySelectorAll("a")].map((link) => getComputedStyle(link).color),
        top: bounds.top,
        zIndex: getComputedStyle(element).zIndex,
      };
    });

    expect(appearance.background).toBe(background);
    expect(new Set(appearance.foregrounds)).toEqual(new Set([foreground]));
    expect(appearance.top).toBeLessThanOrEqual(67);
    expect(appearance.bottom).toBeGreaterThanOrEqual(843);
    expect(Number(appearance.zIndex)).toBeGreaterThanOrEqual(150);
  };

  await page.goto(route(), { waitUntil: "networkidle" });
  await page.locator("[data-menu-button]").click();
  await assertOpenMenu({ background: "rgb(242, 239, 230)", foreground: "rgb(23, 23, 20)" });

  await page.goto(route("premed/lessons/specimen/"), { waitUntil: "networkidle" });
  await page.locator("[data-theme-toggle]").click();
  await expect(page.locator("body")).toHaveClass(/reader-dark/);
  await page.locator("[data-menu-button]").click();
  await assertOpenMenu({ background: "rgb(23, 26, 29)", foreground: "rgb(238, 234, 224)" });
});
