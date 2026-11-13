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
    status: done
  - id: 3
    title: "Five film pieces: Moonlight Sonata to Eine kleine Nachtmusik"
    status: done
  - id: 4
    title: "Five film pieces: Lacrimosa to Sarabande"
    status: done
  - id: 5
    title: "Five film pieces: William Tell to Ave Maria"
    status: done
  - id: 6
    title: "Five film pieces: Boléro to Barcarolle"
    status: done
  - id: 7
    title: "Five film pieces: Can-can to Pomp and Circumstance"
    status: done
  - id: 8
    title: Five sea shanties
    status: done
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
  3. *Habanera*, from *Carmen*: Georges Bizet, 1875. *The Bad News Bears*. It is the first reserve,
     since no source a session may read prints *Ride of the Valkyries*.
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
  *Habanera* from *Carmen*, by Georges Bizet, 1875. The second is the *Funeral March* from Chopin's
  Sonata No. 2, 1840. The third is the opening of Beethoven's Fifth Symphony, 1809. All three are in
  use, and the swap is recorded here.
- ***Habanera* took the place of *Ride of the Valkyries*.** Wikipedia's articles print no score of the
  Ride, Mutopia holds no Wagner, and Commons holds only paintings and recordings of it. Wikipedia's
  *Habanera* article prints Carmen's first phrase, and that phrase is the tune.
- **Three pieces of stage 6 had no source a session may read.** Wikipedia prints only the opening
  chords of Rachmaninoff's concerto, and Commons holds no score of it. Commons holds only a libretto of
  *Cavalleria rusticana*. For the *Barcarolle*, Commons holds Métra's waltz suite on other themes of the
  opera, not its tune.
- ***Liebestraum No. 3* is not a reserve any more.** Wikipedia prints two bars of it, three notes of
  tune, and neither Mutopia nor Commons holds a score.
- **Chopin's *Funeral March* took the concerto's place, and Beethoven's Fifth took the Intermezzo's.**
  The Fifth is a fourth reserve, chosen because Wikipedia prints its opening and *Fantasia 2000* opens
  with it. Its slug is `beethoven-5`, and the march's is `funeral-march`.
- ***Flight of the Bumblebee* is not a song of ours.** Its theme puts about three notes outside the key
  in every bar. Beginner and Easy allow three in any four bars, in whatever key they take. Changing the
  meter for one song would bend the model, so the song gives way.
- **The 24th and 25th pieces move to stage 7,** since the reserves ran out. Each must be famous from a
  film the session confirms, printed in a source a session may read, and mostly inside its key. *Rhapsody in Blue* was tried and set
  aside, since its print is dense with triplets and its scan is poor. The Turkish March and the
  *Pastoral* Symphony were set aside too: Wikipedia names no film for the march, and prints only bird
  calls of the symphony.
- ***Pomp and Circumstance* is not a song of ours.** Wikipedia prints only the march's opening, not
  its trio. Commons holds recordings alone, and Mutopia holds no march by Elgar. It is the third
  piece a replacement takes the place of.
- **The theme book on Commons is a source for orchestral pieces.** `File:Orchesterwerke Romantik
  Themen.pdf` scans printed themes of 1842 to 1912, and its page holds a contents list. Its
  `iiurlparam=page<n>-1800px` thumbnail renders one page. Its pages 287 and 452 give *Morning Mood* and
  the *Wedding March*. A replacement may come from its list, such as Saint-Saëns, Dvořák or Smetana.
- **The sources of stage 7.** The theme book gives *Morning Mood*'s bars 1 to 4 and the *Wedding
  March*'s tutti theme. A typeset of the Nocturne's opening on Commons gives its bars 5 to 8.
  Heugel's piano score of *Orphée aux Enfers*, 1862, on Commons holds the galop on its page 80, file
  82 of 86.
- **The Can-can's tune is the galop's "Ce bal est original" strain, on the score's page 81.** Heugel's
  print plays it in G major, in octaves, after the repeat sign. It reads G, then A C B A, D D, D E B C,
  A A, A C B A, G. A figure on Commons, `Orphéé aux enfers 3 numbers compared.tif`, prints the same
  strain a step higher, in A major. The tune ends on the first eighth of bar 7, whose arpeggio is cut
  to rests.
- **The three replacements are *Vltava*, *Aquarium* and Mahler's Adagietto.** Their slugs are `vltava`,
  `aquarium` and `mahler-adagietto`, in place of the *Bumblebee*, the *Barcarolle* and *Pomp and
  Circumstance*. The theme book prints each on its pages 829, 672 and 405. Each is mostly inside its
  key, and none leaps more than a fourth within its hook.
- **The years of the replacements.** Wikipedia gives Smetana's *Vltava* its first performance in 1875,
  and no print year, so it takes 1875. *The Carnival of the Animals* was published in 1922, the year
  after Saint-Saëns died. Edition Peters published Mahler's Fifth in 1904.
- **The theme book's PDF has no text layer.** Ghostscript renders a page of it, and its Commons page
  gives the contents with page numbers. A page's number in the contents is its page in the PDF.
- **The films of stage 7.** The Wikipedia list of *Moulin Rouge!*'s music names the *Galop
  infernal*. *The Pianist*'s soundtrack album opens with the Nocturne. Wikipedia's page on Grieg in
  popular culture names *Soylent Green* for *Morning Mood*. Wikipedia names *The Tree of Life* for
  *Vltava*, *Days of Heaven* for *Aquarium* and *Death in Venice* for the Adagietto.
- **The 1812 Overture and Dvořák's *New World* Symphony were set aside.** Wikipedia's articles on them
  name no film.
- ***Aquarium*'s tune writes the staff's notes, below the print's 8va sign.** It is the theme's eight
  bars. Its D sharps and C sharp put three notes outside A minor in bars 3 to 6, which the meter allows.
- ***Wedding March*'s tune is the tutti theme's second phrase.** The first phrase ends on an arpeggio
  from C4 to G5, which breaks Beginner's position limit. The second closes on C, within one octave.
- **The Nocturne's run in bar 7 is cut to a rest,** as *Night on Bald Mountain*'s runs are. It mixes a
  dotted sixteenth figure and an eighth triplet, which one grid of the tune cannot write.
- **The sources of stage 6.** Nicolas Sceaux's CC0 typeset of the full score on Commons gives the
  *Boléro* flute solo, bars 5 to 12. Two engravings on Commons give the *Funeral March*'s bars 1 to 4. Wikipedia's
  `<score>` gives the Fifth's bars 1 to 5.
- **A tie over a bar line that the notation cannot write is struck again.** *Boléro* ties three notes
  over its bar lines at offsets that rebarring cannot all remove. Beginner may merge the repeated note.
- **A fermata note holds one bar.** The Fifth's tune holds each long note for a bar of 4/4, and the tied
  D of its bars 4 and 5 is one bar.
- **The sources of stage 2.** Mutopia's piano reduction gives *The Blue Danube*, transposed to C, so
  the tune moves back to D. Mutopia's Fromont edition gives *Clair de lune*. Wikipedia's `<score>`
  blocks give *Dies irae*, *Habanera* and the dawn motif of *Also sprach Zarathustra*.
- **The sources of stage 3.** Mutopia's Winterberger edition gives the *Moonlight Sonata*'s melody,
  source bars 5 to 9. Wikipedia's `<score>` blocks give the Allegretto's opening chords, the
  *Gymnopédie*'s first phrase and the serenade's first theme. Commons' scan of Satie's own print
  confirms the *Gymnopédie*.
- ***Hungarian Dance No. 5* is read from a Commons scan.** No wiki prints it and Mutopia holds no
  Hungarian Dance. Commons holds Augener's piano solo edition, Moszkowski's arrangement, as a PDF.
  Ghostscript renders its page 21, and the tune is the first four bars' melody alone.
- **The sources of stage 4.** Commons' scan of a German vocal score of the Requiem gives the
  *Lacrimosa*'s soprano, on its page 35. Commons' four-hands arrangement of K. 467 gives the Andante's
  melody. Mutopia's Bach-Gesellschaft edition gives the Air's first violin. Wikipedia's `<score>` gives
  the Toccata's opening, and Mutopia's edition confirms it. Commons' CC0 typeset gives the Sarabande.
- **A work whose first print no allowed source dates takes its earliest dated print read.** K. 467
  takes Cramer's transcription, printed by Richault in 1855. The Air takes 1871, the year of
  Wilhelmj's arrangement, which gave it its name.
- **The sources of stage 5.** Gallica's scan on Commons of Niedermeyer's piano reduction of *William
  Tell*, printed by Troupenas in 1829 or 1830, gives the galop's first phrase on its page 10. Its violin
  part is an accompaniment, not the tune. A public domain typeset on Commons gives the *Swan Lake* oboe
  theme. Mutopia's typeset of Chernov's piano arrangement gives the *Night on Bald Mountain* brass theme.
  A Commons engraving gives Dukas's broom theme, and Wikipedia's `<score>` confirms its first notes.
  Mutopia's typeset of the Peters edition gives the *Ave Maria*.
- ***Swan Lake* takes 1877, the year of its first staging.** No source a session may read dates a
  print of the score. Tchaikovsky died in 1893, so any print year passes `isPublicDomain`.
- **A quick run the tune cannot write is cut to rests.** The *Night on Bald Mountain* theme ends two
  bars with runs of 32nds and sixteenth triplets, so the tune rests there. Medium and Hard may run in
  their own notes.
- **The *William Tell* tune is the galop's first phrase alone,** an upbeat and four bars in E major. Its
  repeated B is the print's top voice wherever no higher note sounds.
- **The Toccata's tune carries no ornament.** Wikipedia prints a lower mordent on each long A, and the
  Bach-Gesellschaft edition prints an upper one. Its fermata rests are cut to four units each. Medium
  and Hard play Wikipedia's lower mordent on the beat.
- ***Amadeus* is named only as the story of the Requiem.** No article read says the film plays the
  *Lacrimosa*, so its about text says the film tells how Mozart wrote the Requiem.
- **The Air keeps all four of the print's first bars,** since Beginner and Easy pass the meter with them.
  Beginner and Easy play it in C major, Wilhelmj's key, and Medium and Hard in Bach's D major.
- **A tune the print gives only four bars of stays four bars.** The *Gymnopédie*, *Hungarian Dance
  No. 5* and the serenade play their phrase, then bars of our own over the print's chords. No later
  passage is quoted from memory.
- **A tune whose leaps break Beginner's or Easy's position limit is cut to its hook phrase.** The meter
  finds those versions' tune in the right hand alone, and allows two moves in eight bars. *The Blue
  Danube* drops more than an octave every four bars, so its tune is bars 1 to 5. After the hook, Beginner
  and Easy give the low upbeats to the left hand, as a pianist plays the waltz.
- ***Also sprach Zarathustra*'s tune is the one statement Wikipedia prints and describes.** The motif
  spans more than one hand position, so two statements cost Easy three moves. Every version restates
  the motif with the third's change reversed, as its own material.
- **A tune that the notation cannot tie is rebarred.** *Clair de lune* ties a note over almost every
  bar line, so its bar lines sit one eighth later than the print's, as *Es ist ein Ros entsprungen* does.
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
- **The sources of stage 8.** R. R. Terry's *The Shanty Book, Part I*, 1921, scanned on Commons, gives
  *Drunken Sailor*, *Blow the Man Down* and *Haul Away Joe*. Its PDF pages 52, 56 and 78 hold them.
  Wikipedia's `<score>` gives *Spanish Ladies*. The Commons typeset `File:College Hornpipe.svg` gives
  the hornpipe, in G major.
- **The years of the shanties.** Wikipedia dates the first print of *Drunken Sailor*'s tune to Davis
  and Tozer's third edition, 1891. *Blow the Man Down* and *Haul Away Joe* take Terry's 1921. The
  hornpipe takes McGlashan's print of 1781, which Wikipedia shows.
- ***Spanish Ladies* takes 1840, the year *Poor Jack* printed its words in full.** No source a session
  may read dates a print of its notes, and Wikipedia's score names a modern source.
- **Terry's *Haul Away Joe* is in 6/8 and in D minor,** with an F sharp and a B natural. Its tune is
  the solo's four bars and the chorus's four, ending on the last verse's held D.
- **The hornpipe's tune is its upbeat and first four bars.** It leaps an octave in almost every bar.
  Its hook is the upbeat and two bars.
- **Each shanty's tune keeps its print's sixteenths or eighths as quarters.** *Drunken Sailor* and the
  hornpipe write bars of 2/1, *Blow the Man Down* bars of 6/2, *Spanish Ladies* bars of 3/2, and
  *Haul Away Joe* bars of 6/4.
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
- **Medium and Hard move a tune whose key has more sharps or flats than they allow.** Medium allows 3
  and Hard 4, so a tune of four moves for Medium alone. The meter refused every Medium of a tune in
  C-sharp minor before, since it let a tune move only past 4. No song of ours changes its verdict.
- **A tune keeps its print's key, even when every version moves it.** The *Moonlight Sonata*'s tune is
  C-sharp minor. Beginner, Easy and Medium play it in D minor, and Hard in the print's own key.
- **A tune with notes shorter than a quarter is written in longer lengths,** in a bar of 4/1 or 2/1.
  The meter matches the hook by its place in quarters, and Beginner allows nothing shorter. Every
  length keeps its proportion to the print's.
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

- [x] *Also sprach Zarathustra*. `tools/our-songs/also-sprach-zarathustra.ts:1`
- [x] *The Blue Danube*. `tools/our-songs/the-blue-danube.ts:1`
- [x] *Habanera*, the first reserve. `tools/our-songs/habanera.ts:1`
- [x] *Dies irae*. `tools/our-songs/dies-irae.ts:1`
- [x] *Clair de lune*, with its Original. `tools/our-songs/clair-de-lune.ts:1`
- [x] Add the five to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`

### 3. Five film pieces: Moonlight Sonata to Eine kleine Nachtmusik

**Does:** film pieces 6 to 10 of the list ship in four versions.

**Split:** five writing subagents, one module each.

- [x] *Moonlight Sonata*, with its Original. `tools/our-songs/moonlight-sonata.ts:1`
- [x] Symphony No. 7, Allegretto. `tools/our-songs/beethoven-7-allegretto.ts:1`
- [x] *Gymnopédie No. 1*. `tools/our-songs/gymnopedie-1.ts:1`
- [x] *Hungarian Dance No. 5*. `tools/our-songs/hungarian-dance-5.ts:1`
- [x] *Eine kleine Nachtmusik*. `tools/our-songs/eine-kleine-nachtmusik.ts:1`
- [x] Add the five to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`
  - [x] Each tune is compared note for note with its printed score.
  - [x] The five modules join `ourSongs`, and the writer accepts them.
  - [x] `bun x tsc` and the build are green.
  - [x] The catalog count test reads 593.

### 4. Five film pieces: Lacrimosa to Sarabande

**Does:** film pieces 11 to 15 of the list ship in four versions.

**Split:** five writing subagents, one module each.

- [x] *Lacrimosa*. `tools/our-songs/lacrimosa.ts:1`
- [x] Piano Concerto No. 21, Andante. `tools/our-songs/mozart-21-andante.ts:1`
- [x] *Air on the G String*. `tools/our-songs/air-on-the-g-string.ts:1`
- [x] Toccata and Fugue in D minor. `tools/our-songs/toccata-in-d-minor.ts:1`
- [x] Sarabande in D minor. `tools/our-songs/handel-sarabande.ts:1`
- [x] Add the five to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`
  - [x] Each tune is compared note for note with its printed score.
  - [x] The five modules join `ourSongs`, and the writer accepts them.
  - [x] `bun x tsc` and the build are green.
  - [x] The catalog count test reads 613.

### 5. Five film pieces: William Tell to Ave Maria

**Does:** film pieces 16 to 20 of the list ship in four versions.

**Split:** five writing subagents, one module each.

- [x] *William Tell* Overture, finale. `tools/our-songs/william-tell.ts:1`
- [x] *Swan Lake*. `tools/our-songs/swan-lake.ts:1`
- [x] *Night on Bald Mountain*. `tools/our-songs/night-on-bald-mountain.ts:1`
- [x] *The Sorcerer's Apprentice*. `tools/our-songs/the-sorcerers-apprentice.ts:1`
- [x] *Ave Maria*. `tools/our-songs/ave-maria.ts:1`
- [x] Add the five to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`
  - [x] Each tune is read from a printed score, and its years are confirmed.
  - [x] Each module's tune is compared note for note with the tune read.
  - [x] The five modules join `ourSongs`, and the writer accepts them.
  - [x] `bun x tsc` and the build are green.
  - [x] The catalog count test reads 633.

### 6. Five film pieces: Boléro to Barcarolle

**Does:** film pieces 21 to 25 of the list ship in four versions.

**Split:** four writing subagents, one module each. Three pieces had no source, so two reserves
took their places. The *Bumblebee* cannot pass Beginner, so it and the 25th piece moved to stage 7.

- [x] *Boléro*. `tools/our-songs/bolero.ts:1`
- [x] *Flight of the Bumblebee* is not a song of ours, as the standing decisions say.
- [x] Chopin's *Funeral March*, in place of Rachmaninoff's Piano Concerto No. 2. `tools/our-songs/funeral-march.ts:1`
- [x] Symphony No. 5, in place of the *Cavalleria rusticana* Intermezzo. `tools/our-songs/beethoven-5.ts:1`
- [x] Add the three to `ourSongs`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:289`
  - [x] Each tune is read from a printed score, and its years are confirmed.
  - [x] Each module's tune is compared note for note with the tune read.
  - [x] The three modules join `ourSongs`, and the writer accepts them.
  - [x] `bun x tsc` and the build are green.
  - [x] The catalog count test reads 645.

### 7. Five film pieces: Can-can to Pomp and Circumstance

**Does:** film pieces 26 to 30 of the list ship in four versions.

**Split:** five writing subagents, one module each.

- [x] *Can-can*. `tools/our-songs/can-can.ts:1`
  - [x] Its source, Heugel's piano score of 1862 on Commons, and its film are confirmed.
  - [x] The famous strain is found in the print and read into notation.
  - [x] Its module is written, checked against the read tune, and joins `ourSongs`.
- [x] Nocturne in C-sharp minor. `tools/our-songs/chopin-nocturne-c-sharp-minor.ts:1`
  - [x] Its theme is read from the Commons typeset, and its years and film are confirmed.
  - [x] Its module is written, and its tune matches the read tune.
  - [x] It joins `ourSongs`, and the writer accepts it.
- [x] *Morning Mood*. `tools/our-songs/morning-mood.ts:1`
  - [x] Its theme is read from the Commons theme book, and its years and film are confirmed.
  - [x] Its module is written, and its tune matches the read tune.
  - [x] It joins `ourSongs`, and the writer accepts it.
- [x] *Wedding March*. `tools/our-songs/wedding-march.ts:1`
  - [x] Its theme is read from the Commons theme book, and its years are confirmed.
  - [x] Its module is written, and its tune matches the read tune.
  - [x] It joins `ourSongs`, and the writer accepts it.
- [x] *Pomp and Circumstance* is not a song of ours, as the standing decisions say.
- [x] Three film pieces, in place of the *Bumblebee*, the *Barcarolle* and *Pomp and Circumstance*,
  found on the film list's terms. Their slugs replace `flight-of-the-bumblebee`, `barcarolle` and
  `pomp-and-circumstance` in `FILM`. `tools/our-songs.test.ts:95`
  - [x] *Vltava*, *Aquarium* and the Adagietto are picked, and their films and years are confirmed.
  - [x] Each tune is read from its theme book page, and its notes outside the key are counted.
  - [x] `FILM` names `vltava`, `aquarium` and `mahler-adagietto`.
  - [x] Each module is written and checked against the read tune.
- [x] Add the seven to `ourSongs` and `FILM`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`
  - [x] The Nocturne, *Morning Mood* and the *Wedding March* join `ourSongs`, and `tsc` and the build are green.
  - [x] The Can-can and the three replacements join `ourSongs`, and `FILM` names their slugs.

### 8. Five sea shanties

**Does:** the five shanties ship in four versions, in the "Sea shanties" group.

**Split:** five writing subagents, one module each.

- [x] *Drunken Sailor*. `tools/our-songs/drunken-sailor.ts:1`
- [x] *Blow the Man Down*. `tools/our-songs/blow-the-man-down.ts:1`
- [x] *The Sailor's Hornpipe*. `tools/our-songs/sailors-hornpipe.ts:1`
- [x] *Spanish Ladies*. `tools/our-songs/spanish-ladies.ts:1`
- [x] *Haul Away Joe*. `tools/our-songs/haul-away-joe.ts:1`
- [x] Add the five to `ourSongs` and `SEA`, run the writer, and fix what the meter refuses. `tools/make-our-songs.ts:170`

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

Stages 1 to 8 are done. Thirty film pieces and five sea shanties ship in four versions, and the
catalog holds 693 rows. Each shanty's tune was compared note for note with the print the session
read. The standing decisions record the sources and the years. No reserve was needed. The writer,
`tsc` and the worktree's build are green. The catalog count in `src/midi/library-songs.test.ts`
reads 693, and no test ran.

### Next

**Stage 9: the three tunes of our own.** Work in a detached worktree under `.agent-tmp/`. Copy
`.agent-tmp/brief-s8.md` from the main checkout as `brief-s9.md`. Its tune comes from the writer, not
a print, and its source carries `own: true`.

- [ ] Write the brief: style, key, tempo, `own: true`, composer `learn-piano-easy`, and the rule on protected themes. `tools/make-our-songs.ts:171`
- [ ] Three writing subagents, one module each, with `collection: "film"`. `tools/our-songs/neon-chase.ts:1`
- [ ] Check each hook against the protected themes the session knows, for a run of five intervals. `tools/our-songs/black-flag-jig.ts:1`
- [ ] Add the three to `ourSongs`, run the writer, run `bun x tsc`, and build. `tools/make-our-songs.ts:323`
- [ ] Screenshots of both groups, and one film piece at each version, with `bun run shot`. `tools/shot.ts:1`

Expected red: the catalog count in `src/midi/library-songs.test.ts` goes from 693 by four rows per new
tune. The e2e test `the_library_lists_the_film_songs` reads card titles, so it may need a scroll once
the film group outgrows one view.

### Backlog

- A hint in the explorer that a learner may open their own MIDI file, such as one they bought.
