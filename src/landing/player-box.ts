/**
 * A landing box: a picture of the real player that pans slowly, until one click starts the real player
 * of `src/app/embed.ts` in its place.
 *
 * - **The picture** is a screenshot of the embed playing the box's song, a WebP per scheme in
 *   `public/images/landing/`, which `tools/landing-pictures.ts` makes. The stylesheet shows the one of
 *   the site's theme, and pans and zooms it slowly. It loads lazily and at low priority, in a box of
 *   fixed shape, so nothing shifts when it arrives.
 * - **One click starts it,** on the picture or on the box's play button. The click loads the embed's
 *   chunk with `import()`, so the landing page loads no player code before it. The embed then wakes the
 *   sound and plays. The button is busy until the chunk is in.
 * - **The button then stops and plays again.** Once started, the box shows the player, whose keys play
 *   when pressed, and a click on it is the player's own.
 * - **Only one landing player runs at a time.** Starting a box disposes the running one, which shows its
 *   picture again. A page then holds one WebGL context at most, and one song sounds.
 * - **A box out of view stops its player** with `run(false)`, and starts it again on its return. A song
 *   that played plays on from where it stood.
 * - **`change` switches the song.** Before the click it only swaps the pictures. Once the embed is in,
 *   it also loads the new song with the embed's `load`, in the same canvas, and plays it from its start
 *   if the box was playing.
 * - **The tracks' looks are read when the embed loads a song,** not when the box is made. A host whose
 *   colours come from the page's styles can then read them once the box is on the page.
 */
import "./player-box.css";
import type { EmbeddedPlayer } from "../app/embed";
import type { KeyRange } from "../render/key-layout";
import type { TrackLook } from "../render/scene";
import type { SettingsStore } from "../settings/store";
import { button } from "../ui/components/button";
import { el } from "../ui/dom";
import { icon } from "../ui/icons/icons";
import { signal } from "../ui/signal";

/** The pictures' size in pixels, which `tools/landing-pictures.ts` makes them at. */
const PICTURE = { width: 1200, height: 900 };

/** What a landing box shows and plays. */
export interface PlayerBoxOptions {
  /** The pictures' stem in `images/landing/`, such as `hero` for `hero-light.webp` and `hero-dark.webp`. */
  picture: string;
  /** The picture's alternative text. */
  alt: string;
  /** The song's MIDI file, by its path relative to the site's root. */
  song: string;
  /** The keys the piano draws. */
  range: KeyRange;
  /** Gives each track's look, by track index, each time the embed loads a song. */
  tracks?: () => readonly TrackLook[];
  /** The site's settings, which the embed's services are made with. */
  site: SettingsStore;
  /** The button's label while the song is still. */
  play: string;
  /** The button's label while the song plays. */
  stop: string;
}

/** A song a box may switch to: its pictures' stem and its MIDI file, as in `PlayerBoxOptions`. */
export interface BoxSong {
  picture: string;
  song: string;
}

/** A landing box: its element, the play button its host places, and its song switch. */
export interface PlayerBox {
  element: HTMLElement;
  button: HTMLButtonElement;
  /** Shows `next`'s pictures, and plays `next`'s song in a running embed. */
  change(next: BoxSong): void;
}

/** The box whose player runs now, which a box that starts resets. */
let running: { reset(): void } | undefined;

/** A landing box, as `options` describe. */
export function playerBox(options: PlayerBoxOptions): PlayerBox {
  let current: BoxSong = { picture: options.picture, song: options.song };
  const source = (theme: "light" | "dark") => `images/landing/${current.picture}-${theme}.webp`;
  const image = (theme: "light" | "dark") =>
    el("img", {
      class: "player-box__picture",
      attrs: {
        src: source(theme),
        alt: options.alt,
        width: String(PICTURE.width),
        height: String(PICTURE.height),
        loading: "lazy",
        decoding: "async",
        fetchpriority: "low",
        "data-theme": theme,
      },
    });
  const cue = el("span", { class: "player-box__cue", attrs: { "aria-hidden": "true" }, children: [icon("play")] });
  const pictures = { light: image("light"), dark: image("dark") };
  const element = el("div", {
    class: "player-box",
    attrs: { "data-state": "picture" },
    children: [pictures.light, pictures.dark, cue],
  });

  let embed: Promise<EmbeddedPlayer> | undefined;
  /** The song the embed holds, so a switch to it again reads nothing. */
  let loaded: string | undefined;
  let playing = false;
  let visible = false;
  const busy = signal(false);
  const toggle = button({
    label: options.play,
    icon: "play",
    variant: "primary",
    busy,
    onClick: () => (playing ? stop() : start()),
  });

  /** Shows `playing` on the button. */
  const show = () => {
    toggle.querySelector(".btn__label")!.textContent = playing ? options.stop : options.play;
    toggle.querySelector("svg")!.replaceWith(icon(playing ? "square" : "play"));
  };

  /** Runs `act` on the embed, unless a reset has dropped it by then. */
  const withEmbed = (act: (player: EmbeddedPlayer) => void) => {
    const mine = embed;
    void mine?.then((player) => {
      if (embed === mine) act(player);
    });
  };

  const self = {
    reset() {
      const old = embed;
      embed = undefined;
      playing = false;
      busy.set(false);
      show();
      element.dataset.state = "picture";
      void old?.then((player) => player.dispose());
    },
  };

  function start() {
    if (running !== self) running?.reset();
    running = self;
    playing = true;
    show();
    element.dataset.state = "player";
    if (embed === undefined) {
      busy.set(true);
      embed = import("../app/embed").then(({ embedPlayer }) => {
        const { range, tracks, site } = options;
        loaded = current.song;
        const player = embedPlayer(element, { song: loaded, range, ...(tracks === undefined ? {} : { tracks: tracks() }), loop: true, site });
        if (!visible) player.run(false);
        return player;
      });
      withEmbed(() => busy.set(false));
    }
    // The click's activation still holds once the chunk is in, so the sound may wake then.
    withEmbed((player) => {
      if (playing && visible) player.play();
    });
  }

  function stop() {
    playing = false;
    show();
    withEmbed((player) => player.stop());
  }

  // A click on the picture starts the player. Once it runs, a click there is the player's.
  element.addEventListener("click", () => {
    if (element.dataset.state === "picture") start();
  });

  new IntersectionObserver((entries) => {
    visible = entries.some((entry) => entry.isIntersecting);
    withEmbed((player) => {
      player.run(visible);
      if (visible && playing) player.play();
    });
  }).observe(element);

  function change(next: BoxSong) {
    current = next;
    pictures.light.src = source("light");
    pictures.dark.src = source("dark");
    withEmbed((player) => {
      if (loaded !== next.song) {
        loaded = next.song;
        player.load(next.song, options.tracks?.());
      }
      if (playing && visible) player.play();
    });
  }

  return { element, button: toggle, change };
}
