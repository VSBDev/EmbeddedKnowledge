(function () {
  "use strict";

  const svg = document.querySelector("[data-graph-svg]");
  const nodeLayer = document.querySelector("[data-graph-nodes]");
  const linkLayer = document.querySelector("[data-graph-links]");
  const viewport = document.querySelector("[data-graph-viewport]");
  const stage = document.querySelector("[data-graph-stage]");
  if (!svg || !nodeLayer || !linkLayer || !viewport || !stage) return;

  const NS = "http://www.w3.org/2000/svg";
  const search = document.querySelector("[data-graph-search]");
  const domainFilter = document.querySelector("[data-domain-filter]");
  const kindFilter = document.querySelector("[data-kind-filter]");
  const requirementFilter = document.querySelector("[data-requirement-filter]");
  const resetButton = document.querySelector("[data-graph-reset]");
  const status = document.querySelector("[data-graph-status]");
  const directory = document.querySelector("[data-directory-list]");
  const directoryMore = document.querySelector("[data-directory-more]");
  const edgeToggles = Array.from(document.querySelectorAll("[data-edge-toggle]"));
  const inspectorEmpty = document.querySelector("[data-inspector-empty]");
  const inspectorContent = document.querySelector("[data-inspector-content]");
  const inspector = document.querySelector("[data-graph-inspector]");
  const inspectorClose = document.querySelector("[data-inspector-close]");
  const resultsToggle = document.querySelector("[data-results-toggle]");

  let graph;
  let nodesById;
  let searchTextById = new Map();
  let positions;
  let visibleIds = new Set();
  let selectedId = null;
  let directoryLimit = 60;
  let transform = { x: 0, y: 0, scale: 1 };
  let drag = null;

  function svgElement(name, attributes = {}) {
    const element = document.createElementNS(NS, name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  }

  function nodeColor(node) {
    return nodesById.get(node.domain || node.domainId)?.color || node.color || "#dfff00";
  }

  function moduleNodes(domainId) {
    return graph.nodes
      .filter((node) => node.kind === "module" && (node.domainId === domainId || node.domain === domainId))
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  function topicNodes(moduleId) {
    return graph.nodes
      .filter((node) => node.kind === "topic" && (node.moduleId === moduleId || node.module === moduleId))
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  function calculatePositions() {
    const output = new Map();
    const domains = graph.nodes.filter((node) => node.kind === "domain").sort((a, b) => a.order - b.order);
    const columnX = [170, 485, 800, 1115, 1430];
    const rowY = [270, 810];

    domains.forEach((domain, domainIndex) => {
      const center = { x: columnX[domainIndex % 5], y: rowY[Math.floor(domainIndex / 5)] };
      output.set(domain.id, center);
      const modules = moduleNodes(domain.id);

      modules.forEach((module, moduleIndex) => {
        const moduleAngle = (-Math.PI / 2) + (Math.PI * 2 * moduleIndex / modules.length);
        const horizontalRadius = modules.length > 6 ? 128 : 112;
        const verticalRadius = modules.length > 6 ? 165 : 143;
        const modulePosition = {
          x: center.x + Math.cos(moduleAngle) * horizontalRadius,
          y: center.y + Math.sin(moduleAngle) * verticalRadius,
        };
        output.set(module.id, modulePosition);

        topicNodes(module.id).forEach((topic, topicIndex) => {
          const angle = moduleAngle + (topicIndex * 2.399963229728653);
          const radius = 19 + Math.sqrt(topicIndex + 1) * 10.5;
          output.set(topic.id, {
            x: Math.max(20, Math.min(1580, modulePosition.x + Math.cos(angle) * radius)),
            y: Math.max(20, Math.min(1060, modulePosition.y + Math.sin(angle) * radius)),
          });
        });
      });
    });

    return output;
  }

  function appendLabel(group, node, position) {
    if (node.kind === "topic") return;
    const text = svgElement("text", {
      x: position.x,
      y: position.y + (node.kind === "domain" ? 43 : 26),
      "text-anchor": "middle",
      "aria-hidden": "true",
    });
    const label = node.kind === "module" && node.code ? `${node.code} ${node.title}` : node.title;
    const words = label.split(/\s+/);
    const lines = [];
    let line = "";
    const maximum = node.kind === "domain" ? 24 : 17;
    words.forEach((word) => {
      if (`${line} ${word}`.trim().length > maximum && line) {
        lines.push(line);
        line = word;
      } else {
        line = `${line} ${word}`.trim();
      }
    });
    if (line) lines.push(line);
    lines.slice(0, 2).forEach((part, index) => {
      const tspan = svgElement("tspan", { x: position.x, dy: index ? "1.05em" : "0" });
      tspan.textContent = part;
      text.appendChild(tspan);
    });
    group.appendChild(text);
  }

  function renderGraph() {
    const fragment = document.createDocumentFragment();
    graph.links.forEach((link) => {
      const source = positions.get(link.source);
      const target = positions.get(link.target);
      if (!source || !target) return;
      const line = svgElement("line", {
        x1: source.x,
        y1: source.y,
        x2: target.x,
        y2: target.y,
        class: `graph-link ${link.type}${link.type === "contains" ? "" : " is-layer-hidden"}`,
        "data-link-id": link.id,
        "data-link-type": link.type,
        "data-source": link.source,
        "data-target": link.target,
      });
      fragment.appendChild(line);
    });
    linkLayer.appendChild(fragment);

    const nodeFragment = document.createDocumentFragment();
    graph.nodes.forEach((node) => {
      const position = positions.get(node.id);
      if (!position) return;
      const group = svgElement("g", {
        class: `graph-node ${node.kind}`,
        "data-node-id": node.id,
        role: "button",
        tabindex: node.kind === "topic" ? "-1" : "0",
        "aria-label": `${node.kind}: ${node.title}`,
        style: `--node-color:${nodeColor(node)}`,
      });
      const radius = node.kind === "domain" ? 25 : node.kind === "module" ? 11 : 3.2;
      group.appendChild(svgElement("circle", { cx: position.x, cy: position.y, r: radius }));
      appendLabel(group, node, position);
      group.addEventListener("click", (event) => {
        event.stopPropagation();
        selectNode(node.id, false);
      });
      group.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectNode(node.id, true);
        }
      });
      nodeFragment.appendChild(group);
    });
    nodeLayer.appendChild(nodeFragment);
  }

  function relationButton(nodeId) {
    const node = nodesById.get(nodeId);
    if (!node) return null;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = node.code ? `${node.code} · ${node.title}` : node.title;
    button.addEventListener("click", () => revealAndSelect(nodeId));
    return button;
  }

  function fillRelations(container, ids) {
    container.replaceChildren();
    const unique = Array.from(new Set(ids)).slice(0, 18);
    if (!unique.length) {
      const empty = document.createElement("em");
      empty.textContent = "None recorded";
      container.appendChild(empty);
      return;
    }
    unique.forEach((id) => {
      const button = relationButton(id);
      if (button) container.appendChild(button);
    });
  }

  function domainTitle(node) {
    const domain = nodesById.get(node.domain || node.domainId);
    return domain?.title || (node.kind === "domain" ? node.title : "—");
  }

  function selectNode(id, focusGraph) {
    const node = nodesById.get(id);
    if (!node) return;
    selectedId = id;
    document.querySelectorAll(".graph-node.is-selected").forEach((element) => element.classList.remove("is-selected"));
    const nodeElement = nodeLayer.querySelector(`[data-node-id="${CSS.escape(id)}"]`);
    nodeElement?.classList.add("is-selected");

    inspectorEmpty.hidden = true;
    inspectorContent.hidden = false;
    inspector?.classList.add("is-open");
    document.querySelector("[data-inspector-kind]").textContent = node.kind === "topic" ? "Atomic outcome" : node.kind;
    document.querySelector("[data-inspector-scope]").textContent = node.requirement || (node.core ? "portable core" : "curriculum");
    document.querySelector("[data-inspector-code]").textContent = node.code || "CURRICULUM DOMAIN";
    document.querySelector("[data-inspector-title]").textContent = node.title;
    document.querySelector("[data-inspector-summary]").textContent = node.outcome || node.summary || node.description || "Curriculum grouping.";
    document.querySelector("[data-inspector-domain]").textContent = domainTitle(node);
    document.querySelector("[data-inspector-hours]").textContent = Number.isFinite(node.estimatedHours) ? `${node.estimatedHours} hours` : "—";
    document.querySelector("[data-inspector-syllabus]").textContent = node.syllabusModuleIds?.join(", ") || "—";

    const prerequisiteIds = node.prerequisites || graph.links
      .filter((link) => link.type === "prerequisite" && link.target === id)
      .map((link) => link.source);
    const connectedIds = graph.links
      .filter((link) => link.source === id || link.target === id)
      .map((link) => link.source === id ? link.target : link.source)
      .filter((connectedId) => !prerequisiteIds.includes(connectedId));
    fillRelations(document.querySelector("[data-inspector-prerequisites]"), prerequisiteIds);
    fillRelations(document.querySelector("[data-inspector-connections]"), connectedIds);

    history.replaceState(null, "", `#${encodeURIComponent(id)}`);
    if (focusGraph) focusPosition(id);
  }

  function revealAndSelect(id) {
    if (!visibleIds.has(id)) resetFilters();
    selectNode(id, true);
  }

  function normalized(value) {
    return String(value || "").toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  }

  function nodeSearchText(node) {
    return normalized([
      node.code,
      node.title,
      node.summary,
      node.outcome,
      node.subject,
      ...(node.syllabusModuleIds || []),
      ...(node.sourceTags || []),
    ].join(" "));
  }

  function filterGraph() {
    const query = normalized(search.value.trim());
    const domain = domainFilter.value;
    const kind = kindFilter.value;
    const requirement = requirementFilter.value;
    visibleIds = new Set(graph.nodes.filter((node) => {
      const matchesQuery = !query || (searchTextById.get(node.id) ?? nodeSearchText(node)).includes(query);
      const matchesDomain = domain === "all" || node.id === domain || node.domain === domain || node.domainId === domain;
      const matchesKind = kind === "all" || node.kind === kind;
      const matchesRequirement = requirement === "all" || node.requirement === requirement;
      return matchesQuery && matchesDomain && matchesKind && matchesRequirement;
    }).map((node) => node.id));

    nodeLayer.querySelectorAll(".graph-node").forEach((element) => {
      element.classList.toggle("is-filter-hidden", !visibleIds.has(element.dataset.nodeId));
    });
    updateLinks();
    directoryLimit = 60;
    renderDirectory();
    if (query) inspector?.classList.add("is-open");
  }

  function activeEdgeTypes() {
    return new Set(edgeToggles.filter((toggle) => toggle.checked).map((toggle) => toggle.value));
  }

  function updateLinks() {
    const active = activeEdgeTypes();
    let visibleLinkCount = 0;
    linkLayer.querySelectorAll(".graph-link").forEach((element) => {
      const layerHidden = !active.has(element.dataset.linkType);
      const filterHidden = !visibleIds.has(element.dataset.source) || !visibleIds.has(element.dataset.target);
      element.classList.toggle("is-layer-hidden", layerHidden);
      element.classList.toggle("is-filter-hidden", filterHidden);
      if (!layerHidden && !filterHidden) visibleLinkCount += 1;
    });
    status.textContent = `${visibleIds.size} of ${graph.nodes.length} nodes · ${visibleLinkCount} active relationships`;
  }

  function directoryNodes() {
    const kindRank = { domain: 0, module: 1, topic: 2 };
    return graph.nodes
      .filter((node) => visibleIds.has(node.id))
      .sort((a, b) => kindRank[a.kind] - kindRank[b.kind] || domainTitle(a).localeCompare(domainTitle(b)) || (a.order || 0) - (b.order || 0));
  }

  function renderDirectory() {
    const nodes = directoryNodes();
    const fragment = document.createDocumentFragment();
    nodes.slice(0, directoryLimit).forEach((node) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "directory-item";
      button.style.setProperty("--item-color", nodeColor(node));
      const dot = document.createElement("i");
      dot.setAttribute("aria-hidden", "true");
      const copy = document.createElement("span");
      const code = document.createElement("code");
      code.textContent = node.code || node.kind.toUpperCase();
      const title = document.createElement("strong");
      title.textContent = node.title;
      const detail = document.createElement("small");
      detail.textContent = `${node.kind === "topic" ? "Atomic outcome" : node.kind} · ${domainTitle(node)}`;
      copy.append(code, title, detail);
      button.append(dot, copy);
      button.addEventListener("click", () => {
        selectNode(node.id, true);
      });
      fragment.appendChild(button);
    });
    directory.replaceChildren(fragment);
    directoryMore.hidden = nodes.length <= directoryLimit;
    directoryMore.textContent = `Show more (${Math.min(60, nodes.length - directoryLimit)} of ${nodes.length - directoryLimit} remaining)`;
  }

  function resetFilters() {
    search.value = "";
    domainFilter.value = "all";
    kindFilter.value = "all";
    requirementFilter.value = "all";
    filterGraph();
  }

  function setTransform(next) {
    transform = {
      x: next.x,
      y: next.y,
      scale: Math.max(.55, Math.min(4, next.scale)),
    };
    viewport.setAttribute("transform", `translate(${transform.x} ${transform.y}) scale(${transform.scale})`);
  }

  function zoom(factor) {
    const nextScale = Math.max(.55, Math.min(4, transform.scale * factor));
    const graphCenter = {
      x: (800 - transform.x) / transform.scale,
      y: (540 - transform.y) / transform.scale,
    };
    setTransform({
      scale: nextScale,
      x: 800 - graphCenter.x * nextScale,
      y: 540 - graphCenter.y * nextScale,
    });
  }

  function focusPosition(id) {
    const position = positions.get(id);
    if (!position) return;
    const scale = Math.max(1.45, transform.scale);
    setTransform({ x: 800 - position.x * scale, y: 540 - position.y * scale, scale });
  }

  function setupPanZoom() {
    document.querySelector("[data-zoom-in]").addEventListener("click", () => zoom(1.3));
    document.querySelector("[data-zoom-out]").addEventListener("click", () => zoom(1 / 1.3));
    document.querySelector("[data-zoom-fit]").addEventListener("click", () => setTransform({ x: 0, y: 0, scale: 1 }));
    stage.addEventListener("wheel", (event) => {
      event.preventDefault();
      zoom(event.deltaY < 0 ? 1.12 : 1 / 1.12);
    }, { passive: false });
    svg.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || event.target.closest(".graph-node")) return;
      drag = { x: event.clientX, y: event.clientY, originX: transform.x, originY: transform.y };
      svg.setPointerCapture(event.pointerId);
      svg.classList.add("is-dragging");
    });
    svg.addEventListener("pointermove", (event) => {
      if (!drag) return;
      const viewBoxRatio = 1600 / svg.getBoundingClientRect().width;
      setTransform({
        x: drag.originX + (event.clientX - drag.x) * viewBoxRatio,
        y: drag.originY + (event.clientY - drag.y) * viewBoxRatio,
        scale: transform.scale,
      });
    });
    const endDrag = () => {
      drag = null;
      svg.classList.remove("is-dragging");
    };
    svg.addEventListener("pointerup", endDrag);
    svg.addEventListener("pointercancel", endDrag);
  }

  function setupControls() {
    graph.nodes.filter((node) => node.kind === "domain").sort((a, b) => a.order - b.order).forEach((domain) => {
      const option = document.createElement("option");
      option.value = domain.id;
      option.textContent = domain.title;
      domainFilter.appendChild(option);
    });
    const debounce = (callback, delay = 120) => {
      let timer = 0;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(...args), delay);
      };
    };
    search.addEventListener("input", debounce(filterGraph, 120));
    domainFilter.addEventListener("change", filterGraph);
    kindFilter.addEventListener("change", filterGraph);
    requirementFilter.addEventListener("change", filterGraph);
    resetButton.addEventListener("click", resetFilters);
    edgeToggles.forEach((toggle) => toggle.addEventListener("change", updateLinks));
    resultsToggle?.addEventListener("click", () => inspector?.classList.add("is-open"));
    inspectorClose?.addEventListener("click", () => inspector?.classList.remove("is-open"));
    directoryMore.addEventListener("click", () => {
      directoryLimit += 60;
      renderDirectory();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") inspector?.classList.remove("is-open");
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        search.focus();
      }
    });
  }

  async function initialize() {
    try {
      const response = await fetch("../../data/premed-graph.json");
      if (!response.ok) throw new Error(`Graph request failed (${response.status})`);
      graph = await response.json();
      nodesById = new Map(graph.nodes.map((node) => [node.id, node]));
      searchTextById = new Map(graph.nodes.map((node) => [node.id, nodeSearchText(node)]));
      positions = calculatePositions();
      renderGraph();
      setupControls();
      setupPanZoom();
      filterGraph();

      let hashId = "";
      try {
        hashId = decodeURIComponent(location.hash.slice(1));
      } catch {
        hashId = "";
      }
      if (hashId && nodesById.has(hashId)) selectNode(hashId, true);
    } catch (error) {
      status.textContent = "The graph data could not be loaded.";
      console.error(error);
    }
  }

  initialize();
})();
