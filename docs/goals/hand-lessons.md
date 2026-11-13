---
looper: 1
title: The hand shows the technique in lessons
summary: "Every lesson that teaches a movement of the hand shows the mascot's hand playing its phrase with the exact fingers, slowed on request."
context: [src/learn/model.ts, src/learn/steps/demo.ts, src/learn/lesson-sound.ts, src/render/piano-keys.ts, src/learn/lesson-view.ts, src/render/hand/hand-plan.ts, docs/curriculum.md]
stages:
  - id: 1
    title: A demo note names its finger and hand
    status: done
  - id: 2
    title: The piano view plays the hand in a demo step
    status: done
  - id: 3
    title: The scale and touch lessons show the hand
    status: done
  - id: 4
    title: The first melodies, both hands and expression lessons show the hand
    status: open
  - id: 5
    title: The chord lessons show the hand, and the docs say so
    status: open
  - id: 6
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: demo-fingers
    stage: 1
    name: a demo names a finger for every note or for none
    run: [bun, test, src/learn/model.test.ts]
    tests: [a_demo_names_a_finger_for_every_note_or_none, a_demo_finger_is_one_to_five]
  - id: demo-hand
    stage: 2
    name: a demo with fingers shows the hand, and slow halves its tempo
    run: [bun, x, playwright, test, e2e/lesson-keys.e2e.ts]
    tests: [a_demo_with_fingers_shows_the_hand, the_slow_button_plays_the_demo_at_half_speed, a_demo_without_fingers_shows_no_hand]
  - id: technique-lessons-fingered
    stage: 3
    name: every technique lesson's demos name their fingers
    run: [bun, test, src/learn/course.test.ts]
    tests: [every_technique_lesson_demo_names_its_fingers]
---

# The hand shows the technique in lessons

## Why

Twenty-two lessons teach a movement of the hand. It may be a five-finger position, a stretch, the thumb
under, a finger over, a chord shape, a broken chord or a touch. Their demo steps light the keys and play the
sound, but never show the hand that plays them. With `hand-motion` done, a demo can show the mascot's
hand playing its phrase with the exact fingers. The learner can slow it down and look from the side.

## Standing decisions

- **A demo note may name its finger and hand:** `finger?: Finger` and `hand?: Hand` on `PhraseNote`,
  with the types from `src/theory/fingering.ts`. The hand defaults to `right`. A demo names a finger for
  every note or for none. The hand shows only when it does, so every other demo stays as it is.
- **Fingers are written in the lesson, never guessed.** `fingerHand` of `src/theory/fingering.ts` is not
  used for lessons, because a lesson teaches one exact fingering, and its text names it.
- **The demo's fingers match its text.** Where the text says "fingers 1, 2 and 3", the notes say so. A
  lesson whose text and natural fingering disagree changes neither silently: the text wins, as the
  curriculum's author chose it.
- **The piano view plays the hand.** `pianoKeys().show` takes a `hands` option: a phrase and a clock.
  The view loads the rig and `hand.glb` with `import()` the first time a step asks. It plans the phrase
  with `planHands`, and draws every frame while the hand moves. A still view still costs no render.
- **The clock is the phrase's audio clock.** `Playback` of `src/learn/lesson-sound.ts` reports the
  phrase's time, so the hand presses each key as its note sounds.
- **The view with a hand frames the keys from the player's side,** about 35 degrees above them. The
  hand's whole range and its wrist are in view. A "Side view" toggle turns to a view from the thumb's
  side, a little above the keys, where the thumb's pass under the palm shows. The top-down frame
  hides that pass, so a step with a hand never uses it. `src/render/hand/hand-frame.ts` places both.
- **"Slow" plays the demo at half its tempo,** sound and hand together, by halving the bpm the phrase
  plays at. Slow and Side view are toggles, and each stays as the learner left it for the rest of the
  lesson. A toggle the learner can undo costs nothing and spares a lesson stuck at half speed.
- **Slow and Side view show only on a demo with fingers,** so every other demo stays as it is.
- **Under reduced motion the hand still plays,** because the motion is the lesson. The camera never
  animates between views: a view change cuts.
- **The hand loads before the phrase plays.** The demo waits for the model up to two seconds. If it
  has not loaded by then, the phrase plays without it. The hand joins where the phrase is once it
  loads, since its pose is a function of the clock.
- **Without WebGL the demo plays as today,** with the view's existing fallback text.
- **The test seam is `data-hand`** on the view's element: `loading`, `playing` or `still`.
- **New texts are English and German only,** with new keys, as decision 0012 says: `demo.slow`
  ("Slow", "Langsam") and `demo.side` ("Side view", "Seitenansicht").
- **The lessons that show the hand are listed, never found.** Stage 3: `the-c-major-scale`,
  `finger-over-the-thumb`, `g-major`, `f-major`, `legato` and `staccato`. Stage 4:
  `right-hand-c-position`, `left-hand-c-position`, `twinkle-first-phrase`, `repeated-notes`,
  `moving-the-hand`, `open-fifths`, `loud-and-soft` and `phrases`. Stage 5: `what-a-chord-is`,
  `major-triads`, `minor-triads`, `c-f-and-g`, `inversions`, `broken-chords`, `alberti-bass` and
  `the-waltz-bass`. Every demo step in each of them names its fingers.
- **`sitting-at-the-piano` and `the-sustain-pedal` show no hand.** Posture and the foot are not what
  the hand shows.
- **The G major and F major scale demos go up and down.** Their texts teach the thumb under going up
  and a finger over going down, so the demo shows both. Each demo takes about seven seconds longer.
- **A demo's held fifth names the left hand's 5 and 1,** as the texts of the G and F major tunes place it.
- **A demo that names a hand but no fingers is refused,** since the hand shows only with fingers and a
  lone hand would be dead data.
- **Lanes:** stages 1 and 2 touch the model, the demo step, the sound and the view, so they run in
  order. Stages 3 to 5 touch disjoint lesson files and can run as side goals once stage 2 lands. Each
  ends by adding its lessons to the one test list, so they commit that file one after another.

## Stages

### 1. A demo note names its finger and hand

**Does:** adds `finger` and `hand` to a demo's notes. The model refuses a demo that names some fingers
but not all, or a finger outside one to five.
**Gate:** none.

- [x] `finger` and `hand` on `PhraseNote`. `src/learn/model.ts:55`
- [x] The demo's checks refuse a partial or out-of-range fingering. `src/learn/model.ts:292`
- [x] Unit tests `a_demo_names_a_finger_for_every_note_or_none` and `a_demo_finger_is_one_to_five`. `src/learn/model.test.ts:1`
- [x] `the-c-major-scale`'s demo names its fingers, 1 2 3 1 2 3 4 5, as the first user of the field. `src/learn/lessons/scales-and-keys/the-c-major-scale.ts:18`

### 2. The piano view plays the hand in a demo step

**Does:** the view takes a phrase and a clock, loads and plans the hand, and draws it in time. The demo
step passes its phrase, offers Slow and Side, and the e2e tests pin it.
**Gate:** `hand-motion` is reached: `planHands` exists in `src/render/hand/hand-plan.ts`.

- [x] `Playback` reports the phrase's time on the audio clock. `src/learn/lesson-sound.ts:29`
- [x] The `hands` option, the lazy load, the plan and the per-frame pose. `src/render/piano-keys.ts:84`
- [x] The hand joins the scene beside the piano. `src/render/piano-keys.ts:356`
- [x] The draw loop keeps drawing while the hand moves. `src/render/piano-keys.ts:487`
- [x] The hand's frame from the player's side, and the side view. `src/render/piano-keys.ts:141`
- [x] `data-hand` on the view's element. `src/render/piano-keys.ts:322`
- [x] The demo step passes its phrase and clock when its notes name fingers. `src/learn/steps/demo.ts:31`
- [x] Slow and Side buttons, with Slow halving the bpm. `src/learn/steps/demo.ts:54`
- [x] `demo.slow` and `demo.side` in English and German. `src/i18n/messages/learn-lesson.en.ts:30`, `src/i18n/messages/learn-lesson.de.ts:27`
- [x] E2e tests `a_demo_with_fingers_shows_the_hand`, `the_slow_button_plays_the_demo_at_half_speed` and `a_demo_without_fingers_shows_no_hand`. `e2e/lesson-keys.e2e.ts:86`
- [x] Look at the C major scale's demo with `bun run shot`, seeking to the thumb-under, in both views, both themes and on a phone.

### 3. The scale and touch lessons show the hand

**Does:** every demo of the six lessons names its fingers, and a test lists the technique lessons.
**Gate:** the `demo-hand` check passes.

- [x] `finger-over-the-thumb`: the descending demo crosses 3 over 1, and the left-hand demo too. `src/learn/lessons/scales-and-keys/finger-over-the-thumb.ts:19`
- [x] `g-major`: its demos, with the thumb under to C and 3 over onto B. `src/learn/lessons/scales-and-keys/g-major.ts:1`
- [x] `f-major`: its demos, with the thumb under to C and 4 over onto B flat. `src/learn/lessons/scales-and-keys/f-major.ts:1`
- [x] `legato`: its demo, each finger handing over to the next. `src/learn/lessons/expression/legato.ts:1`
- [x] `staccato`: its demos, bouncing from the wrist. `src/learn/lessons/expression/staccato.ts:1`
- [x] Unit test `every_technique_lesson_demo_names_its_fingers`, listing these six and `the-c-major-scale`. `src/learn/course.test.ts:1`
- [x] Look at each lesson's demo with `bun run shot`, and check that each finger matches the lesson's text.

### 4. The first melodies, both hands and expression lessons show the hand

**Does:** every demo of the eight lessons names its fingers, and the test lists them.
**Gate:** the `technique-lessons-fingered` check passes.

**Split:** two writing subagents, each with the standing decisions and the C major scale's demo as the
example. One takes the four first-melodies lessons, the other the two both-hands and two expression
lessons. Neither builds. The session builds, checks each lesson's fingers against its text, and adds
them to the test list.

- [ ] `right-hand-c-position`. `src/learn/lessons/first-melodies/right-hand-c-position.ts:1`
- [ ] `left-hand-c-position`, with the left hand. `src/learn/lessons/first-melodies/left-hand-c-position.ts:1`
- [ ] `twinkle-first-phrase`, with the little finger's stretch to A. `src/learn/lessons/first-melodies/twinkle-first-phrase.ts:1`
- [ ] `repeated-notes`. `src/learn/lessons/first-melodies/repeated-notes.ts:1`
- [ ] `moving-the-hand`, with the move from C position to G position. `src/learn/lessons/both-hands/moving-the-hand.ts:1`
- [ ] `open-fifths`, with the left hand's 5 and 1. `src/learn/lessons/both-hands/open-fifths.ts:1`
- [ ] `loud-and-soft`, its soft and loud demos at their velocities. `src/learn/lessons/expression/loud-and-soft.ts:1`
- [ ] `phrases`, with the lift at the breath. `src/learn/lessons/expression/phrases.ts:1`
- [ ] The eight join the test's list. `src/learn/course.test.ts:1`

### 5. The chord lessons show the hand, and the docs say so

**Does:** every demo of the eight chord lessons names its fingers, the test lists them, and the docs
describe the hand.
**Gate:** stage 4's eight lessons are in the test's list.

**Split:** one writing subagent takes the eight chord lessons, with the standing decisions and stage 4's
lessons as examples. It does not build. The session builds, checks each lesson's fingers against its
text, and writes the docs.

- [ ] `what-a-chord-is`. `src/learn/lessons/chords/what-a-chord-is.ts:1`
- [ ] `major-triads`. `src/learn/lessons/chords/major-triads.ts:1`
- [ ] `minor-triads`, with finger 3 sliding to E flat. `src/learn/lessons/chords/minor-triads.ts:1`
- [ ] `c-f-and-g`, with the hand lifting from chord to chord. `src/learn/lessons/chords/c-f-and-g.ts:1`
- [ ] `inversions`, with the hand staying in place. `src/learn/lessons/chords/inversions.ts:1`
- [ ] `broken-chords`, with the fingers rocking. `src/learn/lessons/chords/broken-chords.ts:1`
- [ ] `alberti-bass`, the left hand's 5 1 3 1. `src/learn/lessons/chords/alberti-bass.ts:1`
- [ ] `the-waltz-bass`, the left hand's 5 then 3 and 1. `src/learn/lessons/chords/the-waltz-bass.ts:1`
- [ ] The eight join the test's list. `src/learn/course.test.ts:1`
- [ ] The demo row says the mascot's hand plays a demo that names its fingers. `docs/curriculum.md:29`
- [ ] Writing a lesson: a demo of a movement names every note's finger. `docs/curriculum.md:57`
- [ ] The feature list names the hand in Learn Piano's features. `docs/reference/features.md:158`

### 6. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 to 3 are done. Every demo of the six scale and touch lessons and of `the-c-major-scale` names
its fingers, as its texts in English and German say. The G and F major tunes name the left hand's held
fifth as 5 and 1. `TECHNIQUE_LESSONS` in `src/learn/course.test.ts` lists the seven, and
`every_technique_lesson_demo_names_its_fingers` passes, run by name. The build is green. Shots of
`finger-over-the-thumb`'s first demo show the descent and the crossing, in both views and slowed. Every
demo of the seven was planned with `planHands` and sampled. Each plans without a throw or a bad pose,
and the two tunes plan both hands. The left-hand demo and the two tunes sit behind quizzes and
play-notes steps, so no shot reached them.

### Next

**Stage 4: the first melodies, both hands and expression lessons show the hand.** Follow the stage's
`**Split:**` line. The demos are at `first-melodies/right-hand-c-position.ts:17`,
`left-hand-c-position.ts:18`, `twinkle-first-phrase.ts:18`, `repeated-notes.ts:18`,
`both-hands/moving-the-hand.ts:19`, `open-fifths.ts:19` and `:40`, `expression/loud-and-soft.ts:20`,
`:46`, `:68` and `:87`, and `phrases.ts:20` and `:58`, all under `src/learn/lessons/`.

- `loud-and-soft` has demos nested in a group at `:46` and `:68`. `allSteps` in the test finds them.
- Add the eight ids to `TECHNIQUE_LESSONS` in `src/learn/course.test.ts`.
- `left-hand-c-position`'s demo is its first step, so a shot can look at the left hand and its side
  view from the right. Click "Play again" once to wake the audio, then again before the timed waits.
- A lesson URL cannot open a later step. Check a demo behind other steps by planning it with
  `planHands` in a scratch script under `.agent-tmp/`, with a `layoutKeys` range around its pitches.

Expected red: none.

### Backlog

- The hand could show a play-notes step's next move as a hint after two mistakes.
- In the player, the hands could play along with a song from its guide's fingering.
- A third view from behind the hand, if learners ask to see it as they would their own.
- The player's angle leaves about a third of the box empty above the keys on a narrow range. A
  tighter `HALF_HEIGHT` in `src/render/hand/hand-frame.ts` would give the keys that room.
