(function () {
  "use strict";

  const section = document.querySelector("[data-corpus-progress]");
  if (!section) return;

  const setText = (selector, value) => {
    const element = section.querySelector(selector);
    if (element) element.textContent = value;
  };

  async function loadProgress() {
    try {
      const response = await fetch("../data/premed-progress.json", { cache: "no-cache" });
      if (!response.ok) throw new Error(`Progress request failed (${response.status})`);
      const progress = await response.json();
      const total = progress.outcomes.total;
      const covered = progress.outcomes.coveredByOpenLessons;
      const percentage = total ? (covered / total) * 100 : 0;
      const formattedPercentage = Number.isInteger(percentage) ? `${percentage}%` : `${percentage.toFixed(1)}%`;

      setText("[data-coverage-percentage]", formattedPercentage);
      setText("[data-covered-outcomes]", covered.toLocaleString());
      setText("[data-total-outcomes]", total.toLocaleString());
      setText("[data-contributed-lessons]", progress.lessons.contributed.toLocaleString());
      setText("[data-review-lessons]", progress.lessons.inReview.toLocaleString());
      setText("[data-open-lessons]", progress.lessons.publishedOpen.toLocaleString());
      const updatedDate = progress.updatedAt ? new Date(`${progress.updatedAt}T00:00:00`) : null;
      if (updatedDate && !Number.isNaN(updatedDate.getTime())) {
        setText("[data-progress-date]", updatedDate.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }));
      }

      const bar = section.querySelector("[data-coverage-bar]");
      if (bar) {
        bar.style.setProperty("--coverage", `${Math.max(0, Math.min(100, percentage))}%`);
        bar.setAttribute("aria-valuenow", String(Math.round(percentage)));
        bar.setAttribute("aria-valuetext", `${formattedPercentage}; ${covered} of ${total} outcomes have a published open lesson`);
      }
    } catch (error) {
      section.querySelector("[data-progress-status]").textContent = "Progress ledger unavailable; displayed values may be stale.";
      console.error(error);
    }
  }

  loadProgress();
})();
