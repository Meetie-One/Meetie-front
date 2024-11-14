import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  globalSetup: require.resolve("./src/e2e/global-setup.ts"),
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
    storageState: "playwright/store/auth.json",
    extraHTTPHeaders: {
      "x-vercel-protection-bypass":
        process.env.VERCEL_AUTOMATION_BYPASS_SECRET ?? "Yt6IIOm2e5vnQzlVGcFOGp2c6X7Iysbf",
      "x-vercel-set-bypass-cookie": "true",
    },
  },
  testDir: "./src/e2e",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  timeout: 30 * 1000,
  webServer: {
    command: "yarn dev",
    url: "http://localhost:3000",
    timeout: 60 * 1000,
    reuseExistingServer: true,
    stdout: "ignore",
    stderr: "pipe",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});
