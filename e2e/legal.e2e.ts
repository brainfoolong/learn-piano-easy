/**
 * The legal notice and the privacy policy in a real browser: the footer reaches both in each locale,
 * the privacy policy's switch keeps the visitor's choice, and a page off the hosted site never counts.
 */
import { expect, test, type Page } from "@playwright/test";
import { STATS, STATS_OPT_OUT_KEY } from "../src/site/stats";
import { pastSetup } from "./layout-check";

test.beforeEach(({ page }) => pastSetup(page));

/** The heading of the view on screen. */
const heading = (page: Page) => page.locator("main > :not([hidden]) h1");

/** The site's footer. */
const footer = (page: Page) => page.locator(".site-footer");

test("the_footer_reaches_the_legal_notice_and_the_privacy_policy", async ({ page }) => {
  await page.goto("./");
  await footer(page).getByRole("link", { name: "Legal notice" }).click();
  await expect(heading(page)).toHaveText("Legal notice");
  await expect(page.getByText("GISA number 30647695")).toBeVisible();
  await footer(page).getByRole("link", { name: "Privacy policy" }).click();
  await expect(heading(page)).toHaveText("Privacy policy");

  await page.goto("./de/");
  await footer(page).getByRole("link", { name: "Impressum" }).click();
  await expect(heading(page)).toHaveText("Impressum");
  await expect(page.getByText("GISA-Zahl 30647695")).toBeVisible();
});

test("the_privacy_switch_keeps_the_visitors_choice", async ({ page }) => {
  await page.goto("./privacy/");
  const toggle = page.getByRole("switch", { name: "Count my visits on this website" });
  await expect(toggle).toBeChecked();
  await expect(page.getByText("This website counts your visits.")).toBeVisible();

  await toggle.click();
  await expect(page.getByText("This website does not count your visits. Your choice is stored in this browser only.")).toBeVisible();
  expect(await page.evaluate((key) => localStorage.getItem(key), STATS_OPT_OUT_KEY)).toBe("1");

  await page.reload();
  await expect(toggle).not.toBeChecked();
  await toggle.click();
  await expect(toggle).toBeChecked();
  expect(await page.evaluate((key) => localStorage.getItem(key), STATS_OPT_OUT_KEY)).toBeNull();
});

test("a_browser_that_refuses_tracking_finds_the_switch_off", async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, "globalPrivacyControl", { value: true }));
  await page.goto("./privacy/");
  const toggle = page.getByRole("switch", { name: "Count my visits on this website" });
  await expect(toggle).not.toBeChecked();
  await expect(toggle).toBeDisabled();
  await expect(page.getByText("Your browser asks websites not to track you.", { exact: false })).toBeVisible();
});

test("a_page_off_the_hosted_site_never_counts", async ({ page }) => {
  const sent: string[] = [];
  await page.route(`${STATS.url}**`, (route) => {
    sent.push(route.request().url());
    return route.abort();
  });
  await page.goto("./");
  await footer(page).getByRole("link", { name: "Privacy policy" }).click();
  await expect(heading(page)).toHaveText("Privacy policy");
  expect(sent).toEqual([]);
});
