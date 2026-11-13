<!-- looper:begin playbook v1 -->
# Playbook

Traps a session paid for once, so the next one does not. **It is not a changelog.**

- One trap per bullet: a bold claim first, then why, then what to do.
- A bullet names a file in the tree by its path from the repository root.
- Edit a bullet when it stops being true, and delete it the day it no longer applies.
- What does not go here: a session's narrative, a measured number, or a rule that already has a home.
<!-- looper:end playbook -->

## Tooling
- **Write and Edit turn a typed `⁨` into the raw isolate character.** A translation file then hides
  its isolates, though `src/i18n/messages/*.ar.ts` writes them as escapes. A typed backslash escape
  turns raw too, and a doubled backslash stays doubled. Write the backslash itself as the escape
  `u005C` behind a backslash, followed by `u2068`. Then Grep the file for a raw U+2068.

- **`bun run shot` on a page of the default locale may show it in German.** The site moves a first
  visit to the browser's language, which follows the system's. Pass `--locale en-US` or
  `--locale de-DE` to `tools/shot.ts` for each locale you look at.
- **`bun run preview` fails with `EADDRINUSE` after a full build.** Another server may hold port 4173.
  Run `bun tools/dev.ts --preview --port 0 --no-tls --out .agent-tmp/<goal>` in the background. Pass
  its `Local:` URL to `--base` of `tools/shot.ts`, so each shot skips its own build.
- **`bun run build` fails with `ENOENT` or `EBUSY` on `dist`.** Another session's build or server is
  using `dist` at the same time. Pass `--out .agent-tmp/<goal>-dist` to `tools/build.ts`, and delete
  that folder afterwards.
- **A query in `--base` of `tools/shot.ts` never reaches the page.** The tool opens `--path` resolved
  against the base, and resolving `./` drops the query. Put the query in `--path`, such as
  `--path "./?phrase=chords"`.
- **A synthetic `pointerdown` on a key of the piano view plays nothing.** `src/render/piano-keys.ts`
  finds the key by a ray from the pointer's point on its canvas, and its key map's spans take no pointer.
  In a `--eval` of `tools/shot.ts`, send the event to the canvas, with `clientX` and `clientY` inside
  the span's `getBoundingClientRect()`.
- **A `--click` of `tools/shot.ts` that first wakes a lesson's audio can stall for seconds.** The page
  loads the sound set inside that gesture, so a `--wait` after it lands far later in the phrase. Click
  "Play again" once to wake the audio, then click it again before the `--wait` you time.
- **A goal check is red with "test … did not run and pass" while every test passes.** Bun's reporter
  omits `(pass)` lines when an AI agent runs it. Import `test` from `src/testing.ts`, never from
  `bun:test`, because it prints the line itself.
- **`tsc` reports dozens of "implicitly has type 'any'" errors across unrelated files after a catalog edit.**
  A catalog type that names the settings' ids, while `src/settings/schema.ts` reads a value of
  `src/i18n/locale.ts`, makes the catalogs' type depend on itself. Keep the schema free of runtime
  imports from `src/i18n/`, as its `language` entry does.
- **`looper render` can write another session's goal edits into `docs/goals/README.md`.** It reads
  every goal file in the tree, committed or not. When the README already holds uncommitted edits,
  never render or restore it in place, since either loses them. Render in a detached worktree under
  `.agent-tmp/`, then stage its README by blob with `git hash-object -w` and `git update-index --cacheinfo`.
- **A commit took another session's message.** Both sessions wrote `.agent-tmp/commit-msg.txt`, and the
  later write won between the edit and the commit. Name a scratch file after its goal or slice, such as
  `.agent-tmp/msg-one-player.txt`.
- **A refused commit can still delete its message file.** In `git commit -F <file> | tail && rm <file>`,
  the pipe's status is `tail`'s, so `rm` runs after `tools/git-hooks/commit-msg` refuses. Commit alone,
  and delete the file in a later call.
- **The `commit-msg` hook rejects a one-line last paragraph such as `Trade-offs: …`.** Git reads a
  closing `Word: text` line as a trailer, and `tools/git-hooks/commit-msg` refuses every trailer. Start the last paragraph
  with a plain sentence, such as "The cost is …".
- **A site's license can allow a fetch while its `robots.txt` refuses agents by name.** OpenGameArt
  lists `Claude-Code`, `Codex` and `Cursor` under `Disallow: /`. Read a source's whole `robots.txt`
  for agent names before a goal plans a fetch tool for it.
- **A song module the meter accepts can still play the wrong tune.** The meter checks a version
  against the module's own `tune`, which a subagent writes from memory. Read the printed score in the
  song's Wikipedia wikitext (`action=raw`, its `<score>` block). Compare it note for note with the `tune`
  in `tools/our-songs/<slug>.ts`.
- **A tune that leaps more than an octave every few bars cannot pass Beginner or Easy.** The meter
  reads those versions' tune in the right hand alone, and allows two hand moves in eight bars. Count a
  tune's leaps before briefing its writer, and cut a leaping tune to its hook phrase, as
  `tools/our-songs/the-blue-danube.ts` does.
- **A new song of ours turns `every_legendary_version_has_its_song_key` red at the gate.** Its Hard
  version needs a key in `src/learn/game/legendary-keys.ts`, and only that test notices. Paste the rows
  its failure prints as the batch lands, and count the e2e tests that read the library's totals.
- **A chromatic tune cannot pass Beginner or Easy, in any key.** Those versions allow three notes
  outside the key in any four bars, and moving the key moves the count with it. Count a tune's
  accidentals before briefing its writer, and swap a chromatic one. `docs/findings.md` § `film-songs`
  records the *Flight of the Bumblebee*'s swap.
- **An edit of `tools/our-songs/<slug>.<locale>.ts` never reaches the site by itself.** The app reads
  `public/songs/ours/<slug>/guide.json`, which only `tools/make-our-songs.ts` writes, and the build
  stays green. Run `bun tools/make-our-songs.ts` after a guide's text changes, and commit its JSON.
- **Commons' API answers "too many requests" after about twenty quick calls.** A shell `sleep` between
  them is refused by the guard. Pace them in a small Bun script under `.agent-tmp/`, run in the
  background, and fetch files through `Special:FilePath`, which the limit spares.
- **A `<score>` in `\relative` mode can read an octave off,** as *Morgen, Kinder* seems to leap a fifth
  up in bar 1. A score with chords or `<< >>` blocks hides the melody's octave too. Settle the octave
  with the page's Commons MIDI, read with `readMidi` from `src/midi/smf-read.ts`.
- **A German Wikipedia title with an umlaut fetched by `curl` returns Wikimedia's error page.** The
  file still has bytes, so a `grep` for `<score>` finds none and raises no error. Percent-encode the title, such as
  `O_du_fr%C3%B6hliche`, and check each file's head before reading it under `.agent-tmp/`.
- **A carol's Wikipedia page may have no `<score>` block,** as *The First Noel* has none in any
  language. Fetch the page's MIDI from Commons with `Special:FilePath/<name>.mid`. Read its notes with
  `readMidi` from `src/midi/smf-read.ts`. Pair each note on with its note off, since a held tune
  note hides under a moving lower voice.
- **A tune with neither `<score>` nor MIDI may still have a printed page on Commons,** as *O Holy
  Night* has Schirmer's print of 1871. Crop each voice staff with `magick <png> -crop`, enlarged, and
  read it with Read. IMSLP is no fallback, since its `robots.txt` refuses `/images/` to every agent.
- **A song module checked in a tree with uncommitted meter edits may fail at HEAD.** `tools/check-our-song.ts`
  reads the tree's `tools/song-meter.ts`, and the writer rewrites every catalog row. Check, write and
  build in a detached worktree under `.agent-tmp/`, after `bun install --frozen-lockfile` there. Add
  `ourSongs` imports only once every module exists, or the subagents' checker fails to load.
- **A song module the build and the meter accept can still fail `tsc` at the gate.** `bun run build`
  bundles only the app, so it never type-checks `tools/our-songs/`. Run `bun x tsc` once a batch of
  modules lands, since an unchecked `patterns[chord]` passed to a function is refused.
- **Hymnary.org refuses a plain `curl`.** A browser user agent to get past it is denied as bot-check
  circumvention. Take a tune's notes from Wikipedia's `<score>` blocks for `tools/our-songs/`.
- **Wikimedia answers a burst of calls with an HTML error page.** A dozen quick API or upload requests
  trip its rate limit, and the saved "PDF" is then that page. Ask for many titles in one API call, and
  check each download with `file` before rendering it under `.agent-tmp/`.
- **A stacked chord on a score page is easy to misread by a third.** The heads of a chord touch, so the
  eye cannot tell lines from spaces. Measure the staff lines' pixel rows and place each head against
  them before you name its pitch, as the tune of `tools/our-songs/handel-sarabande.ts` was read.
- **The Read tool cannot open a scanned score's PDF on this machine.** It needs `pdftoppm`, which is
  not installed. Render the page with Ghostscript (`gswin64c -sDEVICE=pnggray -r150 -dFirstPage=<n>`)
  under `.agent-tmp/`, crop it with `magick`, and read the PNG.
- **A new landing picture's first run of `tools/landing-pictures.ts` fails on a 404.** The page asks
  for the picture the run is about to make, and `tools/shot.ts` exits 1 on that error. Copy an
  existing picture under each new name first, then run the tool over the copies.
- **A stylesheet's `url()` to a file of `public/` fails the bundle with "Could not resolve".** Bun's CSS
  bundler resolves every URL from the CSS file's source folder. Bundle a page through `bundlePage` in
  `tools/build.ts`, whose `PAGE_EXTERNAL` leaves such a URL as it is.
- **A unit test that reads every built page one by one can time out only in `looper verify`.** It passes
  alone in under a second, but the full run loads the disk past bun's 5 s limit. Read the files with
  `Promise.all`, as `build_uses_only_relative_urls` in `tools/build.test.ts` does.
- **An e2e test's first wait after `page.goto` can miss Playwright's 5 s default under load.** Song walks
  in other workers slow the page's first draw. Give that wait a longer `timeout`, as `onStep` in
  `e2e/lesson-walk.ts` does.
- **A kept word that ends in a Han character breaks the Chinese spacing rule.** The rules test writes a
  kept word as `X`, which then touches the next Han character. Keep only Latin words in `src/i18n/typography.ts`.
- **A writing subagent that starts its own subagents can hand back while they still edit.** Its report
  then says nothing landed, and a second writer sent to the same files collides with them. Tell every
  writer never to start a subagent, and split a large sweep such as `tools/our-songs/` across writers yourself.
- **A lesson writer's green rules test proves nothing about its own files.** `loadUnits` in `tools/i18n.ts`
  finds a world's translations through its `index.ts`, which the session edits after the writers end.
  Add the locale's line to each `index.ts` first, or run the rules test again once it is there.
- **A short kept word placed before a longer title breaks that title's texts.** The rules test masks
  kept words in list order, so `Mary` leaves `Had a Little Lamb` as stray Latin. Put a short word such
  as `Mary` or `Elise` after every title that holds it in `src/i18n/typography.ts`.

## Rendering

- **A test stuck waiting for sound is often a refused audio context, not a slow load.** Chrome refuses
  a context woken outside a gesture, and a kept promise of that wake never settles. Read the trace's
  console for "AudioContext was not allowed to start" before raising a limit. Wake the context on
  every call, as `src/learn/lesson-sound.ts` does.
- **A computer key pressed inside a dialog plays no note.** `attachKeyboard` in `src/input/keyboard.ts`
  skips every key inside a `dialog`, so a text field there types. A dialog that listens for notes
  passes itself as `playsIn`, as `src/learn/onboarding.ts` does.
- **`bun run shot --click Continue` hits the map's link under an open dialog.** The page under a modal
  still answers a role query in `tools/shot.ts`. Click the dialog's own button with `--eval` and a
  selector inside `dialog`.
- **A closed popover shows when its class sets `display`.** The browser hides a closed popover with a
  user-agent rule, and any author rule beats it, whatever its layer. Set `display` only under
  `:popover-open`, or where the popover is meant to show closed, as `src/site/site.css` does.
- **A player svg inside a box with no width draws nothing under the site.** `src/ui/base.css` gives
  every svg `max-width: 100%`, and an absolute box with no width makes that zero. Set `max-width:
  none` on such an svg, as `.sheet svg` in `src/sheet/sheet-view.css` does.
- **A `hidden` button of the button component still shows.** Its `.btn` class sets `display`, which
  beats the browser's rule for `[hidden]`. Toggle a class with a rule of its own, as the Guide
  button's `is-absent` in `src/app/shell.css` does.
- **A hidden view whose root class sets `display` stays on screen above the next view.** The gallery's
  grid did, and the map below it then scrolled the page far down. `.site-main > [hidden]` in
  `src/site/site.css` hides every view, so keep that rule.
- **The far lanes fade to white while the background is dark.** three.js's `Fog` copies the colour it
  is given, so a later change to `scene.background` never reaches it. `src/render/scene.ts` copies the
  colour into `fog.color` on every change.
- **A query of `NoteWindow` from `t` to `t` finds nothing.** The window is `[from, to)`, so one with no
  width is empty. To find the notes sounding at `t`, ask from `t` to `t + 1e-6`, as `followNotes` in
  `src/render/scene.ts` does.
- **A shader's local named `half`, `step`, `round` or `inverse` fails to compile.** `half` is reserved in
  GLSL ES, and the rest name built-in functions. Pick another name, as `src/render/flames.ts` does.
- **A three.js class used only behind `import()` still grows the landing player's scripts.** Bun builds
  three.js as one shared chunk, which holds every class any chunk uses. Measure the embed's chunks
  against `LANDING_PLAYER_BUDGET_BYTES` in `tools/build.test.ts` before a new three.js addon lands.

## End-to-end tests

- **`bun x playwright test` fails with "did not expect test() to be called here" before any test runs.**
  A shell whose folder is spelled with a lower-case drive, as `e:\`, fails this way on Windows, and
  the e2e step of `looper verify` with it. The same run from the upper-case spelling passes. Start a
  test of `e2e/` or the gate as `cd "E:/learn-piano-easy" && looper verify`.
- **A layout check of a `learn/` page can fail on a contrast near 1 to 1 that no colour causes.** The
  bar slot of `src/learn/game/bar-slot.ts` fades in after its first read, and a measure two frames
  after load can catch it mid fade. Pass `ready: '.bar-slot[data-ready="true"]'` to `checkLayout`.
- **A layout check can flag a text as clipped that a shot of the same page shows whole.** The font's
  `font-display: optional` in `src/ui/base.css` leaves a test's page in the fallback face, while a shot
  waits for the font.
  Measure with the font left out of the stack, as `"Plus Jakarta Sans Fallback", "Segoe UI"`.
- **A test that fails only under load may be a race in the app, not a short limit.** The setup opened
  in the gap between Back and the swap in `src/site/router.ts`, then closed for good. Repeat the test with
  `--repeat-each 24 --workers 8`, and log what opens and when, before you raise a timeout.
- **A limit on a step that sounds also counts the sound set's first load.** Under four browsers that
  load ran past 45 s, and the rhythm round failed as "phase idle". Start a step's limit once its own
  motion begins, as `tapBeats` in `e2e/lesson-walk.ts` does.
- **A coordinate in a test of the player moves with its layout.** The scene fills the window under the
  floating bar, so a click or drag aims below the bar. Read the bar's box, as `e2e/note-scroll.e2e.ts`
  does, or measure the point again with `bun run shot`.
- **A song step that plays on fails in the course walk and passes alone.** An earlier lesson's practice
  loop stays in the settings, and the next song starts at that loop's lead-in. Press Home before Play,
  as `playOnTime` in `e2e/lesson-walk.ts` does, and bisect a walk by its earlier lessons.
- **A check is killed after looper's `[checks] timeout`, 600 s by default, whatever its tests' own timeouts.**
  A green `looper verify` can hide it, and acceptance then refuses the goal. Time a growing e2e file's
  check with `looper check --name <id>`. Split one long test into a test per world inside a
  `test.describe` of its name, as `e2e/learn-layout.e2e.ts` does, so the workers share it.
- **Two e2e runs at once both run slow.** Each drives the browsers `playwright.config.ts` sets, and the
  CPU is shared with them and with other projects' loops. Time a check alone, after `looper exec list` shows no other run.
- **A parser that learns a new spelling turns tests that used it as bad input red.** The German `H2`
  became a note, and `src/keyboard/range.test.ts` and `e2e/keyboard.e2e.ts` had typed it as text that
  is no note. Grep the tests for the new spelling, and pick bad input no locale reads, such as `J2`.
- **A test that waits out one dialog to find the next sees none.** `close()` drops `open` at once, and
  the `close` event that opens the next one fires a task later. Wait until the closed one leaves the
  page, as `endMoments` in `e2e/game.e2e.ts` does.
- **A page that draws after a read fails the layout check with a shift.** A lazy part, such as the top
  bar's slot or a view's chunk, moves what showed before it. Build its frame with the shell, or hold
  its room, as `.learn-page` in `src/site/site.css` does.
- **A patch of `AudioScheduledSourceNode.prototype.start` never sees a sample play.** A buffer source
  declares a `start` of its own, which hides the inherited one. Patch both prototypes, as
  `e2e/landing.e2e.ts` does.
- **A click in a test can scroll an element it scrolled to off screen.** Playwright moves a target
  out from under the sticky top bar, which may push a canvas that runs only while shown out of view.
  Scroll that element into view again after the click, as the rarity test in `e2e/landing.e2e.ts` does.
- **A click on the control bar fails under load with "#app intercepts pointer events".** The bar fades
  after `IDLE_MS` of playing, and a click where the pointer already rests sends no move to wake it. Move
  the pointer first with `page.mouse.move`, as `e2e/transport.e2e.ts` does.
- **A click on a note right after a load misses it.** The camera glides into its frame for about a
  second, and retried clicks can land as a double-click. Wait for the camera once, then click once, as
  `e2e/fingering.e2e.ts` does.
- **A loaded song rests before 0, not at 0.** It waits its lead-in before its first note, and the
  label reads 0:00 all the while. A test that clicks a resting note sets the lead-in to 0, as
  `e2e/fingering.e2e.ts` does. A test of song time reads the slider's `aria-valuenow`.
- **An e2e test where every click takes about 3 s means frames take about 200 ms.** Headless Chromium
  draws WebGL in software outside Windows, and each click waits on several frames. On Windows, check
  that `playwright.config.ts` still passes its GPU flags. Count `linkProgram` calls per second
  in an init script, since rebuilt shaders, such as the bloom of `src/render/glow.ts`, are the usual cause.
- **A gate's verify is void while another session works.** Its uncommitted edits void the e2e step
  of `tools/looper/`'s verify. Find its job with `looper exec list`, wait on it with `looper exec wait <id>`, and rerun verify on a
  clean tree.
