---
looper: 1
title: "The mascot's hand"
summary: "The mascot's rigged hand ships within its byte budget, with its license named, and its rig puts any fingertip on any key."
context: [tools/hand-model/hand.py, tools/hand-model.ts, src/render/hand/hand-rig.ts, src/render/hand/hand-materials.ts, tools/hand-lab/main.ts, src/pwa/cache-groups.ts]
stages:
  - id: 1
    title: The model fits its budget and names its license
    status: open
  - id: 2
    title: The rig is tested and recorded
    status: open
  - id: 3
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: hand-model
    stage: 1
    name: the hand model fits its budget and carries every bone the runtime reads
    run: [bun, test, src/render/hand/hand-model.test.ts]
    tests: [the_hand_model_fits_its_byte_budget, the_hand_model_has_every_bone_and_marker]
  - id: models-licensed
    stage: 1
    name: the models folder names its license
    run: [bun, test, tools/licenses.test.ts]
    tests: [every_asset_folder_has_a_license_file]
  - id: hand-rig
    stage: 2
    name: the rig puts each pad on its key and mirrors a left hand
    run: [bun, test, src/render/hand/hand-rig.test.ts]
    tests: [pads_reach_the_c_position_keys, a_left_hand_mirrors_the_right, a_relaxed_digit_returns_to_rest, every_nail_lies_on_its_fingertip]
---

# The mascot's hand

## Why

A lesson that teaches a movement of the hand needs the learner to see it. That is the thumb passing
under, a finger crossing over, or a hand moving to a new position. A highlighted key shows which key,
never how the hand gets there.

Generated videos were tried first, and the video model could not keep the fingering exact. A hand built
from code primitives was tried next, and looked wrong. The hand that works is MakeHuman's CC0 hand. A
Blender script rebuilds it in the 3D piano's units, rigs it and cuts it square behind the wrist. It is
coloured in the mascot's honey orange with white nails. A three.js solver puts any fingertip pad on any
key.

This goal lands that prototype for real: within a byte budget, with its license named, tested and
recorded. `hand-motion` makes it play, and `hand-lessons` puts it in the lessons.

## Standing decisions

- **The hand is MakeHuman's CC0 base mesh and rig,** built by MPFB inside Blender. MPFB's code is GPL and
  never ships. Only the exported mesh does, which is CC0. The base mesh's own header and the weights
  file both state CC0.
- **`bun tools/hand-model.ts` is the only way to make `public/models/hand.glb`.** It fetches MPFB 2.0.18
  at a pinned URL, checks its SHA-256, installs it into a Blender profile under `.agent-tmp/`, and runs
  `tools/hand-model/hand.py` headless. Nothing is written outside the repository. The built file is
  committed, so neither the app, CI nor any other session needs Blender.
- **The look is settled with the user.** The hand is faceted low-poly: MakeHuman's mesh collapsed to a
  quarter of its faces, each lit flat. The whole hand is one honey-orange tone, with no pattern and no
  fur. The nails are white and glossy. There is no sleeve or cuff. The arm ends in a straight cut a
  little behind the wrist, closed by a flat cap. The colours live in `src/render/hand/hand-materials.ts`
  alone.
- **The byte budget is 64 KB for `hand.glb`.** It is precached with the app shell, as everything under
  `public/` but songs and sounds is (`src/pwa/cache-groups.ts:34`), so every visitor pays for it once.
  The faceted hand is 35 KB, and the test `the_hand_model_fits_its_byte_budget` holds the line.
- **A faceted hand carries no normals.** Flat light would store each vertex once per face. The skin
  material lights each face flat from screen derivatives, so the faces share their 445 vertices.
- **Only a right hand is built.** A left hand is the same file mirrored by the rig's root scale.
- **The runtime holds no measurements of the model.** Every point it needs is a marker bone: `_tip`,
  `_pad`, `_nail`, `_nailside` and `_nailtip` on each digit. glTF keeps no bone tails, so every measure
  is a marker's head.
- **The rig's tests load the real `hand.glb`** with `GLTFLoader.parse` on the file's bytes, so they check
  the shipped model, not a stand-in.
- **The hand lab stays a tool,** `bun tools/hand-lab.ts`, never shipped. It is where a session looks at
  the hand from any side with `bun run shot --base`.
- **Decision 0013 records the choice** of a rigged hand over video and over a hand built in code.
- **Lanes:** stage 1 touches the model tool, `public/models/`, the notices and the license test. Stage 2
  touches `src/render/hand/` and the docs. They share no file, but stage 2's tests read stage 1's model,
  so they run in order.

## Stages

### 1. The model fits its budget and names its license

**Does:** pins the faceted hand's size and contents in tests, and names MakeHuman's CC0 wherever the
project names a third-party file.
**Gate:** none.

- [x] The faceted low-poly hand is the builder's default, and `hand.glb` is 35 KB. `tools/hand-model/hand.py:80`
- [x] Export only positions, joints and weights, with no normals, colours or UVs. `tools/hand-model/hand.py:397`
- [ ] Rebuild with `bun tools/hand-model.ts` and see that the file does not change, since the build is repeatable. `tools/hand-model.ts:1`
- [x] `public/models/LICENSE.md`: MakeHuman's CC0, the tool that makes the file, and a table of the file. `public/models/LICENSE.md:1`
- [x] A `## Models` section names `public/models/` and MakeHuman's CC0. `THIRD-PARTY-NOTICES.md:64`
- [ ] The license test covers `public/models/` as it covers the song and sound folders. `tools/licenses.test.ts:20`
- [ ] Unit tests `the_hand_model_fits_its_byte_budget` and `the_hand_model_has_every_bone_and_marker`, reading the glb's JSON chunk. `src/render/hand/hand-model.test.ts:1`
- [ ] Look at the hand in the lab from all five views with `bun run shot`, and see no tear or hole at a joint.

### 2. The rig is tested and recorded

**Does:** pins the solver's behaviour in tests, and records the decision and the module in the docs.
**Gate:** the `hand-model` check passes.

- [ ] Unit tests `pads_reach_the_c_position_keys`, `a_left_hand_mirrors_the_right`, `a_relaxed_digit_returns_to_rest` and `every_nail_lies_on_its_fingertip`. `src/render/hand/hand-rig.test.ts:1`
- [ ] A seek can jump far: `reach` takes extra solver steps when its pad starts far from its target. `src/render/hand/hand-rig.ts:174`
- [ ] Decision 0013: a rigged MakeHuman hand over generated video and over a code-built hand. `docs/decisions/0013.md:1`
- [ ] The decisions index lists 0013. `docs/decisions/README.md:1`
- [ ] The module table names `src/render/hand/`. `docs/design.md:47`
- [ ] The lab's head comment names the shot command for each view. `tools/hand-lab/main.ts:1`

### 3. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

The prototype works and is uncommitted. It is the model tool, the faceted low-poly `hand.glb` of
35 KB, the rig with its solver, the skin material and the hand lab. In the lab, all five pads of the C position land within
a thousandth of a key width, with natural joint angles.

### Next

**Stage 1: the model fits its budget and names its license.** Files: `tools/hand-model/`,
`public/models/`, `THIRD-PARTY-NOTICES.md`, `tools/licenses.test.ts`, `src/render/hand/hand-model.test.ts`.
No gate. The items are the stage's list above.

Expected red: none.

### Backlog

- The smooth hand stays one flag away, `--smooth`, if the faceted style ever changes.
