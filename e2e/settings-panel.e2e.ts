/** The settings panel in a real browser: its groups, its search, and a changed setting's mark and reset. */
import { expect, test } from "@playwright/test";

test("the_panel_moves_between_groups_finds_a_setting_and_resets_it", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings", exact: true }).click();
  const panel = page.getByRole("complementary", { name: "Settings" });
  const nav = panel.getByRole("navigation", { name: "Settings sections" });
  const tab = (name: string) => nav.getByRole("button", { name, exact: true });

  // The panel opens on its first group, with that group's first section as the current one.
  await expect(tab("Basics")).toHaveAttribute("aria-expanded", "true");
  await expect(tab("General")).toHaveAttribute("aria-current", "true");
  await expect(panel.getByRole("heading", { name: "General", exact: true })).toBeInViewport();

  // A group's tab opens its sections and brings its first card into view.
  await tab("The scene").click();
  await expect(tab("The scene")).toHaveAttribute("aria-expanded", "true");
  await expect(tab("Basics")).toHaveAttribute("aria-expanded", "false");
  await expect(tab("General")).toBeHidden();
  await expect(tab("View")).toHaveAttribute("aria-current", "true");
  await expect(panel.getByRole("heading", { name: "View", exact: true })).toBeInViewport();

  // A section's link brings its own card, and the navigation follows a scroll back to the top.
  await tab("Particles").click();
  await expect(tab("Particles")).toHaveAttribute("aria-current", "true");
  await expect(panel.getByRole("heading", { name: "Particles", exact: true })).toBeInViewport();
  await panel.locator(".settings-body").evaluate((body) => body.scrollTo(0, 0));
  await expect(tab("General")).toHaveAttribute("aria-current", "true");

  // A search shows only what matches, marks the match, and keeps the hit under its section's name.
  const search = panel.getByRole("searchbox", { name: "Search settings" });
  const restart = panel.getByRole("switch", { name: "Restart the song when it ends" });
  await search.fill("restart");
  await expect(panel.getByRole("status")).toHaveText("1 setting found");
  await expect(restart).toBeVisible();
  await expect(panel.locator("mark")).toHaveText(["Restart"]);
  await expect(panel.getByRole("heading", { name: "General", exact: true })).toBeVisible();
  await expect(panel.getByRole("switch", { name: "Loop a passage" })).toBeHidden();
  await expect(tab("The scene")).toBeDisabled();

  // A changed setting shows its mark and its reset, and the navigation and the footer count it.
  // A `has` locator is read inside the row, so it names the switch alone, not the panel around it.
  const row = panel.locator(".setting-row", { has: page.getByRole("switch", { name: "Restart the song when it ends" }) });
  const reset = panel.getByRole("button", { name: "Reset Restart the song when it ends to its default" });
  await expect(row).not.toHaveAttribute("data-changed");
  await expect(reset).toBeHidden();
  await restart.click();
  await expect(restart).toBeChecked();
  await expect(row).toHaveAttribute("data-changed");
  await expect(nav.getByRole("button", { name: /^General\s*1 changed$/ })).toBeVisible();
  await expect(panel.getByText("1 setting changed", { exact: true })).toBeVisible();

  // The reset puts the default back and takes the mark away.
  await reset.click();
  await expect(restart).not.toBeChecked();
  await expect(row).not.toHaveAttribute("data-changed");
  await expect(reset).toBeHidden();
  await expect(panel.getByText("Every setting is at its default.")).toBeVisible();

  // A search with no match says so, and its button brings every setting back.
  await search.fill("zzzz");
  await expect(panel.getByRole("heading", { name: "Nothing found" })).toBeVisible();
  await expect(restart).toBeHidden();
  await panel.getByRole("button", { name: "Show all settings" }).click();
  await expect(search).toHaveValue("");
  await expect(search).toBeFocused();
  await expect(panel.getByRole("switch", { name: "Loop a passage" })).toBeVisible();
});

test("escape_clears_a_search_before_it_closes_the_panel", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings", exact: true }).click();
  const panel = page.getByRole("complementary", { name: "Settings" });
  const search = panel.getByRole("searchbox", { name: "Search settings" });
  await expect(search).toBeFocused();

  await search.fill("glow");
  await page.keyboard.press("Escape");
  await expect(search).toHaveValue("");
  await expect(panel).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(panel).toBeHidden();
});
