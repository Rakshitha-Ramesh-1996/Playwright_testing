# Playwright Testing Project

A collection of Playwright end-to-end tests demonstrating the basics of automated testing. This project covers key concepts such as test execution, element locators, assertions, debugging, screenshots, and more.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Writing a Test](#writing-a-test)
- [Debugging Tips](#debugging-tips)
- [Screenshots & Videos](#screenshots--videos)
- [Continuous Integration](#continuous-integration)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) (recommended for development)

---

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/Playwright_testing.git
   cd Playwright_testing
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Install Playwright browsers (if not already installed):**

   ```sh
   npx playwright install
   ```

---

## Running the Tests

- **Run all tests:**

  ```sh
  npx playwright test
  ```

- **Run a specific test file:**

  ```sh
  npx playwright test tests/example.spec.ts
  ```

- **Run tests in headed mode (visible browser):**

  ```sh
  npx playwright test --headed
  ```

- **Run tests in debug mode:**

  ```sh
  npx playwright test --debug
  ```

- **Run tests in a specific browser (Chromium, Firefox, or WebKit):**

  ```sh
  npx playwright test --project=chromium
  ```

---

## Writing a Test

Example test file: `tests/example.spec.ts`

```ts
import { test, expect } from '@playwright/test';

test('basic navigation test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});
```

Run the test with:

```sh
npx playwright test tests/example.spec.ts
```

---

## Debugging Tips

- **Use the Playwright Inspector:**

  ```sh
  npx playwright test --debug
  ```

- **Pause execution in a test:**

  ```ts
  await page.pause();
  ```

- **Use VS Code breakpoints for interactive debugging.**

---

## Screenshots & Videos

- **Capture a screenshot:**

  ```ts
  await page.screenshot({ path: 'screenshot.png' });
  ```

- **Record a video (configure in your test or Playwright config):**

  ```ts
  test.use({ video: 'on' });
  ```

---

## Continuous Integration

Playwright is CI-friendly. For example, you can set up GitHub Actions with a workflow like this:

```yaml
name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'
      - run: npm install
      - run: npx playwright install
      - run: npx playwright test
```

Place this in `.github/workflows/playwright.yml`.

---

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy Testing! 🚀
```

This README gives a clear guide on how to set up and work with your Playwright tests, making it easier for collaborators to get started. Let me know if you need any adjustments!
