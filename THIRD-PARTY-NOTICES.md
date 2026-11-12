# Third-party notices

learn-piano-easy's own code is under the [MIT License](LICENSE). This file names every piece of
third-party work the repository or the built app carries, with its author, source and license.

- **A file under a different license keeps that license.** The MIT License covers only our own code.
- **Every asset folder holds a `LICENSE.md`** that names the license of the files in it.
- **The app shows this file** on its About page.
- **The build copies the license texts into `licenses/` next to the app:** ours, this file, three.js's
  and the icons'. Each asset folder keeps its own `LICENSE.md`.
- A new dependency or asset gets its row here, and its license text, in the commit that adds it.

## Code

| Work | Version | Author | License | Source | Used for |
|---|---|---|---|---|---|
| three.js | pinned in `package.json` | Ricardo Cabello (mrdoob) and the three.js authors | MIT | <https://github.com/mrdoob/three.js> | The 3D scene, bundled into the app |

three.js is the only third-party code in the app. TypeScript, Playwright and the `@types/*` packages are
development tools. They never ship in the built app.

## Fonts and icons

| Work | Version | Author | License | Source | Path |
|---|---|---|---|---|---|
| Plus Jakarta Sans, the variable font | commit `18d1cd2` | The Plus Jakarta Sans Project Authors | [SIL OFL 1.1](https://openfontlicense.org/) | <https://github.com/tokotype/PlusJakartaSans> | `public/fonts/plus-jakarta-sans/` |
| Lucide icons, a subset of their path data | 1.71.0 | Lucide Icons and Contributors, and Cole Bemis for the icons from Feather | ISC, and MIT for the icons from Feather | <https://github.com/lucide-icons/lucide> | `src/ui/icons/` |

The font keeps the SIL Open Font License wherever it is passed on. Its folder's `LICENSE.md` holds the
full text, and the build copies that folder with the font. The icons' `LICENSE.md` holds both of their
license texts, and the build copies it into `licenses/`.

## Music

| Work | Author | License | Source | Path |
|---|---|---|---|---|
| Classical piano MIDI files | Bernd Krueger | [CC BY-SA 3.0 DE](https://creativecommons.org/licenses/by-sa/3.0/de/deed.en) | <http://www.piano-midi.de> | `public/songs/piano-midi/` |
| Classical piano MIDI files | Each piece's maintainer, The Mutopia Project | Public domain or CC BY-SA, set per piece | <https://www.mutopiaproject.org/> | `public/songs/mutopia/` |

The attribution Bernd Krueger asks for is his name and the source: "Bernd Krueger, http://www.piano-midi.de".
The license is share-alike. Anyone who passes these files on, changed or not, must keep the same license.
The share-alike term covers these files only, never the app's code.

Each Mutopia piece's license and credit are in `public/songs/mutopia/LICENSE.md`, and on its row of the
song catalog. A CC BY-SA piece keeps its license wherever it is passed on, as the piano-midi.de files do.

The modern pieces in `public/songs/originals/` are original compositions by the learn-piano-easy
authors. They are under the MIT License too.

Our songs in `public/songs/ours/` are our own arrangements of tunes in the public domain, with their
guides. They are under the MIT License, and the folder's `LICENSE.md` names each tune's composer.

## Pictures

The pictures in `public/images/landing/` are screenshots of the app itself. They are under the MIT
License too.

The mascot's videos and their posters in `public/images/mascot/` are cut from a video the project's
maintainer made with Google Gemini. They are under the MIT License too.

The social pictures in `public/images/social/` are drawn by `tools/make-social-image.ts`. They are
under the MIT License, and their text is set in Plus Jakarta Sans, under the SIL Open Font License 1.1.

## Models

The mascot's hand in `public/models/` starts from the human base mesh, rig and weights of MakeHuman,
which are under CC0 1.0. `tools/hand-model.ts` builds it with MakeHuman's MPFB extension for Blender,
whose GPL code never ships with the app. Our changes to the model are under the MIT License.

## Sounds

The piano samples come from the sample set below, and its license binds every copy of the app that
carries it. `tools/import-sounds.ts` converts it for the web.

| Work | Author | License | Source | Path |
|---|---|---|---|---|
| Salamander Grand Piano V3, converted for the web | Alexander Holm | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | <https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html> | `public/sounds/salamander/` |

## Not carried

- **No code from another app.** Learn Piano Easy builds every feature in its own code.
- **No recorded reverb impulse responses.** The app makes its reverb from a generated impulse response.
- **No sheet-music library.** The notation engraver is our own.
