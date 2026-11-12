/**
 * The gallery at `design/`: it shows every component of the site in every state, and it passes the
 * layout checks of `e2e/layout-check.ts` at every width, theme and locale.
 *
 * A component is a module of `src/ui/components/`, the controls are `src/ui/controls.ts`, and the piano
 * view is `src/render/piano-keys.ts`. Each one's section carries its file name as `data-component`, and
 * each specimen its state as `data-state`.
 * A component may keep its own `data-state` inside, such as a step of progress, so only the gallery's
 * specimens count.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { expect, test } from "@playwright/test";
import { checkLayout, LOCALES, THEMES, WIDTHS } from "./layout-check";

/** Every component's file name, the controls and the piano view included. */
function componentNames(): string[] {
  const folder = resolve(import.meta.dirname, "..", "src", "ui", "components");
  const names = readdirSync(folder)
    .filter((file) => file.endsWith(".ts") && !file.endsWith(".test.ts"))
    .map((file) => file.slice(0, -".ts".length));
  return [...names, "controls", "piano-keys"].sort();
}

test("the_gallery_passes_the_layout_checks", async ({ browser, baseURL }) => {
  // Each width, theme and locale opens the page in a context of its own.
  test.setTimeout(WIDTHS.length * THEMES.length * LOCALES.length * 20_000);
  // The gallery is a chunk of its own, which draws every section at once.
  const flaws = await checkLayout(browser, new URL("design/", baseURL).href, { ready: "[data-component]" });
  expect(flaws).toEqual([]);
});

test("the_keyboard_plays_by_pointer_and_by_several_touches", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, hasTouch: true });
  const page = await context.newPage();
  await page.goto(new URL("design/?lang=en", baseURL).href);
  const playable = page.locator('[data-state="playable"]');
  const readout = playable.locator("p:not(.piano-keys__live)");
  await playable.scrollIntoViewIfNeeded();
  const centre = async (pitch: number) => {
    const box = (await playable.locator(`.piano-keys__key[data-pitch="${pitch}"]`).boundingBox())!;
    // Low on a white key, below the black keys.
    return { x: box.x + box.width / 2, y: box.y + box.height * 0.85 };
  };

  // A mouse presses a key, slides to the next and lets go.
  const c = await centre(60);
  const d = await centre(62);
  await page.mouse.move(c.x, c.y);
  await page.mouse.down();
  await expect(readout).toHaveText("You play: C4");
  await expect(playable.locator('.piano-keys__key[data-pitch="60"]')).toHaveAttribute("data-held", "");
  await page.mouse.move(d.x, d.y);
  await expect(readout).toHaveText("You play: D4");
  await page.mouse.up();
  await expect(readout).toHaveText("Press a key, or several at once.");

  // Two fingers hold two keys at once, and each lets go on its own.
  const e = await centre(64);
  const g = await centre(67);
  const cdp = await context.newCDPSession(page);
  const touch = (type: "touchStart" | "touchEnd", points: { x: number; y: number; id: number }[]) =>
    cdp.send("Input.dispatchTouchEvent", { type, touchPoints: points });
  await touch("touchStart", [{ ...e, id: 1 }]);
  await touch("touchStart", [{ ...e, id: 1 }, { ...g, id: 2 }]);
  await expect(readout).toHaveText("You play: E4, G4");
  await touch("touchEnd", [{ ...g, id: 2 }]);
  await expect(readout).toHaveText("You play: E4");
  await touch("touchEnd", []);
  await expect(readout).toHaveText("Press a key, or several at once.");
  await context.close();
});

test("the_select_opens_a_list_of_the_page_and_takes_a_click", async ({ page }) => {
  await page.goto("design/?lang=en");
  const select = page.locator('[data-component="controls"] [data-state="select"] select');
  await select.scrollIntoViewIfNeeded();
  await expect(select).toHaveValue("both");

  // The system's own list is no part of the page, so an option that takes a click is drawn by the site.
  await select.click();
  const left = select.getByRole("option", { name: "Left hand" });
  await expect(left).toBeVisible();
  // The list scales in, and a click while it moves can miss the option and close the list.
  await expect.poll(() => select.evaluate((element) => getComputedStyle(element, "::picker(select)").transform)).toBe("none");
  // The choice made carries the check, and the others keep its room hidden.
  const check = (name: string) => select.getByRole("option", { name }).evaluate((option) => getComputedStyle(option, "::checkmark").visibility);
  expect(await check("Both hands")).toBe("visible");
  expect(await check("Left hand")).toBe("hidden");

  await left.click();
  await expect(select).toHaveValue("left");
  await expect(left).toBeHidden();
});

test("every_component_shows_every_state", async ({ page }) => {
  await page.goto("design/?lang=en");
  await page.waitForLoadState("load");
  await page.waitForSelector("[data-component]", { state: "attached" });
  const sections = await page.evaluate(() =>
    [...document.querySelectorAll<HTMLElement>("[data-component]")].map((section) => ({
      name: section.dataset.component!,
      states: [...section.querySelectorAll<HTMLElement>(".gallery__specimen[data-state]")].map((specimen) => {
        const box = specimen.getBoundingClientRect();
        return { state: specimen.dataset.state!, shown: box.width > 0 && box.height > 0 };
      }),
    })),
  );

  // One section for each component, and none for a component that does not exist.
  expect(sections.map((s) => s.name).sort()).toEqual(componentNames());
  for (const { name, states } of sections) {
    // Every section shows a state at least, each named once and drawn with a size.
    expect({ name, empty: states.length === 0 }).toEqual({ name, empty: false });
    const names = states.map((s) => s.state);
    expect({ name, repeated: names.filter((s, i) => names.indexOf(s) !== i) }).toEqual({ name, repeated: [] });
    expect({ name, hidden: states.filter((s) => !s.shown).map((s) => s.state) }).toEqual({ name, hidden: [] });
  }
});
