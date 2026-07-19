(function () {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setupHeader() {
    const header = $("[data-header]");
    const menuButton = $("[data-menu-button]");
    const nav = $("#primary-nav");
    if (!header || !menuButton || !nav) return;

    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 20 || header.classList.contains("inner-header"));
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const inertRegions = () => [$("main"), $("footer")].filter(Boolean);

    function openMenu() {
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Close navigation");
      nav.classList.add("is-open");
      document.body.classList.add("menu-open");
      inertRegions().forEach((region) => region.setAttribute("inert", ""));
      const firstLink = $("a", nav);
      firstLink?.focus();
    }

    function closeMenu({ returnFocus = false } = {}) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      inertRegions().forEach((region) => region.removeAttribute("inert"));
      if (returnFocus) menuButton.focus();
    }

    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      if (expanded) closeMenu();
      else openMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) closeMenu({ returnFocus: true });
    });

    $$("a", nav).forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });
  }

  function setupReveal() {
    const items = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

    items.forEach((item) => {
      if (item.closest(".hero")) item.classList.add("is-visible");
      else observer.observe(item);
    });

    window.setTimeout(() => document.documentElement.classList.add("reveal-complete"), 1000);
  }

  setupHeader();
  setupReveal();
})();
