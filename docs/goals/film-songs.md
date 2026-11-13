---
looper: 1
title: Film songs
summary: "Thirty public domain pieces famous from film, five sea shanties and three film-style tunes of our own ship in four versions, grouped as the library's film and sea collections."
context: [docs/our-songs.md, tools/make-our-songs.ts, tools/our-songs/fur-elise.ts, tools/song-meter.ts, tools/our-songs.test.ts]
stages:
  - id: 1
    title: The film and sea collections
    status: done
  - id: 2
    title: "Five film pieces: Also sprach Zarathustra to Clair de lune"
    status: open
  - id: 3
    title: "Five film pieces: Moonlight Sonata to Eine kleine Nachtmusik"
    status: open
  - id: 4
    title: "Five film pieces: Lacrimosa to Sarabande"
    status: open
  - id: 5
    title: "Five film pieces: William Tell to Ave Maria"
    status: open
  - id: 6
    title: "Five film pieces: Boléro to Barcarolle"
    status: open
  - id: 7
    title: "Five film pieces: Can-can to Pomp and Circumstance"
    status: open
  - id: 8
    title: Five sea shanties
    status: open
  - id: 9
    title: Three film-style tunes of our own
    status: open
  - id: 10
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: film-and-sea-collections
    stage: 1
    name: the film and sea collections hold every film song and shanty of ours
    run: [bun, test, tools/our-songs.test.ts]
    tests: [every_film_song_is_in_the_collection, every_shanty_is_in_the_collection, a_tune_of_our_own_needs_no_public_domain_years]
---

# Film songs

## Why

Learners want to play the music they know from films. Almost every modern film theme is under copyright
for decades. A piano arrangement of one is a derivative work, which we may not ship under MIT. So this
goal takes the public domain music that films made famous, such as *Clair de lune* and *Boléro*.

Two smaller sets sit beside it. Five public domain sea shanties give the pirate feel. Three tunes of our
own give the sound of modern film scores, with melodies that are ours alone. Every song follows
[docs/our-songs.md](../our-songs.md) in four versions.

## Standing decisions

- **Every song follows [docs/our-songs.md](../our-songs.md)** and the meter's limits, as the Christmas
  songs do. `tools/our-songs/fur-elise.ts` is the template for a module.
- **No protected theme ships, in any version or as a quote.** That rules out every score by a living
  composer, and every score published 95 or fewer years ago. *O Fortuna*, Barber's *Adagio for
  Strings*, *Sabre Dance* and Rachmaninoff's 18th Paganini variation are protected, so none is here.
- **The thirty film pieces, in this order,** so the best known ship first. The film is the one the about
  text names:
  1. *Also sprach Zarathustra*, its opening: Richard Strauss, 1896. *2001: A Space Odyssey*.
  2. *The Blue Danube*: Johann Strauss II, 1867. *2001: A Space Odyssey*.
  3. *Ride of the Valkyries*: Richard Wagner, 1870. *Apocalypse Now*.
  4. *Dies irae*: the medieval chant. *The Shining*.
  5. *Clair de lune*: Claude Debussy, 1905. *Ocean's Eleven*.
  6. *Moonlight Sonata*, its first movement: Ludwig van Beethoven, 1802. *Immortal Beloved*.
  7. Symphony No. 7, its Allegretto: Ludwig van Beethoven, 1816. *The King's Speech*.
  8. *Gymnopédie No. 1*: Erik Satie, 1888. *The Royal Tenenbaums*.
  9. *Hungarian Dance No. 5*: Johannes Brahms, 1869. *The Great Dictator*.
  10. *Eine kleine Nachtmusik*, its first movement: Wolfgang Amadeus Mozart, 1827. *Amadeus*.
  11. *Lacrimosa*, from the Requiem: Mozart, as Franz Xaver Süssmayr finished it, 1800. *Amadeus*.
  12. Piano Concerto No. 21, its Andante: Mozart, 1800. *Elvira Madigan*.
  13. *Air on the G String*: Johann Sebastian Bach, as August Wilhelmj set it in 1871. *Se7en*.
  14. Toccata and Fugue in D minor, its opening: Johann Sebastian Bach, 1833. *Fantasia*.
  15. Sarabande in D minor, HWV 437: George Frideric Handel, 1733. *Barry Lyndon*.
  16. *William Tell* Overture, its finale: Gioachino Rossini, 1829. *The Lone Ranger*.
  17. *Swan Lake*, its main theme: Pyotr Ilyich Tchaikovsky, 1877. *Black Swan*.
  18. *Night on Bald Mountain*: Modest Mussorgsky, as Nikolai Rimsky-Korsakov set it in 1886. *Fantasia*.
  19. *The Sorcerer's Apprentice*: Paul Dukas, 1897. *Fantasia*.
  20. *Ave Maria*: Franz Schubert, 1825. *Fantasia*.
  21. *Boléro*: Maurice Ravel, 1929. *10*.
  22. *Flight of the Bumblebee*: Nikolai Rimsky-Korsakov, 1900. *Shine*.
  23. Piano Concerto No. 2, its first theme: Sergei Rachmaninoff, 1901. *Brief Encounter*.
  24. *Cavalleria rusticana*, its Intermezzo: Pietro Mascagni, 1890. *Raging Bull*.
  25. *Barcarolle*, from *The Tales of Hoffmann*: Jacques Offenbach, 1881. *Life Is Beautiful*.
  26. *Can-can*, from *Orpheus in the Underworld*: Jacques Offenbach, 1858. *Moulin Rouge!*.
  27. Nocturne in C-sharp minor, B. 49: Frédéric Chopin, 1875. *The Pianist*.
  28. *Morning Mood*: Edvard Grieg, 1888. Countless sunrise scenes.
  29. *Wedding March*: Felix Mendelssohn, 1843. Countless wedding scenes.
  30. *Pomp and Circumstance* March No. 1, its trio: Edward Elgar, 1901. Countless graduations.
- **The years above are from memory, so the session checks each in a source.** `isPublicDomain` must
  pass on years the session has read. A song whose years fail is swapped for a reserve.
- **A song whose source cannot be confirmed is swapped for a reserve,** in this order. The first is
  *Habanera* from *Carmen*, by Georges Bizet, 1875. The second is *Liebestraum No. 3*, by Franz Liszt,
  1850. The third is the *Funeral March* from Chopin's Sonata No. 2, 1840. The swap is recorded here.
- ***Dance of the Sugar Plum Fairy* is not on the list.** The Christmas goal found no source a session
  may read that prints it, as `docs/findings.md` § `christmas-songs` records.
- **A tune follows its public domain source, never a film's protected arrangement.** *The Shining* plays
  Wendy Carlos's setting of *Dies irae*, and *A Clockwork Orange* plays hers of Rossini. Our versions
  take the chant and Rossini's score.
- **An orchestral piece's tune is its melody, read from a score of the work.** A piano reduction that
  is itself public domain may serve as the source. Its accompaniment is never copied, since our versions
  write their own.
- **A film piece names its film in its about text,** in one sentence. The app shows no film poster,
  still or logo, and no new catalog field carries the film.
- **Two film pieces get an Original step,** since the catalog holds their piano score rated above 4.5.
  *Clair de lune* names `piano-midi/deb_clai.mid` as `mythic`, and the *Moonlight Sonata* names
  `piano-midi/mond_1.mid`. Every other film piece has `mythic: null`, since its original is not for
  piano.
- **The four film songs we already have join the film collection:** *Canon in D*, *Ode to Joy*, *In
  the Hall of the Mountain King* and *The Entertainer*. Each gains a sentence naming its film:
  *Ordinary People*, *Die Hard*, *The Social Network* and *The Sting*.
- **The five sea shanties, in this order:** *Drunken Sailor*, *Blow the Man Down*, *The Sailor's
  Hornpipe*, *Spanish Ladies* and *Haul Away Joe*. Each takes its earliest dated print with notes as
  `published`. The reserves are *Shenandoah*, then *Leave Her, Johnny*.
- ***Wellerman* is not a shanty of ours.** Its tune was first printed in the 1970s, so it is protected.
- **The three tunes of our own are new melodies in a film style.** A style is free, and a melody is
  not. *Neon Chase* is an 80s synth groove in A minor, at about 118 beats a minute. *Black Flag Jig*
  is a swashbuckling adventure theme in 6/8, in D minor. *Last Horizon* is a slow ostinato under held
  chords, in C minor.
- **A tune of our own quotes no protected theme.** Its hook shares no run of five intervals with a
  theme by Faltermeyer, Silvestri, Badelt, Zimmer, Williams or Horner that the session knows. The
  writing subagent's brief names this rule, and the session checks each hook before the module ships.
- **A tune of our own needs no public domain years.** `OurSource` gains `own: true`, and its composer is
  `learn-piano-easy`. `isPublicDomain` passes such a source, and the source's `edition` says the tune
  is ours. Its rows keep the MIT license and our credit, as every song of ours does.
- **The collections are `film` and `sea`,** shown after `christmas` in that order. English names them
  "At the movies" and "Sea shanties". German names them "Filmmusik" and "Seemannslieder".
- **"At the movies" holds the thirty pieces, the four we already have, and the three tunes of our
  own.** A tune of our own says in its about text that it is ours, in the style of a film score, and
  names no film.
- **A tune's notes come from a score the session reads, never from memory.** Wikipedia's `<score>`,
  Mutopia and Commons are the sources a session may read. IMSLP's `robots.txt` refuses `/images/`, so
  it is never fetched.
- **Each module of a batch is written by its own writing subagent** on the session's model, with
  `tools/our-songs/fur-elise.ts` and [docs/our-songs.md](../our-songs.md) as its reading. Its brief names
  the song's source, its hook bars and its key. No subagent builds. A subagent checks its module with
  `bun tools/check-our-song.ts tools/our-songs/<slug>.ts`. The session adds the modules to `ourSongs`,
  runs the writer, and fixes what the meter refuses.
- **The session checks each tune against a printed score** before the module ships. A subagent writes
  from memory, and the meter cannot catch a wrong note.
- **Every film slug is listed in `FILM`, and every shanty in `SEA`, in `tools/our-songs.test.ts`.** A
  new module takes the slug its stage names, or the test goes red. A reserve's swap edits that list.
  Stage 1 listed all 42 slugs, so a later stage adds its modules to `ourSongs` alone.
- ***The Entertainer*'s fun fact moved.** Its about text now names *The Sting*, so its fun fact tells of
  Joplin's special Pulitzer Prize of 1976 instead.
- **Trade-offs.** *Performance:* the explorer groups 80 songs instead of 42, still once per catalog
  read. *Memory:* the offline cache grows by about 1.2 MB, from about 31 KB per song. *Usability:* a
  learner finds film music under one name, and no protected theme they ask for. *Simplicity:* one
  flag, `own`, joins the source model, and nothing else in the model changes.
- Lanes: stages run in order. Every stage edits `ourSongs` in `tools/make-our-songs.ts` and rewrites
  the catalog.

## Stages

### 1. The film and sea collections

**Does:** the library shows the "At the movies" and "Sea shanties" groups, and our four film songs are
in the first.

- [x] `film` and `sea` join `Collection` and `COLLECTIONS`, after `christmas`. `src/library/search.ts:69`
- [x] Their names in English and German. `src/i18n/messages/player-library.en.ts:19`, `src/i18n/messages/player-library.de.ts:17`
- [x] `own` on `OurSource`, and `isPublicDomain` passes an own source. `tools/make-our-songs.ts:109`, `tools/make-our-songs.ts:237`
- [x] *Canon in D* names `film` and its film. `tools/our-songs/canon-in-d.ts:1`
- [x] *Ode to Joy* names `film` and its film. `tools/our-songs/ode-to-joy.ts:1`
- [x] *In the Hall of the Mountain King* names `film` and its film. `tools/our-songs/hall-of-the-mountain-king.ts:1`
- [x] *The Entertainer* names `film` and its film. `tools/our-songs/the-entertainer.ts:1`
- [x] Run the writer, so the catalog rows carry the collection. `tools/make-our-songs.ts:1`
- [x] Tests `every_film_song_is_in_the_collection`, `every_shanty_is_in_the_collection` and
  `a_tune_of_our_own_needs_no_public_domain_years`. `tools/our-songs.test.ts:98`
- [x] E2e test `the_library_lists_the_film_songs`. `e2e/library.e2e.ts:1`
- [x] The film and sea collections join the feature list. `docs/reference/features.md:1`

### 2. Five film pieces: Also sprach Zarathustra to Clair de lune

**Does:** film pieces 1 to 5 of the list ship in four versions.

**Split:** five writing subagents, one module each.

- [ ] *Also sprach Zarathustra*. `tools/our-songs/also-sprach-zarathustra.ts:1`
- [ ] *The Blue Danube*. `tools/our-songs/the-blue-danube.ts:1`
- [ ] *Ride of the Valkyries*. `tools/our-songs/ride-of-the-valkyries.ts:1`
- [ ] *Dies irae*. `tools/our-songs/dies-irae.ts:1`
- [ ] *Clair de lune*, with its Original. `tools/our-songs/clair-de-lune.ts:1`
- [ ] Add the five to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`

### 3. Five film pieces: Moonlight Sonata to Eine kleine Nachtmusik

**Does:** film pieces 6 to 10 of the list ship in four versions.

**Split:** five writing subagents, one module each.

- [ ] *Moonlight Sonata*, with its Original. `tools/our-songs/moonlight-sonata.ts:1`
- [ ] Symphony No. 7, Allegretto. `tools/our-songs/beethoven-7-allegretto.ts:1`
- [ ] *Gymnopédie No. 1*. `tools/our-songs/gymnopedie-1.ts:1`
- [ ] *Hungarian Dance No. 5*. `tools/our-songs/hungarian-dance-5.ts:1`
- [ ] *Eine kleine Nachtmusik*. `tools/our-songs/eine-kleine-nachtmusik.ts:1`
- [ ] Add the five to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`

### 4. Five film pieces: Lacrimosa to Sarabande

**Does:** film pieces 11 to 15 of the list ship in four versions.

**Split:** five writing subagents, one module each.

- [ ] *Lacrimosa*. `tools/our-songs/lacrimosa.ts:1`
- [ ] Piano Concerto No. 21, Andante. `tools/our-songs/mozart-21-andante.ts:1`
- [ ] *Air on the G String*. `tools/our-songs/air-on-the-g-string.ts:1`
- [ ] Toccata and Fugue in D minor. `tools/our-songs/toccata-in-d-minor.ts:1`
- [ ] Sarabande in D minor. `tools/our-songs/handel-sarabande.ts:1`
- [ ] Add the five to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`

### 5. Five film pieces: William Tell to Ave Maria

**Does:** film pieces 16 to 20 of the list ship in four versions.

**Split:** five writing subagents, one module each.

- [ ] *William Tell* Overture, finale. `tools/our-songs/william-tell.ts:1`
- [ ] *Swan Lake*. `tools/our-songs/swan-lake.ts:1`
- [ ] *Night on Bald Mountain*. `tools/our-songs/night-on-bald-mountain.ts:1`
- [ ] *The Sorcerer's Apprentice*. `tools/our-songs/the-sorcerers-apprentice.ts:1`
- [ ] *Ave Maria*. `tools/our-songs/ave-maria.ts:1`
- [ ] Add the five to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`

### 6. Five film pieces: Boléro to Barcarolle

**Does:** film pieces 21 to 25 of the list ship in four versions.

**Split:** five writing subagents, one module each.

- [ ] *Boléro*. `tools/our-songs/bolero.ts:1`
- [ ] *Flight of the Bumblebee*. `tools/our-songs/flight-of-the-bumblebee.ts:1`
- [ ] Piano Concerto No. 2, first theme. `tools/our-songs/rachmaninoff-2.ts:1`
- [ ] *Cavalleria rusticana*, Intermezzo. `tools/our-songs/cavalleria-intermezzo.ts:1`
- [ ] *Barcarolle*. `tools/our-songs/barcarolle.ts:1`
- [ ] Add the five to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`

### 7. Five film pieces: Can-can to Pomp and Circumstance

**Does:** film pieces 26 to 30 of the list ship in four versions.

**Split:** five writing subagents, one module each.

- [ ] *Can-can*. `tools/our-songs/can-can.ts:1`
- [ ] Nocturne in C-sharp minor. `tools/our-songs/chopin-nocturne-c-sharp-minor.ts:1`
- [ ] *Morning Mood*. `tools/our-songs/morning-mood.ts:1`
- [ ] *Wedding March*. `tools/our-songs/wedding-march.ts:1`
- [ ] *Pomp and Circumstance*. `tools/our-songs/pomp-and-circumstance.ts:1`
- [ ] Add the five to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`

### 8. Five sea shanties

**Does:** the five shanties ship in four versions, in the "Sea shanties" group.

**Split:** five writing subagents, one module each.

- [ ] *Drunken Sailor*. `tools/our-songs/drunken-sailor.ts:1`
- [ ] *Blow the Man Down*. `tools/our-songs/blow-the-man-down.ts:1`
- [ ] *The Sailor's Hornpipe*. `tools/our-songs/sailors-hornpipe.ts:1`
- [ ] *Spanish Ladies*. `tools/our-songs/spanish-ladies.ts:1`
- [ ] *Haul Away Joe*. `tools/our-songs/haul-away-joe.ts:1`
- [ ] Add the five to `ourSongs` and `SEA`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`

### 9. Three film-style tunes of our own

**Does:** *Neon Chase*, *Black Flag Jig* and *Last Horizon* ship in four versions, in the film group.

**Split:** three writing subagents, one module each. Each brief names the style, the key, the tempo
and the rule that it quotes no protected theme.

- [ ] *Neon Chase*. `tools/our-songs/neon-chase.ts:1`
- [ ] *Black Flag Jig*. `tools/our-songs/black-flag-jig.ts:1`
- [ ] *Last Horizon*. `tools/our-songs/last-horizon.ts:1`
- [ ] The session checks each hook against the protected themes it knows. `tools/our-songs/neon-chase.ts:1`
- [ ] Add the three to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`
- [ ] Screenshots of both groups, and one film piece at each version, with `bun run shot`. `tools/shot.ts:1`

### 10. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stage 1 is done. The library groups "At the movies" after Christmas, and "Sea shanties" shows once a
shanty ships. The four film songs we had are in it, each naming its film. `OurSource.own` lets a tune
of our own pass `isPublicDomain`. `FILM` and `SEA` in `tools/our-songs.test.ts` already list every slug
of the goal. The three unit tests and the e2e test passed once by name.

### Next

**Stage 2: five film pieces, *Also sprach Zarathustra* to *Clair de lune*.** Follow the stage's
`**Split:**` line and the playbook's song-module traps: write in a worktree under `.agent-tmp/`, check
each tune against a printed score, and run `bun x tsc` once the batch lands.

- [ ] Read a score for each of the five, and confirm its years. `tools/our-songs/fur-elise.ts:1`
- [ ] Five writing subagents, one module each. `tools/our-songs/also-sprach-zarathustra.ts:1`
- [ ] Add the five to `ourSongs`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:97`

Expected red: the catalog count in `src/midi/library-songs.test.ts` once stage 2 adds rows. The e2e
test `the_library_lists_the_film_songs` reads card titles, so it may need a scroll once the film group
outgrows one view.

### Backlog

- A hint in the explorer that a learner may open their own MIDI file, such as one they bought.
