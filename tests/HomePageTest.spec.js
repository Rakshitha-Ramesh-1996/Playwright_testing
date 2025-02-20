const {test, expect}=require('@playwright/test');

test('should open the homepage', async ({page}) => {
  await page.goto('https://www.demoblaze.com/');
  const title = await page.title();
  console.log('Title:', title);
  await expect(page).toHaveTitle('STORE');
  const url = await page.url();
  console.log('URL:', url);
  await expect(page).toHaveURL('https://www.demoblaze.com/');
  await page.close();
});