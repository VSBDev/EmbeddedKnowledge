const { test, expect } = require("@playwright/test");

// The Playwright suite serves site/ over a plain static server, which sends no
// security headers. The Content-Security-Policy only exists in docker/nginx.conf,
// so a policy that breaks the site is invisible to every other test.
//
// This suite drives the real container. Run it against a built image:
//   docker compose up -d --build
//   EK_CONTAINER_BASE=http://127.0.0.1:8082 npx playwright test tests/container-csp.spec.js
const BASE = process.env.EK_CONTAINER_BASE;

const routes = [
  "/",
  "/premed/",
  "/premed/syllabus/",
  "/premed/graph/",
  "/premed/lessons/",
  "/premed/lessons/read/?lesson=PREM-LPP-001",
  "/premed/lessons/specimen/",
  "/contribute/",
  "/contribute/format/",
  "/definitely-not-a-page"
];

test.describe("container security headers and CSP", () => {
  test.skip(!BASE, "Set EK_CONTAINER_BASE to the running container origin to enable.");

  test("every response carries the security headers, including static assets", async ({ request }) => {
    // nginx cancels inherited add_header directives in any location that declares
    // one of its own, so assets are the regression-prone case.
    for (const path of ["/", "/styles.css", "/data/premed-graph.json", "/llms.txt"]) {
      const response = await request.get(`${BASE}${path}`);
      const headers = response.headers();
      expect(headers["content-security-policy"], `${path} CSP`).toBeTruthy();
      expect(headers["x-content-type-options"], `${path} nosniff`).toBe("nosniff");
      expect(headers["referrer-policy"], `${path} referrer`).toBeTruthy();
      expect(headers["x-frame-options"], `${path} frame options`).toBeTruthy();
    }
  });

  test("the 404 page is served by the application, not the web server default", async ({ request }) => {
    const response = await request.get(`${BASE}/definitely-not-a-page`);
    expect(response.status()).toBe(404);
    expect(await response.text()).toContain("This page was not found.");
  });

  for (const path of routes) {
    test(`${path} renders with no CSP violations`, async ({ page }) => {
      const violations = [];
      page.on("console", (message) => {
        if (/Content Security Policy|Refused to/i.test(message.text())) violations.push(message.text());
      });
      page.on("pageerror", (error) => violations.push(`pageerror: ${error.message}`));

      await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
      // The graph positions hundreds of nodes after load; give dynamic styling a chance to run.
      await page.waitForTimeout(900);

      expect(violations, `CSP violations on ${path}:\n${violations.slice(0, 5).join("\n")}`).toEqual([]);
    });
  }
});
