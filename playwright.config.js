const isCI = Boolean(process.env.CI);

module.exports = {
  testDir: "./tests",
  testMatch: "**/*.spec.js",
  timeout: 30_000,
  retries: isCI ? 1 : 0,
  webServer: process.env.EK_SITE_URL ? undefined : {
    command: "npm run serve",
    url: "http://127.0.0.1:4173/site/",
    reuseExistingServer: !isCI,
  },
  use: {
    // Locally use the installed Chrome; on CI use the Playwright-managed
    // chromium installed by `npx playwright install --with-deps chromium`.
    ...(isCI ? {} : { channel: "chrome" }),
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
};
