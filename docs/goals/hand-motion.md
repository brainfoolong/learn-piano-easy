---
looper: 1
title: The hand plays
summary: "A phrase with its finger numbers becomes the motion of one or two hands, with crossings, chords and touch, shown in the hand lab."
context: [src/render/hand/hand-rig.ts, tools/hand-lab/main.ts, src/theory/fingering.ts, src/render/piano.ts, src/render/piano-geometry.ts, src/render/key-layout.ts]
stages:
  - id: 1
    title: A phrase becomes a plan of presses and hand positions
    status: done
  - id: 2
    title: Crossings, stretches, position changes and chords
    status: done
  - id: 3
    title: Touch and two hands
    status: open
  - id: 4
    title: The lab plays phrases in time, at any speed
    status: open
  - id: 5
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: hand-plan
    stage: 1
    name: a plan presses each key with its finger at its time, and moves the hand only when it must
    run: [bun, test, src/render/hand/hand-plan.test.ts]
    tests: [a_press_puts_the_pad_on_its_key_at_its_time, the_hand_moves_only_when_a_finger_cannot_reach, a_black_key_is_played_further_in, a_free_finger_hovers_over_its_key, a_seek_gives_the_same_pose_as_playing]
  - id: hand-crossings
    stage: 2
    name: the thumb passes under, a finger crosses over, a chord lands at once
    run: [bun, test, src/render/hand/hand-plan.test.ts]
    tests: [the_thumb_passes_under_the_palm, a_finger_crosses_over_the_thumb, a_chord_lands_its_fingers_together, a_stretch_keeps_the_hand_in_place]
  - id: hand-touch
    stage: 3
    name: staccato, loudness, phrase ends and two hands each move as they should
    run: [bun, test, src/render/hand/hand-plan.test.ts]
    tests: [staccato_lifts_from_the_wrist, a_loud_note_strikes_faster, a_phrase_ends_with_a_lift, the_two_hands_keep_apart]
---

# The hand plays

## Why

`mascot-hand` gives a rig that puts a fingertip on a key. A lesson needs more: a phrase of notes, each
with its finger, played in time by a hand that moves as a pianist's does. The thumb must visibly pass
under the palm, and a finger must arc over the thumb. The hand must move only when a finger cannot
reach. This goal turns a phrase into that motion and shows it in the hand lab, before any lesson uses
it.

## Standing decisions

- **The plan is a pure function of time.** `planHands(phrase, layout)` in `src/render/hand/hand-plan.ts`
  returns `poseAt(seconds)`. A pose holds each hand's wrist point and turn, each digit's target point
  or none, and the pitches the hand holds down. The same time always gives the same pose, so playing,
  seeking and slowing down are free, and the tests need no rig.
- **A phrase note is `{ pitch, at, seconds, finger, hand, velocity? }`,** with `Finger` and `Hand` from
  `src/theory/fingering.ts`. Times are in seconds, so the caller turns beats into seconds at its tempo.
- **The caller drives the clock.** In a lesson that is the audio clock of the phrase's playback, so the
  hand never drifts from the sound. In the lab it is a scrubbable clock.
- **A hand's position is its anchor:** the key under its thumb, with the fingers over the next four
  white keys. The anchor changes only when a note's finger cannot reach its key from the current one.
  The move starts once the old anchor's last note sounds, and lands as the new note
  strikes, with an eased path.
- **Fingertips land on an arc,** as on a real hand. On a white key the inset from the front edge is
  thumb 0.8, index 1.3, middle 1.5, ring 1.35 and little 0.95 key widths. On a black key a finger plays
  0.6 in from the black key's front. These move from `tools/hand-lab/main.ts:113` into the plan.
- **The resting hand is 2.6 above the keys and 5.0 behind its middle finger's key, rolled 0.12 towards
  its little finger.** These are the lab's measured values, where every joint angle stays natural.
- **The plan's wrist sits straight behind the middle finger's home key,** in line with the model's
  middle knuckle. The lab's static C position still shifts it by the rest pad's small offset. The plan
  needs no rig to measure, and the solver absorbs the difference.
- **A move leaves at the earlier of the last note's release and 0.15 s before the new note,** but never
  before the last note sounds. A finger's next press begins as its held key releases.
- **A press is a short down-stroke.** The finger lifts over its key and strikes in a time that shrinks
  with velocity. It follows the key's dip, holds, and lifts on release. The key's dip at the pad comes
  from `PRESS_DEPTH` and the key's length (`src/render/piano.ts:58`).
- **A free finger hovers 0.35 over the key it would play from the current anchor,** relaxed. It never
  rests on a neighbouring key.
- **A crossing is found from the fingering, never flagged by hand.** The thumb playing a key beyond the
  finger before it is a thumb-under. The thumb then travels low under the palm, and the hand turns a
  little towards it. A finger playing beyond the thumb the other way is a finger-over: the finger
  arcs high over the thumb.
- **A crossing spans at most two white keys from the note before.** A wider step is a leap, which
  moves the hand without a crossing path. A crossing starts its travel 0.35 s before its down-stroke,
  where a plain press takes 0.2 s. The hand's turn peaks halfway through the thumb's travel, and it is
  straight again as the thumb strikes.
- **Only the thumb and the little finger stretch,** each one white key outwards past its home. A
  stretch keeps the anchor, and an inward step past the reach still moves the hand.
- **A chord never moves the anchor twice.** Once a note at a time sets the anchor, the chord's other
  notes stretch to their keys from it. A move and a crossing read the last note struck before the
  chord.
- **Touch is read from the phrase.** A note shorter than half its gap is staccato: the hand lifts from
  the wrist. Notes that overlap or touch are legato: each finger lifts as the next strikes. A gap of a
  beat or more after a note ends a phrase: the hand lifts a little, as a breath.
- **Two hands keep at least one key width between their nearest fingers.** If a phrase would cross the
  hands, the plan lets them cross with the right hand above, which no lesson asks for today.
- **The cost budget is one millisecond per hand per frame** on a desktop, for the plan and the solver
  together, measured in the lab.
- **Lanes:** every stage works in `src/render/hand/hand-plan.ts` and its test, so they run in order.
  Stage 4 also touches the lab.

## Stages

### 1. A phrase becomes a plan of presses and hand positions

**Does:** builds `planHands` for one hand, with anchors and their moves and the contact arc. It adds
presses that follow the key's dip, hovering free fingers, and a seek that gives the pose of playing.
**Gate:** `src/render/hand/hand-rig.test.ts` exists, from `mascot-hand`.

- [x] The phrase types, `planHands` and `poseAt`. `src/render/hand/hand-plan.ts:1`
- [x] Anchors and their eased moves. `src/render/hand/hand-plan.ts:1`
- [x] The contact arc and the black-key inset, moved from the lab. `tools/hand-lab/main.ts:113`
- [x] The resting wrist height, distance and roll, moved from the lab. `tools/hand-lab/main.ts:120`
- [x] Presses that follow the key's dip, and hovering free fingers. `src/render/hand/hand-plan.ts:1`
- [x] `applyPose(rig, pose)` places the wrist and reaches every digit. `src/render/hand/hand-rig.ts:146`
- [x] Unit tests `a_press_puts_the_pad_on_its_key_at_its_time`, `the_hand_moves_only_when_a_finger_cannot_reach`, `a_black_key_is_played_further_in`, `a_free_finger_hovers_over_its_key` and `a_seek_gives_the_same_pose_as_playing`. `src/render/hand/hand-plan.test.ts:1`

### 2. Crossings, stretches, position changes and chords

**Does:** adds the thumb-under and finger-over paths with the hand's small turn. It adds stretches that
leave the anchor in place, whole-hand position changes, and chords whose fingers land together.
**Gate:** the `hand-plan` check passes.

- [x] The thumb-under path: low, under the palm, with the hand's turn. `src/render/hand/hand-plan.ts:1`
- [x] The finger-over path: a high arc over the thumb. `src/render/hand/hand-plan.ts:1`
- [x] A stretch reaches one key past the five without moving the anchor, as the little finger to A does in *Twinkle*. `src/render/hand/hand-plan.ts:1`
- [x] A chord's fingers strike together, and a broken chord's hand stays still while the fingers rock. `src/render/hand/hand-plan.ts:1`
- [x] Unit tests `the_thumb_passes_under_the_palm`, `a_finger_crosses_over_the_thumb`, `a_chord_lands_its_fingers_together` and `a_stretch_keeps_the_hand_in_place`. `src/render/hand/hand-plan.test.ts:1`

### 3. Touch and two hands

**Does:** reads staccato, legato, loudness and phrase ends from the phrase, and plans a left hand
beside the right one.
**Gate:** the `hand-crossings` check passes.

- [ ] Staccato lifts from the wrist, and legato hands each note to the next. `src/render/hand/hand-plan.ts:1`
- [ ] A louder note strikes faster from a little higher. `src/render/hand/hand-plan.ts:1`
- [ ] A phrase end lifts the hand. `src/render/hand/hand-plan.ts:1`
- [ ] A left hand is planned in mirrored space and kept a key width from the right. `src/render/hand/hand-plan.ts:1`
- [ ] Unit tests `staccato_lifts_from_the_wrist`, `a_loud_note_strikes_faster`, `a_phrase_ends_with_a_lift` and `the_two_hands_keep_apart`. `src/render/hand/hand-plan.test.ts:1`

### 4. The lab plays phrases in time, at any speed

**Does:** the lab plays a set of phrases with both hands, and the piano's keys go down in step. It can
pause, slow down and seek, so every motion can be looked at.
**Gate:** the `hand-touch` check passes.

- [ ] The lab's phrases: the C major scale in each hand, an Alberti bass, staccato and legato fives, and C, F and G chords. `tools/hand-lab/main.ts:1`
- [ ] Play, pause, half speed, quarter speed and a seek bar, and `lab.seek(seconds)` for shots. `tools/hand-lab/main.ts:1`
- [ ] The piano presses and releases each key as the plan holds it. `tools/hand-lab/main.ts:1`
- [ ] `lab.cost()` reports the plan's and the solver's time per frame, and it is under the budget. `tools/hand-lab/main.ts:131`
- [ ] Look with `bun run shot` at the thumb-under and the finger-over, seeking to each, from the top, the right and the left.

### 5. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 and 2 are done. `planHands` in `src/render/hand/hand-plan.ts` plans each hand's anchors,
presses and hovering fingers. Each press carries its crossing, read from the fingering. A thumb-under
drops and tucks towards the palm, and the hand turns towards it. A finger-over arcs high. The thumb and
the little finger stretch one key outwards without moving the hand. A chord's fingers strike together.
The `hand-plan` and `hand-crossings` checks pass. The lab does not play the plan yet; stage 4 does.

### Next

**Stage 3: touch and two hands.** Files: `src/render/hand/hand-plan.ts` and its test. Gate: the
`hand-crossings` check passes.

- Staccato lifts the wrist. Read it per note in `planHand`'s loop (`src/render/hand/hand-plan.ts:191`).
  Add the lift to the wrist's height in `poseAt` (`src/render/hand/hand-plan.ts:297`).
- A loud note strikes faster from higher. `strikeSeconds` (`src/render/hand/hand-plan.ts:112`) already
  shortens the stroke. The height over the key is `HOVER` in `pressPoint`'s down-stroke branch
  (`src/render/hand/hand-plan.ts:307`), so scale it there by velocity.
- A phrase end is a gap of a beat or more. The phrase carries seconds only, so pick a gap in seconds,
  record it under the standing decisions, and lift the wrist across it.
- The left hand already mirrors through `side`. Keeping the hands apart needs both plans at once. Do it
  in `planHands` (`src/render/hand/hand-plan.ts:150`), by shifting an anchor that comes within a key
  of the other hand's nearest finger.

Expected red: none.

### Backlog

- Wrist rotation for a wide leap, which no lesson needs yet.
- Pedalling with a foot, if the sustain pedal lesson ever wants it shown.
