# The site's design: the visual rules every page follows

Learn Piano Easy is a site of three parts: the landing page, "Learn Piano" and "Just Play Piano". Every
page of each part is built from one set of tokens and one set of components. A page never sets a
colour, a size or a timing of its own. This file holds the rules until `src/ui/tokens.css` and each
component's head comment own them. Then each section here shrinks to a link, in the same commit.

## The feel

- **Friendly, vibrant and premium.** The site feels like a well made game menu, never like a form. It
  is warm and inviting, and its colour comes from the mascot's picture.
- **Neutral ground, vivid accents.** The page and its surfaces stay near white or near black. Colour
  sits on what the learner acts on or what tells them something.
- **Raised things look raised.** A button, a card and a panel each have a lit top edge and a soft
  shadow tinted with the ink's violet. A field is a well, sunken below its surface.
- **One thing to look at.** Every view has one focal point and one primary action. The eye reads a view
  in a fixed order: the heading, the focal point, the primary action, then the rest.
- **Clear edges.** Every group of content sits on a surface with a visible edge: a card, a panel or a
  band. Nothing floats without a frame, except the hero's illustration.
- **Play invites play.** Every interactive thing answers the pointer: it lifts, glows or presses.
  A learner should want to touch it.
- **Calm by default, joyful on success.** Motion is quiet while the learner works. A reward, such as a
  passed lesson or a new badge, gets the one big animation of its moment.

## The tokens

A token is a named CSS custom property on `:root`. Components read tokens and never raw values.
[src/ui/tokens.css](../src/ui/tokens.css) holds every token's value in both themes, and the rules
below say how each is used.

### Colour

| Token | Role |
|---|---|
| `--c-bg` | The page: warm paper in light, violet ink in dark |
| `--c-surface-1` | A card or a band |
| `--c-surface-2` | A raised card, a menu or a dialog |
| `--c-sunken` | The well of a field, a track or an inset list |
| `--c-line`, `--c-line-strong` | The edge of a surface, and the firmer edge of a control |
| `--c-text`, `--c-text-soft` | Body text and headings, and secondary text |
| `--c-brand` | Honey, the mascot's fur: the primary action, rewards and the logo. A fill only |
| `--c-brand-ink`, `--c-brand-text` | Text on honey, and honey as text or an edge on a surface |
| `--c-accent` | Teal: what is chosen, linked or switched on |
| `--c-iris`, `--c-orchid` | The two supporting hues, for a part, a group or a tag |
| `--c-success` | Green: a right note, a passed step and a saved change |
| `--c-danger` | Red: an error, a wrong note and an action that destroys |
| `--c-warning` | Orange: something to check before going on |
| `--c-info` | Blue: a neutral note or hint |
| `--c-reward`, `--c-mistake` | XP, stars and levels in honey, and a wrong note in the error's red |
| `--c-focus` | The focus ring, in iris |
| `--c-scrim` | The dim behind a dialog, dark in both themes |

- **Four hues and four signals.** Honey, teal, iris and orchid are the brand. Green, red, orange and
  blue are signals, and a signal never decorates.
- **Each hue has a role.** Honey is the one primary action of a view. Teal marks state: selected, on,
  linked. Iris and orchid tell groups apart, such as the parts of the site or the tabs of a panel.
- **A hue token carries text.** Every hue but `--c-brand` reaches 4.5 to 1 on every surface. Its `-ink`
  token is the text on its fill, and its `-soft` token is its tint behind text.
- **A `-vivid` token only decorates.** It fills a bar, a glow or a shape, and never carries or backs text.
- **The versions of a song of ours have their own colours,** as [our-songs.md](our-songs.md) names
  them: grey, blue, purple, gold and red. Their tokens are `--c-rarity-common` to `--c-rarity-mythic`,
  named by the versions' ids. They colour the four versions and the original score.
- **Each world of *Learn Piano* has one accent token,** `--c-world`, set on its map and its lessons.
  An accent decorates and never carries text below its contrast.
- **A world names its accent in `src/learn/course.ts`,** one of the tokens `--c-world-<accent>`. Its
  band sets `--c-world` to that token.
- **Colour never carries meaning alone.** A right note also shows a check, and a wrong one a cross.
- **A gradient is a token.** `--g-brand` is the sheen of the primary action. `--g-aura` is the glow of
  honey, teal and iris behind a hero or a header. No surface that holds body text has a gradient.

### Type

- **One family: Plus Jakarta Sans,** a variable font under the SIL Open Font License. It is
  self-hosted, so the site loads it offline.
- **The scale is fixed.** Each step is a token from `--t-xs` to `--t-display`. The two largest grow
  with the viewport through `clamp()`.
- **Body text is `--t-md` at least,** with the line height `--lh-body` and a line of at most `--measure`.
- **Headings use weights `--w-bold` and `--w-heavy`,** with `--lh-heading` and `--ls-heading`.
- **Numbers that count up,** such as XP and timers, use tabular figures, so they never shift sideways.
- **A view uses at most three sizes of text,** besides its heading.

### Space and layout

- **Every distance is a multiple of 4 pixels,** taken from `--s-1` to `--s-12`.
- **Related things sit closer than unrelated things.** The gap inside a group is always smaller than
  the gap between groups.
- **A page's content sits in one container** of at most `--s-container`, with side gutters of
  `--s-gutter`, which grows with the width. The landing page's hero and bands may run full width.
- **A component adapts to its own width** through container queries, and a page adapts to the window
  through the breakpoints that `tokens.css` names.
- **Everything aligns to a grid line or a shared edge.** No element is nudged by a pixel to look right.

### Shape and depth

- **Radii:** `--r-control` for a control, `--r-card` for a card, `--r-panel` for a panel, and
  `--r-pill` for a pill.
- **Three elevations,** `--e-1` to `--e-3`, each a soft two-layer shadow. A card rests on `--e-1`, a
  menu on `--e-2`, and a dialog or the top bar on `--e-3`.
- **`--e-rim` lights a raised thing's top edge,** and `--e-glow` is the honey light under the primary
  action as it lifts.
- **The top bar is glass:** a translucent surface with a background blur. Where the browser has no
  blur, it is an opaque surface.

### Motion

- **Durations are tokens,** from `--m-micro` to `--m-large`. Only a reward runs longer, up to
  `--m-reward`.
- **Three easings:** `--ease-standard` for most moves, and `--ease-emphasis` for what enters the
  screen. `--ease-spring` is for a thumb, a check or a button that snaps into place.
- **What enters, enters in order.** The parts of a view rise one after another, a few dozen
  milliseconds apart, so the eye follows them.
- **Only `transform` and `opacity` animate.** Nothing animates a size or a position property, so no
  animation moves the layout or drops a frame.
- **A page change is a cross-fade with a small rise,** through the View Transitions API where the
  browser has it. Without it, the new page shows at once.
- **Reduced motion is honoured.** With `prefers-reduced-motion`, every move becomes a short fade, and
  nothing loops.
- **Nothing flickers.** A view shows only once its fonts, its text and its first data are ready. A slow
  part shows a skeleton of its final size, never a spinner that moves the layout.

## The components

Every component is a function in `src/ui/components/` that returns an element, with its styles beside
it. It takes typed options, never a class name from its caller. The gallery page, `design/`, shows
every component in every state.

| Component | Variants and states |
|---|---|
| Button | [src/ui/components/button.ts](../src/ui/components/button.ts) |
| Icon button | [src/ui/components/icon-button.ts](../src/ui/components/icon-button.ts) |
| Link | [src/ui/components/link.ts](../src/ui/components/link.ts) |
| Card | [src/ui/components/card.ts](../src/ui/components/card.ts) |
| Chip | [src/ui/components/chip.ts](../src/ui/components/chip.ts) |
| Badge medal | [src/ui/components/badge-medal.ts](../src/ui/components/badge-medal.ts) |
| Progress | [src/ui/components/progress.ts](../src/ui/components/progress.ts) |
| XP counter | [src/ui/components/xp-counter.ts](../src/ui/components/xp-counter.ts) |
| Tabs and segmented control | [src/ui/components/tabs.ts](../src/ui/components/tabs.ts) |
| Toggle, slider, select, text field | [src/ui/controls.ts](../src/ui/controls.ts) |
| Dialog and sheet | [src/ui/components/dialog.ts](../src/ui/components/dialog.ts) |
| Toast | [src/ui/components/toast.ts](../src/ui/components/toast.ts) |
| Tooltip | [src/ui/components/tooltip.ts](../src/ui/components/tooltip.ts) |
| Top bar | [src/ui/components/top-bar.ts](../src/ui/components/top-bar.ts) |
| Section | [src/ui/components/section.ts](../src/ui/components/section.ts) |
| Empty state | [src/ui/components/empty-state.ts](../src/ui/components/empty-state.ts) |
| Mascot | [src/ui/components/mascot.ts](../src/ui/components/mascot.ts) |
| Skeleton | [src/ui/components/skeleton.ts](../src/ui/components/skeleton.ts) |
| Piano view, the 3D piano of every page | [src/render/piano-keys.ts](../src/render/piano-keys.ts) |
| Staff | [src/ui/components/staff.ts](../src/ui/components/staff.ts) |

## Reading and hierarchy

- **Every view has one `h1`,** and headings never skip a level.
- **Text contrast is at least 4.5 to 1,** and large text and the edges of controls are at least 3 to 1.
- **A touch target is at least 44 by 44 pixels** on a touch screen.
- **Icons sit on a 24 pixel grid** with a 1.75 pixel stroke. The set is our subset of Lucide, under the
  ISC License.
- **Text never runs under another element, and never clips.** A text that may grow, such as a German
  label, wraps or has room. Only a song title in a list may end in an ellipsis, with its full title on
  hover.
- **Every interactive element shows a focus ring,** 2 pixels in `--c-focus`, offset from its edge.

## Languages

- **Every text a person reads comes from the message catalog** of its locale. No component holds text.
- **Every text is written in English and German.** Every other locale may lack a text and shows the
  English in its place, until a translation pass, as [translation.md](agent/translation.md) says.
- **Every layout fits the longest language.** German runs about a third longer than English, so the
  layout checks run in English and German. A shipped locale adds its own run at 360 and 1280 pixels.
- **The pseudo-locale `en-XA` runs every text 40% longer,** wrapped in `⟦ ⟧`. The layout checks run in
  it too. `e2e/pseudo.e2e.ts` fails on a text without the brackets, and on a flaw the longer text adds.

## The checks

A flaw a person can see must fail a test. `e2e/layout-check.ts` runs these checks on a page, at the
widths 360, 768, 1280 and 1920, in both themes and in every locale:

- No horizontal scroll on the page.
- No text clipped by its box, unless the element allows an ellipsis.
- No two interactive elements overlap.
- Every touch target is large enough at the touch widths.
- Every text meets its contrast against its computed background.
- The layout shifts by at most `SHIFT_LIMIT` of `src/ui/layout-geometry.ts`, while the page loads and
  while it changes view.
- No English text shows in another locale.
- The page logs no error.

`bun run shot` shows a page to a session at each width, and the session looks at it before it commits.

## The mascot

- **The mascot is our piano teacher,** an ape with honey fur in a corduroy jacket. The palette comes
  from its picture.
- **It shows where a person would:** it greets on the landing page, waits in an empty state and cheers
  at a reward. It never sits beside a control or inside a form.
- **Every view shows it through the mascot component,** which owns each pose's file and frame.
- **Each pose is a short silent video,** with its first frame as a still for reduced motion. The scene
  plays once, and the portrait loops.

## Open

- More poses of the mascot, for the lessons and the rewards.
