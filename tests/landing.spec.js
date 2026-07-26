const { test, expect } = require("@playwright/test");

const siteUrl = process.env.EK_SITE_URL || "http://127.0.0.1:4173/site/";
const route = (path = "") => new URL(path, siteUrl).href;
const WIDTHS = [[1440, 900], [1280, 800], [390, 844]];

// Three layout defects shipped on this page in one day: the two book covers rendered at different
// heights, the atomic symbol sat behind the wordmark, and the review-boundary note scrolled under a
// sticky heading. All three had correct markup and a wrong rendered result, so none was findable by
// reading source. These assertions measure the page instead.

test("both book covers render at the same size", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(route(), { waitUntil: "networkidle" });
  const sizes = await page.locator(".course-poster").evaluateAll((els) =>
    els.map((el) => {
      const r = el.getBoundingClientRect();
      return { w: Math.round(r.width), h: Math.round(r.height) };
    })
  );
  expect(sizes.length).toBeGreaterThanOrEqual(2);
  const [first] = sizes;
  for (const s of sizes) {
    expect(Math.abs(s.h - first.h), `cover heights differ: ${JSON.stringify(sizes)}`).toBeLessThanOrEqual(1);
    expect(Math.abs(s.w - first.w), `cover widths differ: ${JSON.stringify(sizes)}`).toBeLessThanOrEqual(1);
  }
});

test("each book cover has its own ground colour", async ({ page }) => {
  await page.goto(route(), { waitUntil: "networkidle" });
  const grounds = await page.locator(".course-poster").evaluateAll((els) =>
    els.map((el) => getComputedStyle(el).backgroundColor)
  );
  expect(new Set(grounds).size, `covers share a ground colour: ${grounds.join(", ")}`).toBe(grounds.length);
});

test("no poster symbol sits behind its wordmark", async ({ page }) => {
  await page.goto(route(), { waitUntil: "networkidle" });
  const collisions = await page.locator(".course-poster").evaluateAll((els) =>
    els.flatMap((el) => {
      const title = el.querySelector(".poster-title strong");
      const symbol = el.querySelector(".poster-cross");
      if (!title || !symbol) return [];
      const t = title.getBoundingClientRect();
      const s = symbol.getBoundingClientRect();
      const overlap = !(s.bottom <= t.top || s.top >= t.bottom || s.right <= t.left || s.left >= t.right);
      return overlap ? [title.textContent.trim()] : [];
    })
  );
  expect(collisions, `symbol overlaps wordmark on: ${collisions.join(", ")}`).toEqual([]);
});

for (const [w, h] of WIDTHS) {
  test(`landing sections never overlap each other at ${w}x${h}`, async ({ page }) => {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(route(), { waitUntil: "networkidle" });
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    const overlaps = [];
    for (let y = 0; y < total; y += Math.round(h / 2)) {
      await page.evaluate((v) => window.scrollTo(0, v), y);
      await page.waitForTimeout(30);
      const hit = await page.evaluate(() => {
        // Compare only blocks that should never share space: a sticky heading against the notes and
        // lists that scroll past it. Decorative layers are excluded by selector, not by guesswork.
        const probes = [".method-heading", ".course-boundary", ".evidence-stack", ".course-copy"];
        const boxes = probes
          .map((s) => ({ s, el: document.querySelector(s) }))
          .filter((x) => x.el)
          .map((x) => ({ s: x.s, r: x.el.getBoundingClientRect() }))
          .filter((x) => x.r.width > 0 && x.r.height > 0);
        for (let i = 0; i < boxes.length; i += 1) {
          for (let j = i + 1; j < boxes.length; j += 1) {
            const a = boxes[i].r;
            const b = boxes[j].r;
            const over = !(a.bottom <= b.top || a.top >= b.bottom || a.right <= b.left || a.left >= b.right);
            if (over) return `${boxes[i].s} overlaps ${boxes[j].s}`;
          }
        }
        return null;
      });
      if (hit) overlaps.push({ y, hit });
    }
    expect(overlaps.slice(0, 5), `overlaps found while scrolling: ${JSON.stringify(overlaps.slice(0, 5))}`).toEqual([]);
  });
}

test("a visitor reaches a book without three screens of argument", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(route(), { waitUntil: "networkidle" });
  const screens = await page.evaluate(() => {
    const book = document.querySelector(".book-link");
    return (book.getBoundingClientRect().top + window.scrollY) / window.innerHeight;
  });
  // The page shipped with the first book 3.1 screens down, behind three sections of philosophy.
  expect(screens, `first book is ${screens.toFixed(1)} screens down`).toBeLessThan(2);
});

test("header navigation is readable before the page is scrolled", async ({ page }) => {
  // The last four nav items and the call to action were cream on paper at 1.13:1 on arrival, from a
  // rule written for a dark hero the page does not have. Invisible text passes every markup check.
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(route(), { waitUntil: "networkidle" });
  const worst = await page.evaluate(() => {
    const channel = (v) => (v / 255 <= 0.03928 ? v / 255 / 12.92 : ((v / 255 + 0.055) / 1.055) ** 2.4);
    const parse = (s) => (s.match(/\d+/g) || []).slice(0, 3).map(Number);
    const lum = ([r, g, b]) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
    const ratio = (a, b) => {
      const [x, y] = [lum(parse(a)), lum(parse(b))].sort((m, n) => n - m);
      return (x + 0.05) / (y + 0.05);
    };
    const ground = (el) => {
      for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
        const bg = getComputedStyle(n).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
      }
      return getComputedStyle(document.body).backgroundColor;
    };
    const targets = [...document.querySelectorAll(".primary-nav a, .header-cta")];
    return targets.reduce((low, el) => {
      const r = ratio(getComputedStyle(el).color, ground(el));
      return r < low.ratio ? { ratio: r, text: el.textContent.trim().split("\n")[0] } : low;
    }, { ratio: Infinity, text: "" });
  });
  expect(worst.ratio, `"${worst.text}" sits at ${worst.ratio.toFixed(2)}:1 against its ground`).toBeGreaterThanOrEqual(4.5);
});
