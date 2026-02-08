import { test, expect } from '@playwright/test';

test.describe('Homepage features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero section visible with title and tagline', async ({ page }) => {
    const hero = page.locator('section.kstd-panel').first();
    await expect(hero).toBeVisible();
    await expect(hero.locator('h1.title')).toBeVisible();
    await expect(hero.getByText(/Avoid Mistakes/)).toBeVisible();
  });

  test('Getting Started button links correctly', async ({ page }) => {
    const ctaLink = page.getByRole('link', { name: /Getting Started/ });
    await expect(ctaLink).toBeVisible();
    await expect(ctaLink).toHaveAttribute('href', '/guide/getting-started/');
  });

  test('examples carousel renders', async ({ page }) => {
    const carousel = page.locator('.f-carousel');
    await expect(carousel).toBeVisible();
  });

  test('FAQ section has items', async ({ page }) => {
    const faqHeading = page.locator('h2#frequently-asked-questions');
    await expect(faqHeading).toBeVisible();
    const faqItems = page.locator('.kstd-highlight');
    const count = await faqItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test('footer renders with copyright and links', async ({ page }) => {
    const footer = page.locator('.kstd-footer');
    await expect(footer).toBeVisible();
    await expect(footer.getByText(/Thriving.dev/)).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'About' })).toBeVisible();
  });
});
