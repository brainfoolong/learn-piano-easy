# The curriculum: how *Learn Piano* teaches

*Learn Piano* is the guided part of the site. It plays like a game: a map of worlds, lessons as levels,
stars, XP, a daily streak and badges. Our learner has never played, and the course takes them through
their first year, as the versions of [our-songs.md](our-songs.md) do. This file holds the rules every
lesson is written by, until the lesson model's head comment in `src/learn/model.ts` owns them.

## The shape of the course

- **The course is a list of worlds.** A world teaches one area, such as rhythm, and has its own colour
  and illustration on the map.
- **A world is six to ten lessons, then a boss.** The boss is a song of ours, played in the player at a
  set version, with a practice step of its guide. The first world's boss is a timed key hunt, since its
  learner cannot play a song yet.
- **A world has a skip test:** a short set of its checking steps. Passing it opens the world, so a
  learner who can already play is never locked out.
- **A lesson takes three to six minutes.** It teaches one idea, and its title names that idea.
- **A lesson is a list of steps.** Each step does one thing: it explains, shows, asks or checks.
- **The learner always knows where they are.** A lesson shows its step count and the current step, and
  the map shows the next lesson.

## The step kinds

| Step | The learner | It passes when |
|---|---|---|
| `explain` | Reads one short idea beside an animated illustration | They press Continue |
| `demo` | Watches and hears the piano play, with keys and notes highlighted | It ends, or they skip it |
| `find-key` | Presses the key the step names | They press it, with mistakes counted |
| `play-notes` | Plays a short phrase, which waits for each note or chord | Every note and chord is played, with mistakes counted |
| `rhythm-tap` | Taps any key on the beat with a metronome | Enough taps land inside the window |
| `read-note` | Names a note shown on the staff, or plays it | Enough answers are right |
| `listen` | Hears two sounds and answers: higher, lower or the same | Enough answers are right |
| `quiz` | Picks one of two to four answers | They pick the right one |
| `song` | Plays a song of ours in the player, guided by its practice step | They finish it at the step's accuracy |
| `recap` | Reads what the lesson taught, as two to four points | They press Continue |

- **Every step works without a MIDI keyboard.** The on-screen piano and the computer keyboard play
  every step, on a phone too. Only a MIDI keyboard reports touch strength and the pedal. A step that
  checks either names a `demo` and a `quiz` that replace it on other inputs.
- **A step never punishes.** A mistake shows the right answer gently and lets the learner try again.
  Mistakes lower the stars, and never stop the lesson.
- **A step gives a hint after two mistakes:** the asked key pulses on the on-screen piano.

## Stars and XP

- **A lesson earns one to three stars** from its accuracy over the checking steps. Stars count the best
  attempt, so a replay can only raise them.
- **A lesson earns XP once per star it adds.** A replay that adds no star earns a small practice XP, so
  practice always counts.
- **XP raises the learner's level,** and meeting the daily goal keeps their streak.
- [src/learn/game/xp.ts](../src/learn/game/xp.ts) owns the numbers of stars, XP and levels, and its
  head comment states them. [src/learn/game/streak.ts](../src/learn/game/streak.ts) owns the daily goal
  and the streak.

## Writing a lesson

- **One idea per lesson, one idea per step.** A step's text is at most three sentences.
- **Show before telling.** A new idea starts with a `demo` or an animated `explain`, then the learner
  does it at once.
- **Every idea is checked.** An `explain` is followed within two steps by a step that checks it.
- **Speak to the learner as "you",** in a warm and plain voice. No jargon before its lesson defines it.
- **Every text is written for every locale.** A lesson's structure is one file, and each locale's text
  is a file beside it. The type checker refuses a locale file that misses a text.
- **The German text is written in German,** never translated word for word. It uses "du", and the
  German note names: H for B, and the names of German teaching books, such as *Viertelnote*.
- **No lyrics,** as for our songs.

## The worlds

`COURSE` in `src/learn/course.ts` lists the worlds in order. Each row names the goal that built the
world, and [findings.md](findings.md) holds that goal's findings under its slug.

| World | Teaches | Boss | Goal |
|---|---|---|---|
| Meet the piano | The keys, their names, octaves, posture and finger numbers | A timed key hunt | `learn-first-steps` |
| First melodies | The C position of each hand, steps and skips | *Mary Had a Little Lamb*, Beginner | `learn-first-steps` |
| Rhythm | The beat, note values, rests, counting and time signatures | *Ode to Joy*, Beginner | `learn-first-steps` |
| Reading music | The staff, both clefs, landmark notes and reading by steps | *Old MacDonald Had a Farm*, Beginner | `learn-first-steps` |
| Both hands | Hands apart, then together, over a held bass | *Ode to Joy*, Easy: the rhythm boss returns one version higher | `learn-both-hands` |
| Scales and keys | Half and whole steps, sharps and flats, thumb under, key signatures | *Jingle Bells*, Easy | `learn-both-hands` |
| Chords | Triads, major and minor, the three main chords, broken chords | *Canon in D*, Easy | `learn-both-hands` |
| Expression | Dynamics, legato and staccato, the sustain pedal, phrasing | *Für Elise*, Easy | `learn-both-hands` |

## Open

- Microphone input, so a learner with an acoustic piano is heard. It needs pitch detection of our own,
  and a later goal decides it.
