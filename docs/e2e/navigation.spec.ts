import { test, expect } from '@playwright/test';

test.describe('Navigation & sidebar', () => {
  test('sidebar has Guide and Notation sections', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    const sidebar = page.locator('nav[aria-label="Main"]');
    await expect(sidebar.getByText('Guide', { exact: true })).toBeVisible();
    await expect(sidebar.getByText('Notation', { exact: true })).toBeVisible();
  });

  test('clicking sidebar link navigates to correct page', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    const sidebar = page.locator('nav[aria-label="Main"]');
    await sidebar.getByRole('link', { name: /Tutorial/ }).click();
    await expect(page).toHaveURL(/tutorial/);
  });

  test('logo links back to homepage', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    await page.locator('a.site-title').first().click();
    await expect(page).toHaveURL('/');
  });

  test('header social icons present with correct hrefs', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    const header = page.locator('header');
    const githubLink = header.locator('a[href="https://github.com/thriving-dev/kafka-streams-topology-design"]');
    const linkedinLink = header.locator('a[href="https://www.linkedin.com/in/hartmut-co-uk/"]');
    await expect(githubLink).toBeVisible();
    await expect(linkedinLink).toBeVisible();
  });

  test('version badge visible in header', async ({ page }) => {
    await page.goto('/guide/getting-started/');
    const header = page.locator('header');
    await expect(header.getByText('1.0.0')).toBeVisible();
  });
});
