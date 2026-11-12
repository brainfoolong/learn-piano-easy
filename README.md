# learn-piano-easy

Learn piano by playing along with MIDI files. Notes fly towards a 3D piano, and the app listens to your
MIDI keyboard to tell you what you hit. It runs in any modern browser, works offline, and installs as an app.

Demo: <https://learn-piano-easy.app>. The app runs the same way from your own machine.

## Features

[docs/reference/features.md](docs/reference/features.md) lists every feature we build,
and [docs/goals/](docs/goals/README.md) is the plan in order.

## Running it

You need [Bun](https://bun.sh). [CONTRIBUTING.md](CONTRIBUTING.md) has the full setup.

```
bun install
git config core.hooksPath tools/git-hooks   # once per clone: the commit-msg check
bun run dev                                 # the app at http://localhost:4173
bun run build                               # the static app in dist/
looper verify                               # the checks a change reaches
looper loop start                           # the unattended run, in a terminal of its own
```

## License

Our code is under the [MIT License](LICENSE). The songs and sounds keep their own licenses, which
[THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md) names one by one.

## Layout

Every top-level entry is named in one row. `looper layout --check` fails when this table and the tree
disagree.

| Path | Holds |
|---|---|
| `AGENTS.md` | the rules for every agent working here |
| `README.md` | this file |
| `LICENSE` | the MIT License of our own code |
| `THIRD-PARTY-NOTICES.md` | every third-party work we carry, with its author, source and license |
| `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` | how to contribute, how we treat each other, and how to report a vulnerability |
| `looper.toml` | the project's looper config |
| `docs/` | the design, the decisions, the goals, the findings, the reference and the agent docs |
| `tools/` | the git hooks, the kit's copy in `tools/looper/`, the `loop` shims, and the build and dev tools |
| `package.json`, `bun.lock` | the package, its scripts and its locked dependencies |
| `tsconfig.json`, `bunfig.toml` | the TypeScript and bun config |
| `src/` | the app's source and its tests |
| `e2e/`, `playwright.config.ts` | the end-to-end tests, which Playwright runs in Chromium against the production build |
| `public/` | the static files copied into the app as they are: the page, styles, manifest, icons, songs and sounds |
