/**
 * The landing page in a real browser: its layout, its calls to action, the mascot, the hero's player,
 * the versions band, the devices band's piano, its motion and its stillness while it loads.
 *
 * - **The layout checks run with reduced motion.** The hero's parts rise in as the page shows, and a
 *   measured text must stand at its full colour. With reduced motion nothing enters.
 * - **A part shows unless it is entering.** One test reads every part before any scroll, as a
 *   full-page screenshot sees the page. Another scrolls down and sees parts enter and settle.
 * - **A sound is a started audio source.** An init script counts each `start` of a buffer source or
 *   another scheduled source, so a test sees that a press sounds without hearing it.
 */
import { expect, test, type Page } from "@playwright/test";
import { messagesOf } from "../src/i18n/locale";
import { HERO_SONG, SHOWCASE_SONGS } from "../src/landing/songs";
import { checkLayout, LOCALES, recordShifts, shiftSoFar, THEMES, WIDTHS } from "./layout-check";
import { SHIFT_LIMIT } from "../src/ui/layout-geometry";

const t = messagesOf("en");

/** Collects every uncaught error the page reports from now on. */
function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  return errors;
}

/** The heading of the view on screen. */
const heading = (page: Page) => page.locator("main > :not([hidden]) h1");

/** Scrolls down the whole page a screen at a time, so every band has entered the screen once. */
async function scrollThrough(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const frame = () => new Promise((done) => requestAnimationFrame(done));
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight / 2) {
      scrollTo(0, y);
      await frame();
      await frame();
    }
    scrollTo(0, document.documentElement.scrollHeight);
    await frame();
  });
}

/**
 * Counts each started audio source from the page's next load on, and gives a reader of the count. A
 * buffer source declares a `start` of its own, which hides the one of every scheduled source.
 */
async function countSounds(page: Page): Promise<() => Promise<number>> {
  await page.addInitScript(() => {
    const scope = window as unknown as { __started: number };
    scope.__started = 0;
    for (const node of [AudioScheduledSourceNode, AudioBufferSourceNode]) {
      const start = node.prototype.start;
      node.prototype.start = function (this: AudioScheduledSourceNode, ...args: unknown[]) {
        scope.__started++;
        return (start as (...a: unknown[]) => void).apply(this, args);
      } as typeof start;
    }
  });
  return () => page.evaluate(() => (window as unknown as { __started: number }).__started);
}

/** The landing box of the band `band`, such as `.landing-hero`. */
const boxOf = (page: Page, band: string) => page.locator(`${band} .player-box`);

test("the_landing_page_passes_the_layout_checks", async ({ browser, baseURL }) => {
  // Each width, theme and locale opens the page in a context of its own.
  test.setTimeout(WIDTHS.length * THEMES.length * LOCALES.length * 20_000);
  const flaws = await checkLayout(browser, new URL("./", baseURL).href, { reducedMotion: true });
  expect(flaws).toEqual([]);
});

test("both_calls_to_action_open_their_part", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./");
  const hero = page.locator(".landing-hero");

  await hero.getByRole("link", { name: t.landing.hero.start }).click();
  await expect(page).toHaveURL(/\/learn\/$/);
  await expect(heading(page)).toHaveText(t.pages.learn.title);

  await page.goBack();
  await hero.getByRole("link", { name: t.landing.hero.play }).click();
  await expect(page).toHaveURL(/\/play\/$/);
  await expect(page.locator(".stage canvas")).toBeVisible();

  // The last call repeats both actions, to the same pages.
  await page.goBack();
  const last = page.locator(".landing-last__actions");
  await expect(last.getByRole("link", { name: t.landing.hero.start })).toHaveAttribute(
    "href",
    (await hero.getByRole("link", { name: t.landing.hero.start }).getAttribute("href"))!,
  );
  await expect(last.getByRole("link", { name: t.landing.hero.play })).toHaveAttribute(
    "href",
    (await hero.getByRole("link", { name: t.landing.hero.play }).getAttribute("href"))!,
  );
  expect(errors).toEqual([]);
});

test("the_hero_shows_the_mascot_in_each_language", async ({ page }) => {
  const errors = watchErrors(page);
  for (const [path, locale] of [["./", "en"], ["./de/", "de"]] as const) {
    await page.goto(path);
    const scene = page.getByRole("img", { name: messagesOf(locale).landing.hero.mascot });
    await expect(scene).toHaveAttribute("data-pose", "scene");
    const video = scene.locator("video");
    await expect(video).toBeVisible();
    // It plays once, silent and inline, so a browser lets it start unasked.
    const state = await video.evaluate((v: HTMLVideoElement) => ({ autoplay: v.autoplay, muted: v.muted, loop: v.loop, inline: v.playsInline }));
    expect(state).toEqual({ autoplay: true, muted: true, loop: false, inline: true });
    // Its video and its poster arrive, and the video can play.
    for (const name of ["src", "poster"]) {
      const url = await video.evaluate((v, attr) => new URL(v.getAttribute(attr)!, document.baseURI).href, name);
      expect({ name, ok: (await page.request.get(url)).ok() }).toEqual({ name, ok: true });
    }
    await expect.poll(() => video.evaluate((v: HTMLVideoElement) => v.error === null && v.readyState >= 2)).toBe(true);
    await expect(page.locator(".landing-hero__greeting")).toHaveText(messagesOf(locale).landing.hero.greeting);
  }
  expect(errors).toEqual([]);
});

test("with_reduced_motion_the_mascot_stays_a_still_picture", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("./");
  const videos = page.locator(".mascot video");
  await expect(videos.first()).toBeVisible();
  // No video plays or loads. Each shows its poster, the video's first frame.
  const states = await videos.evaluateAll((all: HTMLVideoElement[]) => all.map((v) => ({ autoplay: v.autoplay, preload: v.preload, paused: v.paused })));
  expect(states.length).toBeGreaterThan(0);
  for (const state of states) expect(state).toEqual({ autoplay: false, preload: "none", paused: true });
});

test("every_part_shows_before_any_scroll", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./");
  await page.evaluate(() => document.fonts.ready);
  // The hero's entrance ends. Nothing below it waits for a scroll, so a full-page screenshot shows it all.
  await page.evaluate(async () => {
    const finite = document.getAnimations().filter((animation) => animation.effect?.getComputedTiming().endTime !== Infinity);
    await Promise.all(finite.map((animation) => animation.finished.catch(() => undefined)));
  });
  const unseen = await page.locator(".landing :is(h1, h2, h3, p, li, article, details, canvas, img)").evaluateAll((parts) =>
    parts
      .filter((part) => {
        let opacity = 1;
        for (let node: Element | null = part; node !== null; node = node.parentElement) opacity *= Number(getComputedStyle(node).opacity);
        return opacity < 1 || getComputedStyle(part).visibility === "hidden";
      })
      .map((part) => `${part.tagName.toLowerCase()}.${part.className}`),
  );
  expect(unseen).toEqual([]);
  expect(await page.evaluate(() => scrollY)).toBe(0);
  expect(errors).toEqual([]);
});

test("a_part_rises_in_as_it_scrolls_into_view", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./");
  await page.evaluate(() => document.fonts.ready);
  // Counts each part the page marks as entering, while the page scrolls down as a wheel would.
  const entered = await page.evaluate(async () => {
    let marked = 0;
    new MutationObserver((changes) => {
      for (const change of changes) if ((change.target as Element).hasAttribute("data-reveal")) marked++;
    }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ["data-reveal"] });
    const frame = () => new Promise((done) => requestAnimationFrame(done));
    for (let y = 0; y < document.documentElement.scrollHeight; y += 24) {
      scrollTo(0, y);
      await frame();
    }
    return marked;
  });
  expect(entered).toBeGreaterThan(8);
  // Each entrance ends, and leaves its part as its own style draws it.
  await expect(page.locator("[data-reveal]")).toHaveCount(0);
  expect(await page.evaluate(() => document.getAnimations().filter((a) => (a as CSSAnimation).animationName === "landing-rise").length)).toBe(0);
  expect(errors).toEqual([]);
});

test("the_hero_piano_plays_a_pressed_key", async ({ page }) => {
  test.setTimeout(60_000);
  const errors = watchErrors(page);
  const started = await countSounds(page);
  await page.goto("./");
  const hero = page.locator(".landing-hero");
  const box = hero.locator(".player-box");
  // The player stands under the hero's heading, below the first screen of this window.
  await box.scrollIntoViewIfNeeded();
  await expect(box.locator(".player-box__picture:visible")).toBeVisible();

  // Silent until clicked: nothing has sounded, and the box is still a picture.
  expect(await started()).toBe(0);
  await expect(box.locator("canvas")).toHaveCount(0);

  // One click reads the song and starts the real player, which sounds once its sound set is ready.
  const song = page.waitForResponse((res) => res.url().endsWith(HERO_SONG));
  await hero.getByRole("button", { name: t.landing.hero.playSong }).click();
  expect((await song).ok()).toBe(true);
  const canvas = box.locator("canvas");
  await canvas.scrollIntoViewIfNeeded();
  await expect(canvas).toBeVisible();
  await expect.poll(started, { timeout: 45_000 }).toBeGreaterThan(0);

  // Stopped, the song falls silent, and a key pressed low on the player's keyboard still sounds.
  await hero.getByRole("button", { name: t.landing.hero.stopSong }).click();
  await page.waitForTimeout(500);
  const before = await started();
  await canvas.scrollIntoViewIfNeeded();
  const area = (await canvas.boundingBox())!;
  await page.mouse.move(area.x + area.width / 2, area.y + area.height * 0.88);
  await page.mouse.down();
  await expect.poll(started, { timeout: 10_000 }).toBeGreaterThan(before);
  await page.mouse.up();
  expect(errors).toEqual([]);
});

test("the_devices_band_loads_the_piano_on_a_click", async ({ page }) => {
  test.setTimeout(60_000);
  const errors = watchErrors(page);
  const started = await countSounds(page);
  await page.goto("./");
  const panel = page.locator(".landing-devices__piano");
  const start = panel.getByRole("button", { name: t.landing.devices.start });
  await start.scrollIntoViewIfNeeded();
  await expect(start.locator("img:visible")).toBeVisible();
  // Before the click the band is a picture: no canvas, and no three.js.
  await expect(panel.locator("canvas")).toHaveCount(0);

  // One click loads the piano view in the picture's place, with a span per key from C4 to E5.
  await start.click();
  const view = panel.locator(".piano-keys");
  await expect(view.locator("canvas")).toBeVisible();
  await expect(start).toHaveCount(0);
  await expect(view).toHaveAttribute("data-first", "60");
  await expect(view).toHaveAttribute("data-last", "76");
  await expect(view.locator(".piano-keys__key")).toHaveCount(17);
  await expect(panel.locator(".landing-devices__hint")).toHaveText(t.landing.devices.hint);

  // A press low on E4's span holds that key and sounds it, and letting go lets it go.
  const key = view.locator('.piano-keys__key[data-pitch="64"]');
  const box = (await key.boundingBox())!;
  await page.mouse.move(box.x + box.width / 2, box.y + box.height * 0.85);
  await page.mouse.down();
  await expect(key).toHaveAttribute("data-held", "");
  await expect.poll(started, { timeout: 45_000 }).toBeGreaterThan(0);
  await page.mouse.up();
  await expect(key).not.toHaveAttribute("data-held");
  expect(errors).toEqual([]);
});

test("a_landing_piano_starts_the_real_player_on_one_click", async ({ page }) => {
  const errors = watchErrors(page);
  const scripts: string[] = [];
  page.on("request", (request) => {
    if (request.resourceType() === "script") scripts.push(request.url());
  });
  await page.goto("./");
  await page.waitForLoadState("networkidle");
  const before = scripts.length;
  const box = boxOf(page, ".landing-hero");
  await box.scrollIntoViewIfNeeded();
  await expect(box).toHaveAttribute("data-state", "picture");
  await expect(box.locator("canvas")).toHaveCount(0);

  // One click on the picture loads the embed's code and starts the real player in its place.
  await box.click();
  await expect(box).toHaveAttribute("data-state", "player");
  await expect(box.locator("canvas")).toBeVisible();
  await expect(box.locator(".player-box__picture:visible")).toHaveCount(0);
  await expect(page.locator(".landing-hero").getByRole("button", { name: t.landing.hero.stopSong })).toBeVisible();
  expect(scripts.length).toBeGreaterThan(before);
  expect(errors).toEqual([]);
});

test("only_one_landing_player_runs_at_a_time", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./");
  const hero = boxOf(page, ".landing-hero");
  const band = boxOf(page, ".landing-rarities");
  await page.locator(".landing-hero").getByRole("button", { name: t.landing.hero.playSong }).click();
  await expect(hero.locator("canvas")).toBeVisible();

  // Starting the band's box ends the hero's player, which shows its picture and its play label again.
  await band.scrollIntoViewIfNeeded();
  await page.locator(".landing-rarities").getByRole("button", { name: t.landing.hero.playSong }).click();
  await expect(band.locator("canvas")).toBeAttached();
  await expect(hero).toHaveAttribute("data-state", "picture");
  await expect(hero.locator("canvas")).toHaveCount(0);
  await expect(page.locator(".landing-hero").getByRole("button", { name: t.landing.hero.playSong })).toBeVisible();
  await expect(page.locator(".player-box canvas")).toHaveCount(1);
  expect(errors).toEqual([]);
});

test("the_rarity_showcase_switches_the_version", async ({ page }) => {
  const errors = watchErrors(page);
  const songs: string[] = [];
  page.on("request", (request) => {
    if (request.url().endsWith(".mid")) songs.push(request.url());
  });
  await page.goto("./");
  const control = page.getByRole("radiogroup", { name: t.landing.rarities.control });
  const piano = page.locator(".landing-rarities__piano");
  const tagline = page.locator(".landing-rarities__tagline");
  const picture = piano.locator(".player-box__picture:visible");
  await piano.scrollIntoViewIfNeeded();
  await expect(piano).toHaveAttribute("data-rarity", "common");
  await expect(tagline).toHaveText(t.landing.rarities.taglines.common);
  await expect(picture).toHaveAttribute("src", /rarity-common-light\.webp$/);

  // Before a click, a switch changes the words, the colour and the picture, and reads no song.
  const legendary = control.getByRole("radio", { name: t.landing.rarities.names.legendary });
  await legendary.click();
  await expect(legendary).toHaveAttribute("aria-checked", "true");
  await expect(piano).toHaveAttribute("data-rarity", "legendary");
  await expect(tagline).toHaveText(t.landing.rarities.taglines.legendary);
  await expect(picture).toHaveAttribute("src", /rarity-legendary-light\.webp$/);
  await expect.poll(() => picture.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
  expect(songs).toEqual([]);
  expect(errors).toEqual([]);
});

test("the_rarity_switch_shows_its_picture_and_then_plays_its_version", async ({ page }) => {
  test.setTimeout(60_000);
  const errors = watchErrors(page);
  const started = await countSounds(page);
  await page.goto("./");
  const band = page.locator(".landing-rarities");
  const control = band.getByRole("radiogroup", { name: t.landing.rarities.control });
  const box = boxOf(page, ".landing-rarities");
  await box.scrollIntoViewIfNeeded();

  await control.getByRole("radio", { name: t.landing.rarities.names.rare }).click();
  await expect(box.locator(".player-box__picture:visible")).toHaveAttribute("src", /rarity-rare-light\.webp$/);

  // The click plays the version on show.
  const rare = page.waitForResponse((res) => res.url().endsWith(SHOWCASE_SONGS.rare));
  await band.getByRole("button", { name: t.landing.hero.playSong }).click();
  expect((await rare).ok()).toBe(true);
  // The click may scroll the box under the sticky bar, and a box out of view stops its player.
  await box.scrollIntoViewIfNeeded();
  await expect(box.locator("canvas")).toBeVisible();
  await expect.poll(started, { timeout: 45_000 }).toBeGreaterThan(0);

  // A switch now plays the new version in the same canvas, from its start.
  const canvas = await box.locator("canvas").elementHandle();
  const epic = page.waitForResponse((res) => res.url().endsWith(SHOWCASE_SONGS.epic));
  await control.getByRole("radio", { name: t.landing.rarities.names.epic }).click();
  expect((await epic).ok()).toBe(true);
  await box.scrollIntoViewIfNeeded();
  await expect(band.getByRole("button", { name: t.landing.hero.stopSong })).toBeVisible();
  expect(await canvas!.evaluate((element) => element.isConnected)).toBe(true);
  const before = await started();
  await expect.poll(started, { timeout: 10_000 }).toBeGreaterThan(before);
  expect(errors).toEqual([]);
});

test("reduced_motion_stops_every_animation", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
  try {
    const page = await context.newPage();
    const errors = watchErrors(page);
    await page.goto(new URL("./", baseURL).href);
    await page.evaluate(() => document.fonts.ready);

    // The hero's picture of the player holds still.
    const picture = page.locator(".landing-hero .player-box__picture:visible");
    await picture.scrollIntoViewIfNeeded();
    await expect(picture).toBeVisible();
    expect(await picture.evaluate((image) => getComputedStyle(image).animationName)).toBe("none");

    // Every band shows at once, with no entrance waiting or running.
    await scrollThrough(page);
    const bands = await page.locator(".landing > *").evaluateAll((elements) =>
      elements.map((element) => getComputedStyle(element).opacity),
    );
    expect(bands.length).toBe(8);
    expect(bands.every((opacity) => opacity === "1")).toBe(true);
    const running = () =>
      page.evaluate(() => document.getAnimations().map((a) => `${a.constructor.name} on ${(a.effect as KeyframeEffect).target?.className}`));
    expect(await running()).toEqual([]);

    // A question's chevron turns at once.
    const fold = page.locator(".landing-questions__fold").first();
    await fold.locator("summary").click();
    await expect(fold).toHaveAttribute("open", "");
    const chevron = fold.locator("summary .icon");
    expect(await chevron.evaluate((icon) => getComputedStyle(icon).transitionDuration)).toBe("0s");
    expect(await running()).toEqual([]);
    expect(errors).toEqual([]);
  } finally {
    await context.close();
  }
});

test("the_landing_page_shifts_nothing_while_it_loads", async ({ page }) => {
  const errors = watchErrors(page);
  await page.addInitScript(recordShifts);
  await page.goto("./");
  await page.evaluate(() => document.fonts.ready);
  // The parts below the hero rise in as they scroll in, which moves only their drawing.
  await scrollThrough(page);
  await page.waitForTimeout(800);
  expect(await shiftSoFar(page)).toBeLessThanOrEqual(SHIFT_LIMIT);
  expect(errors).toEqual([]);
});
