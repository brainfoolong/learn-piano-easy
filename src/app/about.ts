/**
 * The About page: what the app is, its build, and every license text the build ships.
 *
 * Decisions, and what each costs:
 * - The page lists the files under `licenses/` from `cache-groups.json`, so a dependency the build adds
 *   shows here without a change to this file. Without the index it shows our license and the notices.
 * - The page opens with the mascot's portrait beside what the app is. The portrait only decorates, so
 *   its `alt` is empty. It costs one small picture, which the shell's cache already holds.
 * - Each text sits in its own fold, and only our license starts open, so the page opens short.
 * - A license text is marked `lang="en"` and `dir="ltr"`, since it is English in every locale. On a
 *   right-to-left page it still reads left to right.
 * - Each text is fetched when the page opens. They are in the app group, so they load offline too.
 * - The page's own words come from the live catalog's `player.shell.about`, read once as the build of
 *   the page starts. The site's About page sets the live locale first, so it builds in that language.
 */
import { t, type Pick as TextPick } from "../i18n/live";
import type { Messages } from "../i18n/messages/en";
import { GROUP_INDEX, type GroupIndex } from "../pwa/cache-groups";
import { mascot } from "../ui/components/mascot";
import { el } from "../ui/dom";
import "./about.css";

/** The license files the build always writes, and their headings, in the order the page shows them. */
const KNOWN: readonly (readonly [file: string, heading: TextPick])[] = [
  ["./licenses/LICENSE.txt", (m) => m.player.shell.about.license],
  ["./licenses/THIRD-PARTY-NOTICES.md", (m) => m.player.shell.about.notices],
];

/**
 * The heading of the license file at `url` in `messages`: a known one's, or `<package> license` for a
 * dependency's.
 */
export function licenseHeading(url: string, messages: Messages = t()): string {
  const known = KNOWN.find(([file]) => file === url);
  if (known !== undefined) return known[1](messages);
  const name = url.slice(url.lastIndexOf("/") + 1).replace(/-LICENSE\.txt$/, "");
  return messages.player.shell.about.packageLicense(name);
}

/** The license files of `index`, the known ones first, then the rest by name. */
export function licenseFiles(index: GroupIndex | undefined): string[] {
  const known = KNOWN.map(([file]) => file);
  const listed = index?.groups.app.files.filter((file) => file.startsWith("./licenses/")) ?? [];
  return [...known, ...listed.filter((file) => !known.includes(file)).sort()];
}

/** The text at `url`, or `missing` when it cannot be fetched. */
async function readText(url: string, missing: string): Promise<string> {
  try {
    const response = await fetch(url);
    return response.ok ? await response.text() : missing;
  } catch {
    return missing;
  }
}

/** The build's group index, or undefined when it cannot be read. */
async function readIndex(): Promise<GroupIndex | undefined> {
  try {
    const response = await fetch(`./${GROUP_INDEX}`);
    return response.ok ? ((await response.json()) as GroupIndex) : undefined;
  } catch {
    return undefined;
  }
}

/** Builds the About page's body. */
export async function aboutPage(): Promise<HTMLElement> {
  const messages = t();
  const say = messages.player.shell.about;
  const index = await readIndex();
  const files = licenseFiles(index);
  const texts = await Promise.all(files.map((file) => readText(file, say.offline)));
  return el("div", {
    class: "about",
    children: [
      el("div", {
        class: "about__lead",
        children: [
          mascot({ pose: "portrait", alt: "", size: "small" }),
          el("div", {
            class: "about__text",
            children: [el("p", { text: say.intro }), index !== undefined && el("p", { class: "dim", text: say.build(index.version) })],
          }),
        ],
      }),
      ...files.map((file, i) =>
        el("details", {
          props: { open: i === 0 },
          children: [
            el("summary", { text: licenseHeading(file, messages) }),
            // A license text is English in every locale, so it reads as English and left to right.
            el("pre", { text: texts[i] ?? "", attrs: texts[i] === say.offline ? {} : { lang: "en", dir: "ltr" } }),
          ],
        }),
      ),
    ],
  });
}
