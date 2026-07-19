(() => {
  "use strict";

  const launchpad = document.querySelector("[data-contribution-launchpad]");
  const promptField = document.querySelector("[data-agent-prompt]");
  if (!launchpad || !promptField) return;

  const scriptUrl = document.currentScript?.src || new URL("contribute.js", document.baseURI).href;
  const siteRoot = new URL("./", scriptUrl);
  const copyButton = document.querySelector("[data-copy-agent-prompt]");
  const copyStatus = document.querySelector("[data-copy-agent-status]");
  const requestedOutcomeId = new URL(location.href).searchParams.get("outcome");
  let lessonIndex = null;
  let openPrIndex = null;

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => { element.textContent = value; });
  };

  function claimedOutcomeIds() {
    const claimed = new Set();
    for (const pullRequest of openPrIndex?.pullRequests || []) {
      for (const lesson of pullRequest.lessons || []) {
        for (const outcomeId of lesson.outcomeIds || []) claimed.add(outcomeId);
      }
    }
    return claimed;
  }

  function availableOutcomes() {
    const claimed = claimedOutcomeIds();
    return (lessonIndex?.outcomes || []).filter((outcome) => !(outcome.lessonIds || []).length && !claimed.has(outcome.id));
  }

  function promptText(available) {
    const llmsUrl = new URL("llms.txt", siteRoot).href;
    const authorSkillUrl = new URL("skills/author-embeddedknowledge-lesson/SKILL.md", siteRoot).href;
    const contentStandardUrl = new URL("content-standard.txt", siteRoot).href;
    const lessonIndexUrl = new URL("data/premed-lessons.json", siteRoot).href;
    const openPrsUrl = new URL("data/premed-open-prs.json", siteRoot).href;
    const requested = lessonIndex?.outcomes?.find((outcome) => outcome.id === requestedOutcomeId);
    const selection = requested
      ? `\n\nWork on this requested outcome if it is still available:\n- ID: ${requested.id}\n- Code: ${requested.code}\n- Title: ${requested.title}\n- Outcome: ${requested.outcome}`
      : "";

    return `I want you to contribute one university-grade lesson to EmbeddedKnowledge.

First, read ${llmsUrl}, then load and follow ${authorSkillUrl} as the authoring procedure. Read ${contentStandardUrl} completely as the teaching-quality contract, then follow the skill's links to the contribution manifest, Lesson Format v1, schemas, and quorum policy.

Inspect ${lessonIndexUrl} and ${openPrsUrl}. There are currently ${available.length} available contribution targets. Select exactly one Premed outcome that has no merged lesson and is not claimed by an active proposal.${selection}

Then build and validate one focused lesson pack according to the repository instructions. Preserve evidence, accessibility, licensing, and agent provenance. Do not merge, invent reviews, reuse run identities, or count the specimen as production content. Founding-stage review requires three isolated model-family runs plus one fresh adjudication run. Prepare a draft PR only if contribution intake is open; otherwise return a complete local patch and clearly report the intake blocker.`;
  }

  function updateLaunchpad() {
    const available = availableOutcomes();
    const claimed = claimedOutcomeIds();
    const outcomes = lessonIndex.outcomes || [];
    const total = outcomes.length;
    const published = lessonIndex.summary?.publishedLessons || 0;
    setText("[data-contribution-open-count]", available.length.toLocaleString());
    setText("[data-contribution-available]", available.length.toLocaleString());
    setText("[data-contribution-total]", total.toLocaleString());
    setText("[data-contribution-claimed]", claimed.size.toLocaleString());
    setText("[data-contribution-published]", published.toLocaleString());
    promptField.value = promptText(available);
    if (requestedOutcomeId) {
      const requested = outcomes.find((outcome) => outcome.id === requestedOutcomeId);
      copyStatus.textContent = requested
        ? `Prompt is scoped to ${requested.code} · ${requested.title}.`
        : "The requested outcome was not found; the prompt will ask the agent to select an available target.";
    }
  }

  async function copyPrompt() {
    let copied = false;
    try {
      await navigator.clipboard.writeText(promptField.value);
      copied = true;
    } catch {
      promptField.focus();
      promptField.select();
      copied = document.execCommand("copy");
    }
    copyStatus.textContent = copied ? "Agent prompt copied. Paste it into a coding agent." : "Prompt selected. Copy it, then paste it into a coding agent.";
    copyButton.textContent = copied ? "Copied" : "Select prompt";
    setTimeout(() => { copyButton.textContent = "Copy agent prompt"; }, 1800);
  }

  copyButton?.addEventListener("click", copyPrompt);

  Promise.all([
    fetch(new URL("data/premed-lessons.json", siteRoot), { cache: "no-cache" }).then((response) => {
      if (!response.ok) throw new Error(`Lesson index returned ${response.status}`);
      return response.json();
    }),
    fetch(new URL("data/premed-open-prs.json", siteRoot), { cache: "no-cache" }).then((response) => {
      if (!response.ok) throw new Error(`Open PR index returned ${response.status}`);
      return response.json();
    })
  ]).then(([lessons, openPrs]) => {
    lessonIndex = lessons;
    openPrIndex = openPrs;
    updateLaunchpad();
  }).catch(() => {
    const llmsUrl = new URL("llms.txt", siteRoot).href;
    const authorSkillUrl = new URL("skills/author-embeddedknowledge-lesson/SKILL.md", siteRoot).href;
    promptField.value = promptField.value
      .replace("{{LLMS_URL}}", llmsUrl)
      .replace("{{AUTHOR_SKILL_URL}}", authorSkillUrl)
      .replace("{{LESSON_INDEX_URL}}", new URL("data/premed-lessons.json", siteRoot).href)
      .replace("{{OPEN_PRS_URL}}", new URL("data/premed-open-prs.json", siteRoot).href)
      .replace("{{AVAILABLE_COUNT}}", "the currently reported number of");
    copyStatus.textContent = "Live opportunity counts are unavailable; the agent can resolve them from llms.txt.";
  });
})();
