import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

test.describe('Configured redirects', () => {
  // Redirects are handled by the Vercel adapter at platform level,
  // not via static HTML files, so we verify the Vercel output config.
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const configPath = resolve(__dirname, '../.vercel/output/config.json');
  const config = JSON.parse(readFileSync(configPath, 'utf-8'));
  const routes: Array<{ src: string; headers?: Record<string, string>; status?: number }> = config.routes;

  test('/notation/basics/ redirects to /notation/fundamentals/', () => {
    const rule = routes.find((r) => r.src?.includes('notation/basics'));
    expect(rule).toBeDefined();
    expect(rule!.headers?.Location).toBe('/notation/fundamentals/');
    expect(rule!.status).toBe(301);
  });

  test('/notation/infrastructure/ redirects to /notation/topics-and-events/', () => {
    const rule = routes.find((r) => r.src?.includes('notation/infrastructure'));
    expect(rule).toBeDefined();
    expect(rule!.headers?.Location).toBe('/notation/topics-and-events/');
    expect(rule!.status).toBe(301);
  });
});
