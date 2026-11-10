import { test, expect } from '@playwright/test';

test('launch website', async ({ page }) => {
	await page.goto('https://playwright.dev/');
	await expect(page).toHaveTitle(/Playwright/);
    await expect(page.getByRole('heading', {
            name: 'Playwright enables reliable web automation for testing, scripting, and AI agents.'
        })
    ).toBeVisible();

    await expect(
        page.getByRole('link', { name: 'Get started' })
    ).toBeVisible();

   // await expect(page.getByText('Get started')).toBeVisible();

});
