(() => {
  "use strict";

  const app = document.querySelector("[data-reader-app]");
  const listElement = document.querySelector("[data-lesson-list]");
  const detailElement = document.querySelector("[data-lesson-detail]");
  if (!app || !listElement || !detailElement) return;

  const scriptUrl = document.currentScript?.src || new URL("lessons.js", document.baseURI).href;
  const siteRoot = new URL("./", scriptUrl);
  const searchInput = document.querySelector("[data-lesson-search]");
  const resultsElement = document.querySelector("[data-lesson-results]");
  const indexPanel = document.querySelector("[data-reader-index]");
  const indexOpen = document.querySelector("[data-index-open]");
  const indexClose = document.querySelector("[data-index-close]");
  const scrim = document.querySelector("[data-reader-scrim]");
  const marginPanel = document.querySelector("#reader-margin");
  const marginToggle = document.querySelector("[data-margin-toggle]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const focusToggle = document.querySelector("[data-focus-toggle]");
  const previousButton = document.querySelector("[data-outcome-prev]");
  const nextButton = document.querySelector("[data-outcome-next]");
  const stage = document.querySelector("[data-reader-stage]");
  const announcer = document.querySelector("[data-reader-announcer]");
  const narrowLayout = matchMedia("(max-width: 820px)");
  const systemDark = matchMedia("(prefers-color-scheme: dark)");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  let index = null;
  let openPullRequests = null;
  let outcomes = [];
  let selectedIndex = 0;
  let proposalByOutcome = new Map();
  let lessonById = new Map();
  let indexCollapsed = false;
  let marginCollapsed = false;
  let focusMode = false;

  const create = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined && text !== null) element.textContent = text;
    return element;
  };

  function readPreference(key) {
    try {
      return localStorage.getItem(`embeddedknowledge.reader.${key}`);
    } catch {
      return null;
    }
  }

  function writePreference(key, value) {
    try {
      localStorage.setItem(`embeddedknowledge.reader.${key}`, String(value));
    } catch {
      // Reader preferences are optional.
    }
  }

  function proposalsFor(outcomeId) {
    return proposalByOutcome.get(outcomeId) || [];
  }

  function publishedLessonFor(outcome) {
    return (outcome.publishedLessonIds || []).map((id) => lessonById.get(id)).find(Boolean) || null;
  }

  function lessonDestination(lesson) {
    const destination = lesson?.readerUrl || lesson?.url || lesson?.href;
    if (!destination) return null;
    return destination.startsWith("/") ? new URL(destination.slice(1), siteRoot).href : destination;
  }

  function outcomeState(outcome) {
    if ((outcome.publishedLessonIds || []).length) return "published";
    const proposals = proposalsFor(outcome.id);
    if (!proposals.length) return "empty";
    if (proposals.some((proposal) => proposal.adjudication?.decision)) return "adjudicated";
    if (proposals.some((proposal) => (proposal.reviewSummary?.approvals || 0) > 0)) return "in-review";
    return "proposed";
  }

  function stateLabel(state) {
    if (state === "published") return "Published";
    if (state === "adjudicated") return "Adjudicated";
    if (state === "in-review") return "Under review";
    if (state === "proposed") return "Proposed in a pull request";
    return "Empty — contribution needed";
  }

  function indexProposals() {
    proposalByOutcome = new Map();
    for (const pullRequest of openPullRequests.pullRequests || []) {
      for (const proposal of pullRequest.lessons || []) {
        const normalized = {
          ...proposal,
          pullRequestNumber: pullRequest.number,
          pullRequestTitle: pullRequest.title,
          url: pullRequest.url
        };
        for (const outcomeId of proposal.outcomeIds || []) {
          if (!proposalByOutcome.has(outcomeId)) proposalByOutcome.set(outcomeId, []);
          proposalByOutcome.get(outcomeId).push(normalized);
        }
      }
    }
  }

  function corpusCounts() {
    const states = outcomes.map(outcomeState);
    const count = (target) => states.filter((state) => state === target).length;
    return {
      empty: count("empty"),
      review: count("proposed") + count("in-review") + count("adjudicated"),
      published: count("published")
    };
  }

  function updateCorpusState() {
    const counts = corpusCounts();
    const percentage = outcomes.length ? Math.round((counts.published / outcomes.length) * 1000) / 10 : 0;
    document.querySelector("[data-course-state]").textContent = `${counts.published} of ${outcomes.length} outcomes published · ${counts.review} under review · ${counts.empty} empty`;
    document.querySelector("[data-index-coverage]").textContent = `${percentage}% published`;
    document.querySelector("[data-corpus-summary]").textContent = `${counts.published} published · ${counts.review} under review`;
    document.querySelector("[data-page-total]").textContent = String(outcomes.length).padStart(3, "0");
  }

  function outcomeMatches(outcome, query) {
    if (!query) return true;
    return `${outcome.code} ${outcome.title} ${outcome.outcome} ${outcome.domainTitle} ${outcome.moduleTitle}`.toLowerCase().includes(query);
  }

  function renderIndex() {
    const query = searchInput.value.trim().toLowerCase();
    const matches = outcomes.filter((outcome) => outcomeMatches(outcome, query));
    listElement.replaceChildren();
    resultsElement.textContent = `${matches.length} of ${outcomes.length} outcomes`;

    if (!matches.length) {
      const empty = create("div", "reader-index-empty");
      empty.append(create("strong", null, "No matching outcome"), create("p", null, "Try a code, discipline, module, or concept."));
      listElement.append(empty);
      return;
    }

    let domainId = null;
    let moduleId = null;
    for (const outcome of matches) {
      if (outcome.domainId !== domainId) {
        domainId = outcome.domainId;
        moduleId = null;
        const domain = create("h2", "reader-domain-title", outcome.domainTitle);
        domain.id = `index-${outcome.domainId}`;
        listElement.append(domain);
      }
      if (outcome.moduleId !== moduleId) {
        moduleId = outcome.moduleId;
        listElement.append(create("h3", "reader-module-title", outcome.moduleTitle));
      }

      const state = outcomeState(outcome);
      const publishedDestination = lessonDestination(publishedLessonFor(outcome));
      const control = create(publishedDestination ? "a" : "button", `reader-outcome-link${outcome.id === outcomes[selectedIndex]?.id ? " is-current" : ""}`);
      if (publishedDestination) control.href = publishedDestination;
      else control.type = "button";
      control.dataset.outcomeId = outcome.id;
      control.setAttribute("aria-current", String(outcome.id === outcomes[selectedIndex]?.id));
      const code = create("span", null, outcome.code);
      const title = create("strong", null, outcome.title);
      const marker = create("i", `reader-outcome-state ${state}`);
      marker.title = stateLabel(state);
      marker.setAttribute("aria-label", stateLabel(state));
      control.append(code, title, marker);
      control.addEventListener("click", () => {
        if (!publishedDestination) selectOutcome(outcome.id, { updateUrl: true, focus: true, announce: true });
        if (narrowLayout.matches) closeIndex();
      });
      listElement.append(control);
    }
  }

  function appendFact(list, term, value) {
    const item = create("div");
    item.append(create("dt", null, term), create("dd", null, value));
    list.append(item);
  }

  function renderEmptyState(outcome, fragment) {
    const state = create("section", "empty-book-state");
    const mark = create("div", "empty-page-mark");
    mark.setAttribute("aria-hidden", "true");
    mark.append(create("span", null, "0"), create("small", null, "pages"));
    const copy = create("div", "empty-book-copy");
    copy.append(
      create("span", "empty-book-label", "EMPTY PAGE · OPEN CONTRIBUTION"),
      create("h2", null, "This lesson has not been written yet."),
      create("p", null, "No reviewed teaching or active proposal exists here. Help build this exact lesson in public."),
      create("code", null, `lesson.json → ${outcome.id}`)
    );
    const actions = create("div", "empty-book-actions");
    const contribute = create("a", "lesson-contribute-link", "Contribute this lesson →");
    contribute.href = new URL(`contribute/?outcome=${encodeURIComponent(outcome.id)}`, siteRoot).href;
    const specimen = create("a", "lesson-specimen-link", "Preview a filled lesson");
    specimen.href = "specimen/";
    actions.append(contribute, specimen);
    copy.append(actions);
    state.append(mark, copy);
    fragment.append(state);
  }

  function renderProposal(proposal, fragment) {
    const section = create("section", "review-book-state");
    section.append(
      create("span", "empty-book-label", `PR #${proposal.pullRequestNumber} · ${proposal.stateLabel || "UNDER REVIEW"}`),
      create("h2", null, "A lesson is being written, but this page is not ready yet."),
      create("p", null, "The proposal remains visible while independent review and final adjudication are incomplete. It does not count as published course material until merge.")
    );

    const summary = proposal.reviewSummary || { reviewInputs: 0, requiredReviewInputs: 2, approvals: 0, roleCounts: {}, roleMinimums: {} };
    const usesReviewInputs = Number.isFinite(summary.requiredReviewInputs);
    const completed = usesReviewInputs ? (summary.reviewInputs || 0) : (summary.approvals || 0);
    const required = usesReviewInputs ? summary.requiredReviewInputs : (summary.requiredApprovals || 3);
    const meter = create("div", "review-quorum-meter");
    meter.append(create("strong", null, `${completed}/${required}`));
    const meterCopy = create("div");
    meterCopy.append(create("span", null, usesReviewInputs ? "REVIEW INPUTS" : "ELIGIBLE APPROVALS"), create("p", null, summary.quorumSatisfied ? "Required reviews recorded; fresh finalization still controls publication." : "More accountable review is required against the same original candidate."));
    meter.append(meterCopy);
    section.append(meter);

    const roles = create("div", "proposal-roles");
    const counts = summary.roleCounts || {};
    const minimums = summary.roleMinimums || {};
    roles.append(
      create("span", null, `Academic ${counts.academic || 0}/${minimums.academic ?? 1}`),
      create("span", null, `Learning ${counts.learningDesign || 0}/${minimums.learningDesign ?? 1}`)
    );
    if ((minimums.accessibilityRights ?? 0) > 0) roles.append(create("span", null, `Access + rights ${counts.accessibilityRights || 0}/${minimums.accessibilityRights}`));
    else roles.append(create("span", null, proposal.adjudication?.decision ? "Final access + rights audit recorded" : "Final access + rights audit pending"));
    roles.append(create("span", null, proposal.adjudication?.decision ? `Final decision: ${proposal.adjudication.decision}` : "Finalization pending"));
    section.append(roles);

    const blockers = [...(proposal.blockers || []), ...(proposal.metadataErrors || [])];
    if (blockers.length) {
      const list = create("ul", "proposal-blockers");
      blockers.forEach((blocker) => list.append(create("li", null, blocker)));
      section.append(list);
    }
    if (proposal.url) {
      const link = create("a", "proposal-link", `Inspect pull request #${proposal.pullRequestNumber} ↗`);
      link.href = proposal.url;
      link.rel = "noreferrer noopener";
      section.append(link);
    }
    fragment.append(section);
  }

  function renderPublishedLesson(lesson, fragment) {
    const section = create("section", "published-book-state");
    section.append(
      create("span", "empty-book-label", "PUBLISHED · REVIEW COMPLETE"),
      create("h2", null, lesson.title || "Reviewed lesson"),
      create("p", null, `${lesson.id} · ${lesson.license || "CC BY 4.0"} · version ${lesson.version || "published"}`)
    );
    const destination = lessonDestination(lesson);
    if (destination) {
      const link = create("a", "lesson-contribute-link", "Open reviewed lesson →");
      link.href = destination;
      section.append(link);
    }
    fragment.append(section);
  }

  function renderOutcome(outcome) {
    const fragment = document.createDocumentFragment();
    const state = outcomeState(outcome);
    const header = create("header", "reader-scene-header outcome-page-header");
    header.append(create("span", "scene-number", `${outcome.code} · ${outcome.domainTitle}`));
    const title = create("h1", null, outcome.title);
    title.id = "outcome-title";
    header.append(title);
    const meta = create("div", "scene-meta");
    meta.append(create("span", null, stateLabel(state)), create("span", null, `${outcome.estimatedHours} hours`), create("span", null, outcome.level));
    header.append(meta);
    fragment.append(header);

    const published = (outcome.publishedLessonIds || []).map((id) => lessonById.get(id)).filter(Boolean);
    const proposals = proposalsFor(outcome.id);
    if (!published.length && !proposals.length) renderEmptyState(outcome, fragment);
    published.forEach((lesson) => renderPublishedLesson(lesson, fragment));
    proposals.forEach((proposal) => renderProposal(proposal, fragment));

    const destination = create("section", "outcome-destination");
    destination.append(create("span", null, "LEARNING DESTINATION"), create("p", null, outcome.outcome));
    fragment.append(destination);

    const facts = create("dl", "outcome-context-grid");
    appendFact(facts, "Module", outcome.moduleTitle);
    appendFact(facts, "Requirement", outcome.requirement);
    appendFact(facts, "Prerequisites", outcome.prerequisites.length ? `${outcome.prerequisites.length} mapped` : "None");
    fragment.append(facts);

    const boundary = create("aside", "lesson-publication-boundary");
    boundary.append(create("strong", null, "Publication boundary"), create("p", null, "A syllabus outcome is not a lesson. Only validated, independently reviewed, separately adjudicated, merged, openly licensed teaching fills this page and changes course completion."));
    fragment.append(boundary);
    detailElement.replaceChildren(fragment);
  }

  function updateMargin(outcome) {
    const state = outcomeState(outcome);
    document.querySelector("[data-outcome-code]").textContent = outcome.code;
    document.querySelector("[data-margin-state]").textContent = stateLabel(state);
    document.querySelector("[data-outcome-domain]").textContent = outcome.domainTitle;
    document.querySelector("[data-outcome-module]").textContent = outcome.moduleTitle;
    document.querySelector("[data-outcome-level]").textContent = outcome.level;
    document.querySelector("[data-outcome-hours]").textContent = `${outcome.estimatedHours} hours`;
    document.querySelector("[data-outcome-prerequisites]").textContent = outcome.prerequisites.length ? `${outcome.prerequisites.length} mapped outcome${outcome.prerequisites.length === 1 ? "" : "s"}` : "None";
  }

  function updateControls(outcome) {
    const previous = outcomes[selectedIndex - 1];
    const next = outcomes[selectedIndex + 1];
    const state = outcomeState(outcome);
    document.querySelector("[data-outcome-state]").textContent = stateLabel(state);
    document.querySelector("[data-outcome-location]").textContent = `${outcome.code} · ${outcome.title}`;
    document.querySelector("[data-page-current]").textContent = String(selectedIndex + 1).padStart(3, "0");
    document.querySelector("[data-prev-title]").textContent = previous?.title || "Beginning";
    document.querySelector("[data-next-title]").textContent = next?.title || "End of syllabus";
    previousButton.disabled = !previous;
    nextButton.disabled = !next;
    document.title = `${outcome.title} — Premed open book · EmbeddedKnowledge`;
  }

  function syncCurrentIndexLink() {
    listElement.querySelectorAll("[data-outcome-id]").forEach((button) => {
      const current = button.dataset.outcomeId === outcomes[selectedIndex]?.id;
      button.classList.toggle("is-current", current);
      button.setAttribute("aria-current", String(current));
    });
  }

  function selectOutcome(outcomeId, options = {}) {
    const nextIndex = outcomes.findIndex((outcome) => outcome.id === outcomeId);
    if (nextIndex < 0) return;
    selectedIndex = nextIndex;
    const outcome = outcomes[selectedIndex];
    const publishedDestination = lessonDestination(publishedLessonFor(outcome));
    if (publishedDestination && options.openPublished !== false) {
      location.assign(publishedDestination);
      return;
    }
    renderOutcome(outcome);
    updateMargin(outcome);
    updateControls(outcome);
    syncCurrentIndexLink();
    stage.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    if (options.updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set("outcome", outcome.id);
      history.pushState({ outcomeId: outcome.id }, "", url);
    }
    if (options.focus) detailElement.focus({ preventScroll: true });
    if (options.announce) announcer.textContent = `Outcome ${selectedIndex + 1} of ${outcomes.length}: ${outcome.title}. ${stateLabel(outcomeState(outcome))}.`;
    if (!searchInput.value && options.scrollIndex !== false) {
      listElement.querySelector(`[data-outcome-id="${CSS.escape(outcome.id)}"]`)?.scrollIntoView({ block: "nearest" });
    }
  }

  function syncIndexControl() {
    const expanded = narrowLayout.matches ? indexPanel.classList.contains("is-open") : (!indexCollapsed && !focusMode);
    indexOpen.setAttribute("aria-expanded", String(expanded));
    indexOpen.setAttribute("aria-label", expanded ? "Hide syllabus" : "Show syllabus");
    document.querySelector("[data-contents-label]").textContent = expanded && !narrowLayout.matches ? "Hide index" : "Contents";
  }

  function setIndexCollapsed(collapsed, { persist = true } = {}) {
    indexCollapsed = Boolean(collapsed);
    app.classList.toggle("is-index-collapsed", indexCollapsed);
    if (persist) writePreference("indexCollapsed", indexCollapsed);
    syncIndexControl();
  }

  // Focus mode hides both rails outright, so the control labels must reflect that
  // rather than the collapse preference alone.
  function syncMarginControl() {
    const hidden = marginCollapsed || focusMode;
    marginToggle?.setAttribute("aria-expanded", String(!hidden));
    marginToggle?.setAttribute("aria-label", hidden ? "Show outcome information" : "Hide outcome information");
  }

  function setMarginCollapsed(collapsed, { persist = true } = {}) {
    marginCollapsed = Boolean(collapsed);
    app.classList.toggle("is-margin-collapsed", marginCollapsed);
    if (persist) writePreference("marginCollapsed", marginCollapsed);
    syncMarginControl();
  }

  function applyTheme(theme, { persist = true } = {}) {
    const dark = theme === "dark";
    document.body.classList.toggle("reader-dark", dark);
    themeToggle?.setAttribute("aria-pressed", String(dark));
    themeToggle?.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
    document.querySelector("[data-theme-label]").textContent = dark ? "Light" : "Dark";
    document.querySelector("[data-theme-icon]").textContent = dark ? "☀" : "☾";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0c0e10" : "#171714");
    if (persist) writePreference("theme", dark ? "dark" : "light");
  }

  function setFocusMode(enabled) {
    focusMode = Boolean(enabled);
    document.body.classList.toggle("reader-focus-mode", focusMode);
    focusToggle?.setAttribute("aria-pressed", String(focusMode));
    focusToggle?.setAttribute("aria-label", focusMode ? "Exit focus mode" : "Enter focus mode");
    document.querySelector("[data-focus-label]").textContent = focusMode ? "Exit focus" : "Focus";
    if (focusMode) closeIndex();
    syncIndexControl();
    syncMarginControl();
  }

  function openIndex() {
    indexPanel.classList.add("is-open");
    scrim.classList.add("is-open");
    syncIndexControl();
    indexClose.focus();
  }

  function closeIndex({ returnFocus = false } = {}) {
    indexPanel.classList.remove("is-open");
    scrim.classList.remove("is-open");
    syncIndexControl();
    if (returnFocus && getComputedStyle(indexOpen).display !== "none") indexOpen.focus();
  }

  const debounce = (callback, delay = 120) => {
    let timer = 0;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);
    };
  };

  searchInput.addEventListener("input", debounce(renderIndex, 120));
  previousButton.addEventListener("click", () => selectOutcome(outcomes[selectedIndex - 1]?.id, { updateUrl: true, focus: true, announce: true }));
  nextButton.addEventListener("click", () => selectOutcome(outcomes[selectedIndex + 1]?.id, { updateUrl: true, focus: true, announce: true }));
  indexOpen.addEventListener("click", () => {
    if (narrowLayout.matches) {
      if (indexPanel.classList.contains("is-open")) closeIndex();
      else openIndex();
      return;
    }
    // Focus mode hides the rails, so an explicit request to show one leaves focus mode
    // instead of silently toggling a preference behind a hidden rail.
    if (focusMode) {
      setFocusMode(false);
      setIndexCollapsed(false);
      return;
    }
    setIndexCollapsed(!indexCollapsed);
  });
  indexClose.addEventListener("click", () => closeIndex({ returnFocus: true }));
  scrim.addEventListener("click", () => closeIndex({ returnFocus: true }));
  marginToggle?.addEventListener("click", () => {
    if (focusMode) {
      setFocusMode(false);
      setMarginCollapsed(false);
      return;
    }
    setMarginCollapsed(!marginCollapsed);
  });
  themeToggle?.addEventListener("click", () => applyTheme(document.body.classList.contains("reader-dark") ? "light" : "dark"));
  focusToggle?.addEventListener("click", () => setFocusMode(!focusMode));

  document.querySelector("[data-copy-link]").addEventListener("click", async (event) => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(location.href);
      button.textContent = "Link copied";
    } catch {
      button.textContent = "Link is in the address bar";
    }
    setTimeout(() => { button.textContent = "Copy link"; }, 1800);
  });

  addEventListener("popstate", () => {
    const requested = new URL(location.href).searchParams.get("outcome");
    const fallback = outcomes.find((outcome) => outcomeState(outcome) !== "published") || outcomes[0];
    selectOutcome(outcomes.some((outcome) => outcome.id === requested) ? requested : fallback?.id, { focus: true, announce: true, openPublished: Boolean(requested) });
  });

  narrowLayout.addEventListener("change", () => {
    closeIndex();
    syncIndexControl();
  });
  systemDark.addEventListener("change", (event) => {
    if (!readPreference("theme")) applyTheme(event.matches ? "dark" : "light", { persist: false });
  });

  addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (indexPanel.classList.contains("is-open")) closeIndex({ returnFocus: true });
      else if (focusMode) setFocusMode(false);
      return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.target.closest("input, textarea, select, button, a, [contenteditable='true']")) return;
    const actions = {
      f: () => setFocusMode(!focusMode),
      F: () => setFocusMode(!focusMode),
      ArrowLeft: () => selectOutcome(outcomes[selectedIndex - 1]?.id, { updateUrl: true, focus: true, announce: true }),
      PageUp: () => selectOutcome(outcomes[selectedIndex - 1]?.id, { updateUrl: true, focus: true, announce: true }),
      ArrowRight: () => selectOutcome(outcomes[selectedIndex + 1]?.id, { updateUrl: true, focus: true, announce: true }),
      PageDown: () => selectOutcome(outcomes[selectedIndex + 1]?.id, { updateUrl: true, focus: true, announce: true }),
      Home: () => selectOutcome(outcomes[0]?.id, { updateUrl: true, focus: true, announce: true }),
      End: () => selectOutcome(outcomes.at(-1)?.id, { updateUrl: true, focus: true, announce: true })
    };
    if (!actions[event.key] || !outcomes.length) return;
    event.preventDefault();
    actions[event.key]();
  });

  indexCollapsed = readPreference("indexCollapsed") === "true";
  marginCollapsed = readPreference("marginCollapsed") === "true";
  setIndexCollapsed(indexCollapsed, { persist: false });
  setMarginCollapsed(marginCollapsed, { persist: false });
  applyTheme(readPreference("theme") || (systemDark.matches ? "dark" : "light"), { persist: false });

  Promise.all([
    fetch(new URL("data/premed-lessons.json", siteRoot), { cache: "no-cache" }).then((response) => {
      if (!response.ok) throw new Error(`Lesson index returned ${response.status}`);
      return response.json();
    }),
    fetch(new URL("data/premed-open-prs.json", siteRoot), { cache: "no-cache" }).then((response) => {
      if (!response.ok) throw new Error(`Open PR index returned ${response.status}`);
      return response.json();
    })
  ]).then(([lessonIndex, pullRequestIndex]) => {
    index = lessonIndex;
    openPullRequests = pullRequestIndex;
    outcomes = index.outcomes || [];
    lessonById = new Map((index.lessons || []).map((lesson) => [lesson.id, lesson]));
    indexProposals();
    updateCorpusState();
    const requested = new URL(location.href).searchParams.get("outcome");
    const requestedExists = outcomes.some((outcome) => outcome.id === requested);
    const fallback = outcomes.find((outcome) => outcomeState(outcome) !== "published") || outcomes[0];
    const initialOutcomeId = requestedExists ? requested : fallback?.id;
    selectedIndex = Math.max(0, outcomes.findIndex((outcome) => outcome.id === initialOutcomeId));
    renderIndex();
    selectOutcome(initialOutcomeId, { scrollIndex: false, openPublished: requestedExists });
  }).catch((error) => {
    console.error(error);
    const panel = create("div", "reader-error");
    panel.append(create("span", null, "COURSE INDEX UNAVAILABLE"), create("h1", null, "The Premed open book could not be loaded."), create("p", null, "Please check your connection and reload the page."));
    const link = create("a", null, "Open the complete syllabus instead →");
    link.href = "../syllabus/";
    panel.append(link);
    detailElement.replaceChildren(panel);
    document.querySelector("[data-outcome-location]").textContent = "Course index unavailable";
  });
})();
