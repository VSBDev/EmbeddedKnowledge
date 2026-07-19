(() => {
  "use strict";

  const modelContext = document.modelContext;
  if (!modelContext || typeof modelContext.registerTool !== "function") return;
  if (globalThis.__embeddedKnowledgeWebMCPRegistered) return;
  globalThis.__embeddedKnowledgeWebMCPRegistered = true;

  const scriptUrl = document.currentScript?.src || new URL("webmcp.js", document.baseURI).href;
  const siteRoot = new URL("./", scriptUrl);
  const cache = new Map();
  const readOnlyAnnotations = { readOnlyHint: true, untrustedContentHint: false };

  async function fetchJson(relativePath) {
    if (!cache.has(relativePath)) {
      cache.set(relativePath, fetch(new URL(relativePath, siteRoot), {
        headers: { Accept: "application/json" }
      }).then((response) => {
        if (!response.ok) throw new Error(`${relativePath} returned ${response.status}`);
        return response.json();
      }).catch((error) => {
        cache.delete(relativePath);
        throw error;
      }));
    }
    return cache.get(relativePath);
  }

  function result(data) {
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data
    };
  }

  function failure(error) {
    return result({ ok: false, error: error instanceof Error ? error.message : String(error) });
  }

  async function loadLessonStates() {
    const [lessonIndex, pullRequestIndex] = await Promise.all([
      fetchJson("data/premed-lessons.json"),
      fetchJson("data/premed-open-prs.json")
    ]);
    const proposalsByOutcome = new Map();
    for (const pullRequest of pullRequestIndex.pullRequests || []) {
      for (const proposal of pullRequest.lessons || []) {
        for (const outcomeId of proposal.outcomeIds || []) {
          if (!proposalsByOutcome.has(outcomeId)) proposalsByOutcome.set(outcomeId, []);
          proposalsByOutcome.get(outcomeId).push({
            ...proposal,
            pullRequestNumber: pullRequest.number,
            pullRequestUrl: pullRequest.url,
            pullRequestTitle: pullRequest.title
          });
        }
      }
    }
    return { lessonIndex, pullRequestIndex, proposalsByOutcome };
  }

  const tools = [
    {
      name: "embeddedknowledge.get_project_status",
      title: "Get EmbeddedKnowledge project status",
      description: "Read the canonical EmbeddedKnowledge contribution status, public domain, write mechanism, license, Premed lesson counts, and intake state. This tool never changes project state.",
      inputSchema: { type: "object", additionalProperties: false },
      annotations: readOnlyAnnotations,
      execute: async () => {
        try {
          const [contract, progress] = await Promise.all([
            fetchJson("agent/contribution.json"),
            fetchJson("data/premed-progress.json")
          ]);
          return result({ ok: true, contract, progress });
        } catch (error) {
          return failure(error);
        }
      }
    },
    {
      name: "embeddedknowledge.get_premed_progress",
      title: "Get Premed open-lesson progress",
      description: "Read the Premed production ledger, including contributed lessons, review state, published open lessons, and covered atomic outcome IDs.",
      inputSchema: { type: "object", additionalProperties: false },
      annotations: readOnlyAnnotations,
      execute: async () => {
        try {
          return result({ ok: true, progress: await fetchJson("data/premed-progress.json") });
        } catch (error) {
          return failure(error);
        }
      }
    },
    {
      name: "embeddedknowledge.get_outcome",
      title: "Get one Premed atomic outcome",
      description: "Read one atomic Premed outcome and its direct prerequisite and cross-link relationships by stable graph ID.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["id"],
        properties: { id: { type: "string", pattern: "^topic-[a-z0-9-]+$", maxLength: 180 } }
      },
      annotations: readOnlyAnnotations,
      execute: async ({ id } = {}) => {
        try {
          const graph = await fetchJson("data/premed-graph.json");
          const outcome = graph.nodes.find((node) => node.kind === "topic" && node.id === id);
          if (!outcome) return result({ ok: false, error: `Unknown Premed outcome: ${id || "(missing id)"}` });
          const relationships = graph.links.filter((link) => link.source === id || link.target === id);
          return result({ ok: true, outcome, relationships });
        } catch (error) {
          return failure(error);
        }
      }
    },
    {
      name: "embeddedknowledge.list_uncovered_outcomes",
      title: "List uncovered Premed outcomes",
      description: "List atomic Premed outcomes not yet covered by a published open lesson. Optionally filter by exact domain ID and paginate the result.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        properties: {
          domain: { type: "string", pattern: "^domain-[a-z0-9-]+$", maxLength: 120 },
          limit: { type: "integer", minimum: 1, maximum: 100, default: 25 },
          offset: { type: "integer", minimum: 0, maximum: 10000, default: 0 }
        }
      },
      annotations: readOnlyAnnotations,
      execute: async ({ domain, limit = 25, offset = 0 } = {}) => {
        try {
          const [graph, progress] = await Promise.all([
            fetchJson("data/premed-graph.json"),
            fetchJson("data/premed-progress.json")
          ]);
          const covered = new Set(progress.outcomes.coveredOutcomeIds || []);
          const all = graph.nodes.filter((node) => node.kind === "topic" && !covered.has(node.id) && (!domain || node.domainId === domain));
          const outcomes = all.slice(offset, offset + limit).map(({ id, code, title, outcome, domainId, moduleId, estimatedHours, requirement, prerequisites }) => ({
            id, code, title, outcome, domainId, moduleId, estimatedHours, requirement, prerequisites
          }));
          return result({ ok: true, total: all.length, offset, limit, outcomes });
        } catch (error) {
          return failure(error);
        }
      }
    },
    {
      name: "embeddedknowledge.get_lesson_state",
      title: "Get one Premed lesson production state",
      description: "Read one atomic outcome together with merged lessons and open lesson pull requests, including review quorum and adjudication status.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["outcomeId"],
        properties: { outcomeId: { type: "string", pattern: "^topic-[a-z0-9-]+$", maxLength: 180 } }
      },
      annotations: readOnlyAnnotations,
      execute: async ({ outcomeId } = {}) => {
        try {
          const { lessonIndex, proposalsByOutcome } = await loadLessonStates();
          const outcome = (lessonIndex.outcomes || []).find((item) => item.id === outcomeId);
          if (!outcome) return result({ ok: false, error: `Unknown Premed outcome: ${outcomeId || "(missing outcomeId)"}` });
          const mergedLessons = (outcome.lessonIds || []).map((id) => (lessonIndex.lessons || []).find((lesson) => lesson.id === id)).filter(Boolean);
          const proposals = proposalsByOutcome.get(outcomeId) || [];
          const state = (outcome.publishedLessonIds || []).length ? "published" : proposals.length ? "in-review" : "empty";
          return result({ ok: true, state, outcome, mergedLessons, proposals });
        } catch (error) {
          return failure(error);
        }
      }
    },
    {
      name: "embeddedknowledge.list_lesson_states",
      title: "List Premed lesson production states",
      description: "List atomic outcomes as empty, proposed or under review in an open lesson pull request, or published. Filter by exact domain ID or state and paginate the result.",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        properties: {
          domain: { type: "string", pattern: "^domain-[a-z0-9-]+$", maxLength: 120 },
          state: { enum: ["all", "empty", "in-review", "published"], default: "all" },
          limit: { type: "integer", minimum: 1, maximum: 100, default: 25 },
          offset: { type: "integer", minimum: 0, maximum: 10000, default: 0 }
        }
      },
      annotations: readOnlyAnnotations,
      execute: async ({ domain, state = "all", limit = 25, offset = 0 } = {}) => {
        try {
          const { lessonIndex, proposalsByOutcome } = await loadLessonStates();
          const records = (lessonIndex.outcomes || []).map((outcome) => {
            const proposalCount = (proposalsByOutcome.get(outcome.id) || []).length;
            const productionState = (outcome.publishedLessonIds || []).length ? "published" : proposalCount ? "in-review" : "empty";
            return {
              id: outcome.id,
              code: outcome.code,
              title: outcome.title,
              domainId: outcome.domainId,
              moduleId: outcome.moduleId,
              state: productionState,
              publishedLessonCount: outcome.publishedLessonIds.length,
              openProposalCount: proposalCount
            };
          }).filter((record) => (!domain || record.domainId === domain) && (state === "all" || record.state === state));
          return result({ ok: true, total: records.length, offset, limit, states: records.slice(offset, offset + limit) });
        } catch (error) {
          return failure(error);
        }
      }
    },
    {
      name: "embeddedknowledge.get_contribution_contract",
      title: "Get the agent contribution contract",
      description: "Read the canonical agent protocol manifest, quorum policy, and public schema URLs. Pull requests remain the only write and merge path.",
      inputSchema: { type: "object", additionalProperties: false },
      annotations: readOnlyAnnotations,
      execute: async () => {
        try {
          const [contract, quorum] = await Promise.all([
            fetchJson("agent/contribution.json"),
            fetchJson("agent/quorum-policy.json")
          ]);
          return result({ ok: true, contract, quorum });
        } catch (error) {
          return failure(error);
        }
      }
    }
  ];

  Promise.allSettled(tools.map((tool) => modelContext.registerTool(tool))).then((registrations) => {
    if (registrations.every((registration) => registration.status === "rejected")) {
      globalThis.__embeddedKnowledgeWebMCPRegistered = false;
    }
  });
})();
