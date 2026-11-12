<!-- looper:begin conventions v4 -->
# Conventions: the shapes this project writes

Every answer here is the same in every session. Without this file, each session works out a shape again
by reading an existing example. If a skeleton here disagrees with a file that a test runs, the file is
right, and this one is fixed.

## A commit message

```
<type>(<scope>): <what is now true>

The next most useful fact. Then, only if the diff does not say it, why this
shape and not the obvious one.
```

- **`type`** is one of `feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `chore` or `build`.
- **`scope`** names a subsystem, never a path. It is lower case, with digits and `-`.
- **The subject** is lower case after the colon, has no trailing period, and is at most 71 characters. It
  states what is now true, so `git log --oneline` alone says what each commit did.
- **A body only when the subject cannot carry it,** after one blank line.
- **No trailers, ever.** No `Co-Authored-By`, no `Signed-off-by`, and no tool or model attribution.
- **One commit per slice,** once its build is green, and in the gate stage once verify is green. Write
  the message to a file under `.agent-tmp/` and commit with `git commit -F <file>`.

## A code comment

A comment says what the code does now. It is never a record of how the code got here: `git log` is the
only history.

- **Rewrite a comment as a whole** when the code under it changes. Never leave the old sentence beside
  the new one.
- **Never in a comment:** a date, a count of anything that can change, or a figure the code does not
  enforce. A bound the code enforces stays, such as "the ring holds 2,000 events".
- Reasoning is welcome, written in the present tense as what this shape buys.

## A module's head comment

A module's head comment is the home of how that module works.

1. Its first sentence is one line saying what the module is.
2. Then the decisions it embodies, and what each costs.
3. Then the bounds it keeps, such as the limit of each buffer and cache.
4. Then the gaps it knows of, each naming the goal that owns it by slug.

When a head comment takes over a topic from `docs/design.md`, shrink that section to a link in the same
commit.

## Names

- **Docs, goal slugs and TypeScript files are kebab-case.**
- **A test's name states the behaviour it checks,** such as `sweep_commits_only_the_sessions_own_paths`.
- **A commit scope names a subsystem,** never a path.
- **Example data uses neutral names,** such as `example.com` and `Alice`, never a real person or
  customer.
- **A goal is named by its slug,** never by its number.

## Text a user reads

This covers labels, messages, `--help` and every error a person reads.

- **Say what happened and what to do:** "The loop is paused. Resume it to start the next session."
- **Use the words a developer already knows,** and leave the project's internal words out.
- **Name no internals:** no decision numbers and no goal slugs.
- **A command the reader types goes in backticks,** and an error names its fix.

## A playbook bullet

One trap per bullet: a bold claim first, then why, then what to do, naming a path from the repository
root. Aim for about 400 bytes.

## A goal

Every session that runs a goal reads it, so its author plans once what each session would otherwise
work out again.

- **Every stage fits one session.** A stage that needs more than the slice budget is split into two
  stages before the run starts.
- **Every piece of a stage's work is an item.** The tests, rule changes and deleted records a stage owes
  are items too, each with its `path:line` anchor. A file the stage creates is anchored at `path:1`.
- **A set is listed, never described.** "Every page that says X" is written out in the goal, or its
  item says that a read-only subagent lists it first.
- **A stage names its split.** A `**Split:**` paragraph after the `**Does:**` one says what goes to
  subagents. That is the searches, and the batches of similar files that writing subagents produce in
  turn. A stage with nothing to hand off has no such paragraph.
- **The goal names its lanes.** `## Standing decisions` says which stages touch disjoint files and can run
  as side goals, and which share a file and run in order.
- **A dependency is a gate.** A stage that needs another goal's work names the file or command that
  proves it landed. `### Next` starts only work whose gate holds.
- **Every choice is made before the run.** A standing decision states the choice and its safe default.
  That covers a new dependency, a port, a command's shape and where a test's fixtures come from. A goal
  never says "ask the user": the session decides by the priority ordering and records why.
- **A goal is verified once, at its end.** Every goal's last stage is its gate stage (`gate: true`). It
  runs `looper verify` over the whole goal, fixes every failure in one pass, and runs it once more.
  Every other stage checks with a build alone. No test and no verify runs there, except a test the
  session wrote, run once by name, and a run an item requires. A slice whose change breaks an existing
  test updates that test as it goes. Each slice is committed once its build is green, and the handoff
  names the tests the session expects to go red. `looper goal new` writes the gate stage, and a goal
  that is never reached has none.

## A decision for the user

A session decides every call it can, and asks the user only what it cannot decide.

- **A call the project settles is decided, never asked.** The priority ordering, the docs and the goal
  settle most calls. Size and cost to reverse are no reason to ask. The session records the choice and
  why under `## Standing decisions`, and builds on it.
- **A call is asked only when nothing settles it.** It turns on what the user wants, such as a direction
  or a scope, and the priority ordering leaves its options even. Then it goes to `looper decision ask`.
- **The question lists two to four options and recommends one.** Each option is one line the user can
  pick without reading the code.
- **An asked call is built on, never parked.** The session takes the option it recommends with
  `--built-on <n>`, records it under `## Standing decisions`, and builds on it. An answer that picks
  another option is redone by a later session.
- **An answered decision is recorded under the goal's `## Standing decisions`,** and then the session
  runs `looper decision close <id>`.
- **`BLOCKED` is only for what the loop cannot do itself:** a call its permissions refuse, a
  credential it does not have, or an act that publishes outside the repository or costs money.
- **A blocked session files its decision before it writes `BLOCKED`,** with `looper decision ask
  --parked`. The loop then holds on that decision, and the user's answer resumes it.
- **A session never asks a decision about decisions already open.** Its `BLOCKED` or `DONE` holds the
  loop on the open ones, and the last answer resumes it.

## A handoff

- `### State`: where the work stands, in three to eight lines. A settled fact leaves it for a rule, a
  doc or a commit message.
- `### Next`: one lead line names the stage, its files and the gate it waits on. Every open item of the
  group follows, each with a `path:line` anchor from the repository root. The group's tests and rule
  changes are among them, so finishing `### Next` finishes the group.
- `### Backlog`: up to six lines.

Overwrite it in place, never append. Aim for about 60 lines in total.
