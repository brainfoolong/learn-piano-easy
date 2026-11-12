/** Keyboard use in a real browser: every control has a name, and Tab shows where the focus is. */
import { expect, test, type Page } from "@playwright/test";

/** Each visible control on the page that has no accessible name, described by its tag and class. */
async function unnamedControls(page: Page): Promise<string[]> {
  return page.evaluate(() => {
    const controls = document.querySelectorAll<HTMLElement>(
      "button, input, select, textarea, summary, [role=slider], [role=switch], [role=button], [tabindex]",
    );
    const nameOf = (node: HTMLElement) => {
      const labelledBy = node.getAttribute("aria-labelledby");
      const byIds = labelledBy?.split(" ").map((id) => document.getElementById(id)?.textContent ?? "").join(" ");
      const labels = "labels" in node ? [...((node as HTMLInputElement).labels ?? [])].map((label) => label.textContent).join(" ") : "";
      const text = ["BUTTON", "SUMMARY"].includes(node.tagName) || node.getAttribute("role") === "button" ? node.textContent : "";
      return [node.getAttribute("aria-label"), byIds, labels, text, node.title].join(" ").trim();
    };
    return [...controls]
      .filter((node) => node.getClientRects().length > 0 && node.tabIndex >= 0 && nameOf(node) === "")
      .map((node) => `${node.tagName.toLowerCase()}.${node.className}`);
  });
}

/**
 * Each visible control Tab can reach that shows no focus ring when it takes the focus. One real Tab
 * puts the browser in keyboard mode, and the page's own `focus` calls then match `:focus-visible` too.
 */
async function controlsWithoutFocusRing(page: Page): Promise<string[]> {
  await page.keyboard.press("Tab");
  return page.evaluate(() => {
    const controls = document.querySelectorAll<HTMLElement>(
      "a[href], button, input, select, textarea, summary, [tabindex]",
    );
    const missing = new Set<string>();
    for (const node of controls) {
      if (node.getClientRects().length === 0 || node.tabIndex < 0 || (node as HTMLButtonElement).disabled) continue;
      if (getComputedStyle(node).visibility === "hidden") continue;
      node.focus();
      if (document.activeElement !== node) continue;
      const style = getComputedStyle(node);
      const ring = (style.outlineStyle !== "none" && parseFloat(style.outlineWidth) > 0) || style.boxShadow !== "none";
      if (!ring) missing.add(`${node.tagName.toLowerCase()}.${node.className} ${node.getAttribute("aria-label") ?? node.textContent?.slice(0, 30) ?? ""}`.trim());
    }
    (document.activeElement as HTMLElement | null)?.blur();
    return [...missing];
  });
}

test("every_control_has_a_name_and_a_focus_ring", async ({ page }) => {
  await page.goto("./play/");
  await expect(page.locator(".stage canvas")).toBeVisible();
  expect(await unnamedControls(page)).toEqual([]);
  expect(await controlsWithoutFocusRing(page)).toEqual([]);

  await page.getByRole("button", { name: "Settings" }).click();
  await expect(page.getByRole("searchbox", { name: /search/i }).first()).toBeVisible();
  expect(await unnamedControls(page)).toEqual([]);
  expect(await controlsWithoutFocusRing(page)).toEqual([]);
  await page.getByRole("button", { name: "Manage offline files" }).click();
  await expect(page.getByRole("dialog", { name: "Offline files" })).toBeVisible();
  expect(await unnamedControls(page)).toEqual([]);
  expect(await controlsWithoutFocusRing(page)).toEqual([]);
  await page.keyboard.press("Escape");

  const dialogs: [opener: string, name: string][] = [
    ["Songs", "Songs"],
    ["Tracks", "Tracks"],
    ["About", "About learn-piano-easy"],
  ];
  for (const [opener, name] of dialogs) {
    await page.getByRole("button", { name: opener, exact: true }).click();
    await expect(page.getByRole("dialog", { name })).toBeVisible();
    expect({ name, unnamed: await unnamedControls(page) }).toEqual({ name, unnamed: [] });
    expect({ name, noRing: await controlsWithoutFocusRing(page) }).toEqual({ name, noRing: [] });
    await page.keyboard.press("Escape");
  }
});
