# The social pictures

The files in this folder are drawn by `tools/make-social-image.ts`, one per locale. They are under the
MIT License, the same as the app: see `LICENSE` at the repository root.

Their text is set in Plus Jakarta Sans, under the SIL Open Font License 1.1. The font's own license is
`public/fonts/plus-jakarta-sans/LICENSE.md`. The license lets a picture show text set in the font.
Plus Jakarta Sans has no Han, Devanagari or Arabic glyphs. So `zh.png`, `hi.png` and `ar.png` draw them
in the system's Chinese, Hindi and Arabic fonts, as the site does. A picture of rendered text holds no
font file.

The tool writes them, so a change is a new run of it, never an edit of a file here.

| File | What it shows | License |
|---|---|---|
| `en.png` | The site's name and the hero's lead in English, beside a keyboard with falling notes | MIT |
| `de.png` | The site's name and the hero's lead in German, beside a keyboard with falling notes | MIT |
| `es.png` | The site's name and the hero's lead in Spanish, beside a keyboard with falling notes | MIT |
| `zh.png` | The site's name and the hero's lead in Chinese, beside a keyboard with falling notes | MIT |
| `hi.png` | The site's name and the hero's lead in Hindi, beside a keyboard with falling notes | MIT |
| `ar.png` | The site's name and the hero's lead in Arabic, right to left, beside a keyboard with falling notes | MIT |
