# The features, and what we build

This file lists what a complete piano-learning web app offers, and what Learn Piano Easy does with each.
That app's settings, one row each, are [settings.md](settings.md). Each feature names the goal that
built it, by slug. [findings.md](../findings.md) holds each goal's findings under its slug.

## Modes

| Feature | Ours | Goal |
|---|---|---|
| Player: the song plays, and the learner watches or plays along | The same, as the default mode | `transport` |
| Scored: each played note is judged against the song | The same, with accuracy history per song | `input-and-modes` |
| Free play, marked beta: the learner plays with no song | The same, with recording to MIDI | `input-and-modes` |
| Pitch practice: a quiz of notes in a chosen key and range, ended by a mistakes dialog | The same | `input-and-modes` |
| A track can require play-along: the song waits until its notes are played | A full wait mode, with each hand practised alone or both together | `input-and-modes` |

Ours adds the play modes at `modes/`: ready-made setups, each a song and a set of settings. A card
opens the player set up for it, and one click undoes its settings. `src/play-modes/modes.ts` owns them.

Ours also adds game mode, which scores each note live with points and combos, at a chosen difficulty.
`src/game/game-mode.ts` owns it.

## Playback

- Play, pause, stop, and a record button for the learner's input.
- Playback speed, and transpose by semitones for both the song and the input.
- A timeline that shows time or `measure.beat`, with optional measure lines and MIDI markers on it.
- A loop over a range of measures, with a count-in, auto restart and muting of notes outside the range.
- Zoom by seconds or by measures on screen, fit-to-song, view moved left or right, and fullscreen.
- Every action has a hotkey, and the hotkeys can be reassigned.
- The song can restart on its end. Notes can sound while the timeline is dragged.
- A render offset shifts the picture against the sound.

Ours adds a loop trainer that raises the speed after each clean pass. All of it is the `transport` goal.

## Tracks

Each track can be shown or hidden, muted, and assigned to a hand. It has its own colour, instrument and
volume. It can require play-along and be drawn in the sheet music. A set of track defaults applies to
each new song. Ours keeps it in `song-library`, where a hand of "none" means the track is not required.
Ours has no instrument choice, for a track or for the learner, because its only sound set is a piano.
Its sheet switch is `sheet-music`'s.

## Input and output

- Web MIDI input from any connected device, remembered between visits.
- The computer keyboard as input, with editable note bindings shown on the piano.
- A clickable and touchable on-screen piano.
- Input restricted to a smaller keyboard's range during play-along.
- MIDI output to a keyboard, with very quiet notes on a chosen channel to light the keys to play.
- The learner's own instrument, colour and volume.

This is the `input-and-modes` goal. Ours makes the smaller keyboard a whole feature, the `keyboard-range`
goal. The learner picks a preset or the exact first and last note. The piano on screen then shows exactly
those keys, and notes beyond them can fold in by octaves.

## Picture

Ours draws the whole scene in 3D with three.js. It has a modelled piano whose keys tilt when pressed,
and rounded note bars on a lane in perspective. Glow and camera presets complete it. Most picture settings
map onto it, and the bullets below name the ones ours drops.

- **Notes:** width, minimum height, rounded corners, stroke, shadow, glow, a hit effect, and shrink and
  fall-off of played notes below the piano.
- **Sustain:** pedal events, pedal periods and sustained notes, each optional.
- **Lines:** measure lines, beat lines and measure numbers, each with colour and thickness.
- **Piano:** key colours, key heights, position on screen, reversed direction, a hit effect, and a flare
  on the keys. Ours keeps the white key length and the flare's switch. It drops the hit effect's switch,
  the black key length and the flare's size, colour, opacity and offset.
- **Incoming notes:** the keys of coming notes are coloured, or marked by a dot, by time window or next
  notes, with fade-in. Ours leaves them out.
- **Lanes:** background colours for groups of keys and for black keys, and highlighted lanes for input.
- **Particles:** presets of particle types, each with texture, blending, colour, size, amount, life,
  physics, noise, turbulence and where they spawn. Ours runs four built-in presets and the learner's
  own, in any mix at once.
- **Piano line:** a shader-drawn wave above the keys, with speed, resolution, amplitude and colour.
- **Overlays:** BPM, FPS, and note details on hover.

The scene is `renderer-3d`. Particles and the piano line are `effects-and-extras`.

## Music theory

- Key detection, with a manual override.
- Chord names on the notes, as ribbon or bar, at five placements, with Roman numerals.
- Blocks above chord notes, showing chord tones or scale degrees, simple or full.
- Note names in letter notation or solfège, on the notes and on the keys, with octave numbers.
- Colour coding by pitch class or by finger, for notes and keys.
- Fingering generated for the first two tracks, or set by hand with keys 1 to 5.
- Lyrics from the file, with a bouncing cursor, and text markers.

This is the `theory` goal, with lyrics and markers in `effects-and-extras`.

## Sheet music

Ours has its own engraver, in the `sheet-music` goal.

- Sheet music below the notes, scrolling or in lines, or alone on the whole screen.
- Grand staff, automatic clef, aligned staves and measure numbers.
- A time signature override, a minimum note value, and rests below a value hidden.
- A cursor, active notes coloured or highlighted with a grow effect, and the input notes drawn.

## Sound

- Three General MIDI soundfonts, and an optional high-quality piano.
- An ADSR envelope, with separate release times for key and pedal.
- The sustain pedal, velocity strength, master and input volume, and detune.
- Reverb from a choice of impulse responses, and a five-band equaliser.
- A metronome over the speakers or the MIDI device, synced to the song or free.
- A background audio track with volume, speed, offset and loop.

Ours ships one sound set, the Salamander Grand Piano, so it has no soundfont choice and no second
piano. The sound is the `audio-engine` goal, and the piano is `piano-sounds`. The background track is
in `effects-and-extras`.

## Library and files

- Example songs, each with a difficulty from 1 to 10.
- Song search, drag-and-drop upload, opening a directory, and uploads kept in the browser.
- The last song reopened on start.
- PDF export of the falling notes above a piano.
- Export and import of settings, particles and uploaded MIDI files.
- An offline cache manager per asset group, with auto caching on update.

Ours takes its songs from four sources: our own arrangements, piano-midi.de, Mutopia and our original
pieces. `public/songs/catalog.json` lists every song with its license and credit. Our arrangements
follow [our-songs.md](../our-songs.md). The library groups some of them as collections: Christmas, film
music and sea shanties. Ours keeps everything the learner has in one backup file, as
[design.md](../design.md) § *The learner's data* says.

The library is `song-library` and `more-songs`, settings are `settings`, and PDF export is
`effects-and-extras`. The cache manager is `offline-release`, and the Data page is `your-data`. The
Christmas collection is `christmas-songs`, and the film and sea collections are `film-songs`.

## Mistakes to avoid

Each one is easy to make, and ours avoids it in the goal named.

- Finger colour settings labelled `1, C#, D, D#, E` instead of fingers 1 to 5 (`settings`).
- An input range from `0` to `88`, which mixes MIDI note numbers with key indexes (`keyboard-range`).
- A release setting described as "Decay value" (`settings`).
- Typos in labels and descriptions, such as "Miliseconds" and "causse" (`settings`).
- Only one particle preset active at a time, though the text promises more (`effects-and-extras`).
- Mozart's name spelt "Wolfang A. Mozart" in a song list (`midi-core`).

## Ours only

- The whole scene in 3D, with camera presets.
- One piano across the site: lessons, the setup check, the landing page and the gallery all draw the
  player's 3D piano. The landing page shows its picture until a click loads it.
- A flat view whose keys fill the screen width, to line up with a real keyboard below the screen.
- The learner's exact keyboard, by preset or by first and last note, drawn key for key.
- Wait mode per hand, and a loop trainer that raises the speed.
- A loop or the whole song repeats seamlessly, timed on the audio clock.
- Accuracy history per song.
- The learner's playing saved as a MIDI file.
- Themes, and a layout that works on a phone.
- Open source, with every third-party license named.
- A sponsor page at `sponsor/`, opened by the top bar's heart. It links to GitHub Sponsors and names
  ways to help that cost no money.
- The site, the course and the song guides read in English, German, Spanish, Chinese, Hindi, Arabic and
  Brazilian Portuguese. Arabic pages read and lay out from right to left, while the piano and the notes keep their direction.
  The language switch in the top bar picks one, and a first visit opens in the browser's language.
- Every page and every lesson is in a sitemap for search engines, with its page in each other language.
  The landing page describes the app as structured data.
- *Learn Piano*, a course of eight worlds that plays like a game. [curriculum.md](../curriculum.md)
  holds the rules every lesson is written by.
- Every lesson step can be played on every input, as [curriculum.md](../curriculum.md) says. In a
  lesson, the computer keyboard shifts by octaves to reach the step's keys, and a bar under the piano
  shows what it reaches. A chord wider than its keys is played a key at a time.
- A step that asks for one key always shows the same keys, with middle C in the middle.
- In a lesson about the hand's movement, the mascot's hand plays each demo with the lesson's fingers.
  The learner can slow it to half speed, and turn to a side view where the thumb's pass shows.
