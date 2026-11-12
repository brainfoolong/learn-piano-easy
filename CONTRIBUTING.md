# Contributing

Thank you for helping. Learn Piano Easy is an open-source piano-learning app under the
[MIT License](LICENSE). By sending a change, you agree that it is published under that license.

## Before you start

- Open an issue first for a large change, so we can agree on its shape.
- Read [AGENTS.md](AGENTS.md). Its rules bind people and coding agents alike.
- Follow the [code of conduct](CODE_OF_CONDUCT.md).

## Setting up

You need [Bun](https://bun.sh) at the version `package.json` pins in `engines.bun`.

```
bun install
git config core.hooksPath tools/git-hooks   # once per clone: the commit message check
bun run dev                    # the app at http://localhost:4173, rebuilt on every change
bun run build                  # the static app in dist/
bun run e2e:install            # once: the Chromium build Playwright drives
bun run e2e                    # the end-to-end tests, against a production build
bun run e2e:docker             # the same tests in Playwright's Docker image, as CI runs them
bun tools/looper/main.ts verify   # every check a change reaches
```

`bun run e2e:docker` needs only Docker, and no browser on your machine. `bun run shot` saves
screenshots of the app under `.agent-tmp/shots/`, and its head comment in `tools/shot.ts` lists its
steps, such as `--click Settings --shot`.

The docs write `bun tools/looper/main.ts <command>` as `looper <command>`. The shim `tools/loop` runs it
shorter, as `tools/loop verify`.

The app runs the same way from `dist/` on any static host or on your own machine. It needs no server
code. Once loaded, it runs offline, and so does every song it has opened.

## Rules for a change

- **No new runtime dependency.** three.js is the only third-party code in the app. We build everything
  else ourselves. Development tools, such as TypeScript and Playwright, never ship in the app.
- **A change the learner can see or do comes with an end-to-end test** in `e2e/`, named `*.e2e.ts`.
- **Every third-party file names its license.** Add its row to [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)
  and a `LICENSE.md` to its folder, in the same commit.
- **Only add work you have the right to share.** Music and sounds must be public domain or under a free
  license that allows redistribution.
- **Commits follow Conventional Commits,** as [docs/agent/conventions.md](docs/agent/conventions.md) says.
- **`looper verify` is green** before you open a pull request. Of the type check, the unit tests, the
  end-to-end tests and the doc checks, it runs each one your change reaches.

## Reporting a bug

Open an issue with the steps to reproduce it, your browser and your MIDI device if you use one. Attach
the MIDI file when the bug depends on it and you may share the file.
