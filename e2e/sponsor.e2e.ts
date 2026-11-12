/**
 * The sponsor page in a real browser: the top bar's heart opens it in each locale, and its main action
 * leads to the maintainer's profile on GitHub Sponsors in a new tab.
 */
import { expect, test, type Page } from "@playwright/test";
import { pastSetup } from "./layout-check";

test.beforeEach(({ page }) => pastSetup(page));

/** The profile the page's main action leads to. */
const SPONSOR_URL = "https://github.com/sponsors/brainfoolong";

/** The heading of the view on screen. */
const heading = (page: Page) => page.locator("main > :not([hidden]) h1");

/** The site's top bar. */
const bar = (page: Page) => page.locator(".site-bar-host");

for (const [root, name, action] of [
  ["./", "Sponsor", "Sponsor on GitHub"],
  ["./de/", "Unterstützen", "Auf GitHub unterstützen"],
] as const) {
  test(`the_heart_opens_the_sponsor_page_in_${root === "./" ? "en" : "de"}`, async ({ page }) => {
    await page.goto(root);
    const heart = bar(page).getByRole("link", { name });
    await heart.click();
    await expect(page).toHaveURL(/\/sponsor\/$/);
    await expect(heading(page)).toHaveText(name);
    await expect(heart).toHaveAttribute("aria-current", "page");

    const button = page.getByRole("link", { name: action });
    await expect(button).toHaveAttribute("href", SPONSOR_URL);
    await expect(button).toHaveAttribute("target", "_blank");
    await expect(button).toHaveAttribute("rel", "noopener");
  });
}
