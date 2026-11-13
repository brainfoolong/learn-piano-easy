# Findings

What each reached goal left behind: its target, its findings and the decisions that still bind. A goal
gets a section named by its slug when it is harvested, before its file is deleted.

## foundation

**Target:** `bun run build` writes an offline-capable static app to `dist/` that shows a three.js scene,
and `bun run dev` serves it with rebuilds.

### Findings

- The build is `tools/build.ts`, the dev server and preview are `tools/dev.ts`, and the service worker is
  `src/pwa/sw.ts`. Each head comment says how it works.
- The shell and its About dialog are `src/app/shell.ts`, and the scene is `src/render/scene.ts`.
- `tools/build.test.ts` and `tools/licenses.test.ts` hold the build and license tests.

### Decisions that still bind

- three.js is pinned at an exact version and bundled. Its addons under `three/addons/` count as three.js.
- Every URL in the app is relative. Only a build with `--site-url` names the domain, as
  `tools/build.ts`'s head comment says.
- Songs and sounds live under `public/songs/` and `public/sounds/`. The worker caches them on first use,
  and each folder holds a `LICENSE.md` named in `THIRD-PARTY-NOTICES.md`.
- A development build registers no service worker. `bun run preview` is the way to test offline locally.

## midi-core

**Target:** every library MIDI file parses into a song model with notes in seconds, a tempo map, measures
and beats. It also writes back losslessly.

### Findings

- The reader is `src/midi/smf-read.ts` on `src/midi/byte-reader.ts`, and the writer is
  `src/midi/smf-write.ts`. Each head comment says how it works.
- The tempo map is `src/midi/tempo-map.ts`, and the song model is `src/midi/song.ts`.
- `src/midi/parse.ts` turns bytes into a song, and `src/midi/parse-worker.ts` runs it off the page.
- The 237 piano-midi.de songs are in `public/songs/piano-midi/`, with their `LICENSE.md`.
- `tools/catalog.ts` reads and writes `public/songs/catalog.json`, and rewrites its spans and lengths.
- `src/midi/library-songs.test.ts` parses every library song, so a new song is checked when it lands.

### Decisions that still bind

- A broken file never hangs or crashes the app. `readMidi` throws only on a broken header, and a track
  break goes to the file's `problems` with its byte offset.
- The reader keeps events as the file has them, and the writer writes every event with a full status
  byte. A written file reads back to the same events.
- Notes pair per channel and pitch, first in first out, and a note left open ends at its track's end.
- The song keeps every time in ticks and in seconds. Measures and beats count from 0, and the UI adds 1.
- A time signature in mid-measure starts a new measure at its tick, so measure numbers stay whole.
- An SMPTE file's measures count a quarter note as half a second, and a format 2 file plays its tracks
  together.
- A posted song carries its tempo map's `inputs`, and `songFromReply` rebuilds the `TempoMap` on the page.
- The catalog format is ours. `CatalogSong` and the head comment of `tools/catalog.ts` own it.

## settings

**Target:** every setting lives in one typed schema, persists across visits, renders its own UI, and
exports and imports as JSON.

### Findings

- The schema is `src/settings/schema.ts`, and the store is `src/settings/store.ts`. Each head comment
  says how it works.
- The panel is `src/settings/panel.ts`, built on the controls in `src/ui/controls.ts`.
- The colour picker is `src/ui/color-picker.ts`, our own, with hue, saturation, value and alpha.
- Export and import are `src/settings/export.ts`, and the themes are `src/settings/themes.ts`.
- `src/settings/coverage.test.ts` maps every row of `docs/reference/settings.md` to the schema.
- A change in another tab is not picked up until the next visit. A `storage` event listener would fix it.
- `e2e/settings-panel.e2e.ts` checks the panel in Chromium.
- No test covers `applyThemes`, because it needs a root element. A plain object as the root would do.

### Decisions that still bind

- Every setting is one entry in the schema, and every value's type derives from it.
- The coverage test places every reference id in the schema, the rename map or the drop list. A drop
  states its reason, and the pending list stays empty.
- Ids are our own camelCase names. Where the reference's id is clear, ours matches it, and a rename is listed
  in the coverage test's rename map.
- Labels and descriptions are in our own words, free of the reference's typos.
- The store saves to `localStorage` under one key with a schema version, and only values that differ
  from their defaults. A failed read falls back to the defaults.
- A colour is stored as `#rrggbbaa`, and a choice stores its value, never its label.
- The two `lighter` blend settings are dropped, because our scene draws glow with a bloom pass.
- The panel is built from the schema alone, so a new setting needs no panel code. Its other decisions
  are in `src/settings/panel.ts`'s head comment.
- An exported file holds every value, and an import sets only the keys it has, in schema order. A file
  that is not ours is refused whole.
- A theme lists only the colours it changes from the defaults, and the dark theme is the defaults.
  Choosing a theme overwrites the colour settings.

## audio-engine

**Target:** a song plays through our own Web Audio sampler with envelope, pedal, metronome, reverb and
equaliser, scheduled exactly against the audio clock.

### Findings

- The engine is `src/audio/engine.ts`. It owns the samplers, the scheduler, the metronome and the
  effects. Each file's head comment says how it works.
- The loader is `src/audio/soundfont.ts`, and the voices are `src/audio/sampler.ts` on the maths in
  `src/audio/envelope.ts`.
- The scheduler is `src/audio/scheduler.ts`, and the metronome is `src/audio/metronome.ts`.
- The effects chain is `src/audio/effects.ts`, and its room responses come from `src/audio/impulse.ts`.
- `tools/import-sounds.ts` converts the Salamander Grand Piano into `public/sounds/salamander/` with its
  license.
- The transport drives the engine's scheduler, as § `transport` says.
- The unit tests run in Bun with fake nodes. `e2e/sounds.e2e.ts` loads and decodes the sound set in
  Chromium.
- A background tab throttles the scheduler's timer, so a song stutters there.

### Decisions that still bind

- The one sound set is the Salamander Grand Piano, under CC BY 3.0. Every instrument plays the piano,
  and percussion tracks are not played.
- The sample format is the MIDI.js JSON file of base64 MP3s. Each note decodes on its first use.
- The Web Audio parts sit behind small interfaces that an `AudioContext` satisfies, so they test in Bun.
- The scheduler queues the next 100 ms every 25 ms against `AudioContext.currentTime`. Both numbers are
  settings.
- At most 64 voices sound at once, and the oldest released voice stops first.
- The metronome is a synthesised tone burst. Synced, it clicks on the song's beats in the scheduler's
  windows. Unsynced, the player's metronome keeps a steady beat at the song's tempo where playback
  starts. It rests through a loop's count-in, whether the count-in clicks or not, and starts again on
  the pass's first beat. In a loop, its MIDI clicks go out only before the soonest the coming count-in
  can sound at the fastest speed. While wait mode holds the song, they go on with its speaker clicks.
  A lesson's clicks run at the tempo the lesson gives.
- Reverb plays generated noise responses with an exponential decay, in a few room presets. It mixes in
  at a fixed wet gain of 0.3, and `reverbImpulseResponse` picks the room.
- `volumeMain` is the one main volume, on the bus. `volumeMainSW` and `useHQPianoSoundfont` are
  dropped.

## renderer-3d

**Target:** a modelled 3D piano with falling note bars, lanes, lines and camera presets renders any
library song at full frame rate.

### Findings

- The scene is `src/render/scene.ts`. It wires the piano, the notes, the lanes, the cameras, the glow
  and the overlays. Each file's head comment says how it works.
- The layout maths is `src/render/key-layout.ts`, and the note window is `src/render/note-window.ts`.
  Both are pure and tested in Bun.
- The keys are `src/render/piano-geometry.ts` and `src/render/piano.ts`. The bars are
  `src/render/notes.ts`, and the lanes and lines are `src/render/lanes.ts`.
- The cameras are `src/render/cameras.ts`, and the FPS, BPM and note card are `src/render/overlays.ts`.
- The glow's modes are `src/render/glow.ts`, its pass is `src/render/bloom.ts`, and what lights it is
  `src/render/glow-source.ts`.
- `e2e/scene.e2e.ts` checks the overlays, the camera presets and the glow in Chromium.
- The piano settings that no code drew are dropped: the hit effect's switch, incoming-key marks, black
  key length and the flare's look. `src/settings/coverage.test.ts` lists them with `scrollSensitivity`.
- OrbitControls keeps the wheel for zoom, because the timeline seeks by click, drag and key only.
- The transport drives `PianoScene.setSong` and `setTimeSource`. The scene draws the learner's key
  range, as § `keyboard-range` says.
- three.js's `Fog` copies its colour, so `scene.ts` copies the background into `fog.color` on every
  change, as the playbook says.

### Decisions that still bind

- three.js draws everything with `WebGLRenderer`, and addons from `three/addons/` may be used.
- Notes are one `InstancedMesh` of rounded boxes per colour group. The note window finds the visible
  notes by binary search over start times, with a running maximum of durations.
- Keys are extruded shapes with bevels, and white keys are notched around black keys. A pressed key
  tilts about its back edge, with a short spring.
- One world contract binds every scene part, owned by `src/render/piano-geometry.ts`'s head comment.
  One white key is one world unit, the range is centred on x = 0, and the hit line is z = 0.
- Reversed direction mirrors one world group holding the piano, notes and lanes. White key length
  scales the piano's own group along z, which never moves the hit line.
- The keys follow the notes. The scene presses the key of every sounding note each frame, so the
  transport only sets the song and the time.
- Until a song is set, the scene plays a generated demo song on its own clock.
- There are four camera presets: classic, player, cinematic and flat. The learner can orbit freely and
  double-click back to the preset. Flat is orthographic, its keys fill the screen width, and it
  ignores drags.
- Glow is a bloom pass, off on devices that report low power. The FPS overlay measures frame time.
- Picture lengths are in key widths. The reference's pixel settings keep their ids with new ranges, and
  `noteEndedShrink` and `showHitKeys` became toggles.
- Settings the 3D scene has no use for are dropped in `src/settings/coverage.test.ts`, each with its
  reason.

## keyboard-range

**Target:** the learner sets which keys their keyboard has, by preset or by first and last note. The
piano, the notes and the input follow it.

### Findings

- The range core is `src/keyboard/range.ts`: the presets, `normalizeRange`, octave shifts, folding and
  note names. It is pure and tested in Bun.
- The settings control is `src/keyboard/range-control.ts`. It holds the preset menu, the two note fields
  and the octave buttons.
- The song fit is `src/keyboard/song-fit.ts`. `fitPitch` moves one note into the range, and `songSpan`
  names a song's lowest and highest note.
- `fitSong` has no caller outside its test. The judge and the bars call `fitPitch` per note instead.
- `e2e/keyboard.e2e.ts` checks the presets, a typed range across a reload and the octave buttons.
- The catalog carries `low` and `high` per song, written by `tools/catalog.ts`.
- Folding has no end-to-end test, because the bars are not readable from the page. Its unit tests are
  in `src/keyboard/song-fit.test.ts`.
- `src/audio/soundfont.ts` parses note names of its own. It could use `parsePitch` once the sample
  names are checked against it.

### Decisions that still bind

- The range is two settings, `keyboardFirstNote` and `keyboardLastNote`, in MIDI note numbers. They
  default to 21 and 108, the 88 keys of a piano.
- A preset is a shape, never a stored value. The menu shows the preset the range matches, shifted or
  not, and "Custom" otherwise.
- The presets are 88, 76, 73, 61, 49, 44, 37, 32 and 25 keys, named by key count and note span, never by
  brand. Choosing one puts it at its usual octave.
- Every reader takes the range through `normalizeRange`. It orders, clamps to the 88 keys, widens to
  white keys and keeps an octave.
- Every write of the range goes through `storeRange`, which sets the end that widens first. The store
  never holds a broken range in between.
- Note names are scientific pitch notation, where MIDI 60 is C4. A note field accepts a name such as
  `F#3`, or a number.
- The piano draws exactly the range. The canvas's accessible name states it, such as "Piano, 61 keys, C2
  to C7".
- Notes outside the range are played by the app and never required. With `foldOutsideNotes` on, they
  move by octaves onto the nearest keys in range, where they are drawn and required.
- The reference's `minInputNote` and `maxInputNote` map to our two notes. `restrictInputRange` is dropped,
  because the input always follows the learner's keyboard.
- The settings panel takes a control by setting id and tools by section from their owner. It stays
  built from the schema.

## transport

**Target:** the learner plays, pauses, seeks, loops, slows down, transposes and zooms a song by mouse,
touch or hotkey, with sound and picture in step.

### Findings

- The clock is `src/play/clock.ts`, and the transport that wires it to the scheduler and the scene is
  `src/play/transport.ts`. Each file's head comment says how it works.
- The control bar is `src/play/control-bar.ts`, the timeline is `src/play/timeline.ts`, and the zoom
  and view shift are `src/play/view.ts`.
- The loop range and the trainer's speed are `src/play/loop.ts`. Both are pure over a song's tempo map.
- The action registry and default keys are `src/play/hotkeys.ts`, and the rebinding dialog is
  `src/play/hotkey-dialog.ts`.
- `e2e/transport.e2e.ts` checks the bar, the timeline, the zoom, the loop and the hotkeys in Chromium.
- A loop that pauses and a song that stops play on past their end in a background tab, because
  `tick` runs on frames. A seamless repeat keeps its time there.
- `forceDelay` and `minNoteDuration` are dropped in the coverage test, which states the reason.
- The trainer raises the speed after every pass, because no judge reports a clean pass to the
  transport.

### Decisions that still bind

- One clock maps song time to audio time. The scheduler and the scene read song time from it, and
  neither keeps a timer of its own.
- The scheduler reads the `SongTimeline` the transport hands in. A speed change re-anchors the clock at
  now, so song time stays exact.
- The scene reads song time through `setTimeSource` every frame. The render offset delays the picture
  through that time.
- Speed runs from 10 % to 200 % in 5 % steps by hotkey, and is not a setting. Each song and each reload
  starts at 100 %.
- Transpose is the `transposeOffset` setting, from minus 12 to plus 12. The transport hands a transposed
  copy of the song to the scheduler and the scene.
- The sound set loads on the first play, never at start-up.
- The control bar plays the scene's demo song through the transport until a song opens.
- The control bar is our own UI at the bottom of the screen. It fades while playing, and the stage ends
  above it through `--controls-height`.
- The zoom is a span of song time in the settings. The sideways view shift is the scene's own state.
- A loop is a measure range counted from 1, and both ends play. The settings `loopStart` and `loopEnd`
  keep this meaning, default 1 and 2.
- Each pass starts at the count-in, in the beat and tempo at the loop's start. The count-in clicks under
  `enableLoopBeats` even while the metronome is off.
- With `autoLoop` off, a pass ends paused at the count-in. Muting outside the loop is audio only.
- The trainer is the settings `loopTrainer` and `loopTrainerSpeed`. It adds 5 % per clean pass, up to
  100 %.
- An `autoLoop` loop and `restartSongOnEnd` repeat seamlessly. The clock wraps song time round a cycle
  at the exact audio time of the end, and the scheduler queues the next pass ahead. A count-in of 0
  beats joins a loop's passes with no gap.
- The transport's `tick` tells of each pass and ends a pausing loop or the song, run by the control
  bar each frame.
- A drag on the timeline scrubs under `playNotesOnScrollEnabled`, sounding at most 8 crossed notes.
- A hotkey is a key's `code` with its modifiers, such as `Shift+ArrowUp`. `hotKeyBindings` stores only
  the learner's changes, as JSON text.
- The default keys are our own and follow media players. Escape and Tab never bind, keys typed in a
  text field run nothing, and a focused control keeps its own keys.

## input-and-modes

**Target:** the learner plays by MIDI keyboard, computer keyboard or touch, in wait, scored, free play
and pitch practice modes, with accuracy kept per song.

### Findings

- The bus is `src/input/input-bus.ts`. Web MIDI is `src/input/web-midi.ts`, the computer keyboard
  `src/input/keyboard.ts`, and the on-screen piano `src/input/pointer-piano.ts`.
- Learning the range is `src/input/learn-range.ts`. Wait mode is `src/input/wait-mode.ts`, and key
  lighting is `src/input/key-lighting.ts`.
- The judge is `src/input/scoring.ts`, and the history store and its dialog are `src/input/history.ts`.
- The recorder is `src/input/recorder.ts`. Free play is `src/input/free-play.ts`, and the pitch quiz is
  `src/input/pitch-practice.ts`.
- The e2e tests are `input`, `wait-mode`, `scoring` and `modes` in `e2e/`.
- A take's song time is the audio clock's, which runs ahead of the speakers by the output latency. A
  learner who plays to the sound is judged late by that much.
- With wait mode on, a note played where the clock holds is always perfect. The score then counts only
  mistakes and notes struck early.
- A MIDI note is no user gesture, so the sound waits for the learner's first click or key after a load.
- A pause or a seek cannot take back MIDI clicks already sent, so up to the look-ahead of them sound.
- After a seek in wait mode, the hold is set again only on the next frame. In that frame the scheduler
  may queue the app's notes up to its look-ahead past the next moment.

### Decisions that still bind

- All input meets in one `InputBus` as note-on and note-off with velocity and source. The shell owns
  it in `src/app/shell.ts`, and a mode subscribes and reads `bus.isDown`.
- A key held by two sources is one note. The bus sends a note-off only when the last source lets go.
- The input range is the learner's keyboard range, read through `normalizeRange`. Two key presses can
  learn it, in either order.
- MIDI device choices live in local storage, apart from the settings. The chosen output is
  `MidiDevices.outputPort`.
- A computer note key comes before the hotkeys, and no default note key is a default hotkey.
- The hands come from each track's hand in the track settings. `handOfNote` in
  `src/input/wait-mode.ts` reads a note's hand from it.
- Wait mode holds the song clock ahead through `SongClock.hold` until every required pitch of the
  moment is down. A seek clears the hold.
- A key counts for a moment when struck after the last moment and still held. A paused song takes no
  moment.
- `transport.required` holds the learner's notes in every mode. The scheduler leaves them out only
  while `waitForNotes` is on.
- Key lighting sends velocity 1 notes on a chosen MIDI channel, ahead of each note to play.
- The metronome's MIDI click plays a drum on channel 10, or another sound on channel 16. Its velocity
  is fixed, and `metronomeVolume` sets only the speakers.
- A note is a hit inside plus or minus 150 ms, and perfect within 50 ms. Both are settings, in real
  milliseconds whatever the speed.
- A note-on that hits no note is a mistake. Each note takes one hit at most, the unplayed note on its
  key nearest in time.
- A take ends at the song's end or a loop's end, and only then is it saved. A seek elsewhere drops it.
- The history lives in its own IndexedDB database, `learn-piano-easy-history`, or in memory without
  IndexedDB. Each take keeps date, speed, hands, hits, misses and mistakes.
- A song's history key is a hash of its notes. `songKey` in `src/input/history.ts` owns it.
- The score shows as a DOM panel over the scene, and its History button opens the song's takes.
- `playMode` has three choices: `player`, `freePlay` and `pitchPractice`. One setting keeps one switch
  for what the learner does.
- Free play and pitch practice set the song aside. It pauses, its bar and score panel hide, and key
  lighting lights no key.
- Only free play records. A recording starts at the first note, and saves as a format 0 file at 120
  beats a minute and 480 ticks a beat.
- A wrong key in pitch practice counts against the asked note, and the question stays until the right
  key is played.

## song-library

**Target:** the learner finds, opens and uploads songs, sets up each track, and finds our own beginner
songs alongside the classical ones.

### Findings

- Search and grouping are `src/library/search.ts`, and the song explorer is
  `src/library/library-panel.ts`. Opening a song and the last song are `src/library/open-song.ts`.
- The IndexedDB helper is `src/library/idb.ts`, and uploads are `src/library/uploads.ts`.
- Track settings are `src/library/track-settings.ts`, and the tracks panel is
  `src/library/tracks-panel.ts`.
- The songs of ours are written by `tools/make-our-songs.ts` into `public/songs/ours/`.
- The e2e tests are `library` and `tracks` in `e2e/`.
- The history still keys a take by `songKey`, a hash of the notes. The song id of `songIdOf` is not
  wired into it yet.
- Free play and pitch practice still show the paused song's notes behind their panels.

### Decisions that still bind

- The catalog is `public/songs/catalog.json`. The song explorer shows it as one card per song, found by
  search, tags and sort.
- A catalog row's `low` and `high` notes tell which songs fit the learner's keyboard.
- Uploads are kept in IndexedDB when that setting is on, as file name and bytes. An upload's id is a
  hash of its bytes, so the same file added twice is one song.
- Opening a folder uses the File System Access API where the browser has it, and a folder file input
  elsewhere.
- A track has visible, muted, hand, colour, volume and its sheet switch. Defaults by track index apply to each new song,
  and its hands come from its notes.
- A hand of `none` means the learner need not play the track. One field then says both which hand plays
  and whether the learner plays.
- No instrument per track, and no `inputInstrument`, because the only sound set is a piano. `volumePP`
  is our `inputGain`.
- Track settings live in `localStorage` by song id, so catalog songs and uploads share one store. A song
  is stored only once the learner changes a track.
- The last song lives in `localStorage`, apart from the settings. The player's bar names the open song.
- The library shows in the shell's dialog, built once and kept, so its search survives a close.
- The songs of ours are written through our MIDI writer. The tunes are public domain, and our
  arrangements are MIT.
- The catalog is precached with the shell, because every start reads it. A catalog change then fetches
  the shell once more.

## theory

**Target:** the app names notes, finds the key and chords, generates and edits fingerings, and shows
all of it on the notes and keys.

### Findings

- Note names are `src/theory/note-names.ts`, key detection `src/theory/key.ts`, and chords
  `src/theory/chords.ts`.
- The fingering search is `src/theory/fingering.ts`, and the editor and its store are
  `src/theory/fingering-editor.ts`.
- The label sprites are `src/render/labels.ts`, and the key names `src/render/key-labels.ts`.
- Chord bars, ribbons and note blocks are `src/render/chord-labels.ts`, and colour coding is
  `src/render/color-coding.ts`.
- The e2e tests are `fingering`, `chords` and `tracks` in `e2e/`.
- The finger status line does not refresh when the track hands change while a note is selected.
- `pedalEnds` in `src/render/scene.ts` holds a note whose end meets the next pedal going down. The
  demo then shows Am7/E and Fmaj7, where its notes alone form Am and F.
- `enableAutoFingering` and `fingeringButtons` are dropped in the coverage test, which states the
  reason.

### Decisions that still bind

- Key detection matches duration-weighted pitch-class profiles against the 24 Krumhansl-Kessler
  profiles. It runs per song and per section of eight measures.
- The file's key signature is not read, because many files carry a default C major.
- The key override is one key for the whole song, kept under `SONG_KEYS_KEY` apart from the track
  lists. Resetting a song forgets its key.
- Note names have one home, `noteName` in `src/theory/note-names.ts`, written with ♯ and ♭. A name
  follows the key through `keyAccidentals` in `src/theory/key.ts`.
- Solfège is fixed do, with Sol and Si, so a name needs no key.
- The naming system writes the scene's names only. The menus keep letters, because a typed name is
  read in letters.
- A key's name on the piano is spelt by `showPianoKeyNameFlats`, never by the song's key.
- A chord is named only when its notes are exactly one shape's tones. A tie between roots goes to the
  bass, and sixth chords are left out.
- Roman numerals count from the key's own scale, natural minor in a minor key. They carry no
  inversion figures, since the name shows the bass.
- Chords are found once per song and key from the notes as they sound, held pedal included.
- Fingering is a Viterbi search that minimises stretches, crossings, repeats and weak fingers. It
  follows the track hands, and a note no hand plays takes no finger.
- Fingers set by hand live under `FINGERS_KEY`, by song id and note key. The search keeps them, and
  resetting a song's tracks never erases them.
- Generated fingers have no switch and no buttons. They are found lazily and cached.
- While a note is selected, the digit keys belong to the fingering editor. Its listener runs before
  the computer keyboard's and stops the event.
- Labels are drawn as textures on sprites, cached per text. No DOM per note.
- A finger's colour wins over a pitch's, and either over the track's. Notes and keys are switched
  apart.
- The theory settings have two sections of their own, Labels and Colour coding.
- The selected note's finger and the sounding chord each have a DOM witness. A status line names the
  finger, and the canvas's accessible name adds the chord.

## sheet-music

**Target:** our own engraver turns any song into readable sheet music, scrolling with playback or
filling the screen.

### Findings

- The quantizer is `src/sheet/quantize.ts`, and spelling and key signatures are
  `src/sheet/spelling.ts`.
- The glyph paths are `src/sheet/glyphs.ts`, and the engraver is `src/sheet/engrave.ts`.
- The sheet view is `src/sheet/sheet-view.ts`, and the cursor, sounding notes and hover names are
  `src/sheet/sheet-live.ts`.
- The e2e test is `sheet` in `e2e/`.
- A note a hair short of its beat can read as a tied dotted eighth, a 32nd and a 32nd rest.
- The quantizer splits greedily, so a held note can read as 16. + 32 + 16 where 16 + 8 fits.
- The staff gap is a fixed 8 spaces, and high bass notes on ledgers crowd the treble staff.
- A one-track piano part reads on one staff. It is not split at middle C into a grand staff.
- A beam keeps the ink while its chords sound, because it is drawn apart from their groups.
- A held key at the cursor draws no accidental, and a key change writes no cancelling naturals.

### Decisions that still bind

- Quantization snaps to a grid of the minimum note value, 32nd by default. A note across a barline is
  split and tied. Triplets are found when three notes fill a beat evenly.
- The quantizer is pure. `quantize(song, options)` takes its options as arguments, and the view wires
  them to the settings and the track switch.
- Note values show the beat. A value starts on a beat and lasts whole beats, or stays inside one beat.
  Anything else splits and ties.
- A hidden rest keeps its time with `hidden` set, so every voice fills its measure exactly.
- A staff holds at most two voices, ordered per measure by mean pitch. A third simultaneous line is cut
  short or joins a chord.
- The clef is chosen per track from its median pitch when automatic clef is on. Otherwise the first
  track is treble and the rest bass.
- Treble staves stand above bass staves in the view, each clef in track order.
- Each track has a "shown in the sheet" switch in `src/library/track-settings.ts` and the tracks
  panel.
- The glyphs are our own SVG paths. No music font is copied.
- The engraver writes SVG, one element per measure, reused while scrolling.
- A measure engraves every staff at once, so notes struck together share a column.
  `engraveMeasure(sheet, index, options)` takes the key and which header signs to draw.
- The sheet view decides where a line starts and where the key or meter changes.
- The views are scrolling with playback, lines of measures, or the sheet alone on the whole screen.
- Grand staff is the brace, with a line joining the staves at each line start.
- `sheetFormatToStave` is dropped, because the engraver always lays out a measure's staves together.
- The ink follows the paper, dark on light and light on dark, so no ink setting exists.
- The full sheet covers the scene, which still draws behind it. Pausing the scene needs an API the
  renderer lacks.

## effects-and-extras

**Target:** particles, the piano line, lyrics, markers, a background track and PDF export complete
the feature set.

### Findings

- The particles are `src/render/particles.ts`, their textures `src/render/particle-textures.ts`, and the
  piano line `src/render/piano-line.ts`.
- Lyrics are `src/render/lyrics.ts`. Markers, pedal events and lit input lanes are `src/render/lanes.ts`.
- The background track is `src/audio/background-track.ts`.
- The PDF writer is `src/export/pdf.ts`, and its dialog is `src/export/pdf-dialog.ts`.
- The e2e tests are `scene`, `extras` and `pdf` in `e2e/`.
- PDF pages carry no measure lines, lyrics or chord labels.
- The background track restarts its source at a loop's wrap, which can click.
- The lyrics cursor rides at the top of the line's padding, above the text.
- A marker or a pedal label is small at the far end of the lanes, as the measure numbers are.

### Decisions that still bind

- Particles run on the GPU as instanced points with our own shader, in a pool of 20,000.
- The particle textures are drawn in code on a canvas. No image is copied.
- Presets are toggles. Flames, sparks, embers and stars are built in, and any mix runs at once.
- The learner's own preset is one type edited in the settings. `particlePresetName` and
  `particleTypeName` are dropped.
- Particle and wave settings keep the reference's ids in our own units: key widths, seconds and degrees.
- Particles and the wave lean away from the player as they rise, so they show under the flat view too.
- The piano line is a shader on a strip above the keys, driven by the active notes.
- Lyrics and markers come from the song model. The demo song carries both.
- Lyrics are DOM over the scene, one line at a time, with a bouncing cursor.
- A lyric line breaks at karaoke's slashes and returns, at a gap over 3 s, and after 40 characters.
- Markers and the sustain pedal draw on the lanes in fixed colours. A pedal event reads "Ped." and "✱".
- The background track is an audio file the learner picks, decoded with Web Audio and started by the
  clock. It has volume, speed, offset and loop.
- The background track lives in memory only and skips the effects. A reload asks for it again.
- `bgTrackFile` is our own action that picks the track, in a Background track section.
- The PDF writer is ours: PDF 1.4, vector rectangles and text, one A4 landscape page per screen of notes.
- `pdfExportButtonGroup` opens the PDF dialog. Its page length starts at `noteToHeightConst` and is not
  stored.
- The PDF's keys span the song's notes as `fitRange` widens them.

## piano-sounds

**Target:** the default piano plays the Salamander Grand Piano, converted for the web by our own
importer, with its license credited.

### Findings

- The importer is `tools/import-sounds.ts`, and it writes `public/sounds/salamander/`.
- The set holds 30 notes in 2.3 MB, and its license is `public/sounds/salamander/LICENSE.md`.
- The loader is `src/audio/soundfont.ts`, and the e2e test is `e2e/sounds.e2e.ts`.
- Auto glow measures frames again only when its mode changes, so a settings toggle keeps bloom off on a
  slow device.

### Decisions that still bind

- The source is Salamander Grand Piano V3, 44.1 kHz 16-bit, by Alexander Holm, under CC BY 3.0.
- Image-Line's FLEX "Essential Pianos" and Splendid Grand Piano were checked and refused.
- Upright Piano KW (CC0), VCSL Keys (CC0) and Headroom Piano (CC BY 4.0) are checked for a later goal.
- The set is JSON of note names to `data:audio/mp3;base64,` URLs, in MP3 and never Opus.
- Only the sampled notes ship, one every three semitones, in one velocity layer.
- Each note starts at its onset and ends 60 dB below its peak, with one gain for the whole set.
- ffmpeg is a development tool found on PATH, and the archive downloads into `.agent-tmp/sounds/`.
- Salamander is the only set.
- The `soundfontName` setting is dropped while one set ships, and returns with a second set.

## more-songs

**Target:** the library grows by about 150 freely licensed pieces, classical and modern, each with its
license checked, credited and shown.

### Findings

- 138 songs come from Mutopia, in `public/songs/mutopia/`.
- Ten original pieces of ours are in `public/songs/originals/`, written by `tools/make-original-songs.ts`.
- The Mutopia fetch tool is `tools/fetch-mutopia.ts`, and its pick list is `tools/mutopia-picks.json`.
- Every catalog row has a `license` and a `credit`, and `tools/song-licenses.test.ts` checks both.
- Our MusicXML reader is `src/midi/musicxml.ts`, with our own XML and ZIP readers beside it.
- The beginner path is `src/library/beginner-path.ts`, and the song explorer shows its next steps first.
- Gershwin's Three Preludes and Rhapsody in Blue are public domain in the US and EU. No free MIDI was found.

### Decisions that still bind

- Only public domain, CC0, CC BY and CC BY-SA are allowed. A non-commercial license is refused.
- Famous modern songs are never added, since their compositions are under copyright.
- Every source gets its own folder, a `LICENSE.md`, a notices row, and a license and credit per row.
- A fetch tool checks the license of every item it copies, and refuses one it cannot read.
- A site that refuses automated clients is never fetched by a tool in disguise.
- OpenGameArt is not fetched, because its `robots.txt` refuses `Claude-Code` and `Codex` by name.
- MAESTRO, kunstderfuge, bitmidi and freemidi are refused for their licenses.
- The library keeps only the piano-midi.de songs of its source list.
- The Open Well-Tempered Clavier and Open Goldberg Variations are not fetched from musescore.com.
- Mutopia's files come from `sca.uwaterloo.ca/Mutopia/`, and its picks skip what piano-midi.de carries.
- MusicXML serves the learner's own files, and the library stays MIDI only.
- The beginner path names pieces and sorts them by difficulty, with no list to keep.

## offline-release

**Target:** the app installs, caches every asset group on request, covers every reference setting, and
ships as its first release. Every stage is done and verified, but the release is not tagged. The user
removed the goal before the tag.

### Findings

- The cache groups are `src/pwa/cache-groups.ts`, and the cache manager dialog is
  `src/pwa/cache-manager.ts`.
- The PNG icons are drawn and encoded by `tools/make-icons.ts`, with no image library.
- The About page is `src/app/about.ts`. It lists every file under `licenses/`.
- `.github/workflows/release.yml` builds, zips `dist/` and publishes a GitHub release on any `v*` tag. It
  has never run.
- Tag `v1.0.0` is not pushed. A release starts when the user pushes a `v*` tag.
- The cache manager's status does not follow a fill started from the settings panel's toggle.

### Decisions that still bind

- Three cache groups: app, songs and sounds. The manager shows each group's size, caches or clears it,
  and can cache it again on each update.
- The app group has no auto-cache setting, because every install precaches it.
  `autoCacheMain`, `autoCacheHqPiano` and `autoCacheFatBoy` are dropped.
- The two remaining sound-set ids both map onto our one `autoCacheSounds`.
- The cache manager fetches with cache mode `reload`, and the worker passes such a request to the
  network. A cached file then stays until its fresh copy arrives.
- The manifest declares a file handler for `.mid` and `.midi`, so an installed app opens MIDI files.
- The About page shows the MIT License and every third-party notice from `dist/licenses/`.
- A release publishes outside the repository, so only the user starts one.

## song-rarities

**Target:** twelve songs of ours ship in Common, Rare, Epic and Legendary, each measured by the meter
and carrying its guide.

### Findings

- The meter is `tools/song-meter.ts`, and its head comment holds the table of limits.
- The notation, with fingers and the pedal line, is `tools/song-notation.ts`.
- Each song is a module in `tools/our-songs/`, and `ourSongs` in `tools/make-our-songs.ts` lists them all.
- The writer writes `public/songs/ours/<slug>/<rarity>.mid`, each song's `guide.json` and four catalog
  rows per song.
- The guide's shape is `src/library/guide.ts`, its panel `src/library/guide-panel.ts`, and the skills `src/library/skills.ts`.
- `src/library/moved-songs.ts` moves a learner's fingers, tracks and last song from a beginner file to its Common version.
- *Für Elise* and *The Entertainer* carry the catalog's originals as their Mythic step.
- The beginner path starts at *Canon in D*, Common, which the meter rates 1.
- Our *Für Elise* lists under "Ludwig van Beethoven", and the original under "Ludwig v. Beethoven".
- No session has listened to the songs. The user's listening review is still to come.

### Decisions that still bind

- [docs/our-songs.md](our-songs.md) holds the rules, and [decision 0002](decisions/0002.md) the reasons.
- [Decision 0009](decisions/0009.md) names the versions Beginner, Easy, Medium and Hard, and the original score Original.
- The ids `common`, `rare`, `epic`, `legendary` and `mythic` stay in the files and the code.
- A version must fit its own limits and break one of the version below, and it plays the hook note for note.
- A tool writes every file under `public/songs/ours/`, and none is edited by hand.
- A catalog row of ours carries `song`, `rarity` and, where its song has one, `mythic`.
- A version names its key, and its file writes the key signature.
- A chromatic neighbour note counts as inside the key.
- A move after a rest of an eighth or more is a jump, never a stretch.
- A song's Original step needs an original the catalog rates above 4.5.
- Every tune is public domain in the US and the EU, and its module records the years.
- A guide's finger sits between the search and the learner, and applies only when its notes match the track's.
- A version is beaten by one whole take with both hands, at full speed, without wait mode, at 90% or more.
- A song of ours is one card, and it passes a filter when one of its versions does.
- The guide's marks show on the lanes whatever the marker setting says.
- Work saved under a moved song's new id wins over the old id's, and old takes stay under the old file.
- Our songs carry no lyrics.

## christmas-songs

**Target:** thirty public domain Christmas songs, ten of them German, ship in four rarities, grouped
with *Jingle Bells* as the library's Christmas collection.

### Findings

- The Christmas collection holds 31 songs, and `CHRISTMAS` in `tools/our-songs.test.ts` names each slug.
- The collection is a tag in the song explorer's rail, as `src/library/tags.ts` says.
- Three songs are reserves: *It Came Upon the Midnight Clear*, *Ding Dong Merrily on High* and *Kommet, ihr Hirten*.
- *We Wish You a Merry Christmas*, *Dance of the Sugar Plum Fairy* and *Lasst uns froh und munter sein* had no checkable public domain source.
- Each tune was read from a printed score: a Wikipedia `<score>`, a Commons MIDI or a Commons print.
- A guide's sentence count skips `St.` and a name's initial, so *St. Louis* and *William J. Kirkpatrick* stay whole.
- No session has listened to the songs.

### Decisions that still bind

- A song may name a collection, and its catalog row carries it as `collection`.
- A song in a collection shows only in its collection's group, and the search matches the collection's name.
- A song may name other titles, carried as `aka`, and the search matches them.
- A tune follows its public domain source, never a later protected arrangement or harmony.
- A tune's notes come from a score the session reads, never from memory.
- A song's `published` year is the earliest dated print of the tune as our notes give it.
- A German song keeps its German title, and its tune moves to C major.
- A version may write long bars, such as 4/1, so its hook starts within 8 bars.
- A version may end a tune note early with a rest before a leap, keeping each note's pitch and start.
- Easy may halve its bars for a wide tune, and may strike a tune note twice only to change finger.
- The library's composer is the tune's composer, or `Traditional`.

## site-design-system

**Target:** every token and component of [docs/site-design.md](site-design.md) exists in our own code.
The gallery shows each in every state, and passes the layout checks at every width, theme and locale.

### Findings

- The tokens of both themes are `src/ui/tokens.css`, and `src/ui/tokens.test.ts` checks their contrast and grid.
- The components are the modules of `src/ui/components/` and the controls of `src/ui/controls.ts`.
- The gallery at `design/` has its entry in `src/ui/gallery.ts` and one section module each in `src/ui/gallery/`.
- `e2e/layout-check.ts` measures each page, and the pure judges of `src/ui/layout-geometry.ts` find the flaws.
- The gallery's bundle carries the quantizer and the engraver, because the staff needs them.
- A progress bar's label states its value, so the track's contrast carries no meaning alone.
- `shiftDuring` of `e2e/layout-check.ts` has no caller, so no check measures the shift of a view change.
- The piano view's 88 keys are about 6 pixels wide on a phone, and `fitRange` of `src/render/key-layout.ts` fits a range.
- The staff imports `breakLines` from `src/sheet/sheet-view.ts`, and tree shaking keeps `SheetView` out.

### Decisions that still bind

- The components are our own plain TypeScript and CSS, so no UI framework, router or i18n package joins.
- A component is a function that returns an element, takes typed options and reports through callbacks.
- A component that changes on its own takes a signal of `src/ui/signal.ts`.
- A component's styles sit beside it as `<name>.css`, and a page loads one stylesheet.
- Cascade layers order the styles: `reset`, `tokens`, `base`, `components`, `pages`.
- The font is Plus Jakarta Sans and the icons are our subset of Lucide, each with its license.
- A component that fills its width is a size container, and its caller gives it a width.
- A touch screen is `(pointer: coarse)`, where a component grows its targets to `--s-touch`.
- A destructive action uses `--c-danger` with `--c-danger-ink`.
- A navigation offline gets its own folder's page from `src/pwa/sw.ts`.
- No pixel snapshots: the layout checks measure the flaws, and a session looks with `bun run shot`.
- The controls' stylesheet styles only `[data-control]`, and `src/ui/controls.ts` imports it.
- The piano view's keys are no focus stops, and a polite live text names the marked keys.
- The piano view and the staff share one `Mark` of `src/ui/mark.ts`: `next`, `correct` or `mistake`.
- The gallery is the route `design/`, which the site never links.

## site-shell

**Target:** the app is a site of routed pages in English and German under a floating top bar. The
player is its part at `play/`, and every page reloads offline from any base path.

### Findings

- `src/main.ts` starts `src/site/site.ts`, which shows each route's view of `src/site/views.ts`.
- The bar is `src/site/site-bar.ts`, and `src/site/router.ts` takes the links and the history.
- The route table is `src/site/routes.ts`, and `tools/build.ts` writes one page per route and locale.
- The catalogs are `src/i18n/messages/`, and `chooseLocale` of `src/i18n/locale.ts` holds the language rule.
- The player is a chunk of its own, which the play view imports from `src/app/shell.ts` on first show.
- The landing page loads `app.js` and one shared chunk, with no three.js and no audio.
- The input bus, the MIDI devices and the audio engine come from `src/site/services.ts`.
- Dropped and launched files go through `src/site/song-inbox.ts` from any page.
- The site's `max-width: 100%` on every svg hid the sheet, so `src/sheet/sheet-view.css` lifts it there.
- While the player hides, wait mode, scoring, key lighting, game mode and the sheet keep their own frames.
- `topBar.home` in the catalog is unused.

### Decisions that still bind

- The route table of `src/site/routes.ts` is the one list of routes. `design/` is the one hidden route.
- German sits under `de/`, and a third locale is one row of the locale table in `src/i18n/locale-table.ts` and its translation files.
- The build writes one page per route and locale, so a static host serves every route with no rewrite.
- Every page carries `<base href>` to the site's root, and every URL in it is `./` from there.
- The router freezes the base at boot and leaves a link that starts with `#` to the browser.
- Canonical and `hreflang` links are written only when the build gets `--site-url`.
- The catalogs are typed objects that `en.ts` defines, and a counted message is a function.
- Each page's title and description live in its catalog under `pages.<route id>`.
- The first visit follows the browser's language once, and a stored choice always wins after that.
- The theme and the language are settings in section `site`, which the player's panel never shows.
- The top bar floats over every page and hides only in fullscreen.
- Below 768 pixels of the bar's own width, its links move to a second row.
- Below 1024 pixels, the switches and a page's menu move into a popover.
- Under 480 pixels high, the bar keeps one row, and under 520 the player's panel covers its own bar.
- The player stays alive once opened, and a hidden player runs nothing and leaves the song paused.
- Only a page's chunk imports `src/site/services.ts`, so the landing page pulls no audio code.
- Offline, an unknown path gets the root page with its `<base>` rewritten to the worker's scope.
- `REPO_URL` of `src/site/routes.ts` is the one link to the source code.
- Song titles stay English. A guide's text is written in English and German, as
  [our-songs.md](our-songs.md) says.

## landing-page

**Target:** the landing page invites a visitor to try both parts. It shows a living piano in the hero,
the two ways to play, the four rarities, the ways to connect, and why it is free.

### Findings

- The view is `src/landing/landing.ts`, with one module per band in `src/landing/`.
- The hero's and the rarity band's pianos are landing boxes of `src/landing/player-box.ts`.
- A box shows a panning picture of the real player until one click loads the embed of `src/app/embed.ts`.
- The devices band shows a picture of the piano view until a click loads the view.
- Every landing piano sounds through `src/landing/touch-sound.ts`, which loads the audio service on the first press.
- The sampler drops a note while it has no sound set, so a press waits for the set, not only the context.
- The pictures of both parts come from `bun tools/landing-pictures.ts`, as WebP in `public/images/landing/`.
- The social picture comes from `tools/make-social-image.ts`.
- `revealOnEntry` of `src/landing/reveal.ts` plays each part in once as it scrolls in.
- A check that measures the landing bands runs with reduced motion, or it measures them mid-fade.
- The byte budget is `the_landing_page_stays_within_its_byte_budget` in `tools/build.test.ts`.

### Decisions that still bind

- The bands run in this order: hero, two ways to play, how learning works, the four versions, devices, free, questions, last call.
- The landing page loads no player code and no three.js until a box's click loads the embed.
- A landing box is silent and still until its click, and only one landing player runs at a time.
- The hero loops the Beginner *Twinkle, Twinkle, Little Star*, and the versions' band switches *Ode to Joy*.
- `LANDING_SONGS` of `src/landing/songs.ts` are precached with the shell, so the page plays offline.
- The hero's keys are fixed at F2 to C5 in `HERO_RANGE`, so the panel keeps its size while the song loads.
- The versions' band draws its notes in the version's colour, which it reads from its styles as track looks.
- Under reduced motion a box's picture stands still, and its click still plays.
- A band waits unseen behind a paused animation, never a style rule, and the hero never waits.
- The pictures of the two parts are screenshots, a light and a dark one each, in two lazy `<img>` elements.
  `tools/landing-pictures.ts` takes them again whenever a part's look changes.
- A call to action is `buttonLink` of `src/ui/components/button.ts`, a real link with a button's look.
- The hero's heading is the site's name, and the lead sentence carries the pitch.
- Every visible page of a locale shares one social picture, which only a hosted build names.
- The budget is 200 kB over the wire: HTML, styles and startup scripts gzipped, and fonts as they are.
- The copy is written in English and German, each in its own voice, and promises nothing the site lacks.

## player-in-site

**Target:** the player keeps every option, speaks English and German, and follows the site's theme.
It is built from the design system's components on every screen size.

### Findings

- `src/app/player-bar.ts` builds the player's bar before the chunk loads, and `start` of `src/app/shell.ts` runs a waiting click.
- `src/i18n/live.ts` holds the locale on screen: `localize` rewrites a fixed label, and `t()` serves a text built later.
- The player's catalog sections are file pairs in `src/i18n/messages/`, such as `player-bar.en.ts` and `player-bar.de.ts`.
- The player's styles sit beside their modules in the `pages` layer, and `public/styles.css` is gone.
- `src/settings/themes.ts` sets the scene's colours only, and the site's theme sets the chrome.
- The phone's control row keeps play and the speed, and its other tools fold into a sheet.
- `englishShown` of `e2e/layout-check.ts` finds English on a German page, skipping another `lang` and `translate="no"`.
- The button component's `display` beats `[hidden]`, so `src/app/player-bar.ts` toggles `is-absent` on the
  Guide button, which `src/app/shell.css` styles.
- The parser's error reasons stay English.
- The demo song, the guide's marks on the lanes and pitch practice's feedback line keep their language.

### Decisions that still bind

- Nothing the player does changes: every option, hotkey and mode stays.
- *Songs* and the song's title are the player's actions in the top bar's page slot.
- *Guide*, *Tracks*, *Settings* and *About* are its menu, in the bar from 1024 pixels and in the top bar's menu below.
- The Guide button keeps its place while a song has none.
- Below 520 pixels of height, the open settings rise over the site's bar.
- A setting's texts are keyed by its id, and a new setting fails the type check until both locales describe it.
- Song titles, composers and song guides stay as they are, until a goal translates the guides.
- The `theme` setting keeps the scene's colours only, and its options keep their names.
- No English text shows in German, and every page's layout check holds it.
- On a phone, the player fits the screen in both orientations.
- The player is one view kept alive across locales, so a language switch keeps the open song.
- A third language adds one file per catalog section.
- The settings stay a panel at the side, and a sheet from the bottom on a phone, never a modal.
- Fullscreen covers the player alone, and its actions move into a glass row over the scene.
- The player keeps its own toast stack, one toast at a time, which shows in fullscreen.
- The timeline stays our own track, since it needs a loop band and measure marks.

## learn-engine

**Target:** a lesson runs every step kind of `docs/curriculum.md` on any input. It saves its result
safely on the device, and hands a song step to the player and back.

### Findings

- `src/learn/model.ts` types a lesson, and `src/learn/course.ts` lists the worlds in order.
- A lesson is `<lesson>.ts` with `<lesson>.en.ts` and `<lesson>.de.ts` beside it, under `src/learn/lessons/<world>/`.
- `src/learn/progress/store.ts` keeps the event log, on an IndexedDB backend and a memory backend for tests.
- `src/learn/progress/migrate.ts` upgrades the store, and `src/learn/progress/backup.ts` merges a backup by event id.
- `src/learn/lesson-view.ts` shows the step bar, the step host, the feedback band and the end screen with its stars.
- Each step kind is a `StepView` in `src/learn/steps/`, listed in `src/learn/steps/kinds.ts`.
- Each kind's judge is a pure export of its module, which `src/learn/steps/steps.test.ts` imports.
- `src/learn/steps/judge.ts` holds the hint after `HINT_AFTER` mistakes, the score and the rounds of `passesRound`.
- `src/learn/steps/solution.ts` describes each step's solution, and `e2e/learn.e2e.ts` plays every lesson through them.
- `src/learn/song-handoff.ts` carries a song step's request to the player and its result back.
- The player's lesson banner and its return of a take live in `src/app/shell.ts`.
- The site's font draws only when it arrives before the first paint, so a late font shifts no page.
- A wrong answer in `listen` or `read-note` leaves "try again" on the next question, since `StepHost` cannot clear the band.
- The `read-note` staff is small, and it shows 4/4 on its one note.
- The settings' naming system, such as solfège, does not reach the steps, which write letters.
- A lesson has no button to connect a MIDI keyboard, and the welcome lesson points to the player's settings.
- A lesson's built page is titled "Lesson", and the view names the tab once the lesson loads.
- The way back from the player pushes a history entry, so Back from the lesson shows the player again.
- The song step names no song title.
- On a phone, the lesson banner covers the lanes' top 64 pixels.
- The `about/` page has no layout check, and it fails one: its summaries are 25 pixels tall, and it shifts.

### Decisions that still bind

- The progress stays on the device, as [decision 0005](decisions/0005.md) records.
- The store keeps an event log, never a running total, and XP, stars and streaks are computed from it.
- The store is versioned, and each version has a migration with a test.
- A write counts only once its transaction completes, and a failed write retries only what is left.
- A record this build cannot read is kept, and it goes into every backup.
- The log is ordered by time, then by id.
- Importing a backup merges by event id, so it never removes newer progress.
- A missing text in any locale fails the type check.
- A step judges with pure functions, and its view only shows what the judge decided.
- Every step works on every input, with the piano view under each step that listens.
- Every input reaches a step through the input bus.
- Rhythm is judged on the audio clock, from the input event's time.
- A step never punishes: a mistake shows the answer gently and lets the learner try again.
- A question of a step in rounds counts right only on its first answer.
- The stars count the checking steps' mistakes, and `starsOf` in `src/learn/lesson-run.ts` is their home.
- A button a solution presses carries a locale-free `data-answer`.
- A lesson's route is matched by its world, never listed.
- The progress is written once, at the end of a lesson.
- Leaving a lesson asks first, through `View.mayLeave`.
- A song step opens the player in lesson mode, which turns scored mode on and leaves it on.
- Any saved take of the version at the step's accuracy passes the song step.
- The e2e test plays a real boss of the course, never a test-only world.
- The lesson view is calm, and the top bar stays.

## learn-game

**Target:** *Learn Piano* plays like a game. It has a map of worlds, stars, XP, levels, a daily goal and
a streak. It has twenty-five kinds of badges, celebrations, a first-visit setup and a profile.

### Findings

- Stars, XP and levels are `src/learn/game/xp.ts`, and the daily goal and the streak are `src/learn/game/streak.ts`.
- The badges are `src/learn/game/badges.ts`, and their art is our own motif in `src/learn/game/badge-art.ts`.
- `src/learn/game/standing.ts` reads the log and the Legendary takes, whose keys are in `src/learn/game/legendary-keys.ts`.
- The map at `learn/` is `src/learn/map-view.ts`, and the rules that open lessons and worlds are `src/learn/game/unlock.ts`.
- A world's skip test is built by `src/learn/skip-test.ts`.
- The top bar's slot on *Learn Piano* pages is `src/learn/game/bar-slot.ts`.
- The level and badge moments are `src/learn/game/celebrate.ts`, and the sounds are `src/learn/game/sfx.ts`.
- The first-visit setup is `src/learn/onboarding.ts`, and the profile at `learn/profile/` is `src/learn/profile-view.ts`.
- The profile holds the progress backup, the restore and the reset.
- `e2e/lesson-walk.ts` plays a lesson for both `e2e/learn.e2e.ts` and `e2e/game.e2e.ts`.
- A test that starts past the setup calls `pastSetup` from `e2e/layout-check.ts`.
- The world badge's name and description are two messages, joined by `worldBadgeText`.
- `.site-main > [hidden]` in `src/site/site.css` hides every view, whatever its root class sets.
- Leaving the map closes the setup's dialog, which ends the setup.
- No cosmetic reward, such as a map theme, is earned by levels yet.
- At 390 pixels the site bar takes two rows over the page, and a German tab wraps.

### Decisions that still bind

- Everything is computed from the event log, and no total is stored.
- The numbers of stars, XP and levels are in the head comment of `src/learn/game/xp.ts`.
- The daily goal and the streak are in the head comment of `src/learn/game/streak.ts`.
- A run's accuracy is the mean score of its checking steps, and the lesson event keeps its stars.
- A learner with no XP is at level 0, and level 1 comes with the first 50 XP.
- The streak applies the daily goal set now to every past day.
- The bosses' lesson keys are passed to `tallyXp`, since the log never names a boss.
- The rules and numbers of the twenty-five badges are in the head comment of `src/learn/game/badges.ts`.
- Each world has its badge, `world-<world>`, made from the course list.
- `legendary` reads the player's take history, so the sandbox counts too.
- Lessons open in order within a world, and a world opens when the boss before it is beaten.
- A skip test opens its world at two stars.
- A world without a boss is beaten once every lesson is finished, but its medal stays locked.
- A world's illustration on the map is its medal, and its accent token is named in `src/learn/course.ts`.
- The map is one long path, and *Continue* always opens the next lesson.
- One celebration per moment, by size, each skippable, and reduced motion shows the same facts with a fade.
- The sounds are made by Web Audio, with no sound files, and the profile's switch mutes them.
- The particles are our own canvas code, under a fixed budget.
- The setup runs once, however it ends, and its answers about the piano and experience are not stored.
- The daily goal and the setup's end are the site settings `learnDailyGoal` and `learnSetupDone`.
- The reset saves a backup file, then empties the log through `ProgressStore.reset`, the one call that removes events.
- Cosmetic rewards earned by levels never limit "Just Play Piano".

## learn-first-steps

**Target:** the worlds *Meet the piano*, *First melodies*, *Rhythm* and *Reading music* are complete.
Each ships eight lessons, a boss and a skip test, in English and German.

### Findings

- Each lesson is `src/learn/lessons/<world>/<slug>.ts`, and `src/learn/course.ts` lists the worlds in order.
- The bosses are the key hunt `key-hunt`, *Mary Had a Little Lamb*, *Ode to Joy* and *Old MacDonald Had a Farm*.
- The note names of `src/theory/note-names.ts` follow the locale, so German labels say H, and `parsePitch` reads H too.
- A test that types a pitch no note has uses `J2`, since `H2` is now a German B.
- A world names its skip test's steps in `skipPicks`, in `src/learn/lessons/<world>/skip-test.ts`.
- `src/learn/skip-test.ts` builds each skip test from its world's `skipPicks`.
- A timed `find-key` step shows its clock in `.lesson-timer`.
- A song step's `view: "sheet"` is handled by `src/learn/steps/song.ts` and the player's shell.
- A rhythm step stacks Start over a status line of fixed height, so a passed round moves no beat or key.
- A staff draws once at its natural width when made, so it never paints empty for a frame.
- A new lesson step opens at the page's top, so the fixed top bar never hides its header on a phone.
- The map scrolls to its next node two frames after it draws, since a scroll in the same frame shifted the footer.
- The course walk of `e2e/learn.e2e.ts` runs four lessons at once, and walks a lesson with a song alone.
- The layout checks of every lesson are `e2e/learn-layout.e2e.ts`, its own floor check `learn-layout`.
- Each check must end within the project's 600 s, so a course test runs its pages in lanes.
- Only one illustration scene exists, `black-key-groups` in `src/learn/scenes.ts`, so most `explain` steps are text alone.

### Decisions that still bind

- The German texts use the German note names, with H for B, as `docs/curriculum.md` says.
- German texts call a landmark note a *Merknote*, and say "das mittlere C" for middle C.
- A boss's song step sets its practice step and its view.
- The reading boss shows the sheet music and hides the falling notes, so the learner reads.
- A song step's `view: "sheet"` lives in lesson mode only, and draws nothing finer than a 16th.
- The learner's sheet settings come back when a sheet step ends, and the tracks' settings never change.
- A full-screen sheet is refused, since it covers the on-screen piano a phone plays on.
- A skip test takes one checking step from each of five lessons of its world, chosen by the world's author.
- A key hunt's clock never fails a step: running out counts one mistake and marks the key.
- Every lesson is written in both languages, and a world keeps to about half an hour.

## learn-both-hands

**Target:** the worlds *Both hands*, *Scales and keys*, *Chords* and *Expression* complete the first
year. Each ships eight lessons, a boss and a skip test, in English and German.

### Findings

- The four worlds follow the first four in `src/learn/course.ts`, under `src/learn/lessons/<world>/`.
- The bosses are *Ode to Joy* and *Jingle Bells* in their Beginner versions, and *Canon in D* and
  *Für Elise* in their Easy versions.
- A `play-notes` entry may be a chord, and `src/learn/steps/play-notes.ts` waits for each of its keys.
- `expressionMiss` in `src/learn/steps/play-notes.ts` judges an entry's touch and pedal on a MIDI keyboard.
- `stepsToRun` of `src/learn/lesson-run.ts` swaps a touch or pedal step for its `instead` demo and quiz on other inputs.
- A demo's note may name its `velocity`, so a demo plays soft and loud notes.
- A chord's hint is the message `hintChord` of `src/i18n/messages/learn-lesson.en.ts`, which takes its
  note names as rest parameters.
- The course walk plays a boss that plays on inside the page, on the audio clock.
- `bindSongKeys` of `e2e/lesson-walk.ts` gives a song's notes outside the default keys a computer key each.
- `englishShown` of `e2e/layout-check.ts` skips the texts a lesson writes in the page's locale, such as the German "B".
- Both course walks are a test per world, under a `test.describe` of the floor check's test name.
- A lesson's song step leaves its practice loop, wait mode and hands in the learner's player settings.

### Decisions that still bind

- A lesson that teaches a skill of `src/library/skills.ts` names it, as our songs' guides do.
- Touch strength and the pedal are judged only on a MIDI keyboard, and elsewhere a demo and a quiz replace the step.
- Touch has two levels, split at velocity 64, so a crescendo is checked as soft entries, then loud ones.
- A step judges the pedal per entry, so a pedal change is an entry with it up, then entries with it down.
- How long a key is held is taught by texts and demos, never judged, since a mouse cannot hold two keys.
- A boss's file is named after its song, and its song step uses the Easy version's practice step 3.
- A quiz's right answer moves among its places, so a world cannot be passed by guessing the first answer.

## premium-design

**Target:** the redesign from the mascot's palette passes the whole gate, in both themes and both
languages.

### Findings

- The player has one floating bar: the site's top bar with the control bar as its dock, in `src/app/shell.ts`.
- The scene's canvas fills the whole window under the bar, so a test aims its clicks at the full-window scene.
- The settings panel leaves with its entry motion reversed, and at once under reduced motion.
- The keyboard size control and the game's texts read the catalogs, under `player.settings.range` and `player.input.game`.
- "Ragtime" passes the check for untranslated text, as a word both languages share.
- Every icon in `src/ui/icons/icons.ts` is Lucide 1.71.0's path data, unchanged, as its `LICENSE.md` says.
- The song tools write `seconds` and `skills` into `public/songs/catalog.json`, and the explorer reads them first.
- `tapBeats` in `e2e/lesson-walk.ts` gives a round's first click 120 s, and the round 45 s from its count-in.
- A lesson's sound asks its context to resume on every start, in `src/learn/lesson-sound.ts`.
- A start outside a gesture is refused by the browser, and a later start inside one wakes the sound.
- `tools/landing-pictures.ts` shoots the landing pictures, and names an icon button by its label alone.

### Decisions that still bind

- Honey `--c-brand` is a fill only, and teal `--c-accent` marks state.
- Iris and orchid tell groups apart, and carry no state.
- The signals are green, red, orange and blue, for success, error, warning and information.
- A `-soft` token mixes in sRGB, so `e2e/layout-check.ts` can read its colour.
- A song preview pauses the transport, so two songs never sound at once.
- The settings panel keeps every section in one scroll, and docks at 43% of the window, from 512 to 768
  pixels wide.
- Song tags are derived at run time, and no file stores them.
- A test that fails because the look changed on purpose is updated, and no test is deleted or loosened.
- `seconds` and `skills` are optional in the catalog, so an added file is measured in the browser.
- The mascot is under MIT: the maintainer made its source picture with Google Gemini, for this project.
- The bar sits at the edge opposite the piano, as the camera's reverse and `pianoPosition` decide.
- An idle control bar fades the whole bar, and any pointer move or key brings it back.
- Closing a player panel gives Play the focus, and Stop sits to the right of Play.
- The landing pictures are shot after the gate is green.

## your-data

**Target:** one Data page saves and restores everything the learner has in this browser. In Chromium
browsers it also keeps that data synced into a folder they pick.

### Findings

- The code lives in `src/data/`. `bundle.ts` writes and reads a file, and is pure.
- `parts.ts` reads each store, and writes each part back through `restoreFile`.
- `changes.ts` is the change signal, and `folder-sync.ts` is the sync.
- `backup-file.ts` downloads a backup, for the Data page and the profile's reset alike.
- `data-view.ts` is the Data page's body, a chunk of its own, at the route `data`.
- The file is `{ format: "learn-piano-easy-data", version: 1, written, parts }`, with song bytes in base64.
- The Data page still restores an old settings file, known by its `app` field, and an old progress backup.
- `Uploads` and the history gain `all()` and `putMany()`, and `putMany` skips an entry it already holds.
- The player's settings action `yourData` opens the Data page, in place of the old export and import.
- The profile's data card keeps the reset, which saves the whole backup first, and links the Data page.
- The folder holds `learn-piano-easy-data.json`, `songs/<upload id>.<ending>` and `backups/`.
- The folder tests use the origin private file system, whose handles IndexedDB can store.
- An init script in `e2e/folder-sync.e2e.ts` makes `showDirectoryPicker` resolve that directory.

### Decisions that still bind

- A restore never removes work: progress, songs and takes only merge, and the other parts take the file's values.
- A restore writes only the keys a part owns, as `STORAGE_KEYS` of `src/data/parts.ts` lists them.
- A restore reloads the page, and carries its news in `sessionStorage` `learn-piano-easy.dataRestored`.
- A newer build's unknown part is kept in `localStorage` `learn-piano-easy.dataKept`, and every later backup carries it.
- Every store calls `noteChange(part)` after each successful write, and a new store must too.
- The backup leaves out `learn-piano-easy.cache-version` and the library view in `sessionStorage`.
- Folder sync needs `showDirectoryPicker`, and where it is missing the page shows the backup file alone.
- Each folder write goes through `createWritable()`, so a crash leaves the last good file.
- A song's file in the folder is written once, and is never rewritten or removed.
- `backups/` keeps one dated copy a day and the last seven, and a replaced file is kept there for good.
- A sync never writes over a file it did not write, or one newer than this browser's last write.
- A newly connected folder that holds a file is offered for restore before anything is written.
- Changes are written two seconds after a burst ends, and at once when the page hides.
- The sync loads through a dynamic import only where `learn-piano-easy.folderSync` is `on`.
- The page asks for `navigator.storage.persist()` when the learner saves a backup or connects a folder.
- Two browsers syncing one shared cloud folder are not merged, and the writer guard asks instead.

## one-player

**Target:** the landing page's pianos are the real 3D player in a top-down view. Each shows a slowly
moving screenshot until one click loads it.

### Findings

- `src/app/player-core.ts` builds the scene, the transport and the learner's keys into a box.
- The shell of `src/app/shell.ts` and the embed of `src/app/embed.ts` both build on that core.
- `embedPlayer(box, options)` is a chunk of its own, and returns `play`, `stop`, `run`, `load` and `dispose`.
- The embed's settings live in a `new SettingsStore(null)`, so it never touches the learner's settings.
- The glow, the bloom, the flames, the particles and `OrbitControls` are dynamic imports a setting loads.
- The embed reads its song with `readMidi` on the main thread, so the parse worker stays out of its load.
- The box is `playerBox(options)` of `src/landing/player-box.ts`, styled by `src/landing/player-box.css`.
- The hero and the rarity band both use that box, and the 2D renderer of the landing page is deleted.
- `tools/landing-pictures.ts` shoots each box's picture from the landing box itself, at 1200 by 900.
- Most of the bytes a box's click adds are three.js.

### Decisions that still bind

- Nothing but the player core creates a scene or a transport.
- The embed offers only the flat camera, at its box's full width, and follows the site's theme.
- A landing box starts on one click, and a second click on its button stops it.
- Only one landing player runs at a time, so a page holds at most one WebGL context.
- A box that scrolls out of view stops its player with `run(false)`.
- The picture moves by CSS alone, and reduced motion holds it still.
- The pictures stay out of the landing page's byte budget.
- The scripts a click adds stay within 200 kB gzipped.
- `OrbitControls` loads when the rig first takes a preset other than flat, never on a drag.
- A switch of version loads its song into the running embed with `load`, in the same canvas.
- An embed's canvas takes `touch-action: pan-y`, so a vertical swipe scrolls the page.

## one-piano

**Target:** every piano the site draws is the 3D piano, and the 2D keyboard is gone from the code.

### Findings

- The piano view is `pianoKeys()` of `src/render/piano-keys.ts`, styled by `src/render/piano-keys.css`.
- Lessons, the setup check, the landing devices band and the gallery each draw the view.
- The view frames `createPiano` of `src/render/piano.ts`, lit by `src/render/lights.ts` like the player's scene.
- `src/input/pointer-piano.ts` takes press and release callbacks, so the player and the view share its rules.
- `Mark` and `describeMarks` live in `src/ui/mark.ts`, so the landing names a mark without three.js.
- A synthetic `pointerdown` on a key map span plays nothing, so a test sends it to the canvas.

### Decisions that still bind

- The site draws one piano, as [decision 0011](decisions/0011.md) records.
- The view uses the rig's `flat` preset, so a key's top face is a screen rectangle and ignores drags.
- A view is reconfigured with `show(options)`, never rebuilt, and a lesson holds one view and one WebGL context.
- A mark tints its key in its token colour, by the share `MARK_STRENGTH` gives it.
- The frame draws only when the picture can differ, at a pixel ratio of at most 2, with no glow.
- The key map is an `aria-hidden` layer of one span per key, and the end-to-end tests find keys through it.
- Without WebGL the view shows `ui.pianoKeys.noWebgl`, and the step still hears MIDI and the computer keyboard.
- The devices band shows a picture until a click, as decision 0008 says for every landing piano.

## mascot-hand

**Target:** the mascot's rigged hand ships within its byte budget, with its license named, and its rig
puts any fingertip on any key.

### Findings

- `public/models/hand.glb` is MakeHuman's right forearm and hand: 445 vertices, 46 bones and 35 KB.
- `bun tools/hand-model.ts` rebuilds it in Blender with MPFB 2.0.18, pinned by hash, to the same bytes.
- `createHand` of `src/render/hand/hand-rig.ts` dresses a copy as a right or a mirrored left hand.
- `reach` bends a digit so its pad meets a world point, and an undefined target lets it relax.
- In the C position of `tools/hand-lab/c-position.ts`, every pad lands within 0.003 of a key width.
- `bun tools/hand-lab.ts` serves the lab, and its head comment holds the shot command for its five views.

### Decisions that still bind

- The hand is a rigged MakeHuman model posed by a solver, as [decision 0013](decisions/0013.md) records.
- `bun tools/hand-model.ts` is the only way to make `hand.glb`, and the built file is committed.
- `hand.glb` stays within 64 KB, since every visitor downloads it with the app shell.
- The hand is faceted and carries no normals. The skin material lights each face flat.
- The colours live in `src/render/hand/hand-materials.ts` alone.
- The runtime holds no measurements of the model. Each one is a marker bone's head.
- A pad that starts over half a key from its target takes `SEEK_STEPS` in one frame.
- The rig's tests load the shipped `hand.glb`, never a stand-in.

## hand-motion

**Target:** a phrase with its finger numbers becomes the motion of one or two hands, with crossings,
chords and touch, shown in the hand lab.

### Findings

- `planHands(phrase, layout)` of `src/render/hand/hand-plan.ts` returns a plan whose `poseAt(seconds)` gives each hand's pose.
- `applyPose(rig, pose)` of `src/render/hand/hand-rig.ts` places the wrist and reaches every digit.
- A phrase note is `{ pitch, at, seconds, finger, hand, velocity? }`, with times in seconds.
- The lab plays the phrases of `tools/hand-lab/phrases.ts` with play, pause, three speeds and a seek bar.
- `lab.seek(seconds)` poses the lab for a shot, and `lab.cost()` reports the plan's and the solver's time.
- Headless, the plan and the solver cost about 0.3 ms per hand per frame.

### Decisions that still bind

- The plan is a pure function of time, so a seek gives the same pose as playing.
- The caller drives the clock, and in a lesson that is the audio clock of the phrase's playback.
- A hand's anchor is the key under its thumb, and it moves only when a finger cannot reach its key.
- Fingertips land on the arc of `INSET`, and a black key is played `BLACK_INSET` in from its front.
- A crossing is read from the fingering and spans at most two white keys, and a wider step is a leap.
- Only the thumb and the little finger stretch, each one white key past its home.
- A chord never moves the anchor twice.
- Touch is read from the phrase: staccato, legato and a phrase end at a silence of `PHRASE_GAP`.
- A louder note starts its down-stroke higher, and the default velocity strikes from `HOVER`.
- Two hands keep one white key free between their thumbs' home keys, and crossed hands put the right above.
- The plan and the solver together cost at most one millisecond per hand per frame on a desktop.

## hand-lessons

**Target:** every lesson that teaches a movement of the hand shows the mascot's hand playing its phrase
with the exact fingers, slowed on request.

### Findings

- A demo note may carry `finger` and `hand`, as `PhraseNote` of `src/learn/model.ts` declares them.
- `pianoKeys().show` of `src/render/piano-keys.ts` takes a `hands` option: a phrase and a clock.
- The view imports `src/render/hand/hand-stage.ts` and loads `hand.glb` the first time a step asks.
- `Playback` of `src/learn/lesson-sound.ts` reports the phrase's time, and the hand follows that clock.
- A demo with fingers offers two toggles: "Slow" halves the bpm, and "Side view" looks from the thumb's side.
- The view's element carries `data-hand`: `loading`, `playing` or `still`.
- 22 lessons show the hand, and `TECHNIQUE_LESSONS` in `src/learn/course.test.ts` lists them.
- three.js builds as one shared chunk, so the landing player carries the hand loader's share, about 5.5 kB gzipped.

### Decisions that still bind

- A demo names a finger for every note or for none, and the hand shows only when it does.
- A demo that names a hand but no fingers is refused.
- A lesson's fingers are written in the lesson, never guessed, and they match its text.
- Where a text names no finger, the demo takes the fingering every method teaches.
- The lessons that show the hand are listed, never found.
- `sitting-at-the-piano` and `the-sustain-pedal` show no hand.
- The view with a hand frames the keys from the player's side, and never from the top.
- Slow and Side view stay as the learner left them for the rest of the lesson.
- Under reduced motion the hand still plays, and a view change cuts.
- The demo waits for the hand up to two seconds, then plays without it until it loads.
- Without WebGL the demo plays with the view's fallback text.
- The landing player's budget is 210,000 bytes, which holds the hand's share of three.js.

## film-songs

**Target:** thirty public domain pieces famous from film, five sea shanties and three tunes of our own
ship in four versions. The library groups them as its film and sea collections.

### Findings

- "At the movies" holds 37 songs and "Sea shanties" 5. `FILM` and `SEA` in `tools/our-songs.test.ts` name each slug.
- The catalog holds 705 rows, and `src/learn/game/legendary-keys.ts` holds the key of each of the 80 Hard versions.
- Four songs of ours joined the film collection: *Canon in D*, *Ode to Joy*, *Hall of the Mountain King* and *The Entertainer*.
- The three tunes of our own are *Neon Chase*, *Black Flag Jig* and *Last Horizon*.
- Their hooks share no run of five intervals with the twelve film themes the session wrote down.
- Six pieces were swapped for a reserve or a replacement, since no allowed source printed them or the meter refused them.
- *Ride of the Valkyries* gave way to *Habanera*, and Rachmaninoff's concerto to Chopin's *Funeral March*.
- The *Cavalleria rusticana* Intermezzo gave way to Beethoven's Fifth.
- The *Bumblebee*, the *Barcarolle* and *Pomp and Circumstance* gave way to *Vltava*, *Aquarium* and Mahler's Adagietto.
- The theme book `File:Orchesterwerke Romantik Themen.pdf` on Commons prints orchestral themes of 1842 to 1912. Its contents list gives each page.
- R. R. Terry's *The Shanty Book, Part I*, 1921, on Commons gives three of the shanties.
- Medium and Hard move a tune whose key has more sharps or flats than they allow.
- No session has listened to the songs.

### Decisions that still bind

- No protected theme ships, in any version or as a quote.
- A tune's notes come from a score the session reads: Wikipedia's `<score>`, Mutopia or Commons. IMSLP is never fetched.
- A tune follows its public domain source, never a film's protected arrangement.
- An orchestral piece's tune is its melody, and our versions write their own accompaniment.
- A film piece names its film in one sentence of its about text, and the app shows no film poster or still.
- A tune of our own carries `own: true` in its source, names no film, and says it is ours.
- A tune of our own quotes no run of five intervals of a protected film theme the session knows.
- A tune whose leaps break Beginner's or Easy's position limit is cut to its hook phrase.
- A tie the notation cannot write is rebarred or struck again, and a quick run it cannot write is cut to rests.
- A tune keeps its print's key, even when every version moves it.
- A tune with notes shorter than a quarter is written in longer lengths, in proportion.
- A work whose first print no allowed source dates takes its earliest dated print read.
- The collections are `film` and `sea`, after `christmas`.

## many-locales

**Target:** a locale may lack any text and shows the English instead. Each locale loads only its own
texts, and the tools and checks of a translation pass exist.

### Findings

- `src/i18n/locale-table.ts` holds thirteen rows, and only `en` and `de` ship. Both are `complete`.
- English is in the main bundle, and each other locale's catalog is its own chunk.
- A world loads its lesson texts per locale through `World.loadTexts`, and English stays in the world's chunk.
- `bun run i18n` runs `status`, `work` and `stamp` of `tools/i18n.ts`. German has no stamps, so it reads all stale.
- `src/i18n/translation-rules.test.ts` checks script, arguments, plurals, marks and isolation of every translation file.
- The pseudo-locale `en-XA` found every hard-coded text, and each moved into the catalogs in English and German.
- Every layout holds text 40% longer, and the layout checks run in `en`, `de` and `en-XA` at every width.
- Each script has a system font stack under `:root:lang(<code>)` in `src/ui/tokens.css`. No new font ships.
- A bar slot of `src/learn/game/bar-slot.ts` fades in after its first read. A test measures a `learn/` page once it is ready.
- An e2e file that reads a German text in Node loads every catalog first, as `e2e/site.e2e.ts` does.

### Decisions that still bind

- The locale table is the one home of a locale's facts, and every list elsewhere derives from it.
- `shipped` gates everything a visitor meets, and `complete` marks the locales that must hold every text.
- A translation is `Translation<T>`, a deep partial of the English. A function or an array is translated whole or not at all.
- The fallback merges once, when a catalog or a world's texts load. `messagesOf` and `textsOf` throw before the load.
- Only `tools/`, tests and e2e files import `src/i18n/all-catalogs.ts`, and a test holds `src/` to that.
- A translated list of another length than the English shows the English list.
- A text's id is its path, and a stamp records the first 12 hex digits of the SHA-256 of its English.
- A guide's translation is `tools/our-songs/<slug>.<locale>.ts`, and the German block stays in the song module.
- The legal notice and the privacy text stay English and German only.
- The rules test skips English and German, and names one test per locale from its English name.
- `en-XA` sits beside the table, never in it. The release build writes no page of it.
- A joining script gets no `letter-spacing`, and Han text gets no italic.
- Solfège is written in the locale's script and spelling, and the naming setting's `auto` follows the live locale.
- Sorting uses `collator` of `src/i18n/format.ts`, with numbers compared as numbers.
- A shipped locale adds its own layout run at 360 and 1280 pixels in its own goal.
