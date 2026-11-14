/**
 * The locales a translation pass keeps, in a real browser: each reads in its own language, and its pages
 * pass the layout checks.
 *
 * - **Spanish, Chinese, Hindi, Arabic, Portuguese, Indonesian, Bengali and Russian each read in their own language** from the language
 *   switch to a lesson's step, its piano's key names and the player's controls. Arabic also sets `dir="rtl"`.
 * - **A passed locale's pages run the layout checks at a phone's and a desktop's width,** in both themes.
 *   A right-to-left one runs them at every width, as `passedWidthsOf` says. A flaw counts only where the
 *   locale's text adds it, since each page's own test holds its English. The pseudo-locale's longer texts
 *   already cover every width.
 * - **Each page is a test that checks every passed locale,** so the workers share the pages. English is
 *   measured once per width, not once per locale, and a new locale adds only its own measures.
 */
import { expect, test, type Page } from "@playwright/test";
import { COURSE } from "../src/learn/course";
import { ROUTES } from "../src/site/routes";
import { checkLayout, PASSED_LOCALES, PAST_SETUP, pastSetup, passedWidthsOf, THEMES, WIDTHS } from "./layout-check";

/** Collects every uncaught error the page reports from now on. */
function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  return errors;
}

/** The site's top bar. */
const bar = (page: Page) => page.locator(".site-bar-host");

/** The heading of the view on screen. */
const heading = (page: Page) => page.locator("main > :not([hidden]) h1");

test("the_spanish_site_reads_in_spanish", async ({ page }) => {
  test.setTimeout(60_000);
  await pastSetup(page);
  const errors = watchErrors(page);

  await page.goto("./learn/");
  const choice = bar(page).getByRole("combobox", { name: "Language" });
  await expect(choice.locator('option[value="es"]')).toHaveText("Español");
  await choice.selectOption("es");
  await expect(page).toHaveURL(/\/es\/learn\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(heading(page)).toHaveText("Aprende piano");
  await expect(page.locator("main")).toContainText("Conoce el piano");

  await page.goto("./es/learn/meet-the-piano/find-c/");
  await expect(page.locator(".lesson__title")).toHaveText("Encuentra el do");
  await expect(page.locator("main")).toContainText("Todas tienen el mismo nombre: do.");
  await expect(page.locator('.piano-keys__key[data-pitch="60"]')).toHaveAttribute("data-name", "Do4");

  await page.goto("./es/play/");
  await expect(page.getByRole("button", { name: "Reproducir", exact: true })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "Canciones" })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "Configuración" })).toBeVisible();
  expect(errors).toEqual([]);
});

test("the_chinese_site_reads_in_chinese", async ({ page }) => {
  test.setTimeout(60_000);
  await pastSetup(page);
  const errors = watchErrors(page);

  await page.goto("./learn/");
  const choice = bar(page).getByRole("combobox", { name: "Language" });
  await expect(choice.locator('option[value="zh"]')).toHaveText("简体中文");
  await choice.selectOption("zh");
  await expect(page).toHaveURL(/\/zh\/learn\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-Hans");
  await expect(heading(page)).toHaveText("学钢琴");
  await expect(page.locator("main")).toContainText("认识钢琴");

  await page.goto("./zh/learn/meet-the-piano/find-c/");
  await expect(page.locator(".lesson__title")).toHaveText("找到 C");
  await expect(page.locator("main")).toContainText("它们的名字都一样：C。");
  await expect(page.locator('.piano-keys__key[data-pitch="60"]')).toHaveAttribute("data-name", "C4");

  await page.goto("./zh/play/");
  await expect(page.getByRole("button", { name: "播放", exact: true })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "歌曲" })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "设置" })).toBeVisible();
  expect(errors).toEqual([]);
});

test("the_hindi_site_reads_in_hindi", async ({ page }) => {
  test.setTimeout(60_000);
  await pastSetup(page);
  const errors = watchErrors(page);

  await page.goto("./learn/");
  const choice = bar(page).getByRole("combobox", { name: "Language" });
  await expect(choice.locator('option[value="hi"]')).toHaveText("हिन्दी");
  await choice.selectOption("hi");
  await expect(page).toHaveURL(/\/hi\/learn\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "hi");
  await expect(heading(page)).toHaveText("पियानो सीखें");
  await expect(page.locator("main")).toContainText("पियानो से पहचान");

  await page.goto("./hi/learn/meet-the-piano/find-c/");
  await expect(page.locator(".lesson__title")).toHaveText("C को ढूँढ़ें");
  await expect(page.locator("main")).toContainText("इन सबका नाम एक ही है: C।");
  await expect(page.locator('.piano-keys__key[data-pitch="60"]')).toHaveAttribute("data-name", "C4");

  await page.goto("./hi/play/");
  await expect(page.getByRole("button", { name: "चलाएँ", exact: true })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "गाने" })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "सेटिंग" })).toBeVisible();
  expect(errors).toEqual([]);
});

test("the_arabic_site_reads_in_arabic", async ({ page }) => {
  test.setTimeout(60_000);
  await pastSetup(page);
  const errors = watchErrors(page);

  await page.goto("./learn/");
  const choice = bar(page).getByRole("combobox", { name: "Language" });
  await expect(choice.locator('option[value="ar"]')).toHaveText("العربية");
  await choice.selectOption("ar");
  await expect(page).toHaveURL(/\/ar\/learn\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ar");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(heading(page)).toHaveText("تعلم البيانو");
  await expect(page.locator("main")).toContainText("التعرف على البيانو");

  await page.goto("./ar/learn/meet-the-piano/find-c/");
  await expect(page.locator(".lesson__title")).toHaveText("البحث عن دو");
  await expect(page.locator("main")).toContainText("لها كلها الاسم نفسه: دو.");
  await expect(page.locator('.piano-keys__key[data-pitch="60"]')).toHaveAttribute("data-name", "دو4");

  await page.goto("./ar/play/");
  await expect(page.getByRole("button", { name: "تشغيل", exact: true })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "الأغاني" })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "الإعدادات" })).toBeVisible();

  // The legal texts are English in Arabic, so they read left to right on the right-to-left page.
  await page.goto("./ar/imprint/");
  await expect(page.locator(".legal")).toHaveAttribute("dir", "ltr");
  await expect(page.locator(".legal")).toHaveAttribute("lang", "en");
  expect(errors).toEqual([]);
});

test("the_portuguese_site_reads_in_portuguese", async ({ page }) => {
  test.setTimeout(60_000);
  await pastSetup(page);
  const errors = watchErrors(page);

  await page.goto("./learn/");
  const choice = bar(page).getByRole("combobox", { name: "Language" });
  await expect(choice.locator('option[value="pt"]')).toHaveText("Português (Brasil)");
  await choice.selectOption("pt");
  await expect(page).toHaveURL(/\/pt\/learn\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await expect(heading(page)).toHaveText("Aprenda piano");
  await expect(page.locator("main")).toContainText("Conheça o piano");

  await page.goto("./pt/learn/meet-the-piano/find-c/");
  await expect(page.locator(".lesson__title")).toHaveText("Encontre o Dó");
  await expect(page.locator("main")).toContainText("Todas têm o mesmo nome: Dó.");
  await expect(page.locator('.piano-keys__key[data-pitch="60"]')).toHaveAttribute("data-name", "Dó4");

  await page.goto("./pt/play/");
  await expect(page.getByRole("button", { name: "Reproduzir", exact: true })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "Músicas" })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "Configurações" })).toBeVisible();
  expect(errors).toEqual([]);
});

test("the_indonesian_site_reads_in_indonesian", async ({ page }) => {
  test.setTimeout(60_000);
  await pastSetup(page);
  const errors = watchErrors(page);

  await page.goto("./learn/");
  const choice = bar(page).getByRole("combobox", { name: "Language" });
  await expect(choice.locator('option[value="id"]')).toHaveText("Bahasa Indonesia");
  await choice.selectOption("id");
  await expect(page).toHaveURL(/\/id\/learn\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "id");
  await expect(heading(page)).toHaveText("Belajar Piano");
  await expect(page.locator("main")).toContainText("Kenali piano");

  await page.goto("./id/learn/meet-the-piano/find-c/");
  await expect(page.locator(".lesson__title")).toHaveText("Temukan C");
  await expect(page.locator("main")).toContainText("Semuanya punya nama yang sama: C.");
  await expect(page.locator('.piano-keys__key[data-pitch="60"]')).toHaveAttribute("data-name", "C4");

  await page.goto("./id/play/");
  await expect(page.getByRole("button", { name: "Putar", exact: true })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "Lagu" })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "Pengaturan" })).toBeVisible();
  expect(errors).toEqual([]);
});

test("the_bengali_site_reads_in_bengali", async ({ page }) => {
  test.setTimeout(60_000);
  await pastSetup(page);
  const errors = watchErrors(page);

  await page.goto("./learn/");
  const choice = bar(page).getByRole("combobox", { name: "Language" });
  await expect(choice.locator('option[value="bn"]')).toHaveText("বাংলা");
  await choice.selectOption("bn");
  await expect(page).toHaveURL(/\/bn\/learn\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "bn");
  await expect(heading(page)).toHaveText("পিয়ানো শিখুন");
  await expect(page.locator("main")).toContainText("পিয়ানোর সঙ্গে পরিচয়");

  await page.goto("./bn/learn/meet-the-piano/find-c/");
  await expect(page.locator(".lesson__title")).toHaveText("C খোঁজা");
  await expect(page.locator("main")).toContainText("সবগুলোর নাম একই: C।");
  await expect(page.locator('.piano-keys__key[data-pitch="60"]')).toHaveAttribute("data-name", "C4");

  await page.goto("./bn/play/");
  await expect(page.getByRole("button", { name: "চালান", exact: true })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "গান" })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "সেটিংস" })).toBeVisible();
  expect(errors).toEqual([]);
});

test("the_russian_site_reads_in_russian", async ({ page }) => {
  test.setTimeout(60_000);
  await pastSetup(page);
  const errors = watchErrors(page);

  await page.goto("./learn/");
  const choice = bar(page).getByRole("combobox", { name: "Language" });
  await expect(choice.locator('option[value="ru"]')).toHaveText("Русский");
  await choice.selectOption("ru");
  await expect(page).toHaveURL(/\/ru\/learn\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await expect(heading(page)).toHaveText("Учиться играть");
  await expect(page.locator("main")).toContainText("Знакомство с фортепиано");

  await page.goto("./ru/learn/meet-the-piano/find-c/");
  await expect(page.locator(".lesson__title")).toHaveText("Ищем ноту до");
  await expect(page.locator("main")).toContainText("У них у всех одно название: до.");
  await expect(page.locator('.piano-keys__key[data-pitch="60"]')).toHaveAttribute("data-name", "до4");

  await page.goto("./ru/play/");
  await expect(page.getByRole("button", { name: "Воспроизвести", exact: true })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "Песни" })).toBeVisible();
  await expect(bar(page).getByRole("button", { name: "Настройки" })).toBeVisible();
  expect(errors).toEqual([]);
});

/** The pages each passed locale opens, as paths in the default locale: every shown route, and a lesson. */
async function checkedPaths(): Promise<string[]> {
  const world = COURSE[0]!;
  const { lessons } = await world.load();
  return [...ROUTES.filter((route) => !route.hidden).map((route) => route.path), `learn/${world.id}/${lessons[0]!.id}/`];
}

/** A flaw without its locale, its texts and its numbers, so the same flaw in two locales reads the same. */
function shapeOf(flaw: string): string {
  return flaw
    .replace(/ [a-z]{2}(?:-[A-Z]{2})?:/, ":")
    .replace(/"[^"]*"/g, '""')
    .replace(/\d+(?:\.\d+)?/g, "#");
}

/** The body of each page that draws after a read of its own, which is `aria-busy` until it draws. */
const BUSY_BODIES: Readonly<Record<string, string>> = { "learn/": ".map__body", "learn/profile/": ".profile__body" };

for (const path of await checkedPaths()) {
  test(`every_passed_locale_passes_the_layout_checks_on_${path || "./"}`, async ({ browser, baseURL }) => {
    // A page of *Learn Piano* fades its bar slot in once the slot's read ends, and the map and the
    // profile fade their body in once their own read ends. The page is measured after both.
    const body = BUSY_BODIES[path];
    const slot = '.bar-slot[data-ready="true"]';
    const ready = !path.startsWith("learn/") ? undefined : body === undefined ? slot : `body:has(${body}:not([aria-busy])):has(${slot})`;
    // Each width measures English once, with every passed locale checked at that width.
    const runs = WIDTHS.map((width) => ({ width, locales: PASSED_LOCALES.filter((locale) => passedWidthsOf(locale).includes(width)) })).filter((run) => run.locales.length > 0);
    test.setTimeout(runs.reduce((sum, run) => sum + run.locales.length + 1, 0) * THEMES.length * 20_000);
    const found: string[] = [];
    for (const run of runs) {
      const options = { widths: [run.width], locales: ["en", ...run.locales], reducedMotion: true, storage: PAST_SETUP, ...(ready === undefined ? {} : { ready }) };
      found.push(...(await checkLayout(browser, new URL(path, baseURL).href, options)));
    }
    const flaws: string[] = [];
    for (const locale of PASSED_LOCALES) {
      const widths = passedWidthsOf(locale);
      const english = new Set(found.filter((flaw) => flaw.includes(" en: ") && widths.some((width) => flaw.startsWith(`${width} `))).map(shapeOf));
      flaws.push(...found.filter((flaw) => flaw.includes(` ${locale}: `) && !english.has(shapeOf(flaw))));
    }
    expect(flaws).toEqual([]);
  });
}
