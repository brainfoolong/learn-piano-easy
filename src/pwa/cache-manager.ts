/**
 * The offline cache manager: a dialog that shows each cache group's size and how much of it is offline,
 * and caches or clears it. It also fetches the chosen groups again after an update.
 *
 * - The page reads `cache-groups.json`, which the shell holds, so the sizes show without a network call.
 * - The page writes the caches itself, through the Cache API, under the names `cache-groups.ts` gives.
 *   It fetches with cache mode `reload`, which the service worker passes to the network. A cached file
 *   stays until its fresh copy arrives, so a failed fetch never leaves a group emptier than before.
 * - The app group is precached by every install, so it has no setting. `autoCacheSongs` and
 *   `autoCacheSounds` keep their group offline: turning one on caches the group, and each new version
 *   fetches it again.
 * - The last version the page started is kept in `localStorage`. A start on a new version is an update.
 * - Its texts, the groups' labels and descriptions too, come from the live catalog's `player.shell.cache`
 *   when the dialog opens or a toast is said.
 *
 * Decisions, and what each costs:
 * - Six fetches run at once. More would hurry a fast link and starve a slow one.
 * - The status counts cached files by URL, with one `keys()` call per group, which is quick at 300 files.
 */
import { liveLocale, t } from "../i18n/live";
import type { SettingsStore } from "../settings/store";
import { button, el } from "../ui/dom";
import { toggleControl } from "../ui/controls";
import { CACHE_GROUPS, GROUP_INDEX, cacheNameOf, type GroupId, type GroupIndex } from "./cache-groups";
import "../settings/panel.css";
import "./cache-manager.css";

/** The key under which the last started version is kept. */
const VERSION_KEY = "learn-piano-easy.cache-version";

/** How many files are fetched at once. */
const PARALLEL = 6;

/** The setting that keeps each on-demand group offline. */
const AUTO_CACHE = { songs: "autoCacheSongs", sounds: "autoCacheSounds" } as const;

/** `bytes` as a size a learner reads in the live locale, such as `6.6 MB`. */
export function formatBytes(bytes: number): string {
  const say = t().player.shell.cache;
  if (bytes < 1024) return say.bytes(bytes);
  if (bytes < 1024 * 1024) return say.kilobytes(bytes / 1024);
  return say.megabytes(bytes / 1024 / 1024);
}

/** Whether this page can reach the Cache API. A page served over plain HTTP from another host cannot. */
function cachesAvailable(): boolean {
  return typeof caches !== "undefined";
}

/** The index the build wrote, or `undefined` when it cannot be read. */
export async function loadGroupIndex(): Promise<GroupIndex | undefined> {
  try {
    const response = await fetch(`./${GROUP_INDEX}`);
    return response.ok ? ((await response.json()) as GroupIndex) : undefined;
  } catch {
    return undefined;
  }
}

function absolute(file: string): string {
  return new URL(file, document.baseURI).href;
}

/** How many of a group's files are cached. */
export async function cachedCount(index: GroupIndex, group: GroupId): Promise<number> {
  const cache = await caches.open(cacheNameOf(group, index.version));
  const held = new Set((await cache.keys()).map((request) => request.url));
  return index.groups[group].files.filter((file) => held.has(absolute(file))).length;
}

type Progress = (done: number, total: number) => void;

/** The run filling each group, so a second request joins it rather than fetching every file twice. */
const running = new Map<GroupId, { done: Promise<number>; listeners: Set<Progress> }>();

/**
 * Fetches a group's files from the network into its cache, and returns how many failed. With `missingOnly`,
 * files already cached are left alone. `progress` hears the count done after each file. A call while the
 * group is filling joins that run, whatever its `missingOnly`.
 */
export function cacheGroup(index: GroupIndex, group: GroupId, missingOnly: boolean, progress?: Progress): Promise<number> {
  let run = running.get(group);
  if (run === undefined) {
    const listeners = new Set<Progress>();
    const done = fill(index, group, missingOnly, (n, total) => listeners.forEach((l) => l(n, total)));
    run = { done, listeners };
    running.set(group, run);
    void done.finally(() => running.delete(group));
  }
  if (progress !== undefined) run.listeners.add(progress);
  return run.done;
}

async function fill(index: GroupIndex, group: GroupId, missingOnly: boolean, progress: Progress): Promise<number> {
  const cache = await caches.open(cacheNameOf(group, index.version));
  const held = new Set((await cache.keys()).map((request) => request.url));
  const urls = index.groups[group].files.map(absolute).filter((url) => !missingOnly || !held.has(url));
  let next = 0;
  let done = 0;
  let failed = 0;
  const run = async () => {
    while (next < urls.length) {
      const url = urls[next++] as string;
      try {
        const response = await fetch(url, { cache: "reload" });
        if (response.ok) await cache.put(url, response);
        else failed++;
      } catch {
        failed++;
      }
      progress(++done, urls.length);
    }
  };
  await Promise.all(Array.from({ length: Math.min(PARALLEL, urls.length) }, run));
  return failed;
}

/** Removes a group's files from its cache. */
export async function clearGroup(index: GroupIndex, group: GroupId): Promise<void> {
  const cache = await caches.open(cacheNameOf(group, index.version));
  await Promise.all(index.groups[group].files.map((file) => cache.delete(absolute(file))));
}

/** The labels of `ids` in the live locale, joined for a sentence, such as `Songs and Piano sounds`. */
function labelsOf(ids: readonly GroupId[]): string {
  const labels = ids.map((id) => t().player.shell.cache.groups[id].label);
  return new Intl.ListFormat(liveLocale(), { type: "conjunction" }).format(labels);
}

/**
 * Keeps the chosen groups offline. At start, a new version fetches each chosen group again and says so
 * in `notify`. Turning a group's setting on caches what is missing of it.
 */
export async function keepGroupsOffline(settings: SettingsStore, notify: (message: string) => void): Promise<void> {
  if (!cachesAvailable() || typeof localStorage === "undefined") return;
  const index = await loadGroupIndex();
  if (index === undefined) return;

  settings.subscribe((id, value) => {
    const group = (Object.keys(AUTO_CACHE) as (keyof typeof AUTO_CACHE)[]).find((g) => AUTO_CACHE[g] === id);
    if (group === undefined || value !== true) return;
    void cacheGroup(index, group, true).then((failed) => {
      if (failed > 0) notify(t().player.shell.cache.groupsFailed(failed, labelsOf([group])));
    });
  });

  const last = localStorage.getItem(VERSION_KEY);
  localStorage.setItem(VERSION_KEY, index.version);
  const kept = (Object.keys(AUTO_CACHE) as (keyof typeof AUTO_CACHE)[]).filter((g) => settings.get(AUTO_CACHE[g]));
  if (kept.length === 0) return;
  const update = last !== null && last !== index.version;
  const failures = await Promise.all(kept.map((group) => cacheGroup(index, group, !update)));
  const failed = failures.reduce((sum, n) => sum + n, 0);
  if (failed > 0) notify(t().player.shell.cache.groupsFailed(failed, labelsOf(kept)));
  else if (update) notify(t().player.shell.cache.updated(labelsOf(kept)));
}

/** The dialog's body: one section per group, with its size, its state and its buttons. */
export function createCacheManager(settings: SettingsStore): HTMLElement {
  const say = t().player.shell.cache;
  const body = el("div", { class: "cache-manager" });
  if (!cachesAvailable()) {
    body.append(el("p", { text: say.unavailable }));
    return body;
  }
  body.append(el("p", { text: say.reading }));
  void loadGroupIndex().then((index) => {
    if (index === undefined) {
      body.replaceChildren(el("p", { text: say.unreadable }));
      return;
    }
    body.replaceChildren(el("p", { text: say.intro }), ...CACHE_GROUPS.map((group) => groupSection(settings, index, group.id)));
  });
  return body;
}

function groupSection(settings: SettingsStore, index: GroupIndex, id: GroupId): HTMLElement {
  const say = t().player.shell.cache;
  const { label, description } = say.groups[id];
  const { files, bytes } = index.groups[id];
  const status = el("p", { class: "cache-status", attrs: { role: "status" } });
  let busy = false;

  const show = async () => {
    const count = await cachedCount(index, id);
    const state = count === files.length ? say.allSaved : count === 0 ? say.noneSaved : say.someSaved(count, files.length);
    status.textContent = say.status(formatBytes(bytes), files.length, state);
    save.textContent = count === files.length ? say.saveAgain : say.save;
  };

  const work = async (task: () => Promise<string | undefined>) => {
    if (busy) return;
    busy = true;
    save.disabled = remove.disabled = true;
    try {
      const message = await task();
      await show();
      if (message !== undefined) status.textContent += ` ${message}`;
    } finally {
      busy = false;
      save.disabled = remove.disabled = false;
    }
  };

  const fillAndShow = (missingOnly: boolean) =>
    void work(async () => {
      const failed = await cacheGroup(index, id, missingOnly, (done, total) => {
        status.textContent = say.saving(done, total);
      });
      return failed > 0 ? say.failed(failed) : undefined;
    });
  const save = button(say.save, () => fillAndShow(false));
  const remove = button(say.remove, () =>
    void work(async () => {
      await clearGroup(index, id);
      return undefined;
    }),
  );
  save.setAttribute("aria-label", say.saveGroup(label));
  remove.setAttribute("aria-label", say.removeGroup(label));

  const children: HTMLElement[] = [
    el("h3", { text: label }),
    el("p", { text: description }),
    status,
    el("div", { class: "cache-buttons", children: [save, remove] }),
  ];
  if (id !== "app") {
    const setting = AUTO_CACHE[id];
    // Turning the setting on starts a fill in `keepGroupsOffline`. Saving here joins it, to show progress.
    const keep = toggleControl(say.keep, settings.get(setting), (value) => {
      keep.set(settings.set(setting, value));
      if (value) fillAndShow(true);
    });
    children.push(
      el("label", {
        class: "setting-row",
        children: [el("span", { class: "setting-label", text: say.keep }), keep.element],
      }),
    );
  }
  void show();
  return el("section", { class: "cache-group", children });
}
