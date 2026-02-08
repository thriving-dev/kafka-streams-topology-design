import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('homepage loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Kafka Streams Topology Design/);
  });

  test('no console errors on homepage', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        // Ignore resource loading errors (e.g. Vercel analytics not available locally)
        if (text.includes('Failed to load resource')) return;
        // Ignore Vite dev server optimize dep warnings in preview mode
        if (text.includes('Outdated Optimize Dep')) return;
        errors.push(text);
      }
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('guide page loads', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    await expect(page).toHaveTitle(/Getting Started/);
    await expect(page.locator('main')).toBeVisible();
  });

  test('notation page loads', async ({ page }) => {
    await page.goto('/notation/overview/');
    await expect(page).toHaveTitle(/Overview/);
    await expect(page.locator('main')).toBeVisible();
  });

  test('about page loads', async ({ page }) => {
    await page.goto('/about/');
    await expect(page).toHaveTitle(/About/);
    await expect(page.locator('main')).toBeVisible();
  });

  test('404 page renders for invalid URL', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist/');
    expect(response?.status()).toBe(404);
  });
});
