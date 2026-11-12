# Our songs: every tune in four versions, named by difficulty

An *our song* is our own piano arrangement of a public domain tune, written in four versions. Each
version is named by its difficulty: Beginner, Easy, Medium and Hard. The arrangements are ours, under
the MIT License, so the library can ship them freely.

Our learner is in their first year of piano. Hard is the top of that year, and no version measures a
player with years of practice. The reasons are in [decision 0002](decisions/0002.md), and the names in
[decision 0009](decisions/0009.md). Our songs carry no lyrics.

## The versions

| Version | Id | Colour | The learner | Catalog difficulty | The catalog rates the same |
|---|---|---|---|---|---|
| Beginner | `common` | grey | First days. Has never played, or only for a few hours. | 1 to 1.5 | Our *Mary Had a Little Lamb* |
| Easy | `rare` | blue | First weeks. Plays a tune over a slow bass. | 2 to 2.5 | Burgmüller's *La Candeur* |
| Medium | `epic` | purple | First months. Moves the hand while playing, and both hands keep busy. | 3 to 3.5 | Clementi's Op. 36 No. 1 |
| Hard | `legendary` | gold | About a year. Hands work apart from each other, and quickly. | 4 to 4.5 | Burgmüller's *La Chasse* and *Ballade* |
| Original | `mythic` | red | The original score, where the catalog holds it and rates it above 4.5. It is not ours. | Its own rating | *Für Elise* at 5 |

- **The id is the version's name in the code,** and the learner never reads it. A version's file is
  `<id>.mid`, such as `legendary.mid`, and its catalog row carries the id as `rarity`. The row names the
  file of the song's original score as `mythic`.
- **The meter and the song tools name a version by its id.** The columns of the meter's table are
  Common, Rare, Epic and Legendary.
- **A version's name is its level.** The song explorer names every song's difficulty as a level, a band
  of the catalog difficulty. The first four levels are the four versions' bands. `LEVELS` in
  [src/library/tags.ts](../src/library/tags.ts) owns the levels.
- **The learner never reads the catalog difficulty.** It sorts the songs, fills a card's meter and maps
  to a level.
- **The colour is the token `--c-rarity-<id>`.** The guide and the landing page draw a version in it.
  The explorer draws a version's step in its level's hue.
- **The explorer shows a song as one card,** with a step per version and the Original as its last step.
  The head comment of [src/library/library-panel.ts](../src/library/library-panel.ts) owns how.

Each version has a tagline, which says what the version asks. The explorer shows it as the hover text
of the version's step, and the guide beside the version's name. The taglines are in the message catalogs, under
`rarity` in `src/i18n/messages/player-library.en.ts`.

## What each version asks

**Beginner** keeps each hand in one place. The right hand plays the tune one note at a time. The left
hand holds a bass note or an open fifth, and changes it on a strong beat. Nothing is faster than a
quarter note. The learner reads the song as a tune and a bass, and never as two parts to juggle.

**Easy** adds rhythm and harmony. The right hand plays eighth notes and an occasional two-note chord. The
left hand plays triads and a bass that moves on the beat. A hand may change position at a rest or a held
note. The pedal, where it is used, holds for whole bars.

**Medium** makes the hand travel. The thumb passes under and fingers cross over in runs. The left hand
plays broken chords, such as an Alberti bass or a waltz bass. The tune may pass to the left hand for one
section. The pedal changes with each chord.

**Hard** frees both hands. Sixteenth notes run in either hand. A hand may hold a tune and its own
accompaniment at once. Octaves, stride bass, arpeggios over two octaves and a hand crossing are allowed.
It is the hardest version a first-year learner can play well, and the step before the original.

## The limits

The meter measures every version against a table of limits, one column per version. A version **earns
its place** when it fits its own limits and breaks at least one limit of the version below. An Easy
version that fits Beginner is then refused, because it adds nothing.

The head comment of [tools/song-meter.ts](../tools/song-meter.ts) owns the table. It also says how each
measure counts, how the catalog difficulty is set and how the limits were calibrated.

## The tune keeps the song recognisable

Every song has one *tune*: its melody as notes and lengths, in one key, checked against a public domain
edition. The tune marks its *hook*, the bars a listener knows the song by.

- **Every version plays the hook note for note,** within its first 8 bars. A move to another key is
  allowed.
- **Beginner may simplify the rest of the tune.** It may straighten a dotted rhythm, merge repeated
  notes and drop one note in ten.
- **Easy and above play every note of the tune** at its place in the bar.
- **Medium and Hard may add notes between the tune's notes,** such as a fill or a grace note, and never
  instead of them.
- **The tune is the top voice of its hand,** so the ear finds it at once.
- **Beginner and Easy may move the song to an easier key:** C, G or F major, or A, E or D minor. Medium
  and Hard keep the tune's own key, unless it has more than 4 sharps or flats.

The meter finds the tune in a version and matches it after the move of key. A version that loses the
hook is refused.

## Writing for the piano

The limits make a version playable. These rules make it sound like piano music, and the listening
review checks them.

- **Beginner:** single bass notes and open fifths, held. The bass plays the roots of the tune's chords.
- **Easy:** triads in root position, a root and fifth in turns, and a slow waltz bass.
- **Medium:** broken chords, an Alberti bass, a waltz bass, inversions that keep the hand still, and
  thirds or sixths under the tune.
- **Hard:** octave bass, stride, arpeggios over two octaves, a counter-melody, the tune in chords, and a
  hand crossing as a show move.
- **Every version follows the tune's own chords,** taken from the public domain edition where it has
  them, and ends on the home chord.
- **Every version sounds complete by itself,** never like a part with something missing.

## The guide every version carries

Each version ships with a guide, so the learner knows how to play it before the first note.

- **About the song.** Where the tune comes from, in two to four sentences, and one fun fact. All four
  versions share it.
- **Skills.** One to three skills the version teaches, named from a fixed list, such as "thumb under" or
  "Alberti bass". The library can then show what is new in each version.
- **Fingering.** A finger for every note, written by the arranger. The app shows it as the song's own
  fingering, and a finger the learner sets still wins.
- **Start position.** The key under each finger of each hand at the first note. The app lights those keys
  before the song starts.
- **Practice plan.** Three to five steps, each a sentence and an app setup: the hands, the speed, the bars
  to loop and wait mode. One click applies a step.
- **Tips.** Short notes tied to a range of bars, each of one kind: fingering, rhythm, sound or trick. The
  app shows a tip as its bars come near. A tip may make the learner smile, and it always teaches.
- **Tricky spots.** The bars the meter measures as the hardest, each with a tip and a loop button.
- **Level up.** A version is beaten by one take with both hands, at full speed, with at least 90%
  accuracy. The app then offers the next version. After Hard it offers the Original.

Every sentence of a guide follows [prose.md](agent/prose.md), because a learner reads it.

## How a song is made

1. **Pick a tune that is free everywhere.** Its composer died more than 70 years ago, and it was
   published at least 95 years ago, or it is a traditional tune. The song records the composer, the
   years and the edition its tune was checked against. A tune known mostly through a protected
   arrangement follows the original, never that arrangement.
2. **Write the tune once** in the notation, mark its hook, and check it note for note against the edition.
3. **Write the four versions from the tune,** each with a finger on every note.
4. **Run the meter.** It refuses a bar that does not fill, a broken limit and a lost hook. It also
   refuses a version that does not earn its place, a missing finger and a move past its practical span.
5. **Write the guide,** with a tip for every tricky spot the meter names.
6. **Listen in the app.** The user plays each new batch and files what sounds wrong, and each note becomes
   a fix.

The meter is calibrated on books a learner meets late in the first year, and a test keeps them in Medium
or Hard. The catalog's own ratings are set by hand, so they guide the tuning and never overrule the
meter.

## Open

- **The fingering cost each version allows.** The meter reports it for the first songs, and the limit is
  set from them.
