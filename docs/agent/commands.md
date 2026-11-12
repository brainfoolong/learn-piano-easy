<!-- looper:begin commands v5 -->
# Commands: how this project is driven

The project carries looper's kit in `tools/looper/`, which runs with Bun alone. Each `looper <command>`
in these docs runs as `bun tools/looper/main.ts <command>` from the project's root, in every shell.
The `looper` that looper's install puts on PATH runs it that way too, from any folder of the project.
The shims run it shorter, as `tools/loop <command>` in Git Bash and `tools\loop <command>` in cmd and
PowerShell.
`bun tools/looper/main.ts --help` lists every command. This file holds the rules for using
the commands, and why each rule exists. A stack's own commands are in `docs/agent/<stack>.md`.

| Command | What it does |
|---|---|
| `looper orient [--full]` | The orientation pack for the live goal. `--full` prints every stage. |
| `looper verify` | The gate: the verify steps of `looper.toml` that a change reaches |
| `looper affected` | What a change reaches, without running it |
| `looper check [--name <text>] [--all]` | The live goal's checks and the floor, or only the ones whose id or name holds the text. `--all` runs the kept ones too. |
| `looper lint` | Every goal file, the chain, the managed files, the kit's copy and the decision records |
| `looper links`, `looper layout --check`, `looper prose` | Dead links, the README's layout table, and the prose rules |
| `looper goal …`, `looper render` | Edit a goal's front matter, and rewrite `docs/goals/README.md` |
| `looper sync [--check] [--from <kit>]` | Rewrite the managed files from the copy's templates, or the copy too from the kit at `--from` |
| `looper doctor` | Check the machine and the project's config, and name each fix |
| `looper clean` | Delete scratch older than a day, and old scratch worktrees that are clean and merged |
| `looper loop start` | The unattended run. Type it in a terminal, never from a session. |

**Every command above takes `--json`.** It then prints one JSON document on stdout, and any progress
on stderr. Parse that document rather than the text, because the text changes with every wording fix.

## Verification

`looper verify` is the gate. It runs once per goal, in the goal's gate stage, over the whole goal.
Every other stage checks with the build its stack file names. Verify runs the steps in order, each only
when a change reaches it, and stops at the first red one. Each step's full log goes to
`.agent-tmp/verify-<name>.log`, and only a red step's tail is printed.

## The guard

`.claude/settings.json` runs the copy's `looper guard` before every Bash, Read, Edit, Write and
NotebookEdit call. It refuses what the shell rules below and `looper.toml`'s `[[guard.deny]]` forbid,
and says why.

## One shell

- **Bash is the only shell tool.** The settings turn the PowerShell tool off. Run PowerShell from Bash
  as `powershell -NoProfile -Command '…'`.
- **Every Bash call runs as a recorded job.** The settings' shell prefix runs it through the copy's
  `looper sh`. The user and other sessions see it in `looper exec list`.

## Long commands

- **Wait for a long command by ending your turn.** Start it with `run_in_background`, then end your turn.
  Its report starts your next turn, so nothing polls. The guard refuses `sleep` and poll loops.
- **A command the harness moved to the background at its timeout is still running.** Its report comes
  the same way. Never run it a second time.
- **Watch a command's output with Monitor while you work,** never to wait. Stop your own background
  command with TaskStop.
- **Never trim a build's or a test's output with `head`, `tail` or `Select-Object`.** The harness keeps
  the whole output and previews it past 30,000 characters. Pipe it into `grep` for the lines you need.

## Other sessions' jobs

Another session's command is a job too. Never kill a process by its name, because the name may be
another session's process.

| Command | What it does |
|---|---|
| `looper exec list [--all] [--project <p>] [--session <s>] [--port <n>]` | The running jobs with their owners. `--all` adds the ended ones. |
| `looper exec log <id> [--from <line>] [--lines <n>]` | A job's log, which Read cannot open outside your tree |
| `looper exec wait <id>` | Waits for the job to end. Run it with `run_in_background`. |
| `looper exec kill <id>` | Ends the job's whole tree, and records that you asked |

## The project's launchers

A launcher is a program a person starts by hand, such as a dev server, a game or a viewer. Each is a
`[[launch]]` table in `looper.toml`, and runs as a job of kind `launch`.

- **Start a launcher with `looper launch`, never by hand.** Its port is checked against every other
  launch and listening process, so two servers never share one.
- **A launch you start in a loop's session is hidden, and ends with the session.** Stop it yourself
  once its work is done.
- **A launch outlives the Bash call that started it.** So `looper launch start` returns once the
  launch has started.

| Command | What it does |
|---|---|
| `looper launch list` | Each launcher with its state, its port and its job |
| `looper launch start <name> [--port <n>] [--args=<text>]` | Starts the launcher, or names the launch that runs it |
| `looper launch stop <name>` | Asks the launch to stop, and kills its tree once its grace has passed |
| `looper launch restart <name>` | A stop when the launcher runs, then a start |

## Other sessions' edits

A file has one editor at a time. A session's first edit of a file claims it until the file matches
`HEAD` again, so until its edits are committed or undone.

- **The guard refuses an edit of a file another live session claims.** Work on another file, wait for
  that session's commit, or ask the user to release the claim.
- **Stage your own files by name.** The guard refuses `git add` of a file another live session claims.
  It refuses `git add -A`, `git add .`, `git add -u` and `git commit -a` while such a claim is in the
  tree.

| Command | What it does |
|---|---|
| `looper claims [--json]` | Every claim in the project's trees, with its session, loop, goal, file and age |
| `looper claims release <session>` | Frees the session's claims, and records who asked. An agent may free only a dead session's. |

## The shell rules

- **A shell never carries file content into the tree.** A heredoc, a `>` redirect, `tee`, `sed -i` and
  `Set-Content` pass the text through a shell parser that rewrites quotes, backticks and `$`. Write a
  multi-line argument to a file under `.agent-tmp/` and pass it by path. The guard lets a `>`, `>>` or
  `tee` into the scratch directory through, so a command's output can be kept there.
- **One shell call runs one command.** A `;` chain reports only the last exit status, so it hides a
  failure in the middle. Put `&&` between dependent steps. Independent calls go out together.
- **Use the shell for what it is for:** `looper`, git and the build tools. Use Read, Grep and Glob for
  reading and searching.
- **Read a file over about 400 lines by region.** Grep for the anchor, then Read with an offset and a
  limit. Context, not the clock, caps a session.

## Scratch

- **Every scratch file goes under `.agent-tmp/`,** which is git-ignored. Never use the system temp
  directory or a home directory.
- **Whoever writes a scratch file deletes it** when the work it served is done. Delete only your own
  files, because another agent may be working in the tree.
- **A git worktree is scratch too.** It goes under `.agent-tmp/worktrees/<branch>`. Once its branch is
  merged, remove it with `git worktree remove` and `git branch -d`, never a forced form. If one refuses,
  work would be lost, and that is a question for the user.

## Git

- **Commit with `git commit -F <file>`.** The message shape is [conventions.md](conventions.md)
  § *A commit message*.
- **The `commit-msg` hook** in `tools/git-hooks/` runs the copy's `looper hook commit-msg` with Bun. It
  is enabled per clone with `git config core.hooksPath tools/git-hooks`. Never bypass it with
  `--no-verify`.
- **No force operations.**

## Without looper

Every command above is the project's own, through the copy, so a clone with Bun and git runs them all.
Only what spans projects needs looper's service. Without the service, each command runs on as this
table says. The rules of every file still bind.

| What needs looper's service | Without it |
|---|---|
| The heavy-job slots shared across projects | `looper verify`, `looper check` and a heavy Bash call run at once, without a slot. |
| The usage wall shared across the account | A wall a session meets holds the loops of this project only. |
| `looper project add` | It exits 3, since it registers the project with the service. |
| looper's web UI | `looper status`, `looper log` and `looper exec list` print what it shows. |
