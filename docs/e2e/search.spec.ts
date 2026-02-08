import { test, expect } from '@playwright/test';

test.describe('Pagefind search', () => {
  test('search button visible in header', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    const searchButton = page.locator('starlight-menu-button + button, button[data-open-modal]').first();
    await expect(searchButton).toBeVisible();
  });

  test('clicking opens search dialog', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    const searchButton = page.locator('button[data-open-modal]').first();
    await searchButton.click();
    const dialog = page.locator('dialog[open]');
    await expect(dialog).toBeVisible();
  });

  test('typing query shows results', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    const searchButton = page.locator('button[data-open-modal]').first();
    await searchButton.click();
    const dialog = page.locator('dialog');
    // Wait for the search input to be dynamically rendered by Pagefind
    const searchInput = dialog.locator('.pagefind-ui__search-input');
    await expect(searchInput).toBeVisible({ timeout: 5000 });
    await searchInput.fill('topology');
    // Wait for search results to appear
    const results = dialog.locator('a[href]');
    await expect(results.first()).toBeVisible({ timeout: 5000 });
  });

  test('Ctrl+K keyboard shortcut opens search', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    await page.keyboard.press('Control+k');
    const dialog = page.locator('dialog[open]');
    await expect(dialog).toBeVisible();
  });
});
