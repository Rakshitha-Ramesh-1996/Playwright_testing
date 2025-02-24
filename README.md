Playwright Testing Project 
This repository contains Playwright automation scripts covering basic concepts such as test execution, locators, assertions, debugging, and more.
***
📌 Prerequisites
Ensure you have the following installed before running the tests:
***
Node.js (Download from nodejs.org)
Git (Download from git-scm.com)
VS Code (Recommended IDE: Download VS Code)
***
Installation
Clone the repository and install dependencies:
git clone https://github.com/Rakshitha-Ramesh-1996/Playwright_testing.git
cd Playwright_testing
npm install
If you haven’t installed Playwright, run:
npx playwright install
***
Running Tests
Run all tests:
npx playwright test
***
Run a specific test file:
npx playwright test tests/example.spec.ts
***
Run tests in headed mode (visible browser):
npx playwright test --headed
***
Run in debug mode:
npx playwright test --debug
***
Run tests in a specific browser (Chromium, Firefox, WebKit):
npx playwright test --project=chromium
***
🛠️ Writing a Sample Test
Example test (tests/example.spec.ts):
***
import { test, expect } from '@playwright/test';

test('Basic navigation test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});
***
Run the test:
npx playwright test tests/example.spec.ts
***
Capturing Screenshots & Videos
Take a screenshot:
await page.screenshot({ path: 'screenshot.png' });
Record a video of the test:
test.use({ video: 'on' });
***
Debugging Tips
Pause execution for debugging:
await page.pause();
***
Open UI debugging mode:
npx playwright test --ui
***
Use VS Code breakpoints and Playwright Inspector.
🔗 Playwright Resources
📖 Official Documentation
💡 Playwright GitHub Repo
