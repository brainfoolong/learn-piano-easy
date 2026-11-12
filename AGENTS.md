# Working on learn-piano-easy

learn-piano-easy is the source of Learn Piano Easy, an open-source piano-learning web app under the MIT
License. It runs offline in the browser and has three parts: the landing page, "Learn Piano" and
"Just Play Piano". "Learn Piano" is a course of worlds and lessons that plays like a game. In
"Just Play Piano", a learner opens a song, watches its notes fly towards a 3D piano, and plays along.
The player's feature set grows from [docs/reference/features.md](docs/reference/features.md).

This file is read by every agent before it does anything. The block between the `looper:begin` and
`looper:end` markers is looper's: `looper sync` rewrites it, and `looper lint` fails when it is edited by
hand. Everything outside the markers is this project's own.

## The priority ordering

Highest first. A lower item is spent to buy a higher one, never the reverse. Cite a priority by its name.

1. **Never lose or corrupt work.**
2. **Correct before fast.**
3. **Simplicity**, of the model first, then of the implementation.

<!-- looper:begin agents v5 -->
## Where to look

| You are | Run or read |
|---|---|
| A session of the unattended loop | Nothing. The driver piped the orientation pack in behind your prompt. |
| Working interactively | `looper orient --full`: the live goal, its handoff, its decisions and the traps |
| Working without looper's service | [commands.md](docs/agent/commands.md) § *Without looper*: what runs differently without it |
| Looking for how something works | [docs/design.md](docs/design.md) until a module's head comment owns it |

- **[docs/agent/commands.md](docs/agent/commands.md)**: how the project is driven, and the shell rules.
- **[docs/agent/conventions.md](docs/agent/conventions.md)**: the shape of a commit, a comment, a test
  and text a user reads.
- **[docs/agent/doc-style.md](docs/agent/doc-style.md)**: how to write anything in `docs/`.
- **[docs/agent/prose.md](docs/agent/prose.md)**: how every sentence is written.
- **[docs/agent/testing.md](docs/agent/testing.md)**: what to test, and how.
- **[docs/agent/grounding.md](docs/agent/grounding.md)**: what an answer owes the person who asked.
- **[docs/agent/playbook.md](docs/agent/playbook.md)**: traps a session already paid for once.
- **[docs/decisions/](docs/decisions/README.md)**: numbered decision records. Cite one as
  `decision 0003`.
- **Each stack's own rules** are in `docs/agent/<stack>.md`, such as `docs/agent/rust.md`.

**Every fact has exactly one home.** If two files state the same thing, the home wins and the other is a
bug. Fix the bug rather than reconciling the two in your head.

## The project carries its tools

- **Every `looper` command is the project's own.** The kit's copy in `tools/looper/` runs with Bun
  alone, so every clone and CI run the same checks with the same verdict.
- **The copy is synced, never edited.** `looper sync --from <kit>` writes it from looper's kit, and
  `looper lint` fails on a hand edit. A change to it goes into looper's kit.
- **looper's service only spans projects:** the heavy-job slots, the usage wall, the registry and the
  web UI. [commands.md](docs/agent/commands.md) § *Without looper* says what runs differently without it.

## The rules you will otherwise break

Each is one sentence here, because not knowing it exists is the entire cost. The file named after each
rule is its home.

1. **A shell never carries file content into the tree.** Create and edit files with Write and Edit,
   never a heredoc, a `>` redirect, `Set-Content` or `sed -i` (commands.md).
2. **One shell call runs one command.** Use `&&` between dependent steps (commands.md).
3. **Read a big file in the region you need.** Read a file under about 400 lines whole, and Grep for
   the anchor of a bigger one (commands.md).
4. **A goal is verified once, at its end.** Its last stage, the gate stage, runs `looper verify`, and
   every other stage checks with a build alone (testing.md, commands.md).
5. **A session finishes in one pass,** as *Session workflow* below says.
6. **A comment says what the code does now, and is rewritten as a whole** (conventions.md).
7. **Docs describe the present only.** They carry no dates and no "previously" (doc-style.md).
8. **Every sentence follows the prose rules:** at most 25 words, one idea, and no dash joining two
   sentences (prose.md).
9. **Verify a claim before you make it, not when it is questioned** (grounding.md).
10. **Nothing is written outside this repository's folders.** Every scratch file goes under
    `.agent-tmp/`, and whoever writes one deletes it (commands.md).
11. **A change that adds, changes or removes a feature states its trade-offs** in performance, memory,
    usability and simplicity. Decide it yourself, however large, and ask the user only a call you
    cannot decide (conventions.md).
12. **A manual step done twice becomes a command.**
13. **Look up a fast-moving API in the installed version's reference,** never from memory.
14. **Name a goal by its slug, never by its number.**

## The context budget

- Every session and every subagent works under **250k** tokens of context.
- Take no new slice past **200k**. At 250k, hand off.
- Work that will not fit is split across subagents before it starts.
  - The session keeps the decisions, the check of each result and the wrap.
  - Each subagent gets one narrow deliverable and a brief that names its ceiling.
  - Read-only subagents go out together, on smaller models. `Explore` finds code, and `reader` takes a
    read that needs judgment, such as a CI log. `.claude/agents/` defines both.
  - A writing subagent runs on the session's model.
  - Writing subagents whose files are disjoint run side by side in the same tree. None of them builds,
    and the session builds once they all end. Writing subagents that share a file run one after
    another, or each in its own worktree.
  - A subagent's report is a pointer to check, not evidence.
- **Wide work goes to subagents, whatever its size.** A search across many files, the list a sweep
  covers and a CI log go to read-only subagents. A batch of similar files, such as pages, examples or
  test cases, goes to writing subagents once the session has landed what they build on.

## Session workflow

Every session runs the same steps, in this order, and **stops**:

1. **Orient in one call.** In the loop the driver has done it already. Interactively, run
   `looper orient --full`.
2. **Do the work: as much of the group as fits.** The handoff names a group of related slices and the
   files they share. Keep taking slices while the next one touches files already loaded and you are under
   200k with the previous one committed. Before you take an item, write two to six checkpoints under it
   in the goal file, each a step you can tick alone. Tick each as you reach it, and the item once all are
   ticked. Tick on from checkpoints an earlier session left.
3. **Check with a build, and verify only in the gate stage.** A goal is verified once, in its last
   stage. In every other stage a build is the only check. No test and no verify runs there, except a
   test the session wrote, run once by name, and a run an item requires. A slice whose change breaks
   an existing test updates that test as it goes. The gate stage runs `looper verify` over the whole
   goal, fixes every failure in one pass, and runs it once more.
4. **Write the handoff once for the whole group.** Overwrite the live goal's `## Handoff` with where the
   work stands and the next group with its anchors. Name the tests you expect to go red. Tick what you
   finished. Add a playbook bullet if a trap cost you time.
5. **Commit, one commit per slice, once its build is green,** and in the gate stage once verify is
   green. Stage each slice's own files.
6. **In the loop, write the status line** the prompt names: `CONTINUE <what landed>`,
   `DONE <goal reached>` or `BLOCKED <what the loop cannot do itself>`. A design call never blocks:
   decide it, record it under `## Standing decisions`, and build on it. Only a call you cannot decide
   goes to the user, with `looper decision ask --built-on <n>`.

**After the last step, stop.** Writing prose cannot break a build.

## Goals

- **The goals are [docs/goals/](docs/goals/README.md),** in looper's goal format. The chain, which is the
  order the loop walks, is the front matter of `docs/goals/README.md`, and its first slug is the live
  goal. `looper render` writes the README's body, so never edit it by hand.
- **A reached goal is harvested into [docs/findings.md](docs/findings.md)** § `<slug>`: its target, its
  findings and the decisions that still bind. Then its checks move into the floor and its file is
  deleted.
- **A goal is written so its sessions run fast:** stages that fit one session, a complete `### Next`,
  gates, settled choices, and named splits and lanes. The shape is
  [conventions.md](docs/agent/conventions.md) § *A goal*. A session follows its stage's `**Split:**` line.

## Commits

- **Conventional Commits:** `type(scope): what is now true`. The shape is
  [conventions.md](docs/agent/conventions.md) § *A commit message*.
- **No trailers, ever.** The `commit-msg` hook in `tools/git-hooks/` rejects them.
- **One commit per slice, once its build is green,** and in the gate stage once verify is green.
  Commit with `git commit -F <file>`.
- **Never `--no-verify`, and no force operations.**
<!-- looper:end agents -->

## This project's rules

Rules that bind only this project go here, one sentence each, with a link to their home.

1. **three.js is the only runtime dependency.** Everything else in the app is our own code, and a new
   runtime package is refused ([CONTRIBUTING.md](CONTRIBUTING.md)).
2. **Every third-party file names its license** in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md) and
   in a `LICENSE.md` in its folder, in the commit that adds it.
3. **Every feature is built in our own code.** No code is copied from another app, and an asset is
   copied only where its license allows ([THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)).
4. **The app works offline and from any base path.** Every URL in it is relative, and the service worker
   caches what a feature needs ([docs/design.md](docs/design.md)).
5. **Local and hosted builds behave the same.** No feature depends on a server, a domain or a network
   call after the first load. The visitor count is the one call, and nothing waits on it
   ([decision 0007](docs/decisions/0007.md)).
6. **No other piano app is named in the repository.** A feature is described in our own words
   ([docs/reference/features.md](docs/reference/features.md)).
7. **End-to-end tests use Playwright,** and a change the learner can see or do adds one in `e2e/`
   ([decision 0001](docs/decisions/0001.md)).
8. **A session looks at its change in a browser with `bun run shot`,** which saves screenshots under
   `.agent-tmp/shots/` and reports page errors ([tools/shot.ts](tools/shot.ts)).
