import { test, expect } from '@playwright/test';

test('Assertion test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
  await expect(page).toHaveTitle('Automation Testing Practice')
  const logo = await page.locator('.wikipedia-search-wiki-link')
  await expect(logo).toBeVisible()
  const search = await page.locator('#Wikipedia1_wikipedia-search-input')
  await expect(search).toBeEnabled()
  // radio button
  const radioBtn=await page.locator('#male')
  await radioBtn.click()
  await expect(radioBtn).toBeChecked()

  const startBtn = await page.locator('.start')
  await expect(startBtn).toHaveAttribute('name','start')

  const titleText = await page.locator('.description span')
  await expect(titleText).toHaveText('For Selenium, Cypress & Playwright')
  await expect(titleText).toContainText('For Selenium')

  const emailInput=await page.locator('#email')
  await emailInput.fill('raksha@gmail.com')
  await expect(emailInput).toHaveValue('raksha@gmail.com')

  const options=await page.locator('#country option')
  await expect(options).toHaveCount(10)
});