# learn-piano-easy: the design

How learn-piano-easy works, until a module's head comment owns each part. When one does, this file's
section shrinks to a link to it, in the same commit.

## The shape

The app is one static folder, `dist/`, that any static host or a local file server serves. It has no
server code. It needs the network only for its first load, and the service worker serves everything after.

- **Bun builds, serves and tests.** `tools/build.ts` owns the build, and `tools/dev.ts` owns the dev
  server and the production preview. Their head comments say how each works.
- **The service worker serves the app offline.** `src/pwa/sw.ts` owns its caching rules.
- **three.js is the only runtime dependency.** It is pinned in `package.json` and bundled into the app.
  No file loads from a CDN.
- **The app is a site of three parts:** the landing page, "Learn Piano" and "Just Play Piano"
  ([decision 0003](decisions/0003.md)). [site-design.md](site-design.md) holds the rules every page is
  drawn by, and [curriculum.md](curriculum.md) the rules every lesson is written by.
- **The hosted site counts its page views** with our own Matomo and no cookies, through
  `src/site/stats.ts` ([decision 0007](decisions/0007.md)).
- **Every URL is relative.** The app runs at a domain root, under a sub-path such as GitHub Pages, or on
  `localhost` without change.
- **Our own songs come in four versions,** named by difficulty from Beginner to Hard.
  [our-songs.md](our-songs.md) holds the rules a song is written and measured by.
- **Data flows one way.** The song model feeds the transport, and the transport drives the audio and
  the scene. Input is judged against the song model.
- **One player core draws every piano that plays a song.** `src/app/player-core.ts` builds the scene,
  the transport and the learner's keys into a box. The play page's shell builds on it, and so does the
  embed of `src/app/embed.ts`, a chunk the landing page's boxes load on a click.

## The modules

| Folder | Holds | Goal |
|---|---|---|
| `src/app/` | The start-up, the app shell, the player's core, the embed and the wiring of the modules | `foundation`, `one-player` |
| `src/midi/` | The Standard MIDI File reader and writer, the song model and the tempo map | `midi-core` |
| `src/audio/` | The Web Audio engine: sampler, envelope, pedal, metronome and effects | `audio-engine` |
| `src/render/` | The three.js scene: piano, notes, lanes, camera and effects | `renderer-3d` |
| `src/play/` | The clock, the transport, the loop and the hotkeys | `transport` |
| `src/keyboard/` | The learner's keyboard: its range, the size presets, and how a song fits it | `keyboard-range` |
| `src/input/` | Web MIDI, the computer keyboard, the on-screen piano and the modes | `input-and-modes` |
| `src/library/` | The song catalog, search, uploads in IndexedDB, and per-track settings | `song-library` |
| `src/settings/` | The settings schema, its store, and the settings UI built from it | `settings` |
| `src/data/` | The backup of everything the learner has, its restore, and the Data page | `your-data` |
| `src/theory/` | Key, chords, note names and fingering | `theory` |
| `src/sheet/` | The notation engraver, drawn as SVG | `sheet-music` |
| `src/export/` | The PDF writer and its export dialog | `effects-and-extras` |
| `src/ui/` | Our small DOM helpers, the menus, dialogs and styles | `foundation` |
| `src/pwa/` | The service worker and the offline cache manager | `foundation`, `offline-release` |
| `public/` | Static files copied as they are: the page, the manifest, icons, songs and sounds | `foundation` |

## Time

All playback time is in seconds of song time. The tempo map converts between ticks, seconds, measures and
beats, and `src/midi/tempo-map.ts` owns how. The song model keeps every time in both ticks and seconds,
and `src/midi/song.ts` owns its shape. The song clock maps song time to the audio context's time, and `src/play/clock.ts` owns how.

## The learner's data

Everything the learner has stays in their browser. The settings and the song settings live in
`localStorage`. The course progress, the uploaded songs and the scores live in IndexedDB. One backup
file holds every part, and the Data page at `data/` saves and restores it.

- **A restore never removes work.** Progress, songs and scores merge with what the browser has. The
  settings and the `localStorage` keys take the file's values.
- **Every store reports a kept write** through `noteChange` of `src/data/changes.ts`.
- **`src/data/parts.ts` owns which part lives where,** and how each restores.

## Open

- How the scene keeps tens of thousands of notes at full frame rate. The `renderer-3d` goal decides it,
  starting from instanced meshes.
- The storage format of our own piano samples, once they replace the temporary ones.
