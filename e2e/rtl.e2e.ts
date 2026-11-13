/**
 * The right-to-left split in the pseudo-locale `ar-XB`: the page's layout mirrors, and the music never
 * does.
 *
 * - **The layout mirrors.** The page carries `dir="rtl"`, the site bar's brand stands at its right, and
 *   the course map's road swings to the left first.
 * - **The music keeps its direction.** The piano view, the staff and the timeline carry `dir="ltr"`, so
 *   the timeline's time so far stays left of the song's length.
 * - **A directional icon mirrors.** The "Start learning" arrow is flipped by its `scale`, and the
 *   brand's piano is not.
 */
import { expect, test, type Locator, type Page } from "@playwright/test";
import { inPseudo, pastSetup, settle } from "./layout-check";

test.use({ locale: "ar-XB" });

/** Opens the page at `path` of `baseURL` in `ar-XB`, past the first-visit setup, its fonts loaded and a frame drawn. */
async function openRtl(page: Page, baseURL: string, path: string): Promise<void> {
  await pastSetup(page);
  await page.goto(inPseudo(new URL(path, baseURL).href, "ar-XB"));
  await settle(page);
}

/** The horizontal centre of `locator`, in CSS pixels. */
async function centreOf(locator: Locator): Promise<number> {
  const box = await locator.boundingBox();
  expect(box).not.toBeNull();
  return box!.x + box!.width / 2;
}

test("a_right_to_left_page_mirrors_its_layout", async ({ page, baseURL }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await openRtl(page, baseURL!, "./");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  const bar = page.locator(".top-bar__inner").first();
  const brand = page.locator(".top-bar__brand").first();
  expect(await centreOf(brand)).toBeGreaterThan(await centreOf(bar));

  await openRtl(page, baseURL!, "learn/");
  const stops = page.locator(".map__stop");
  await expect(stops.nth(1)).toBeVisible();
  // The road starts at the band's centre, and its first swing goes towards the line's end, the left.
  expect(await centreOf(stops.nth(1))).toBeLessThan(await centreOf(stops.nth(0)));
});

test("the_piano_and_the_staff_never_mirror", async ({ page, baseURL }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await openRtl(page, baseURL!, "design/");
  await expect(page.locator("[data-component]").first()).toBeAttached();
  for (const root of [".piano-keys", ".staff"]) {
    const node = page.locator(root).first();
    await expect(node).toHaveAttribute("dir", "ltr");
    expect(await node.evaluate((element) => getComputedStyle(element).direction)).toBe("ltr");
  }

  await openRtl(page, baseURL!, "play/");
  const timeline = page.locator(".timeline");
  await expect(timeline).toHaveAttribute("dir", "ltr");
  const times = timeline.locator(".timeline-time");
  // The time so far stays left of the song's length, as the song runs from left to right.
  expect(await centreOf(times.nth(0))).toBeLessThan(await centreOf(times.nth(1)));
});

test("a_directional_icon_points_the_reading_way", async ({ page, baseURL }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await openRtl(page, baseURL!, "./");
  const arrow = page.locator(".landing-hero .icon--directional").first();
  await expect(arrow).toBeVisible();
  expect(await arrow.evaluate((element) => getComputedStyle(element).scale)).toBe("-1 1");
  // An icon that points no reading way, such as the brand's piano, never mirrors.
  const still = page.locator(".top-bar__brand .icon").first();
  expect(await still.evaluate((element) => getComputedStyle(element).scale)).toBe("none");
});
