import { test, expect} from '@playwright/test';

test('waiting laboratory', async ({page}) => {
    await page.goto('https://playwright.dev/');
    //await page.waitForTimeout(5000);
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});