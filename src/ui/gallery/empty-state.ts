/** The gallery's section of the empty state: with a title, without one, and with another icon. */
import { emptyState, type EmptyStateOptions } from "../components/empty-state";
import { group, section, specimen, type Locale } from "./parts";

const MESSAGES = {
  en: {
    emptyState: "Empty state",
    states: "States",
    noSongsTitle: "No songs yet",
    noSongs: "Open a MIDI file to start playing along.",
    openSong: "Open a song",
    noResults: "No song matches your search.",
    clearSearch: "Clear the search",
  },
  de: {
    emptyState: "Leerer Zustand",
    states: "Zustände",
    noSongsTitle: "Noch keine Lieder",
    noSongs: "Öffne eine MIDI-Datei, um mitzuspielen.",
    openSong: "Lied öffnen",
    noResults: "Kein Lied passt zu deiner Suche.",
    clearSearch: "Suche zurücksetzen",
  },
} satisfies Record<Locale, Record<string, string>>;

const states = (entries: [string, EmptyStateOptions][]) =>
  entries.map(([state, options]) => specimen(state, emptyState(options)));

/** The empty state's section in the gallery. Its titles are `h4`, under the group's `h3`. */
export function emptyStateSection(locale: Locale): HTMLElement {
  const t = MESSAGES[locale];
  return section("empty-state", t.emptyState, [
    group(
      t.states,
      states([
        ["with-title", { title: t.noSongsTitle, level: 4, message: t.noSongs, actionLabel: t.openSong }],
        ["without-title", { message: t.noSongs, actionLabel: t.openSong }],
        ["other-icon", { icon: "search", message: t.noResults, actionLabel: t.clearSearch }],
      ]),
    ),
  ]);
}
