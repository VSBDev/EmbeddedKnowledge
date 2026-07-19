(function () {
  "use strict";

  const search = document.querySelector("[data-syllabus-search]");
  const documentRoot = document.querySelector("[data-syllabus-document]");
  const toc = document.querySelector("[data-syllabus-toc]");
  if (!search || !documentRoot || !toc) return;

  const sections = Array.from(documentRoot.querySelectorAll(".syllabus-section"));
  const tocLinks = Array.from(toc.querySelectorAll("[data-toc-link]"));
  const status = document.querySelector("[data-search-status]");
  const tocToggle = document.querySelector("[data-toc-toggle]");
  const tocClose = document.querySelector("[data-toc-close]");
  const printButton = document.querySelector("[data-print-syllabus]");

  function normalize(value) {
    return value.toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  }

  function sectionForLink(link) {
    const target = document.getElementById(link.dataset.tocLink);
    return target ? target.closest(".syllabus-section") : null;
  }

  const sectionSearchText = new Map(sections.map((section) => [section, normalize(section.textContent)]));

  function filterSyllabus() {
    const query = normalize(search.value.trim());
    let visible = 0;

    sections.forEach((section) => {
      const matches = !query || sectionSearchText.get(section).includes(query);
      section.classList.toggle("is-search-hidden", !matches);
      if (matches) visible += 1;
    });

    tocLinks.forEach((link) => {
      const section = sectionForLink(link);
      const listItem = link.closest("li");
      if (listItem) listItem.hidden = Boolean(section && section.classList.contains("is-search-hidden"));
    });

    if (status) {
      status.textContent = query
        ? `${visible} of ${sections.length} sections match “${search.value.trim()}”.`
        : `All ${sections.length} sections visible.`;
    }
  }

  function setTocOpen(open) {
    toc.classList.toggle("is-open", open);
    document.body.classList.toggle("toc-open", open);
    if (tocToggle) tocToggle.setAttribute("aria-expanded", String(open));
  }

  const debounce = (callback, delay = 120) => {
    let timer = 0;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);
    };
  };

  search.addEventListener("input", debounce(filterSyllabus, 120));
  tocToggle?.addEventListener("click", () => setTocOpen(!toc.classList.contains("is-open")));
  tocClose?.addEventListener("click", () => setTocOpen(false));
  tocLinks.forEach((link) => link.addEventListener("click", () => setTocOpen(false)));
  printButton?.addEventListener("click", () => window.print());

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setTocOpen(false);
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      search.focus();
    }
  });

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visibleEntries.length) return;
      const activeId = visibleEntries[0].target.dataset.sectionId;
      tocLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.tocLink === activeId));
    }, { rootMargin: "-145px 0px -68%", threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  filterSyllabus();
})();
