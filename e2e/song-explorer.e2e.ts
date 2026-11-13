/** The song explorer in a real browser: its tags, preview, stars and arrow keys work, and it reopens as the learner left it. */
import { expect, test, type Locator, type Page } from "@playwright/test";

/** Opens the song explorer and returns its dialog. */
async function openSongs(page: Page): Promise<Locator> {
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  await expect(dialog).toBeVisible();
  return dialog;
}

/**
 * Opens the explorer for the first time and waits for its Skill group. The skills arrive a moment after
 * the first open and draw the cards anew, which would take a card's focus midway through a test.
 */
async function openSongsWithSkills(page: Page): Promise<Locator> {
  const dialog = await openSongs(page);
  await expect(dialog.locator(".song-explorer__rail").getByRole("group", { name: "Skill" })).toBeVisible({ timeout: 15_000 });
  return dialog;
}

/** The card of the song titled `title` inside `scope`: the card whose main button carries that name. */
function cardOf(scope: Locator, title: string): Locator {
  return scope.locator(".song-card").filter({ has: scope.page().getByRole("button", { name: title, exact: true }) });
}

/**
 * The filter chip named `name` in the group named `group`, in the head or the rail. A card of a song
 * with versions holds a group named "Difficulty" too, so the cards are left out.
 */
function chip(dialog: Locator, group: string, name: string): Locator {
  return dialog.locator(".song-explorer__head, .song-explorer__rail").getByRole("group", { name: group }).getByRole("button", { name, exact: true });
}

/** How far the cards are scrolled, in pixels. */
function scrollOf(dialog: Locator): Promise<number> {
  return dialog.locator(".song-explorer__results").evaluate((node) => node.scrollTop);
}

test("the_explorer_reopens_as_it_was_left_with_the_open_song_marked_and_in_view", async ({ page }) => {
  await page.goto("./play/");
  const title = page.getByLabel("Open song");
  const dialog = await openSongsWithSkills(page);
  const search = dialog.getByRole("searchbox", { name: "Search songs" });
  const count = dialog.locator(".library-count");
  const christmas = chip(dialog, "Collection", "Christmas");
  const easy = chip(dialog, "Difficulty", "Easy");

  // A carol is one card, which shows its easiest version until a filter asks for another.
  await christmas.click();
  await expect(count).toHaveText("31 songs");
  await expect(cardOf(dialog, "O Christmas Tree, Beginner")).toHaveCount(1);
  // Two tags of different kinds keep the carols with an Easy version, and each card shows that version.
  await easy.click();
  await expect(count).toHaveText("31 songs");
  await expect(cardOf(dialog, "O Christmas Tree, Beginner")).toHaveCount(0);
  // The word matches each carol by its collection.
  await search.fill("christmas");
  await expect(count).toHaveText("31 songs");
  await expect(christmas).toHaveAttribute("aria-pressed", "true");
  await expect(easy).toHaveAttribute("aria-pressed", "true");
  const tree = cardOf(dialog, "O Christmas Tree, Easy");
  await expect(tree).toHaveCount(1);
  await expect(tree.locator(".song-card__title mark")).toHaveText("Christmas");

  // A preview sounds the card's song, and the open song stays the open song.
  const preview = tree.locator(".song-card__preview");
  await expect(preview).toHaveAttribute("data-state", "idle");
  await expect(preview).toHaveAccessibleName("Preview");
  await preview.click();
  await expect(preview).not.toHaveAttribute("data-state", "idle");
  await expect(preview).toHaveAccessibleName("Stop the preview");
  // The sound set loads on the first preview, which takes a while in a fresh browser.
  await expect(preview).toHaveAttribute("data-state", "playing", { timeout: 30_000 });
  await expect(title).toHaveText("Demo song");
  await preview.click();
  await expect(preview).toHaveAttribute("data-state", "idle");
  await expect(preview).toHaveAccessibleName("Preview");
  await expect(title).toHaveText("Demo song");

  // The last card lies below the fold, so opening it scrolls the cards first.
  const last = cardOf(dialog, "Tochter Zion, freue dich, Easy");
  await expect(last).not.toBeInViewport();
  await last.locator(".song-card__open").click();
  await expect(dialog).toBeHidden();
  await expect(title).toHaveText("Tochter Zion, freue dich, Easy");

  await openSongs(page);
  await expect(search).toHaveValue("christmas");
  await expect(christmas).toHaveAttribute("aria-pressed", "true");
  await expect(easy).toHaveAttribute("aria-pressed", "true");
  await expect(count).toHaveText("31 songs");
  await expect(tree.locator(".song-card__title mark")).toHaveText("Christmas");
  const current = dialog.getByRole("region", { name: "Results" }).locator(".song-card[aria-current='true']");
  await expect(current).toHaveCount(1);
  await expect(current.locator(".song-card__open")).toHaveAccessibleName("Tochter Zion, freue dich, Easy");
  await expect(current).toBeInViewport({ ratio: 0.9 });
  await expect(dialog.locator(".song-explorer__now")).toHaveText("Now playing: Tochter Zion, freue dich, Easy");
});

test("the_scroll_and_the_sort_come_back_after_a_close", async ({ page }) => {
  await page.goto("./play/");
  const dialog = await openSongsWithSkills(page);
  const sort = dialog.getByRole("combobox", { name: "Sort by" });
  const easy = chip(dialog, "Difficulty", "Easy");

  // One level of the catalog holds more songs than the explorer draws at first.
  await easy.click();
  await sort.selectOption("title");
  await expect(dialog.locator(".library-count")).toHaveText("96 songs");
  await expect(dialog.locator(".song-card")).toHaveCount(48);

  // The explorer notes the scroll on the scroll event, so the test waits for that event.
  const top = await dialog.locator(".song-explorer__results").evaluate(
    (node) =>
      new Promise<number>((resolve) => {
        node.addEventListener("scroll", () => resolve(node.scrollTop), { once: true });
        node.scrollTop = 600;
      }),
  );
  expect(top).toBeGreaterThan(0);

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await openSongs(page);
  await expect.poll(async () => Math.abs((await scrollOf(dialog)) - top)).toBeLessThanOrEqual(1);
  await expect(sort).toHaveValue("title");
  await expect(easy).toHaveAttribute("aria-pressed", "true");

  // A reload of the page keeps them too.
  await page.reload();
  await openSongs(page);
  await expect(sort).toHaveValue("title");
  await expect(easy).toHaveAttribute("aria-pressed", "true");
  await expect.poll(async () => Math.abs((await scrollOf(dialog)) - top)).toBeLessThanOrEqual(1);
});

test("a_star_makes_a_favourite_that_leads_the_page_and_filters", async ({ page }) => {
  await page.goto("./play/");
  const dialog = await openSongsWithSkills(page);
  const search = dialog.getByRole("searchbox", { name: "Search songs" });
  await search.fill("tango andantino");
  const star = cardOf(dialog, "Tango Andantino").getByRole("button", { name: "Favourite", exact: true });
  await expect(star).toHaveAttribute("aria-pressed", "false");
  await star.click();
  await expect(star).toHaveAttribute("aria-pressed", "true");

  // With no filter on, the favourites lead the page, and a close of the dialog keeps them.
  await search.fill("");
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await openSongs(page);
  const favourites = dialog.getByRole("region", { name: "Favourites" });
  await expect(favourites.locator(".song-card")).toHaveCount(1);
  await expect(cardOf(favourites, "Tango Andantino").getByRole("button", { name: "Favourite", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(dialog.locator(".song-card").first()).toHaveAttribute("data-id", "catalog:piano-midi/alb_esp2.mid");

  // The chip keeps the favourites alone, each once.
  await chip(dialog, "Yours", "Favourites").click();
  await expect(dialog.locator(".library-count")).toHaveText("1 song");
  await expect(favourites).toHaveCount(0);
  await expect(dialog.locator(".song-card")).toHaveCount(1);
  await expect(cardOf(dialog.getByRole("region", { name: "Results" }), "Tango Andantino")).toHaveCount(1);
});

test("a_tag_on_a_card_filters_by_it", async ({ page }) => {
  await page.goto("./play/");
  const dialog = await openSongsWithSkills(page);
  const count = dialog.locator(".library-count");
  await expect(count).toHaveText(/^\d+ songs$/);
  const all = Number((await count.textContent())?.split(" ")[0]);

  // The catalog's first song is a piece of ours on the beginner path, and its first tag says so.
  const tag = dialog.locator(".song-section[data-section='all'] .song-card").first().locator(".song-card__tags").getByRole("button", { name: "Beginner path", exact: true });
  const inRail = chip(dialog, "Collection", "Beginner path");
  await expect(tag).toHaveAttribute("aria-pressed", "false");
  await expect(inRail).toHaveAttribute("aria-pressed", "false");
  await tag.click();

  await expect(inRail).toHaveAttribute("aria-pressed", "true");
  await expect(tag).toHaveAttribute("aria-pressed", "true");
  await expect(count).toHaveText("111 songs");
  expect(all).toBeGreaterThan(111);
});

test("nothing_found_shows_the_mascot_and_one_way_back", async ({ page }) => {
  await page.goto("./play/");
  const dialog = await openSongsWithSkills(page);
  const search = dialog.getByRole("searchbox", { name: "Search songs" });
  const count = dialog.locator(".library-count");
  await expect(count).toHaveText(/^\d+ songs$/);
  const all = await count.textContent();

  await search.fill("zzzz");
  await expect(count).toHaveText("0 songs");
  const empty = dialog.locator(".song-explorer__empty");
  await expect(empty.locator(".mascot video")).toBeVisible();
  await expect(empty.getByRole("heading", { name: "No song matches" })).toBeVisible();
  await expect(dialog.locator(".song-card")).toHaveCount(0);

  await empty.getByRole("button", { name: "Clear all" }).click();
  await expect(search).toHaveValue("");
  await expect(count).toHaveText(all!);
  await expect(empty).toHaveCount(0);
  await expect(dialog.getByRole("region", { name: "All songs" }).locator(".song-card").first()).toBeVisible();
});

test("the_arrow_keys_move_through_the_cards_and_enter_opens", async ({ page }) => {
  await page.goto("./play/");
  const dialog = await openSongsWithSkills(page);
  const search = dialog.getByRole("searchbox", { name: "Search songs" });
  // The word finds two songs, Ode to Joy and Joy to the World, each as one card.
  await search.fill("joy");
  const opens = dialog.locator(".song-card__open");
  await expect(opens).toHaveCount(2);

  await search.press("ArrowDown");
  await expect(opens.nth(0)).toBeFocused();
  await expect(opens.nth(0)).toHaveAccessibleName("Ode to Joy, Beginner");
  await page.keyboard.press("ArrowRight");
  await expect(opens.nth(1)).toBeFocused();
  await expect(opens.nth(1)).toHaveAccessibleName("Joy to the World, Beginner");

  await page.keyboard.press("Enter");
  await expect(dialog).toBeHidden();
  await expect(page.getByLabel("Open song")).toHaveText("Joy to the World, Beginner");
});
