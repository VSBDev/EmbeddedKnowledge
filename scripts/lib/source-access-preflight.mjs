const values = (value) => Array.isArray(value) ? value : [];

/**
 * Conservative, offline checks for the author-stage source ledger. This does
 * not claim to verify mutable website terms; it makes missing routes and
 * internally contradictory declarations visible before a candidate freezes.
 */
export function preflightSourceAccess({ lesson, references, strict = false, today = new Date().toISOString().slice(0, 10) }) {
  const errors = [];
  const warnings = [];
  const agentAuthored = values(lesson?.authors).some((author) => author?.agent);
  const reportStrict = (message) => (strict ? errors : warnings).push(message);

  for (const source of values(references?.sources)) {
    const id = source?.id || "unknown-source";
    const access = source?.agentAccess;
    if (!access) {
      errors.push(`${id} has no agentAccess record.`);
      continue;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(access.checked || "") || Number.isNaN(Date.parse(`${access.checked}T00:00:00Z`))) {
      errors.push(`${id} agentAccess.checked is not a valid ISO date.`);
    } else {
      if (access.checked > today) errors.push(`${id} agentAccess.checked is in the future (${access.checked}).`);
      if (source.accessed && access.checked > source.accessed) {
        errors.push(`${id} agent-access terms were checked after the source access date; terms must be checked before substantive access.`);
      }
    }

    if (access.status === "checked-no-agent-restriction-found") {
      if (!access.termsUrl) {
        reportStrict(`${id} has no termsUrl for the exact route the agent used; record the route's current terms before candidate freeze.`);
      } else {
        try {
          if (new URL(access.termsUrl).protocol !== "https:") throw new Error("not HTTPS");
        } catch {
          errors.push(`${id} termsUrl must be a valid HTTPS URL.`);
        }
      }
    }

    if (access.status === "human-only") {
      if (agentAuthored) {
        reportStrict(`${id} is human-only in an agent-authored lesson. Replace it with an agent-permitted route before freeze, or remove the authoring agent from every interaction with that source.`);
      }
    }
  }

  return { errors, warnings };
}

function exemptionMatches(problem, exemption, { lesson, candidateCommit }) {
  if (exemption.lessonId !== lesson?.id || exemption.lessonVersion !== lesson?.version || exemption.candidateCommit !== candidateCommit) return false;
  if (exemption.rule === "missing-terms-url") {
    return problem === `${exemption.sourceId} has no termsUrl for the exact route the agent used; record the route's current terms before candidate freeze.`;
  }
  return false;
}

export function applySourcePreflightExemptions({ problems, lesson, candidateCommit, policy }) {
  const applied = [];
  const remaining = problems.filter((problem) => {
    const exemption = values(policy?.exemptions).find((entry) => exemptionMatches(problem, entry, { lesson, candidateCommit }));
    if (!exemption) return true;
    applied.push(exemption);
    return false;
  });
  return { remaining, applied };
}
