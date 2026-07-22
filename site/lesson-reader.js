(() => {
  "use strict";

  const app = document.querySelector("[data-reader-app]");
  const sceneContainer = document.querySelector("[data-scene-container]");
  if (!app || !sceneContainer) return;

  const scriptUrl = document.currentScript?.src || new URL("lesson-reader.js", document.baseURI).href;
  const siteRoot = new URL("./", scriptUrl);
  const readerKind = app.dataset.readerKind === "production" ? "production" : "specimen";
  const isSpecimen = readerKind === "specimen";
  const stage = document.querySelector("[data-reader-stage]");
  const sceneNav = document.querySelector("[data-scene-nav]");
  const previousButton = document.querySelector("[data-scene-prev]");
  const nextButton = document.querySelector("[data-scene-next]");
  const copyLinkButton = document.querySelector("[data-copy-link]");
  const indexPanel = document.querySelector("[data-reader-index]");
  const indexOpen = document.querySelector("[data-index-open]");
  const indexClose = document.querySelector("[data-index-close]");
  const scrim = document.querySelector("[data-reader-scrim]");
  const announcer = document.querySelector("[data-reader-announcer]");
  const marginPanel = document.querySelector("#reader-margin");
  const marginToggle = document.querySelector("[data-margin-toggle]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const focusToggle = document.querySelector("[data-focus-toggle]");
  const contentsLabel = document.querySelector("[data-contents-label]");
  const themeLabel = document.querySelector("[data-theme-label]");
  const themeIcon = document.querySelector("[data-theme-icon]");
  const focusLabel = document.querySelector("[data-focus-label]");
  const viewToggle = document.querySelector("[data-view-toggle]");
  const viewLabel = document.querySelector("[data-view-label]");
  const viewIcon = document.querySelector("[data-view-icon]");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrowLayout = matchMedia("(max-width: 820px)");
  const systemDark = matchMedia("(prefers-color-scheme: dark)");

  let artifact = null;
  let scenes = [];
  let activeIndex = 0;
  let activeFrameIndex = 0;
  let currentFrames = [];
  let indexCollapsed = false;
  let marginCollapsed = false;
  let focusMode = false;
  let viewMode = "guided";
  let indexFocusFrame = 0;
  const manualCriterionState = new Map();
  const manualProgressNodes = new Set();
  const frameOverflowObserver = typeof ResizeObserver === "function"
    ? new ResizeObserver(() => syncGuidedFrameScrolling())
    : null;

  function resolveArtifactUrl() {
    if (isSpecimen) return new URL("data/lessons/specimen.json", siteRoot);
    const lessonId = new URL(location.href).searchParams.get("lesson") || "";
    if (!/^(?:PREM|PSY)-[A-Z]{3}-[0-9]{3}$/.test(lessonId)) {
      throw new Error("Choose a valid production lesson from the lesson commons.");
    }
    return new URL(`data/lessons/${lessonId}.json`, siteRoot);
  }

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
      // Storage is optional; reader controls continue to work for this session.
    }
  }

  function syncIndexControl() {
    const expanded = narrowLayout.matches ? indexPanel.classList.contains("is-open") : (!indexCollapsed && !focusMode);
    indexOpen.setAttribute("aria-expanded", String(expanded));
    indexOpen.setAttribute("aria-label", expanded ? "Hide lesson contents" : "Show lesson contents");
    if (contentsLabel) contentsLabel.textContent = expanded && !narrowLayout.matches ? "Hide index" : "Contents";
  }

  function setIndexCollapsed(collapsed, { persist = true } = {}) {
    indexCollapsed = Boolean(collapsed);
    app.classList.toggle("is-index-collapsed", indexCollapsed);
    if (persist) writePreference("indexCollapsed", indexCollapsed);
    syncIndexControl();
    queueMathFit();
  }

  // Focus mode hides both rails outright, so the control labels must reflect that
  // rather than the collapse preference alone.
  function syncMarginControl() {
    const hidden = marginCollapsed || focusMode;
    marginToggle?.setAttribute("aria-expanded", String(!hidden));
    marginToggle?.setAttribute("aria-label", hidden ? "Show lesson information" : "Hide lesson information");
  }

  function setMarginCollapsed(collapsed, { persist = true } = {}) {
    marginCollapsed = Boolean(collapsed);
    app.classList.toggle("is-margin-collapsed", marginCollapsed);
    if (persist) writePreference("marginCollapsed", marginCollapsed);
    syncMarginControl();
    queueMathFit();
  }

  function applyTheme(theme, { persist = true } = {}) {
    const dark = theme === "dark";
    document.body.classList.toggle("reader-dark", dark);
    themeToggle?.setAttribute("aria-pressed", String(dark));
    themeToggle?.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
    if (themeLabel) themeLabel.textContent = dark ? "Light" : "Dark";
    if (themeIcon) themeIcon.textContent = dark ? "☀" : "☾";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0c0e10" : "#171714");
    if (persist) writePreference("theme", dark ? "dark" : "light");
  }

  function setFocusMode(enabled) {
    focusMode = Boolean(enabled);
    document.body.classList.toggle("reader-focus-mode", focusMode);
    focusToggle?.setAttribute("aria-pressed", String(focusMode));
    focusToggle?.setAttribute("aria-label", focusMode ? "Exit focus mode" : "Enter focus mode");
    if (focusLabel) focusLabel.textContent = focusMode ? "Exit focus" : "Focus";
    if (focusMode) closeIndex();
    syncIndexControl();
    syncMarginControl();
    queueMathFit();
  }

  function fitDisplayedMath(root = sceneContainer) {
    for (const block of root.querySelectorAll('[data-directive="chemistry"], [data-directive="equation"], .ek-chemistry, .ek-equation')) {
      const math = block.querySelector('math[display="block"]');
      if (!math) continue;
      math.style.fontSize = "1em";
      const style = getComputedStyle(block);
      const available = Math.max(1, block.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight));
      const natural = Math.max(math.getBoundingClientRect().width, math.scrollWidth);
      const scale = natural > available ? Math.max(0.1, (available / natural) * 0.98) : 1;
      math.style.fontSize = `${scale}em`;
      math.dataset.fitScale = scale.toFixed(3);
    }
  }

  function syncGuidedFrameScrolling() {
    for (const frame of currentFrames) {
      const scrollable = viewMode === "guided"
        && frame.classList.contains("is-active")
        && frame.clientHeight > 0
        && frame.scrollHeight > frame.clientHeight + 2;
      frame.toggleAttribute("data-guided-scroll-region", scrollable);
      if (scrollable) {
        frame.tabIndex = 0;
        frame.setAttribute("role", "region");
        frame.setAttribute("aria-labelledby", frame.dataset.titleId);
      } else {
        frame.removeAttribute("tabindex");
        frame.removeAttribute("role");
        frame.removeAttribute("aria-labelledby");
      }
    }
  }

  let mathFitFrame = 0;
  function queueMathFit() {
    cancelAnimationFrame(mathFitFrame);
    mathFitFrame = requestAnimationFrame(() => {
      fitDisplayedMath();
      syncGuidedFrameScrolling();
    });
  }

  const create = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined && text !== null) element.textContent = text;
    return element;
  };

  function slug(value) {
    return String(value || "frame")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll("ø", "o")
      .replaceAll("æ", "ae")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "frame";
  }

  function syncFrameVisibility({ scroll = false } = {}) {
    currentFrames.forEach((frame, index) => {
      const active = index === activeFrameIndex;
      frame.classList.toggle("is-active", active);
      if (viewMode === "guided" && !active) {
        frame.setAttribute("aria-hidden", "true");
        frame.setAttribute("inert", "");
      } else {
        frame.removeAttribute("aria-hidden");
        frame.removeAttribute("inert");
      }
    });
    const activeFrame = currentFrames[activeFrameIndex];
    if (activeFrame?.dataset.titleId) sceneContainer.setAttribute("aria-labelledby", activeFrame.dataset.titleId);
    if (!scroll || !activeFrame) return;
    if (viewMode === "reading") activeFrame.scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" });
    else stage.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  function applyViewMode(mode, { persist = true, scroll = false } = {}) {
    viewMode = mode === "reading" ? "reading" : "guided";
    app.classList.toggle("reader-guided-mode", viewMode === "guided");
    app.classList.toggle("reader-reading-mode", viewMode === "reading");
    viewToggle?.setAttribute("aria-pressed", String(viewMode === "reading"));
    viewToggle?.setAttribute("aria-label", viewMode === "guided" ? "Switch to continuous reading view" : "Switch to guided frame view");
    viewToggle?.setAttribute("title", viewMode === "guided" ? "Current view: Guided. Switch to Reading." : "Current view: Reading. Switch to Guided.");
    if (viewLabel) viewLabel.textContent = viewMode === "guided" ? "Guided" : "Reading";
    if (viewIcon) viewIcon.textContent = viewMode === "guided" ? "▣" : "¶";
    if (persist) writePreference("view", viewMode);
    syncFrameVisibility({ scroll });
    if (scenes.length) updateControls();
    queueMathFit();
  }

  function sceneKindLabel(kind) {
    return String(kind || "scene").replaceAll("-", " ");
  }

  function isSafeUrl(value, attribute) {
    const raw = String(value || "").trim();
    if (!raw) return false;
    if (raw.startsWith("#") || raw.startsWith("/") || raw.startsWith("./") || raw.startsWith("../")) return true;
    try {
      const parsed = new URL(raw, document.baseURI);
      if (attribute === "src") return parsed.protocol === "https:" || parsed.protocol === "http:";
      return ["https:", "http:", "mailto:"].includes(parsed.protocol);
    } catch {
      return false;
    }
  }

  function sanitizeCompiledHtml(markup) {
    const template = document.createElement("template");
    template.innerHTML = typeof markup === "string" ? markup : "";
    const forbidden = new Set(["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "FORM", "INPUT", "BUTTON", "TEXTAREA", "SELECT", "VIDEO", "AUDIO"]);
    const allowed = new Set([
      "A", "ABBR", "ANNOTATION", "ARTICLE", "ASIDE", "B", "BLOCKQUOTE", "BR", "CIRCLE", "CODE", "DD", "DEL", "DESC", "DETAILS", "DIV", "DL", "DT", "EM", "FIGCAPTION", "FIGURE", "G", "H1", "H2", "H3", "H4", "HR", "I", "IMG", "INS", "LI", "LINE", "MATH", "MFRAC", "MI", "MN", "MO", "MOVER", "MPADDED", "MROW", "MSPACE", "MSQRT", "MSTYLE", "MSUB", "MSUBSUP", "MSUP", "MTABLE", "MTD", "MTEXT", "MTR", "MUNDER", "MUNDEROVER", "OL", "P", "PATH", "POLYGON", "POLYLINE", "PRE", "Q", "RECT", "SECTION", "SEMANTICS", "SMALL", "SPAN", "STRONG", "SUB", "SUMMARY", "SUP", "SVG", "TABLE", "TBODY", "TD", "TEXT", "TFOOT", "TH", "THEAD", "TITLE", "TR", "UL"
    ]);
    const globalAttributes = new Set(["class", "id", "role", "title", "lang", "dir", "hidden"]);
    const svgAttributes = new Set(["viewbox", "d", "x", "y", "x1", "y1", "x2", "y2", "cx", "cy", "r", "rx", "ry", "width", "height", "fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "stroke-dasharray", "points", "transform", "preserveaspectratio", "text-anchor"]);
    const mathmlAttributes = new Set(["accent", "accentunder", "columnalign", "columnlines", "columnspacing", "displaystyle", "encoding", "fence", "form", "height", "largeop", "linethickness", "lspace", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "rowalign", "rowlines", "rowspacing", "rspace", "scriptlevel", "separator", "stretchy", "symmetric", "voffset", "width"]);

    for (const element of [...template.content.querySelectorAll("*")]) {
      const tagName = element.localName.toUpperCase();
      if (forbidden.has(tagName)) {
        element.remove();
        continue;
      }
      if (!allowed.has(tagName)) {
        element.replaceWith(...element.childNodes);
        continue;
      }
      for (const attribute of [...element.attributes]) {
        const name = attribute.name.toLowerCase();
        const isAria = name.startsWith("aria-");
        const isData = name.startsWith("data-");
        const tagSpecific =
          (tagName === "A" && ["href", "target", "rel"].includes(name)) ||
          (tagName === "IMG" && ["src", "alt", "width", "height", "loading", "decoding"].includes(name)) ||
          (["OL", "LI"].includes(tagName) && ["start", "value"].includes(name)) ||
          (["TH", "TD"].includes(tagName) && ["colspan", "rowspan", "scope"].includes(name)) ||
          (["SVG", "G", "PATH", "CIRCLE", "RECT", "LINE", "POLYGON", "POLYLINE", "TEXT"].includes(tagName) && svgAttributes.has(name)) ||
          (element.namespaceURI === "http://www.w3.org/1998/Math/MathML" && mathmlAttributes.has(name)) ||
          (tagName === "MATH" && ["display", "xmlns"].includes(name));
        if (name.startsWith("on") || (!globalAttributes.has(name) && !isAria && !isData && !tagSpecific)) {
          element.removeAttribute(attribute.name);
        }
      }
      if (element.hasAttribute("href") && !isSafeUrl(element.getAttribute("href"), "href")) element.removeAttribute("href");
      if (element.hasAttribute("src") && !isSafeUrl(element.getAttribute("src"), "src")) element.removeAttribute("src");
      if (tagName === "A" && element.getAttribute("target") === "_blank") element.setAttribute("rel", "noreferrer noopener");
      if (tagName === "IMG") {
        const source = element.getAttribute("src");
        if (source?.startsWith("/assets/")) element.src = new URL(source.slice(1), siteRoot).href;
        element.loading = "lazy";
        element.decoding = "async";
        if (!element.hasAttribute("alt")) element.alt = "";
      }
    }
    return template.content;
  }

  function nestedDocumentBody(markup, { idPrefix = "" } = {}) {
    const fragment = sanitizeCompiledHtml(markup);
    const firstElement = [...fragment.childNodes].find((node) => node.nodeType === Node.ELEMENT_NODE);
    if (firstElement?.tagName === "H1") firstElement.remove();
    for (const heading of [...fragment.querySelectorAll("h1, h2, h3, h4, h5")]) {
      const level = Math.min(6, Number(heading.tagName.slice(1)) + 1);
      const replacement = create(`h${level}`);
      for (const attribute of [...heading.attributes]) replacement.setAttribute(attribute.name, attribute.value);
      replacement.append(...heading.childNodes);
      heading.replaceWith(replacement);
    }
    if (idPrefix) {
      const idMap = new Map();
      for (const element of fragment.querySelectorAll("[id]")) {
        const original = element.id;
        const prefixed = `${idPrefix}${original}`;
        idMap.set(original, prefixed);
        element.id = prefixed;
      }
      for (const element of fragment.querySelectorAll("[href^='#'], [aria-labelledby], [aria-describedby]")) {
        const href = element.getAttribute("href");
        if (href?.startsWith("#") && idMap.has(href.slice(1))) element.setAttribute("href", `#${idMap.get(href.slice(1))}`);
        for (const attribute of ["aria-labelledby", "aria-describedby"]) {
          if (!element.hasAttribute(attribute)) continue;
          const ids = element.getAttribute(attribute).split(/\s+/).map((id) => idMap.get(id) || id);
          element.setAttribute(attribute, ids.join(" "));
        }
      }
    }
    return fragment;
  }

  function validateArtifact(candidate) {
    if (!candidate || candidate.schemaVersion !== 3 || candidate.format !== "embeddedknowledge-lesson-v1") {
      throw new Error("The file is not a Lesson Format v1 rendered artifact.");
    }
    if (!isSpecimen && candidate.artifactType !== "production-lesson") {
      throw new Error("The requested file is not a production lesson artifact.");
    }
    if (!candidate.id || !candidate.title || !Array.isArray(candidate.scenes) || !candidate.scenes.length) {
      throw new Error("The rendered lesson is missing identity or scenes.");
    }
    const sceneIds = new Set();
    for (const scene of candidate.scenes) {
      if (!scene.id || !scene.title || !scene.kind || typeof scene.contentHtml !== "string") throw new Error("A rendered scene is incomplete.");
      if (sceneIds.has(scene.id)) throw new Error(`Duplicate scene ID: ${scene.id}`);
      sceneIds.add(scene.id);
    }
    return candidate;
  }

  function publicationView(candidate) {
    const collection = candidate.id?.startsWith("PSY-") ? "Psychiatry" : "Premed";
    const views = {
      draft: {
        code: "DRAFT",
        label: "DRAFT LESSON CANDIDATE",
        short: "Draft candidate",
        course: "Current draft candidate",
        detail: "Not published · review has not concluded",
        access: "Not published — draft candidate",
        description: `Read a draft EmbeddedKnowledge ${collection} lesson candidate with its review state in guided, continuous, or print form.`
      },
      "in-review": {
        code: "REVIEW",
        label: "LESSON CANDIDATE IN REVIEW",
        short: "Candidate in review",
        course: "Current candidate in review",
        detail: "Not published · independent review underway",
        access: "Not published — in review",
        description: `Read an EmbeddedKnowledge ${collection} lesson candidate currently under review in guided, continuous, or print form.`
      },
      adjudicated: {
        code: "ADJUDICATED",
        label: "ADJUDICATED LESSON CANDIDATE",
        short: "Adjudicated candidate",
        course: "Current adjudicated candidate",
        detail: "Not published · awaiting publication",
        access: "Not published — adjudicated candidate",
        description: `Read an adjudicated EmbeddedKnowledge ${collection} lesson candidate that is not yet published.`
      },
      published: {
        code: "OPEN",
        label: `OPEN ${collection.toUpperCase()} LESSON`,
        short: "Open lesson",
        course: "Current published lesson",
        detail: "Versioned published artifact",
        access: "Published open",
        description: `Read a published EmbeddedKnowledge ${collection} lesson in guided, continuous, or print form.`
      }
    };
    return views[candidate.status] || views.draft;
  }

  function renderPublicationState() {
    if (isSpecimen) return;
    const view = publicationView(artifact);
    const sourceConfidence = String(artifact.sourceConfidence || "unspecified").replaceAll("-", " ");
    const published = artifact.status === "published";
    app.dataset.publicationState = artifact.status;
    app.dataset.sourceConfidence = artifact.sourceConfidence || "unspecified";
    document.documentElement.dataset.lessonPublicationState = artifact.status;
    document.querySelector("[data-publication-label]").textContent = view.label;
    document.querySelector("[data-publication-copy]").textContent = published
      ? "Versioned teaching material published under the displayed open-content license."
      : `Not published. Artifact status: ${artifact.status}; source confidence: ${sourceConfidence}.`;
    document.querySelector("[data-publication-short]").textContent = view.short;
    document.querySelector("[data-publication-code]").textContent = view.code;
    document.querySelector("[data-publication-course]").textContent = view.course;
    document.querySelector("[data-publication-detail]").textContent = view.detail;
    document.querySelector("[data-publication-access]").textContent = view.access;
    document.querySelector('meta[name="description"]')?.setAttribute("content", view.description);
    document.querySelector(".reader-book")?.setAttribute("aria-label", published ? "Interactive published lesson" : "Interactive lesson candidate");
  }

  function buildSceneNav() {
    sceneNav.replaceChildren();
    scenes.forEach((scene, index) => {
      const item = create("li");
      const link = create("a", "reader-scene-link");
      link.href = `#${encodeURIComponent(scene.id)}`;
      link.dataset.sceneIndex = String(index);
      link.setAttribute("aria-current", String(index === activeIndex));
      link.append(
        create("span", null, String(index + 1).padStart(2, "0")),
        create("strong", null, scene.title),
        create("small", null, `${scene.estimatedMinutes || 0}m`)
      );
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showScene(index, { updateUrl: true, focus: true, announce: true });
        closeIndex();
      });
      item.append(link);
      sceneNav.append(item);
    });
  }

  function renderObjectives(scene, fragment) {
    if (scene.kind !== "orientation" || !Array.isArray(artifact.objectives) || !artifact.objectives.length) return;
    const block = create("aside", "scene-objectives");
    block.append(create("span", null, "Lesson objectives"));
    const list = create("ul");
    artifact.objectives.forEach((objective) => list.append(create("li", null, objective.statement)));
    block.append(list);
    fragment.append(block);
  }

  function assessmentItemsForScene(sceneId) {
    return artifact.assessment?.items?.filter((item) => item.sceneId === sceneId) || [];
  }

  function rubricForItem(item) {
    if (!item?.rubricId) return null;
    return artifact.assessment?.rubrics?.find((rubric) => rubric.id === item.rubricId) || null;
  }

  function isChoiceAssessment(item) {
    return ["single-choice", "multiple-choice"].includes(item?.type)
      || ["single-choice", "multiple-choice"].includes(item?.responseSpec?.mode);
  }

  function manualAssessmentCriteria() {
    return (artifact.assessment?.items || []).flatMap((item) => {
      if (isChoiceAssessment(item)) return [];
      const rubric = rubricForItem(item);
      return (rubric?.criteria || []).map((criterion) => ({
        itemId: item.id,
        criterion,
        key: `${item.id}:${criterion.id}`
      }));
    });
  }

  function syncManualProgress() {
    const criteria = manualAssessmentCriteria();
    const met = criteria.filter(({ key }) => manualCriterionState.get(key) === true).length;
    const complete = criteria.length > 0 && met === criteria.length;
    const message = complete
      ? `Criteria met: ${met}/${criteria.length} · complete · not saved.`
      : `Criteria met: ${met}/${criteria.length} · not saved.`;
    for (const node of manualProgressNodes) {
      if (!node.isConnected) {
        manualProgressNodes.delete(node);
        continue;
      }
      node.textContent = message;
      node.classList.toggle("is-complete", complete);
    }
  }

  function renderChoiceAssessment(item) {
    const form = create("form", "reader-check");
    form.dataset.checkId = item.id;
    const fieldset = create("fieldset");
    const legend = create("legend", null, item.prompt);
    fieldset.append(legend);
    const optionName = `check-${item.id}`;
    const options = item.responseSpec?.options || [];
    const multiple = item.type === "multiple-choice" || item.responseSpec?.mode === "multiple-choice";
    const describedBy = [];
    if (item.stimulus) {
      const stimulus = create("p", "reader-check-stimulus", item.stimulus);
      stimulus.id = `${item.id}-stimulus`;
      fieldset.append(stimulus);
      describedBy.push(stimulus.id);
    }
    const configuredMaximum = Number.isInteger(item.responseSpec?.maxSelections)
      ? item.responseSpec.maxSelections
      : null;
    const maximum = multiple ? configuredMaximum : 1;
    let selectionStatus = null;
    if (multiple) {
      const instruction = create(
        "p",
        "reader-check-instructions",
        maximum ? `Select up to ${maximum} responses.` : "Select all responses that apply."
      );
      instruction.id = `${item.id}-selection-instructions`;
      fieldset.append(instruction);
      describedBy.push(instruction.id);

      selectionStatus = create("p", "reader-selection-status", maximum ? `0 of ${maximum} selected.` : "0 selected.");
      selectionStatus.setAttribute("aria-live", "polite");
      selectionStatus.setAttribute("aria-atomic", "true");
      fieldset.append(selectionStatus);
    }
    if (describedBy.length) fieldset.setAttribute("aria-describedby", describedBy.join(" "));

    for (const option of options) {
      const label = create("label", "reader-check-option");
      const input = create("input");
      input.type = multiple ? "checkbox" : "radio";
      input.name = optionName;
      input.value = option.id;
      label.append(input, create("span", null, option.text));
      fieldset.append(label);
    }
    const actions = create("div", "reader-check-actions");
    const submit = create("button", null, "Check answer");
    submit.type = "submit";
    const reset = create("button", "secondary", "Try again");
    reset.type = "reset";
    actions.append(submit, reset);
    const feedback = create("div", "reader-feedback");
    feedback.hidden = true;
    feedback.setAttribute("role", "status");
    feedback.setAttribute("aria-live", "polite");
    fieldset.append(actions, feedback);
    form.append(fieldset);

    const syncSelectionLimit = () => {
      if (!multiple) return;
      const checkboxes = [...form.querySelectorAll(`input[name="${optionName}"]`)];
      const selectedCount = checkboxes.filter((input) => input.checked).length;
      const atLimit = maximum !== null && selectedCount >= maximum;
      checkboxes.forEach((input) => {
        input.disabled = atLimit && !input.checked;
      });
      if (selectionStatus) {
        const count = maximum ? `${selectedCount} of ${maximum}` : String(selectedCount);
        selectionStatus.textContent = `${count} selected.${atLimit ? " Clear a selection to choose a different response." : ""}`;
      }
    };

    if (multiple) form.addEventListener("change", syncSelectionLimit);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const selected = new FormData(form).getAll(optionName).map(String);
      feedback.replaceChildren();
      feedback.hidden = false;
      if (!selected.length) {
        feedback.append(
          create("strong", null, multiple ? "Choose at least one response first." : "Choose one response first."),
          create("p", null, "This check has no time limit. Review the evidence, then submit an attempt.")
        );
        feedback.classList.remove("is-correct");
        return;
      }
      const expected = Array.isArray(item.answer?.correct) ? item.answer.correct.map(String) : [String(item.answer?.correct)];
      const correct = selected.length === expected.length && selected.every((value) => expected.includes(value));
      feedback.classList.toggle("is-correct", correct);
      feedback.append(
        create("strong", null, correct ? "Reasoning holds." : "Revise the selection."),
        create("p", null, correct ? item.answer?.summary || "The selected response is supported." : item.answer?.commonErrors?.[0] || item.answer?.summary || "Review the scene and try again."),
        create("p", "reader-feedback-reasoning", item.answer?.reasoning || item.answer?.summary || "Review the scene model, then try again.")
      );
    });
    form.addEventListener("reset", () => {
      feedback.hidden = true;
      feedback.replaceChildren();
      feedback.classList.remove("is-correct");
      requestAnimationFrame(syncSelectionLimit);
    });
    return form;
  }

  function renderTextAssessment(item) {
    const form = create("form", "reader-check reader-short-answer");
    form.dataset.checkId = item.id;
    const label = create("label");
    const responseId = `response-${item.id}`;
    label.htmlFor = responseId;
    label.append(create("strong", null, item.prompt));
    let stimulus = null;
    if (item.stimulus) {
      stimulus = create("p", "reader-check-stimulus", item.stimulus);
      stimulus.id = `${item.id}-stimulus`;
    }
    const textarea = create("textarea");
    textarea.id = responseId;
    textarea.name = `response-${item.id}`;
    textarea.maxLength = item.responseSpec?.maxLength || 2000;
    textarea.placeholder = "Write your response in your own words.";
    if (stimulus) textarea.setAttribute("aria-describedby", stimulus.id);
    const actions = create("div", "reader-check-actions");
    const reveal = create("button", null, "Compare reasoning");
    reveal.type = "submit";
    const reset = create("button", "secondary", "Clear response");
    reset.type = "reset";
    const feedback = create("div", "reader-feedback");
    feedback.hidden = true;
    feedback.setAttribute("role", "status");
    feedback.setAttribute("aria-live", "polite");
    const rubric = rubricForItem(item);
    const criteria = rubric?.criteria || [];
    let selfCheck = null;
    let itemStatus = null;
    const criterionInputs = [];
    if (criteria.length) {
      selfCheck = create("fieldset", "reader-self-check");
      selfCheck.hidden = true;
      const legend = create("legend", null, "Manual criterion self-check");
      const instructions = create(
        "p",
        "reader-self-check-instructions",
        "After comparing the model reasoning with your response, mark each criterion that your response meets. You decide the marks; this page does not score, save, or submit them."
      );
      instructions.id = `${item.id}-self-check-instructions`;
      itemStatus = create("p", "reader-self-check-status", `0 of ${criteria.length} criteria marked met.`);
      itemStatus.id = `${item.id}-self-check-status`;
      itemStatus.setAttribute("role", "status");
      itemStatus.setAttribute("aria-live", "polite");
      itemStatus.setAttribute("aria-atomic", "true");
      selfCheck.setAttribute("aria-describedby", `${instructions.id} ${itemStatus.id}`);
      selfCheck.append(legend, instructions, itemStatus);
      for (const criterion of criteria) {
        const key = `${item.id}:${criterion.id}`;
        const option = create("label", "reader-self-check-option");
        const input = create("input");
        input.type = "checkbox";
        input.name = `criterion-${item.id}`;
        input.value = criterion.id;
        input.checked = manualCriterionState.get(key) === true;
        input.addEventListener("change", () => {
          manualCriterionState.set(key, input.checked);
          const itemMet = criterionInputs.filter((control) => control.checked).length;
          itemStatus.textContent = `${itemMet} of ${criteria.length} criteria marked met.${itemMet === criteria.length ? " Item self-check complete." : " Review each unmarked criterion before retrying."}`;
          itemStatus.classList.toggle("is-complete", itemMet === criteria.length);
          syncManualProgress();
        });
        criterionInputs.push(input);
        option.append(input, create("span", null, criterion.description));
        selfCheck.append(option);
      }
    }
    actions.append(reveal, reset);
    form.append(label);
    if (stimulus) form.append(stimulus);
    form.append(textarea, actions, feedback);
    if (selfCheck) form.append(selfCheck);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      feedback.hidden = false;
      feedback.replaceChildren(create("strong", null, "Model reasoning"), create("p", null, item.answer?.reasoning || item.answer?.correct || "Compare your response with the lesson model."));
      if (selfCheck) {
        selfCheck.hidden = false;
        const itemMet = criterionInputs.filter((control) => control.checked).length;
        itemStatus.textContent = `${itemMet} of ${criteria.length} criteria marked met.${itemMet === criteria.length ? " Item self-check complete." : " Review each unmarked criterion before retrying."}`;
        syncManualProgress();
      }
    });
    form.addEventListener("reset", () => {
      feedback.hidden = true;
      feedback.replaceChildren();
      if (selfCheck) {
        selfCheck.hidden = true;
        for (const input of criterionInputs) {
          input.checked = false;
          manualCriterionState.set(`${item.id}:${input.value}`, false);
        }
        itemStatus.textContent = `0 of ${criteria.length} criteria marked met.`;
        itemStatus.classList.remove("is-complete");
        requestAnimationFrame(syncManualProgress);
      }
    });
    return form;
  }

  function renderAssessments(scene, fragment, itemsOverride) {
    const items = itemsOverride || assessmentItemsForScene(scene.id);
    if (!items.length) return;
    const section = create("section", "reader-assessment");
    section.setAttribute("aria-label", "Interactive knowledge check");
    section.append(create("span", null, isSpecimen ? "UNTIMED SPECIMEN CHECK · DOES NOT RECORD PROGRESS" : "UNTIMED CHECK · DOES NOT RECORD PROGRESS"));
    const hasManualItem = items.some((item) => !isChoiceAssessment(item) && (rubricForItem(item)?.criteria || []).length);
    if (hasManualItem && manualAssessmentCriteria().length) {
      const progress = create("p", "reader-assessment-progress");
      progress.setAttribute("role", "status");
      progress.setAttribute("aria-live", "polite");
      progress.setAttribute("aria-atomic", "true");
      manualProgressNodes.add(progress);
      section.append(progress);
      requestAnimationFrame(syncManualProgress);
    }
    for (const item of items) {
      const choiceItem = isChoiceAssessment(item);
      section.append(choiceItem ? renderChoiceAssessment(item) : renderTextAssessment(item));
    }
    fragment.append(section);
  }

  function renderReferences(fragment) {
    const sources = artifact.references?.sources || [];
    if (!sources.length) return;
    const section = create("section", "reader-references");
    section.append(create("h2", null, isSpecimen ? "References in this specimen" : "References"));
    const list = create("ol");
    for (const source of sources) {
      const item = create("li");
      const link = create("a", null, source.title);
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      item.append(document.createTextNode(`${(source.creators || []).join(", ")}. `), link, document.createTextNode(`. ${source.locator || ""}`));
      list.append(item);
    }
    section.append(list);
    fragment.append(section);
  }

  function renderGlossary(fragment) {
    const terms = artifact.glossary?.terms || [];
    if (!terms.length) return;
    const section = create("section", "reader-glossary");
    section.append(create("h2", null, "Working glossary"));
    const list = create("dl");
    for (const term of terms) {
      const group = create("div");
      group.append(create("dt", null, term.term), create("dd", null, term.definition));
      list.append(group);
    }
    section.append(list);
    fragment.append(section);
  }

  function renderPrintAssessment(fragment) {
    const items = artifact.assessment?.items || [];
    if (!items.length) return;
    const section = create("section", "reader-print-resource reader-print-assessment");
    section.append(create("h2", null, artifact.assessment.title || "Assessment"));
    for (const item of items) {
      const block = create("article", "reader-print-assessment-item");
      block.dataset.assessmentItemId = item.id;
      if (item.stimulus) block.append(create("p", "reader-print-stimulus", item.stimulus));
      block.append(create("h3", null, item.prompt));
      const options = item.responseSpec?.options || [];
      if (options.length) {
        const list = create("ol");
        options.forEach((option) => list.append(create("li", null, option.text)));
        block.append(list);
      } else {
        block.append(create("p", "reader-print-response-space", "Response space"));
      }
      const guidance = create("div", "reader-print-answer");
      guidance.append(create("h4", null, "Answer guidance"), create("p", null, item.answer?.reasoning || item.answer?.summary || "Use the lesson model to justify the response."));
      block.append(guidance);
      section.append(block);
    }
    const rubrics = artifact.assessment?.rubrics || [];
    if (rubrics.length) {
      const rubricSection = create("section", "reader-print-rubrics");
      rubricSection.append(create("h3", null, "Rubrics"));
      for (const rubric of rubrics) {
        rubricSection.append(create("h4", null, rubric.title));
        const list = create("ul");
        for (const criterion of rubric.criteria || []) list.append(create("li", null, `${criterion.description} (${criterion.maxPoints} points)`));
        rubricSection.append(list);
      }
      section.append(rubricSection);
    }
    fragment.append(section);
  }

  function renderPrintDocument() {
    let documentRoot = app.querySelector("[data-print-document]");
    if (!documentRoot) {
      documentRoot = create("article", "reader-print-document");
      documentRoot.dataset.printDocument = "true";
      app.append(documentRoot);
    }
    documentRoot.replaceChildren();
    const header = create("header", "reader-print-title");
    const publication = publicationView(artifact);
    const sourceConfidence = String(artifact.sourceConfidence || "unspecified").replaceAll("-", " ");
    const printPublicationLabel = isSpecimen
      ? "FORMAT SPECIMEN · NOT PUBLISHED TEACHING MATERIAL"
      : (artifact.status === "published" ? publication.label : `${publication.label} · NOT PUBLISHED`);
    header.append(
      create("p", "reader-print-publication-state", printPublicationLabel),
      create("p", null, `${artifact.id} · version ${artifact.version} · status ${artifact.status} · source confidence ${sourceConfidence} · ${artifact.license}`),
      create("h1", null, artifact.title)
    );
    documentRoot.append(header);

    for (const scene of scenes) {
      const section = create("section", "reader-print-scene");
      section.dataset.printSceneId = scene.id;
      section.dataset.required = String(Boolean(scene.required));
      section.append(create("h2", null, scene.title), nestedDocumentBody(scene.contentHtml, { idPrefix: `print-${scene.id}-` }));
      documentRoot.append(section);
    }

    const resources = document.createDocumentFragment();
    renderPrintAssessment(resources);
    renderReferences(resources);
    renderGlossary(resources);
    if (artifact.attributionHtml) {
      const attribution = create("section", "reader-print-resource reader-print-attribution");
      attribution.append(create("h2", null, "Attribution and provenance"), nestedDocumentBody(artifact.attributionHtml, { idPrefix: "print-attribution-" }));
      resources.append(attribution);
    }
    documentRoot.append(resources);
    for (const image of documentRoot.querySelectorAll("img")) image.loading = "eager";
  }

  function renderSpecimenBoundary(fragment) {
    const block = create("aside", "specimen-review-state");
    block.append(
      create("span", null, "SPECIMEN · PENDING REVIEW"),
      create("p", null, "This generated artifact demonstrates Lesson Format v1. It has not passed quorum or adjudication and cannot alter the public lesson-coverage ledger.")
    );
    fragment.append(block);
  }

  function buildFrame(scene, { id, title, role, nodes = [], cover = false, part = 1, parts = 1 }) {
    const frame = create("section", `reader-frame reader-frame--${role}`);
    frame.classList.toggle("is-continuation", part > 1);
    const frameId = id.startsWith("frame-") ? id : `frame-${id}`;
    frame.id = `${scene.id}--${frameId}`;
    frame.dataset.frameId = frameId;
    frame.dataset.frameTitle = parts > 1 ? `${title} · ${part}/${parts}` : title;
    frame.dataset.frameRole = role;

    if (cover) {
      const header = create("header", "reader-scene-header");
      header.append(create("span", "scene-number", `${String(activeIndex + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")} · ${sceneKindLabel(scene.kind)}`));
      const heading = create("h1", null, scene.title);
      heading.id = "scene-title";
      frame.dataset.titleId = heading.id;
      header.append(heading);
      const meta = create("div", "scene-meta");
      meta.append(create("span", null, `${scene.estimatedMinutes || 0} minutes`), create("span", null, scene.required ? "Required scene" : "Optional scene"), create("span", null, scene.source));
      header.append(meta);
      renderObjectives(scene, header);
      frame.append(header);
    } else {
      const header = create("header", "reader-frame-header");
      header.append(create("span", null, `SCENE ${String(activeIndex + 1).padStart(2, "0")} · ${sceneKindLabel(scene.kind)} · ${parts > 1 ? `PAGE ${part} / ${parts}` : role}`));
      const context = create("p", null, scene.title);
      const heading = create("h2", null, title);
      heading.id = `${scene.id}-${frameId}-title`;
      frame.dataset.titleId = heading.id;
      header.append(context, heading);
      frame.append(header);
    }

    const meaningfulNodes = nodes.filter((node) => node.nodeType !== Node.TEXT_NODE || node.textContent.trim());
    if (meaningfulNodes.length) {
      const content = create("div", "reader-scene-content reader-frame-body");
      content.append(...nodes);
      frame.append(content);
    }
    return frame;
  }

  function partitionSceneContent(scene) {
    const compiled = sanitizeCompiledHtml(scene.contentHtml);
    const intro = [];
    const sections = [];
    let current = null;
    const usedIds = new Set();
    for (const node of [...compiled.childNodes]) {
      if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "H1") continue;
      if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "H2") {
        const title = node.textContent.trim() || "Continue reading";
        let id = slug(title);
        let suffix = 2;
        while (usedIds.has(id)) id = `${slug(title)}-${suffix++}`;
        usedIds.add(id);
        current = { id, title, nodes: [] };
        sections.push(current);
        continue;
      }
      (current ? current.nodes : intro).push(node);
    }
    return { intro, sections };
  }

  function frameBlockWeight(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent.trim() ? 10 : 0;
    const words = node.textContent.trim().split(/\s+/).filter(Boolean).length;
    const directive = node.dataset?.directive;
    if (directive === "diagram" || directive === "figure") return 120;
    if (directive === "worked-example") return 100;
    if (directive === "chemistry" || directive === "equation") return 65;
    if (directive) return 80;
    if (["TABLE", "UL", "OL", "PRE"].includes(node.tagName)) return Math.max(70, words);
    return Math.max(10, words);
  }

  function frameNodesWeight(nodes) {
    return nodes.reduce((total, node) => total + frameBlockWeight(node), 0);
  }

  function splitFrameNodes(nodes, targetWeight = 100) {
    const chunks = [];
    let current = [];
    let weight = 0;
    let hasMeaning = false;
    for (const node of nodes) {
      const nodeWeight = frameBlockWeight(node);
      const meaningful = nodeWeight > 0;
      if (meaningful && hasMeaning && weight + nodeWeight > targetWeight) {
        chunks.push(current);
        current = [];
        weight = 0;
        hasMeaning = false;
      }
      current.push(node);
      weight += nodeWeight;
      hasMeaning ||= meaningful;
    }
    if (hasMeaning) chunks.push(current);
    return chunks.length ? chunks : [nodes];
  }

  function renderScene(scene) {
    const { intro, sections } = partitionSceneContent(scene);
    const deck = create("div", "reader-frame-deck");
    const introFitsCover = frameNodesWeight(intro) <= 70;
    const frames = [buildFrame(scene, { id: "overview", title: scene.title, role: "orientation", nodes: introFitsCover ? intro : [], cover: true })];

    if (!introFitsCover) {
      const introChunks = splitFrameNodes(intro, 80);
      introChunks.forEach((nodes, index) => {
        frames.push(buildFrame(scene, {
          id: `opening-context-${index + 1}`,
          title: "Opening context",
          role: "orientation",
          nodes,
          part: index + 1,
          parts: introChunks.length
        }));
      });
    }

    sections.forEach((section) => {
      const chunks = splitFrameNodes(section.nodes);
      chunks.forEach((nodes, index) => {
        frames.push(buildFrame(scene, {
          id: chunks.length > 1 ? `${section.id}-${index + 1}` : section.id,
          title: section.title,
          role: "deep-reading",
          nodes,
          part: index + 1,
          parts: chunks.length
        }));
      });
    });

    // One frame per assessment item: a single section wrapping every item cannot be
    // paginated by splitFrameNodes, so multi-item checks used to overflow the frame.
    const assessmentItems = assessmentItemsForScene(scene.id);
    assessmentItems.forEach((item, index) => {
      const itemFragment = document.createDocumentFragment();
      renderAssessments(scene, itemFragment, [item]);
      if (!itemFragment.childNodes.length) return;
      frames.push(buildFrame(scene, {
        id: assessmentItems.length > 1 ? `knowledge-check-${index + 1}` : "knowledge-check",
        title: "Knowledge check",
        role: "practice",
        nodes: [...itemFragment.childNodes],
        part: index + 1,
        parts: assessmentItems.length
      }));
    });

    if (scene.kind === "synthesis" || scene.kind === "references") {
      const resourceGroups = [];
      const glossary = document.createDocumentFragment();
      renderGlossary(glossary);
      if (glossary.childNodes.length) resourceGroups.push({ id: "glossary", title: "Working glossary", nodes: [...glossary.childNodes] });
      const references = document.createDocumentFragment();
      renderReferences(references);
      if (references.childNodes.length) resourceGroups.push({ id: "references", title: "References", nodes: [...references.childNodes] });
      if (artifact.attributionHtml) {
        const attribution = create("details", "reader-references reader-attribution");
        attribution.append(create("summary", null, "Attribution and provenance"));
        const body = create("div", "reader-scene-content");
        body.append(nestedDocumentBody(artifact.attributionHtml));
        attribution.append(body);
        resourceGroups.push({ id: "attribution", title: "Attribution and provenance", nodes: [attribution] });
      }
      resourceGroups.forEach((group) => {
        frames.push(buildFrame(scene, {
          id: group.id,
          title: group.title,
          role: "reference",
          nodes: group.nodes
        }));
      });
    }
    frames.forEach((frame, index) => {
      frame.dataset.frameIndex = String(index);
      deck.append(frame);
    });
    currentFrames = frames;
    sceneContainer.replaceChildren(deck);
    frameOverflowObserver?.disconnect();
    currentFrames.forEach((frame) => {
      frameOverflowObserver?.observe(frame);
      [...frame.children].forEach((child) => frameOverflowObserver?.observe(child));
    });
    queueMathFit();
  }

  function navigationTarget(direction) {
    if (viewMode === "guided") {
      const frameIndex = activeFrameIndex + direction;
      if (currentFrames[frameIndex]) return { sceneIndex: activeIndex, frameIndex, title: currentFrames[frameIndex].dataset.frameTitle };
      const sceneIndex = activeIndex + direction;
      if (!scenes[sceneIndex]) return null;
      return { sceneIndex, frameIndex: direction < 0 ? Number.MAX_SAFE_INTEGER : 0, title: scenes[sceneIndex].title };
    }
    const sceneIndex = activeIndex + direction;
    return scenes[sceneIndex] ? { sceneIndex, frameIndex: 0, title: scenes[sceneIndex].title } : null;
  }

  function updateControls() {
    const scene = scenes[activeIndex];
    const frame = currentFrames[activeFrameIndex];
    const previous = navigationTarget(-1);
    const next = navigationTarget(1);
    const guided = viewMode === "guided";
    document.querySelector("[data-scene-kind]").textContent = guided ? `Frame ${activeFrameIndex + 1} / ${currentFrames.length}` : sceneKindLabel(scene.kind);
    document.querySelector("[data-scene-location]").textContent = frame && frame.dataset.frameTitle !== scene.title ? `${scene.title} · ${frame.dataset.frameTitle}` : scene.title;
    document.querySelector("[data-page-current]").textContent = String(guided ? activeFrameIndex + 1 : activeIndex + 1).padStart(2, "0");
    document.querySelector("[data-page-total]").textContent = String(guided ? currentFrames.length : scenes.length).padStart(2, "0");
    document.querySelector("[data-index-progress]").textContent = guided
      ? `Scene ${activeIndex + 1} / ${scenes.length} · Frame ${activeFrameIndex + 1} / ${currentFrames.length}`
      : `Scene ${activeIndex + 1} / ${scenes.length}`;
    document.querySelector("[data-prev-title]").textContent = previous?.title || "Beginning";
    document.querySelector("[data-next-title]").textContent = next?.title || (isSpecimen ? "End of specimen" : "End of lesson");
    document.querySelector("[data-frame-status]")?.replaceChildren(document.createTextNode(guided ? `Guided frame ${activeFrameIndex + 1} of ${currentFrames.length}` : "Continuous scene reading"));
    if (copyLinkButton && !copyLinkButton.dataset.transientLabel) copyLinkButton.textContent = guided ? "Copy frame link" : "Copy scene link";
    previousButton.disabled = !previous;
    nextButton.disabled = !next;
    sceneNav.querySelectorAll("[data-scene-index]").forEach((link, index) => link.setAttribute("aria-current", String(index === activeIndex)));
  }

  function frameHash(scene, frameIndex = activeFrameIndex) {
    const frame = currentFrames[frameIndex];
    return `#${encodeURIComponent(scene.id)}${frameIndex > 0 && frame ? `/${encodeURIComponent(frame.dataset.frameId)}` : ""}`;
  }

  function showFrame(index, options = {}) {
    if (!currentFrames.length) return;
    activeFrameIndex = Math.max(0, Math.min(index, currentFrames.length - 1));
    syncFrameVisibility({ scroll: true });
    updateControls();
    const scene = scenes[activeIndex];
    if (options.updateUrl) history.pushState({ sceneId: scene.id, frameId: currentFrames[activeFrameIndex].dataset.frameId }, "", frameHash(scene));
    if (options.focus) sceneContainer.focus({ preventScroll: true });
    if (options.announce) announcer.textContent = `Scene ${activeIndex + 1} of ${scenes.length}, frame ${activeFrameIndex + 1} of ${currentFrames.length}: ${currentFrames[activeFrameIndex].dataset.frameTitle}`;
    queueMathFit();
  }

  function showScene(index, options = {}) {
    if (!scenes[index]) return;
    activeIndex = index;
    const scene = scenes[index];
    renderScene(scene);
    const requestedFrame = options.frameId
      ? currentFrames.findIndex((frame) => frame.dataset.frameId === options.frameId)
      : options.frameIndex;
    activeFrameIndex = Number.isInteger(requestedFrame) && requestedFrame >= 0
      ? Math.min(requestedFrame, currentFrames.length - 1)
      : 0;
    syncFrameVisibility({ scroll: false });
    updateControls();
    stage.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    if (options.updateUrl) history.pushState({ sceneId: scene.id, frameId: currentFrames[activeFrameIndex]?.dataset.frameId }, "", frameHash(scene));
    if (options.focus) sceneContainer.focus({ preventScroll: true });
    if (options.announce) announcer.textContent = `Scene ${index + 1} of ${scenes.length}: ${scene.title}. ${currentFrames.length} guided frames.`;
  }

  function navigate(direction, options = {}) {
    const target = navigationTarget(direction);
    if (!target) return;
    if (target.sceneIndex === activeIndex) showFrame(target.frameIndex, options);
    else showScene(target.sceneIndex, { ...options, frameIndex: target.frameIndex });
  }

  function requestedLocation() {
    let requested = "";
    try { requested = decodeURIComponent(location.hash.slice(1)); } catch { requested = ""; }
    const [sceneId, frameId = null] = requested.split("/", 2);
    const sceneIndex = scenes.findIndex((scene) => scene.id === sceneId);
    return { sceneIndex: sceneIndex >= 0 ? sceneIndex : 0, frameId };
  }

  function focusIndexEntry(attempt = 0) {
    cancelAnimationFrame(indexFocusFrame);
    indexFocusFrame = requestAnimationFrame(() => {
      indexFocusFrame = 0;
      if (!narrowLayout.matches || !indexPanel.classList.contains("is-open")) return;
      const currentSceneLink = sceneNav.querySelector('[aria-current="true"]');
      const target = [indexClose, currentSceneLink].find((element) => {
        if (!element) return false;
        const style = getComputedStyle(element);
        return style.display !== "none" && style.visibility !== "hidden" && element.getClientRects().length > 0;
      });
      if (!target) {
        if (attempt < 12) focusIndexEntry(attempt + 1);
        return;
      }
      target.focus({ preventScroll: true });
      if (document.activeElement !== target && attempt < 12) focusIndexEntry(attempt + 1);
    });
  }

  function openIndex() {
    indexPanel.classList.add("is-open");
    scrim.classList.add("is-open");
    syncIndexControl();
    focusIndexEntry();
  }

  function closeIndex({ returnFocus = false } = {}) {
    cancelAnimationFrame(indexFocusFrame);
    indexFocusFrame = 0;
    indexPanel.classList.remove("is-open");
    scrim.classList.remove("is-open");
    syncIndexControl();
    if (returnFocus && getComputedStyle(indexOpen).display !== "none") indexOpen.focus({ preventScroll: true });
  }

  previousButton.addEventListener("click", () => navigate(-1, { updateUrl: true, focus: true, announce: true }));
  nextButton.addEventListener("click", () => navigate(1, { updateUrl: true, focus: true, announce: true }));
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
  viewToggle?.addEventListener("click", () => applyViewMode(viewMode === "guided" ? "reading" : "guided", { scroll: true }));

  copyLinkButton.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    button.dataset.transientLabel = "true";
    try {
      await navigator.clipboard.writeText(location.href);
      button.textContent = "Link copied";
    } catch {
      button.textContent = "Scene link is in the address bar";
    }
    setTimeout(() => {
      delete button.dataset.transientLabel;
      button.textContent = viewMode === "guided" ? "Copy frame link" : "Copy scene link";
    }, 1800);
  });

  addEventListener("hashchange", () => {
    const requested = requestedLocation();
    const requestedFrameIndex = currentFrames.findIndex((frame) => frame.dataset.frameId === requested.frameId);
    if (requested.sceneIndex !== activeIndex) showScene(requested.sceneIndex, { frameId: requested.frameId, focus: true, announce: true });
    else if (requestedFrameIndex >= 0 && requestedFrameIndex !== activeFrameIndex) showFrame(requestedFrameIndex, { focus: true, announce: true });
  });

  addEventListener("resize", queueMathFit);
  narrowLayout.addEventListener("change", () => {
    closeIndex();
    syncIndexControl();
    queueMathFit();
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
    if (event.target.matches(".reader-frame[data-guided-scroll-region]")
      && ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) return;
    if (viewMode === "reading" && (event.key === "PageUp" || event.key === "PageDown")) return;
    const actions = {
      f: () => setFocusMode(!focusMode),
      F: () => setFocusMode(!focusMode),
      ArrowLeft: () => navigate(-1, { updateUrl: true, focus: true, announce: true }),
      PageUp: () => navigate(-1, { updateUrl: true, focus: true, announce: true }),
      ArrowRight: () => navigate(1, { updateUrl: true, focus: true, announce: true }),
      PageDown: () => navigate(1, { updateUrl: true, focus: true, announce: true }),
      Home: () => showScene(0, { updateUrl: true, focus: true, announce: true }),
      End: () => showScene(scenes.length - 1, { updateUrl: true, focus: true, announce: true })
    };
    if (!actions[event.key] || !scenes.length) return;
    event.preventDefault();
    actions[event.key]();
  });

  indexCollapsed = readPreference("indexCollapsed") === "true";
  marginCollapsed = readPreference("marginCollapsed") === "true";
  setIndexCollapsed(indexCollapsed, { persist: false });
  setMarginCollapsed(marginCollapsed, { persist: false });
  applyTheme(readPreference("theme") || (systemDark.matches ? "dark" : "light"), { persist: false });
  applyViewMode(readPreference("view") || "guided", { persist: false });

  Promise.resolve()
    .then(resolveArtifactUrl)
    .then((dataUrl) => {
      const freshUrl = new URL(dataUrl, document.baseURI);
      freshUrl.searchParams.set("fresh", Date.now().toString(36));
      return fetch(freshUrl, { cache: "no-store" });
    })
    .then((response) => {
      if (!response.ok) throw new Error(`Rendered lesson returned ${response.status}`);
      return response.json();
    })
    .then(validateArtifact)
    .then((loaded) => {
      artifact = loaded;
      scenes = artifact.scenes;
      const collection = artifact.id?.startsWith("PSY-") ? "Psychiatry" : "Premed";
      const titleState = isSpecimen ? "Lesson specimen" : (artifact.status === "published" ? `${collection} lesson` : `${artifact.status} lesson candidate`);
      document.title = `${artifact.title} — ${titleState} · EmbeddedKnowledge`;
      renderPublicationState();
      document.querySelector("[data-reader-duration]").textContent = `${artifact.estimatedMinutes} min`;
      document.querySelector("[data-artifact-id]").textContent = artifact.id;
      document.querySelector("[data-artifact-status]").textContent = isSpecimen ? `${artifact.status} specimen · ${artifact.version}` : `${artifact.status} · ${artifact.version}`;
      document.querySelector("[data-artifact-license]").textContent = artifact.license;
      const requested = requestedLocation();
      activeIndex = requested.sceneIndex;
      buildSceneNav();
      renderPrintDocument();
      showScene(activeIndex, { frameId: requested.frameId });
    })
    .catch((error) => {
      const panel = create("div", "reader-error");
      panel.append(create("span", null, isSpecimen ? "SPECIMEN UNAVAILABLE" : "LESSON UNAVAILABLE"), create("h1", null, "The generated lesson artifact could not be opened."), create("p", null, error.message));
      const link = create("a", null, isSpecimen ? "Read the format contract instead →" : "Return to the lesson commons →");
      link.href = isSpecimen ? "../../../contribute/format/" : "../";
      panel.append(link);
      sceneContainer.replaceChildren(panel);
      document.querySelector("[data-scene-location]").textContent = "Artifact unavailable";
    });
})();
