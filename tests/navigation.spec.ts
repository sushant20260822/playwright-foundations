import { test, expect } from '@playwright/test';

test('launch website', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByLabel('Breadcrumbs').getByRole('list')).toContainText('Getting Started');
    await expect(page).toHaveURL(/.*docs\/intro/);
    //await expect(page).toHaveURL('https://playwright.dev/docs/intro');
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});