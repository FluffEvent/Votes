import { test, expect } from '@playwright/test'

test('has title', async ({ page }) =>
{
	await page.goto('/')
	await expect(page).toHaveTitle('Votes Fluff Event 2026')
});
