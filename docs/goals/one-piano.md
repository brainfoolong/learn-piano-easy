---
looper: 1
title: One piano
summary: "Every piano the site draws is the 3D piano, and the 2D keyboard is gone from the code."
context: [docs/decisions/0011.md, src/render/piano.ts, src/render/scene.ts, src/render/piano-keys.ts, src/learn/steps/keys.ts]
stages:
  - id: 1
    title: The 3D piano view for a page
    status: done
  - id: 2
    title: Lessons and the setup check play on the 3D piano
    status: done
  - id: 3
    title: The landing band plays the 3D piano, and the 2D keyboard is deleted
    status: done
  - id: 4
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: piano-keys
    stage: 1
    name: the 3D piano view names its marks and spans its reach
    run: [bun, test, src/render/piano-keys.test.ts]
    tests: [marks_are_named_for_a_screen_reader, the_reach_spans_the_shown_keys, a_mark_takes_its_token_colour]
  - id: lesson-on-3d-piano
    stage: 2
    name: a lesson step plays on the 3D piano
    run: [bun, x, playwright, test, e2e/lesson-keys.e2e.ts]
    tests: [a_step_shows_the_3d_piano, a_touch_on_a_3d_key_plays_the_step]
  - id: devices-on-3d-piano
    stage: 3
    name: the landing band loads the 3D piano on a click
    run: [bun, x, playwright, test, e2e/landing.e2e.ts]
    tests: [the_devices_band_loads_the_piano_on_a_click]
---

# One piano

## Why

The site draws two pianos. The player and a lesson's song steps use the 3D piano. Every other lesson
step, the setup check, the landing page's devices band and the gallery use a 2D SVG keyboard. A learner
sees a different piano from step to step, and two pianos are kept in step by hand.

The reason for the 2D keyboard was its weight. The service worker precaches every code chunk, so after
the first visit the 3D piano costs no download. The one place that still pays on a first visit is the
landing page, and decision 0008 already answers it: a picture until a click.

[decision 0011](../decisions/0011.md) records the choice.

## Standing decisions

- **The model is `createPiano` of `src/render/piano.ts`.** The view below adds no second piano. It frames
  the same meshes, materials, layout and key labels as the player.
- **The view is `src/render/piano-keys.ts`, `pianoKeys()`.** It is the player's piano alone, without
  notes, lanes, transport or settings store. It owns a renderer, the player's lights, a camera rig and
  one piano. It is a separate host because a step needs no lanes, and the player scene's 1100 lines would
  carry them all in.
- **The lights move to `src/render/lights.ts`,** which `scene.ts` and the view both call, so both pianos
  are lit alike.
- **The camera is the rig's `flat` preset** of `src/render/cameras.ts`, as the landing page's players
  use it, so the lesson piano looks like the landing's. It looks straight down without perspective, the
  keys span the box from edge to edge, and it ignores drags. A key's top face is then a screen
  rectangle, and the key map is plain maths. The cost is that the case's cheeks fall outside the
  picture. The view's height follows its width by the frame's aspect, and a phone gets narrow keys.
- **A view is reconfigured, never rebuilt.** `show(options)` takes the 2D keyboard's options: `label`,
  `range`, `marks`, `markNames`, `fingers`, `fingerName`, `names`, `nameOf`, `pressed`, `reach`,
  `onPress`, `onRelease`. It drops the last options' signal subscriptions. A lesson makes one view and
  hands it to each step, so a lesson holds one WebGL context. `dispose()` frees it.
- **A mark tints its key** through `markIncoming` in the mark's token colour: `next` is `--c-brand`,
  `correct` is `--c-success-vivid`, `mistake` is `--c-mistake`. The light theme's `--c-success` is a
  text green, too dark to read as green on a key. The tint is far stronger than the player's, by
  `MARK_STRENGTH`. The colours are read with `getComputedStyle` and read again when the site theme or the
  colour scheme changes, as `embed.ts` does.
- **A held key presses** through `press` in the player's input colour, under any mark's tint.
- **Names are the player's key labels,** from `keyNameText` of `src/render/key-labels.ts`. `c` names
  every C with its octave, and `white` every white key.
- **A finger is a label sprite** from `src/render/labels.ts`, in a ring of its mark's colour, in a band
  above the keys. A white key's ring sits in the row nearer the keys and a black key's in the row
  behind, so neighbours never overlap. The band is in the frame whenever `fingers` is given. **The
  reach is a thin bar** on the front rail, under the white keys' front edge, spanning the reached keys.
  The rail is always in the frame, so no finger or reach coming or going moves anything.
- **The pointer plays through `keyAt`,** one key per pointer, sliding from key to key.
  `src/input/pointer-piano.ts` is generalised to take press and release callbacks, so the player and the
  view share its rules.
- **The frame draws only when the picture can differ,** as the scene's rule says: a setter, a resize, a
  theme change or a key's spring. A still step costs no render. The pixel ratio is capped at 2, with no
  glow, particles or fog.
- **The key map is the view's test seam and screen-reader text.** An `aria-hidden` layer holds one empty
  `span.piano-keys__key` per shown key, with `data-pitch`, at its key's projected top face. It is placed
  on a resize or a new range, never per frame, and takes no pointer. Each span mirrors `data-mark`,
  `data-held` and `data-finger`. The host element carries `data-first` and `data-last` of the range, and
  `data-reach-first` and `data-reach-last` of the whole reach while its bar shows. A polite live text
  names the marked keys, with `describeMarks`.
- **Without WebGL the view says so** in a short text in its place, from the catalog's new
  `ui.pianoKeys.noWebgl`. The step still hears MIDI and the computer keyboard.
- **`Mark` and `describeMarks` live in `src/ui/mark.ts`,** because the staff uses `Mark` too, and the
  landing then never pulls three.js to name a mark.
- **The landing devices band follows decision 0008:** a picture of the view until a click, then the view
  loads with `import()` and plays. `tools/landing-pictures.ts` makes the picture in both themes. The
  landing page stays within its byte budget.
- **The lesson view's chunk imports the view statically.** It is precached, and a lesson always needs it.
- **Lanes:** stage 1 runs alone. Stage 2 needs stage 1's view and touches the learn files and their e2e
  tests. Stage 3 touches the landing, the gallery's leftovers and the docs. Stages 2 and 3 share no file
  but `docs/findings.md`, so they run in order.

## Stages

### 1. The 3D piano view for a page

**Does:** builds `pianoKeys()` with every option the 2D keyboard has, and shows it in the gallery.
**Gate:** none.

- [x] Lights move to `src/render/lights.ts`, and `scene.ts` calls it. `src/render/scene.ts:219`
- [x] `src/input/pointer-piano.ts` takes press and release callbacks, and `player-core.ts` passes the bus's. `src/input/pointer-piano.ts:23`
- [x] `Mark` moves to `src/ui/mark.ts`, and every importer follows. `src/ui/components/keyboard.ts:37`
- [x] `src/render/piano-keys.ts` with `pianoKeys()`, `show`, `dispose`, the key map and the live text. `src/render/piano-keys.ts:1`
- [x] Its styles beside it. `src/render/piano-keys.css:1`
- [x] `ui.pianoKeys.noWebgl` in English and German. `src/i18n/messages/en.ts:1`
- [x] The three unit tests of the `piano-keys` check. `src/render/piano-keys.test.ts:1`
- [x] The gallery's keyboard section shows the view in every state. `src/ui/gallery/keyboard.ts:1`
- [x] Look at it with `bun run shot` on the gallery, in both themes and on a phone.

### 2. Lessons and the setup check play on the 3D piano

**Does:** the lesson view makes one view and hands it to its steps, and the setup check uses one too.
**Gate:** `src/render/piano-keys.ts` exists and the gallery shows it.

- [x] The lesson view makes the view on the first step that needs keys, and disposes it at the end. `src/learn/lesson-view.ts:106`
- [x] `StepHost` hands it to a step. `src/learn/steps/step.ts:1`
- [x] `listeningKeys` shows its options on the host's view. `src/learn/steps/keys.ts:47`
- [x] The demo step shows its notes on it. `src/learn/steps/demo.ts:29`
- [x] The setup check's keys are a view. `src/learn/onboarding.ts:104`
- [x] The e2e key press clicks the key map's span. `e2e/lesson-walk.ts:102`
- [x] The e2e tests that read 2D keys read the key map. `e2e/learn.e2e.ts:156`, `e2e/lesson-keys.e2e.ts:36`, `e2e/game.e2e.ts:185`
- [x] E2e tests `a_step_shows_the_3d_piano` and `a_touch_on_a_3d_key_plays_the_step`. `e2e/lesson-keys.e2e.ts:1`
- [x] Every mark reads clearly on a key in both themes. `src/render/piano-keys.ts:115`
- [x] The view frames the piano with the camera rig's flat preset, as the landing players do. `src/render/piano-keys.ts:1`
- [x] Look at a find-key, a play-notes and a demo step with `bun run shot`.

### 3. The landing band plays the 3D piano, and the 2D keyboard is deleted

**Does:** the devices band shows a picture until a click, and every trace of the 2D keyboard goes.
**Gate:** no file but the gallery and the landing imports `src/ui/components/keyboard.ts`.

- [x] The devices band: a picture, and the view on a click. `src/landing/devices.ts:41`
- [x] The picture in both themes. `tools/landing-pictures.ts:1`
- [x] E2e test `the_devices_band_loads_the_piano_on_a_click`. `e2e/landing.e2e.ts:1`
- [x] The gallery test reads the view. `e2e/design.e2e.ts:37`
- [x] Delete `keyboard.ts`, `keyboard.css` and `keyboard.test.ts`. `src/ui/components/keyboard.ts:1`
- [x] The floor's `keyboard-2d` check goes. `docs/goals/README.md:244`
- [x] The site design's component table names the view. `docs/site-design.md:147`
- [x] The findings and the playbook name the view, not the 2D keyboard. `docs/findings.md:707`, `docs/agent/playbook.md:17`
  - [x] The playbook's pointer trap names the view. `docs/agent/playbook.md:17`
  - [x] The findings' lines 692, 709, 710, 765 and 870 name the view. `docs/findings.md:709`
- [x] The feature list says every piano is the 3D one. `docs/reference/features.md:145`
- [x] The view's key names and finger digits read clearly at a lesson's width. `src/render/piano-keys.ts:240`

### 4. the goal is verified once, and every failure is fixed

- [x] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 to 3 are committed. The 2D keyboard is deleted, and lessons, the setup check, the landing band
and the gallery draw the 3D view in the rig's flat preset. The first `looper verify --all` passed the
unit tests, all 149 e2e tests, lint, prose, layout and links. The e2e result was void, because other
sessions changed files during the run. tsc was red only on `tools/hand-model.ts`, the `mascot-hand`
goal's uncommitted file. No failure is this goal's.

### Next

**Stage 3's last item, then stage 4.** Files: `docs/findings.md`. Gate: `docs/findings.md` and
`tools/hand-model.ts` have no other session's uncommitted change.

- [x] Findings line 692 says the view's 88 keys, not "The 88-key keyboard". `docs/findings.md:692`
- [x] Lines 709 and 710 give the view the live text, the keys that are no focus stops, and the shared `Mark`. `docs/findings.md:709`
- [x] Line 765 says "Every landing piano", and the devices band shows a picture until a click. `docs/findings.md:765`
- [x] Line 870 says the piano view, not the on-screen keyboard. `docs/findings.md:870`
- [ ] Run `looper verify` once more, and it is green. `docs/goals/one-piano.md:164`

Expected red: none of this goal's.

### Backlog

- A lesson step could show its notes falling towards the keys, now that the piano is the player's.
