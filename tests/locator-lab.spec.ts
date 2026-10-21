import { test, expect } from '@playwright/test';

test('locator laboratory', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('link', {name: 'Get started' })).toBeVisible();
    await expect(page.getByText('Get Started')).toBeVisible();
    await expect(page.getByText('Get Started')).toHaveCount(1);
    const count = await page.getByText('Playwright').count();
    console.log(`FoundA: ${count}`);
    const count1 = await page.getByText('Get started with Playwright', { exact: true }).count();
    console.log(`FoundB: ${count1}`);

    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.getByRole('heading', {name: /Playwright enables reliable web automation/})).toBeVisible();
    /*
    await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Node.js' }).click();
    await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Python' }).click();
    await page.getByRole('link', { name: 'Node.js' }).click();
    await page.locator('section').filter({ hasText: 'Playwright TestFull-featured' }).click();
    await page.getByRole('main').getByRole('link', { name: 'Java' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Stack Overflow(opens in new' }).click();
    const page1 = await page1Promise;
    await page.getByText('Copyright © 2026 Microsoft').click();
    */
});