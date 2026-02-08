import { test, expect } from '@playwright/test';

test.describe('Theme switching', () => {
  test('page starts with a theme set', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    const html = page.locator('html');
    const theme = await html.getAttribute('data-theme');
    expect(theme).toBeTruthy();
  });

  test('theme attribute is light or dark on doc pages', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    const html = page.locator('html');
    const theme = await html.getAttribute('data-theme');
    expect(['light', 'dark']).toContain(theme);
  });
});
