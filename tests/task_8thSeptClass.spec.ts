import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('pallishree@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Pass123');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByTestId('login-button').click();
  await page.waitForTimeout(5000);
});