import { test, expect } from "@playwright/test";

test("Has title", async ({ page }) => {
    await page.goto("./");
    await expect(page).toHaveTitle("Danny Guo");
});
