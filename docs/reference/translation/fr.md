# French: the style guide and glossary

Every writer and reviewer of a French text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is French. The machine's half
of these rules is the `fr` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is standard French** that reads naturally in France, Belgium, Switzerland, Canada and
  Africa. Pages carry `lang` `fr`, and `Intl` formats for `fr`.
- **The locale table's row stands as it is:** `fr`, solfège, Latin script, left to right, and `fr_FR` for
  link previews. This guide confirms each of them.
- **The readers are beginners of every age,** children and adults, who learn piano alone in a browser.
- **The register is the everyday one of a good music teacher.** Microsoft's guide asks for a warm,
  relaxed and clear voice, never a word-for-word copy of the English (MS § 2).
- **A French term beats an English loanword.** French music teaching has its own word for each idea of
  the course: `mesure`, `temps`, `doigté`, `point d’orgue`. A loanword stands only where French uses it
  too, such as `combo` or `clavier MIDI`.
- **A word of one region is avoided.** The text writes neither `septante` nor `clavarder`, and neither
  `kiffer` nor `trop cool`.
- **Where France and Canada space their marks differently, the text follows France.** § 9 says why.

| Avoid | Write | Why |
|---|---|---|
| l’utilisateur, for the learner | tu | § 2 |
| vous, votre | tu, ton, ta, tes | § 2 |
| app | application; `appli` only in a tight label | MS § 7 refuses `app` |
| il faut, il est nécessaire de | the imperative: `Joue` | MS prefers the direct form |
| la barre, for a bar | la mesure | `mesure` is the bar's only French name |
| la mesure, for a beat | le temps | `temps` is one count of a bar |
| chanson, for any piece | morceau | § 5. A `chanson` has words. |
| doucement, for slowly | lentement | `doucement` reads as softly too |
| cliquer, taper | appuyer sur | § 2's one verb |
| la fermata | le point d’orgue | its French name |

## 2. Address

- **The learner is `tu`.** German says `du` in this app, and the course plays like a game. French
  learning games and children's methods say `tu`, so `vous` would read as a form.
- **The guide keeps `tu` against Microsoft's `vous`** (MS § 4.1.13). Microsoft writes for office software,
  and its own guide allows an informal, playful tone in games (MS § 5.6.2).
- **An instruction is the imperative of `tu`:** `Joue`, `Appuie`, `Écoute`, `Choisis`, `Pose`, `Compte`,
  `Regarde`. A verb in `-er` takes no `s`: `Joue`, never `Joues`. The forms of `vous` are never used.
- **A button, a menu item or a tab is an infinitive or a noun:** `Continuer`, `Ouvrir le morceau`,
  `Paramètres`, `Terminé`. Microsoft's lists use infinitives and nouns so (MS § 4.1.14).
- **A setting's name is a noun phrase,** and its help text is a plain sentence about what it does.
- **A question to the learner is short:** `Quitter la leçon ?`, `On commence ?`. A question with `tu`
  inverts its verb: `Veux-tu tout effacer ?`
- **No text says `s’il te plaît`.** The imperative is friendly enough, as Microsoft's examples show.
- **An error names what failed, never the learner's fault:** `Impossible d’enregistrer.` MS § 5.5.1 gives
  `Impossible de …`, `Échec de …` and `… introuvable`.
- **One verb serves a button, a computer key and a pedal: `appuie sur`.** It holds for a tap, a click and
  a press alike, as MS § 3.2 asks for a verb that names no device. A piano key is played: `joue le do`.
- **Picking one item from several is `choisis`.** It is warmer than Microsoft's `sélectionne`.
- **`ton`, `ta` and `tes` stand only where the owner is not plain:** `Pose la main droite en position de
  do.`, not `ta main droite`.
- **The teacher may say `on` for what the two do together:** `On commence ?`, `On réécoute ?`. MS
  § 4.1.13 avoids `on` for a user. Here it invites, as a teacher at the piano does.

## 3. Voice

Warm, plain and short, as a good teacher speaks. Prefer the everyday word: `pouvoir` over `avoir la
possibilité de`, `pour` over `afin de`, `faire` over `réaliser`, as MS § 7 lists them.

| English | French | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | Salut ! Je vais t’apprendre le piano. On commence ? | `On commence ?` invites, as the English does. The verb names no gender, where `ton professeur` would. |
| Not quite. Try again. | Presque. Essaie encore une fois. | `Presque` softens the miss. `Essaie encore` is what a teacher says beside the piano. |
| Every lesson takes you further. Keep going! | Chaque leçon te fait progresser. Continue comme ça ! | `Continue comme ça !` is the everyday cheer. `Poursuis tes efforts` would sound like a school report. |

"Well done." is `Bravo.` in every lesson. `Bravo` names no gender, where `Bien joué, champion` would.

## 4. Gender

French nouns, adjectives and some past participles show a gender. The learner's never shows, and no
inclusive mark stands in for it.

- **No adjective or noun describes the learner.** Rewrite around a verb or a thing: `C’est réussi !`,
  not `Tu es doué !`. `Prêt`, `débutant` and `expert` never describe the learner.
- **A past participle with `avoir` is safe:** `Tu as joué le morceau.` A verb with `être` is avoided:
  `Tu as atteint le niveau 3.`, not `Tu es arrivé au niveau 3.`
- **A reflexive verb in the past is avoided:** `Tu as bien travaillé.`, not `Tu t’es bien entraîné.`
- **A welcome is the noun `Bienvenue`,** which agrees with nothing. `Bienvenu` and `bienvenus` are
  never written.
- **No point médian, no `(e)` and no slash marks a gender.** The rules test refuses each of them.
  Microsoft France asks for neutral wording over doubled forms (MS § 3.1).
- **The teacher names no gender either.** `Je vais t’apprendre` is neutral, while `Je suis ravi` would
  make the teacher a man.
- **A word that agrees with a thing is fine:** `La nouvelle version est prête.` agrees with `version`.
- **An epicene noun may name a person in general:** `élève`, `pianiste`, `membre`. Microsoft names such
  words (MS § 3.1).
- **A composer keeps the gender of the sources,** since a guide states facts: `Beethoven l’a écrite`,
  `Fanny Mendelssohn est née à Hambourg`.
- **A badge names a thing, an animal or an act, never a person:** `Hibou`, not `Couche-tard`.

## 5. Terms

One term per idea, in every file. Sources: WP is French Wikipedia, by article title. ALS is the
beginner course at `apprendrelesolfege.com`. MS is Microsoft's French style guide for France, and MSCA
its guide for Canada. A row marked *unsourced* rests on common usage alone, and *Open* lists the weak
rows.

The term list is the English column of [ru.md](ru.md), whose list was made from every English catalog,
lesson and guide. One English text changed since, in `src/i18n/messages/player-settings-play.en.ts`, and
it adds no term.

### The piano glossary

| English | French | Sources |
|---|---|---|
| piano | piano: `jouer du piano` | WP *Piano*; ALS |
| key (of the piano) | touche: `touche blanche`, `touche noire` | WP *Piano*; ALS |
| keyboard (the piano's, or a MIDI one) | clavier: `clavier MIDI` | WP *Piano*; WP *Clavier MIDI* |
| note (a sound, or a written sign) | note; a sound alone is `son` | WP *Altération (musique)*; ALS |
| a sound; pitch | son; hauteur | *unsourced*, the school words |
| high, low (pitch) | aigu, grave: `un son aigu`; a note by its place is `plus haut`, `plus bas` | everyday words |
| middle C | do central | *unsourced*. WP *Clef (musique)* numbers it `do 3`, which § 7 keeps out of prose. |
| octave | octave | WP *Clef (musique)*; ALS |
| half step, whole step | demi-ton, ton | ALS; *unsourced* in WP |
| sharp, flat, natural (the signs) | dièse, bémol, bécarre | WP *Altération (musique)*; ALS |
| accidental | altération; `un dièse ou un bémol` in a first lesson | WP *Altération (musique)*; ALS |
| staff | portée | WP *Mesure (musique)*; ALS |
| grand staff | double portée: two staves joined by an accolade | *unsourced*, French teaching usage |
| treble clef, bass clef | clef de sol, clef de fa | WP *Clef (musique)*; ALS. `Clé` is never written. |
| ledger line | ligne supplémentaire | ALS; *unsourced* in WP |
| line, space (of the staff) | ligne, interligne: `sur la ligne`, `dans l’interligne` | *unsourced*, the solfège terms |
| landmark (a note read at a glance) | note repère | the course's own term, defined where it first appears |
| bar | mesure: `mesure 3`, `mesures 1 à 4`, `quatre mesures` | WP *Mesure (musique)*; ALS |
| bar line | barre de mesure | WP *Mesure (musique)* |
| time signature | chiffrage de mesure | WP *Mesure (musique)*; ALS |
| beat (one count of a bar) | temps: `trois temps par mesure`, `un demi-temps` | WP *Temps (musique)*; ALS |
| hold for two beats; through the next beat | tiens deux temps; jusqu’à la fin du temps suivant | the course's own terms |
| the beat (the steady pulse) | pulsation; `une pulsation régulière` | ALS; WP *Temps (musique)* |
| three-four time | mesure à trois temps (3/4) | WP *Mesure (musique)*; ALS |
| count-in | décompte: `une mesure de décompte` | *unsourced*, everyday word |
| an eighth, as a unit of time | croche: `une croche plus tôt` | follows the note values |
| manger (of the Nativity) | crèche | the French Bible's word |
| timpani | timbales | the orchestra's French name |
| plucked (a short note, like a string) | `comme une corde pincée`; a plucked bass is `basse pincée` | an image, as the English is |
| on the beat, on beat one | sur le temps, `sur le premier temps` | follows `temps` |
| a count as a unit of time, "six counts" | temps: `six temps` | follows `temps` |
| rhythm | rythme | WP *Mesure (musique)*; ALS |
| tempo; speed | tempo; vitesse | WP *Temps (musique)*; ALS. `Vitesse` is the player's setting. |
| a tempo in a lesson's prose, such as "60 a minute" | `60 pulsations par minute` | ALS; a label keeps BPM |
| metronome | métronome | WP *Métronome*; ALS |
| whole, half, quarter note | ronde, blanche, noire | WP *Ronde (musique)*, *Blanche (musique)*, *Noire (musique)*; ALS |
| eighth, sixteenth note | croche, double croche | WP *Double croche*; ALS |
| thirty-second, sixty-fourth note | triple croche, quadruple croche | WP *Double croche*, which names both |
| dotted | pointée: `blanche pointée` | ALS; *unsourced* in WP |
| rest; quarter rest | silence; soupir | ALS; WP *Noire (musique)* |
| tie | liaison de prolongation; `notes liées` | ALS; *unsourced* in WP |
| slur | liaison | *unsourced*, the score's term |
| repeat sign | barre de reprise | ALS |
| first, second ending | première fois, deuxième fois | ALS |
| first, second, last time through | premier, deuxième, dernier passage | *unsourced*, the teacher's words |
| pickup, upbeat | anacrouse | WP *Anacrouse* |
| syncopation | syncope | WP *Syncope (musique)* |
| scale | gamme | WP *Do majeur*; ALS |
| major, minor | majeur, mineur | WP *Do majeur*; WP *La mineur* |
| key (of a song) | tonalité: `un morceau en sol majeur` | WP *Do majeur*; WP *La mineur* |
| key signature | armure | WP *Armure (musique)*; ALS |
| scale degree | degré: `le cinquième degré` | *unsourced*, the theory's word |
| chord | accord | WP *Accord de trois notes* |
| triad; major, minor triad | accord de trois notes; accord parfait majeur, mineur | WP *Accord de trois notes* |
| root | fondamentale | WP *Accord de trois notes* |
| inversion; root position | renversement; état fondamental | WP *Renversement (musique)*. `État fondamental` is *unsourced*. |
| G seventh (chord) | accord de septième sur sol; the symbol `G7` where the English shows it | *unsourced*, the theory's name |
| broken chord | accord brisé | *unsourced*, the method's term |
| arpeggio | arpège | WP *Technique du piano* |
| Alberti bass, waltz bass, stride bass | basse d’Alberti, basse de valse, basse stride | WP *Basse d’Alberti*; the others are the guides' own terms |
| bass note | note de basse; `à la basse` | *unsourced* |
| interval | intervalle | WP *La mineur*; ALS |
| third, fourth, fifth, sixth, seventh | tierce, quarte, quinte, sixte, septième | *unsourced*, the theory's names |
| major third, minor third | tierce majeure, tierce mineure | *unsourced*, the theory's names |
| open fifth | quinte à vide | *unsourced*, the theory's name |
| step, skip, leap (between keys) | vers la touche voisine, en sautant une touche, un grand saut | everyday words; a lesson defines each |
| a step, a skip (as nouns, on keys or on the staff) | pas, saut: `Un pas ou un saut ?` | everyday words, short for children |
| tune, melody | mélodie; `air` for a known tune | WP *Technique du piano*; ALS |
| phrase | phrase | WP *Phrase (musique)* |
| figure (a short musical idea) | motif | *unsourced*, the theory's word |
| single notes (not pairs or chords) | notes seules | everyday words |
| run (a fast figure up or down) | trait | *unsourced*, the pianist's word for a fast run |
| call and answer (phrases) | question et réponse | everyday words |
| pattern (of notes) | formule: `formule rythmique` | *unsourced*, the teacher's word |
| verse, chorus | couplet, refrain | everyday words of song |
| coda | coda | *unsourced* |
| dynamics | nuances | WP *Nuance (musique)*; ALS |
| loud, soft | fort, doux: `joue plus doux` | everyday words. Never `doucement`, which also reads as slowly. |
| legato, staccato | legato, staccato | WP *Legato*; WP *Staccato* |
| crescendo, diminuendo | crescendo, diminuendo | WP *Nuance (musique)*; ALS |
| hairpin | soufflet | *unsourced*, the teacher's word |
| mark (p, f, rit.) | indication | everyday word |
| fermata | point d’orgue | *unsourced*, the French name of the sign |
| hold (a fermata's note) | tenir: `tiens la note un peu plus longtemps` | everyday word |
| turn (ornament); ornament | gruppetto; ornement | *unsourced* |
| mordent | mordant | *unsourced* |
| double notes | notes doubles | *unsourced* |
| a run (fast notes) | trait | as `run` above |
| octave bass | basse en octaves | the guides' own term |
| pedal | pédale | WP *Pédale de piano* |
| sustain pedal | pédale forte | WP *Pédale de piano*; ALS. Never `pédale de soutien`, which WP names the middle pedal. |
| soft pedal | pédale douce | WP *Pédale de piano*; ALS |
| press a pedal, lift it | appuie sur la pédale, relève la pédale | *unsourced*, the method's verbs |
| fingering | doigté | WP *Doigté*; ALS |
| finger numbers | 1 pouce, 2 index, 3 majeur, 4 annulaire, 5 auriculaire | WP *Doigté* numbers them from the thumb; ALS |
| right hand, left hand, both hands | main droite, main gauche, les deux mains: `à deux mains` | WP *Technique du piano*; ALS |
| hand position; C position | position de la main; position de do | the course's own terms |
| thumb under, finger over | passage du pouce, passage du doigt par-dessus | *unsourced*, the method's terms |
| a shape the hand holds; the octave shape | position; position d’octave | the guides' own terms |
| a stretch between two fingers | écart | *unsourced*, the teacher's word |
| even notes; play them evenly | notes égales; joue-les bien régulières | the teacher's words |
| three times as long | trois fois plus long | everyday words |
| a pair (two notes struck together) | paire de notes | the guides' own term |
| a rub (a soft dissonance) | frottement | *unsourced*, the musician's word |
| bounce (the wrist, a finger) | rebondir: `laisse le poignet rebondir` | everyday word |
| lift (a finger, a key) | lever, relâcher | everyday words |
| land (on a key, a beat) | arriver sur: `arrive sur le do` | everyday words |
| stretch, spread (the hand) | ouvrir la main | everyday words |
| roll (a chord) | arpéger: `arpège l’accord` | *unsourced* |
| wrist; a loose wrist | poignet; un poignet souple | everyday words |
| let ring | laisser sonner | everyday words |
| fingertips | le bout des doigts | everyday words |
| by feel | au toucher | everyday words |
| sight-reading | déchiffrage | WP *Déchiffrage* |
| ear training | travail de l’oreille | *unsourced*, the teacher's words |
| play (the piano, a key, a note) | jouer | see *Which "play" is which* |
| practise | s’exercer; a piece is `travailler` | ALS's `Entraînez-vous`; everyday words |
| song; piece | morceau; `chanson` only for a song with words | WP *Mesure (musique)*; ALS |
| sheet music | partition | *unsourced*, everyday word of music |
| transpose | transposer | WP *Transposition (musique)* |
| stem, note head | hampe, tête de note | *unsourced* |
| piano bench | banquette | everyday word |
| at full speed; at three-quarter speed | au tempo; à 75 % de la vitesse | the guides' own terms. `Trois quarts` would blur with the metre. |
| waltz | valse | everyday word of music |
| carol; sea shanty; jig | chant de Noël; chant de marins; gigue | everyday words of music |
| suite, symphony, sonata, concerto | suite, symphonie, sonate, concerto | everyday words of music |
| movement, overture, variation | mouvement, ouverture, variation | everyday words of music |
| march, hymn, lullaby, nocturne | marche, cantique, berceuse, nocturne | everyday words. A national anthem is `hymne`. |
| organ (the church's) | orgue | everyday word |
| aria, tone poem or symphonic poem, hornpipe, galop | air, poème symphonique, hornpipe, galop | everyday words of music |
| conductor, bandleader | chef d’orchestre | everyday words |
| film score | musique de film | everyday words |
| enharmonic | enharmonique | *unsourced* |
| attack, decay, sustain, release | attaque, déclin, maintien, relâchement | the terms of synthesizers |

### The interface glossary

| English | French | Sources |
|---|---|---|
| Settings | Paramètres | MS |
| Songs (the library's panel); library | Morceaux; bibliothèque | MS for `bibliothèque` |
| Open, Close, Cancel | Ouvrir, Fermer, Annuler | MS |
| Back, Next, Previous | Retour, Suivant, Précédent | MS for `Suivant` |
| Continue | Continuer | everyday word |
| OK, Done | OK; Terminé | everyday words |
| Skip | Passer | everyday word |
| Reset | Réinitialiser | everyday word of software |
| Save | Enregistrer | MS |
| Delete; Remove | Supprimer; Retirer | MS for `Supprimer`. `Retirer` takes a thing out of a list without destroying it. |
| Restore (a backup) | Restaurer | everyday word of software |
| Clear (a field, a key binding) | Effacer | MS |
| Search | Rechercher | MS |
| Play, Pause, Stop (playback) | Lire, Pause, Arrêter | the words of media players |
| Loop (button); a loop | Boucle; boucle | everyday word |
| Speed | Vitesse | ALS |
| Volume, Mute | Volume, Couper le son | everyday words |
| Fullscreen | Plein écran | everyday words |
| Theme; Light, Dark, Like the system | Thème; Clair, Sombre, Comme le système | everyday words |
| Language | Langue | everyday word |
| computer keyboard; computer key | clavier de l’ordinateur; touche: `la touche Échap` | MS writes `Échap`. A computer key always carries its name, so it never blurs with a piano key. |
| touch screen | écran tactile | everyday words |
| device; connect, disconnect | appareil; connecter, déconnecter | everyday words |
| folder; file | dossier; fichier | MS |
| browser | navigateur | everyday word |
| offline | hors ligne | everyday words |
| Install, Update | Installer, Mettre à jour | everyday words |
| app | application; `appli` in a tight label | MS § 7 |
| Help, Tip | Aide, Astuce | MS for `Aide` |
| Try again | Réessayer, as a button; `Essaie encore une fois.` in a lesson | everyday words |
| tap, click or press a control | appuie sur | § 2 |
| press a computer key; press a piano key | appuie sur la touche Échap; joue la touche | as above |
| choose (one of several) | choisis | § 2 |
| find, look for | trouve, cherche | everyday words |
| a page of the site; a printed page | page | everyday word |
| lesson, step, world | leçon, étape, monde | the course's own terms |
| quiz; demo | quiz; démonstration, `démo` in a label | everyday words |
| boss (a world's last lesson) | épreuve finale: `Épreuve finale : <morceau>` | the course's own term. `Boss` reads as gamer slang to adults. |
| skip test | test pour passer le monde | the course's own term |
| level; Level up! | niveau; Nouveau niveau ! | the words of games |
| XP | XP, a kept word | the word of games |
| badge, achievement | badge | everyday word of games |
| streak | série: `3 jours d’affilée` | everyday words |
| daily goal | objectif du jour | everyday words |
| score; points | score; points | the words of games |
| stars | étoiles | everyday word |
| take (one recorded play) | essai | everyday word |
| Favourites | Favoris | everyday word |
| track (of a MIDI file) | piste | everyday word |
| progress | progression | everyday word |
| backup; back up | sauvegarde; sauvegarder | everyday words. `Enregistrer` stays Save. |
| guide (a song's) | guide: `le guide du morceau` | everyday word |
| a setting; options | paramètre; options | MS writes `paramètres` |
| the player (of songs) | lecteur | the word of media players |
| Beginner, Easy, Medium, Hard, Advanced, Expert | Débutant, Facile, Moyen, Difficile, Avancé, Expert | adjectives agreeing with `niveau`, so each names the level, never the learner |
| Easy, Normal, Hard (a song) | Facile, Normale, Difficile | agreeing with `version` |
| common, rare, epic, legendary (a version) | commune, rare, épique, légendaire | agreeing with `version`; the words of games |
| Perfect, Great, Good | Parfait, Super, Bien | the words of rhythm games |
| Wrong note, Too short, Too long, Late | Fausse note, Trop court, Trop long, Trop tard | everyday words |
| free play; pitch practice | Jeu libre; Travail de l’oreille | the course's own terms |
| hotkeys | raccourcis clavier | MS |
| velocity (of a key) | force de frappe | the word of digital pianos, *unsourced* |
| lane; timeline | couloir; chronologie | the player's own terms |
| hit, miss, mistake | note réussie, note manquée, erreur | everyday words |
| add; remove | ajouter; retirer | everyday words |
| open source | open source | the word French software uses |
| download | télécharger | MS |
| error (a title); a failure in a message | Erreur; `Impossible de …` | MS § 5.5.1 |
| loading | Chargement… | everyday word |
| Expert (the bar's key for the expert tools); expert tools | Avancé; outils avancés | `Expert` stays the level |
| view; the scene (the 3D piano and its notes) | vue; scène 3D | everyday words |
| Play modes | Modes de jeu | the site's own term |
| sound set; background track | banque de sons; accompagnement | everyday words of music software |
| hit line; hit window | ligne de frappe; fenêtre de frappe | the player's own terms |
| loop trainer; a pass of a loop | entraînement en boucle; tour | the player's own terms. `Passage` stays a time through. |
| reverb; equaliser; detune | réverbération; égaliseur; désaccord | the terms of audio apps |
| particles; markers; labels | particules; repères; étiquettes | everyday words |
| colour; glow; opacity | couleur; lueur; opacité | everyday words |
| size; shape | taille; forme | everyday words |
| tag (search); round (a game) | mot-clé; manche | everyday words. `Étiquette` stays a label. |
| Preview (a song) | Écouter un extrait; Arrêter l’extrait | everyday words |
| default | par défaut | everyday words of software |
| custom | personnalisé | everyday word of software |
| input; output (MIDI) | entrée; sortie | everyday words |
| MIDI channel | canal MIDI | everyday words |
| combo; multiplier; accuracy | combo; multiplicateur; précision | the words of rhythm games |
| frame; frames per second | image; images par seconde | everyday words |
| difficulty; length (of a song) | difficulté; durée | everyday words |
| record; export; filter | enregistrer une prise; exporter; filtre | everyday words. A recording names its `prise`, so it never reads as Save. |
| camera; zoom; side view | caméra; zoom; vue de côté | everyday words |
| lyrics; bar numbers | paroles; numéros de mesure | everyday words; follows `mesure` |
| guided course | cours guidé | the app's own term |
| top bar; control bar | barre du haut; barre de commandes | everyday words |
| click (of the metronome) | clic | ALS's `clic du métronome` |
| low, high band (of the equaliser) | graves, aigus | the words of audio apps |
| leave (a lesson, a page) | quitter | MS |
| skill (a song's technique tag) | technique | the teacher's word |
| folk tune; counter-melody | air traditionnel; contre-chant | the musician's words |
| in key widths (a unit); per second | en largeurs de touche; largeurs de touche par seconde | the player's own unit |
| Sponsor (the page) | Soutenir; `Soutenir sur GitHub` | `Sponsor` reads as a company's |
| setup (the first visit) | premiers pas | everyday words; `paramètre` stays a setting |
| a section named mid-sentence | `dans « Jouer librement »` | the quotes keep the name from reading as a verb |
| On, Off, Auto; when off | Activé, Désactivé, Auto; quand c’est désactivé | everyday words of software |
| site; data; sync | site; données; synchronisation | MS § 7 refuses `synchro` |
| button; dialog; pointer; cursor | bouton; fenêtre; pointeur; curseur | everyday words |
| Apply; Reload; Undo | Appliquer; Recharger; Défaire | MS gives `Annuler` for Undo, which stays Cancel here |
| background (a colour, a page's) | fond | everyday word; `accompagnement` is the background track |
| free (no cost) | gratuit | everyday word |
| About; Legal notice; Privacy policy | À propos; Mentions légales; Politique de confidentialité | the usual site labels |
| the course's map | carte | the word of games |
| Repeat; Repeat all | Répéter; Tout répéter | kept apart from `Boucle` |
| arrangement; harmony | arrangement; harmonie | the words musicians use |
| Classical, Baroque, Romantic, Impressionist, Contemporary | Classique, Baroque, Romantique, Impressionnisme, Contemporain | the names of periods in French |
| Ragtime; Christmas | Ragtime; Noël | everyday words |
| effects; flare; sparks; wave line | effets; éclat; étincelles; onde | everyday words |
| ring (a shape) | anneau | everyday word |
| a setting's on/off label | a noun phrase: `Surbrillance des notes jouées` | § 2's label form |
| falling notes; a strip or band | notes qui tombent; bande | everyday words |
| layout; timing; envelope | disposition; calage; enveloppe | the words of apps and synthesizers |
| a seconds unit in a label | s, after a no-break space: `2 s` | the French unit, as § 6 says |
| a percent unit in a label | % after a no-break space | § 8 |
| More tools (beside the Expert key) | Autres outils | `Avancé` is the Expert key |
| account; No account | compte; Sans inscription | the everyday phrase of French sites |
| scores (saved results) | résultats | `scores` reads as one game's tally |
| cookies; domain | cookies; domaine | everyday words |
| Legal; Explore (footer headings) | Informations légales; Explorer | `Mentions légales` is the legal notice page |
| a star (on GitHub) | étoile: `ajouter une étoile` | everyday words |
| Your songs (the library's list); Your hands | Tes morceaux; Tes mains | quoted the same in every file |
| Offline files (the dialog) | Utilisation hors ligne | follows `hors ligne` |
| Third-party notices; Build (a version) | Composants tiers; Compilation | the usual software labels |
| Dismiss (a toast); Fit (the zoom) | Masquer; Ajuster | the toast is hidden, not closed |
| Challenge; Play along; Note trainer; Chord explorer; Rhythm keeper (modes) | Défi; Jouer avec le morceau; Lecture de notes; Exploration des accords; Garde le rythme | no mode names a person |
| collection (a tag kind); Sort by | collection; Trier par | everyday words |
| Clean (a release judgement) | Net | the word of rhythm games |
| dotted rhythm; hand crossing; held bass notes | rythme pointé; croisement des mains; basses tenues | the terms of French piano teaching, *unsourced* |
| two-note chords | accords de deux notes | plain for a beginner |
| tap a beat; On the beat, Off the beat | taper la pulsation; Sur le temps, À côté du temps | follows `temps` |
| Skip the setup | Passer les questions | `paramètre` stays a setting |
| daily goal paces Relaxed, Steady, Keen, Bold | Détente, Régularité, Ardeur, Audace | nouns name no gender |
| a badge named for a person, such as Star collector | a thing instead: `Pluie d’étoiles` | no badge names a person |
| loop (in a setting's label) | boucle: `Répétition en boucle` | `Boucle` stays the button |
| felt; speakers; look-ahead | feutre; haut-parleurs; anticipation | the words of technicians and device settings |
| drum kit; wood block | batterie; wood-block | the instruments' French names |
| tuning (audio) | accordage | `accord` stays a chord |
| px | px | the unit French apps print |
| Reading aids; Colour coding (sections) | Aides à la lecture; Couleurs des notes | short enough for 360 pixels |
| falling notes; sheet music (sections) | Notes qui tombent; Partition | the two sections need two names |
| embers; wander; sway; edge glow | braises; dérive; balancement; contour lumineux | everyday words |
| Blending: Add light, Cover | Fusion : Ajouter la lumière, Recouvrir | the verbs of image editors |
| Shift; bytes | Maj; o, beside Ko and Mo | the French names on a keyboard and in a file size |
| Start learning; Ready when you are | Commencer le cours; Quand tu veux | `prêt` would carry a gender |
| the ape mascot | le singe qui t’apprend le piano | `ton professeur` would carry a gender |
| Ready, set, play | Trois, deux, un, à toi | `À vos marques, prêts` takes `vous` and a gender |
| For experts (a tag); Beginner path | Haut niveau; Parcours découverte | no tag describes the learner |
| a toast that a mode is on | `Mode activé : X.` | the modes' names differ in gender |
| Hold (a judgement); Recording (a clock) | Maintien; Prise en cours | `Tenue` reads as an outfit. `Enregistrer` stays Save. |
| trick (a tip's kind); Fun fact | truc; Le savais-tu ? | `Astuce` is the Tip |
| Measuring the songs | Analyse des morceaux… | `mesure` is the bar |
| Practice plan; Tricky spot | Programme de travail; Point délicat | `passage` stays a time through |
| Mute (a track) | Son coupé | `Couper le son` is too long for the field |
| Your songs (a kind in the library) | Personnel | `À toi` reads as Your turn |
| the version picker (on the landing page) | Niveau | its names agree with `niveau` |
| the computer keys that play notes | la rangée de lettres du bas; celle du haut | the bindings are physical keys, and readers use AZERTY, QWERTZ or QWERTY |
| Low mid, Mid, High mid (bands) | Bas-médiums, Médiums, Haut-médiums | the names of equaliser bands |
| rests in a setting's options | soupir, demi-soupir, quart de soupir | the French rest names |
| edge rim; pedal tail; Drag; Layer; Fade out | liseré; traîne; Freinage; Plan; Fondu | everyday words and the words of image editors |
| Notation (a settings heading) | Écriture | `Notation` would copy the English |
| tap pad; Higher, Lower, The same | zone de frappe; Plus aigu, Plus grave, Pareil | the pitch quiz compares sounds |
| Rhythm ace; Sight reader; Early bird (badges) | Le rythme dans la peau; Œil de lynx; Chant du coq | no badge names a person |

### Which "play" is which

- **A key, a note, a song on the piano:** `jouer`. `Joue do et mi ensemble.` The instrument takes `du`:
  `jouer du piano`.
- **Starting playback of a song:** `lire`. The transport's *Play* is `Lire`, as media players label it.
- **A game or a mode:** `jeu`, and `mode jeu` for *Game mode*.
- **A lesson's "Play again" that replays a demo:** `Réécouter`, since the learner listens.
- **"Your turn":** `À toi.`
- **A control is never `joue`.** `Appuie sur Lire.`, never `Joue le morceau` for the button.

### A guide's recurring steps

The song guides repeat these steps word for word. Each English step has one French text in every guide.
A step that only differs in its bars or its section follows the nearest row's shape.

| English | French |
|---|---|
| Play the whole song with both hands at three-quarter speed. | Joue tout le morceau à deux mains, à 75 % de la vitesse. |
| Join the hands on the whole song at three-quarter speed. | Joue tout le morceau à deux mains, à 75 % de la vitesse. |
| Play the whole song with both hands at full speed. | Joue tout le morceau à deux mains, au tempo. |
| Play the whole song with both hands, a little slower than written. | Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit. |
| Now play it at full speed. | Maintenant, joue-le au tempo. |
| Now play it at full speed, with the pedal. | Maintenant, joue-le au tempo, avec la pédale. |
| Now play it at full speed, and let the last chord ring. | Maintenant, joue-le au tempo et laisse sonner le dernier accord. |
| Join the hands on the first eight bars, slowly. | Joue les huit premières mesures à deux mains, lentement. |
| Put both hands together on the whole song, slowly. | Joue tout le morceau à deux mains, lentement. |
| Put both hands together, slowly. | Joue à deux mains, lentement. |
| Join the hands on the first verse, slowly. | Joue le premier couplet à deux mains, lentement. |
| Join the hands on the first time through, slowly. | Joue le premier passage à deux mains, lentement. |
| Join the hands on bars 9 to 16, slowly. | Joue les mesures 9 à 16 à deux mains, lentement. |
| Play the first four bars with the right hand alone, and let the song wait for each note. | Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note. |
| Play the right hand alone on the first eight bars, and let the song wait for each note. | Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note. |
| Play bars 1 to 4 with the right hand alone, and let the song wait for each note. | Joue les mesures 1 à 4 à la main droite seule. Le morceau attend chaque note. |
| Play the right hand alone, slowly, and let the song wait for each note. | Joue la main droite seule, lentement. Le morceau attend chaque note. |
| Play the left hand alone, and press the notes of each chord together. | Joue la main gauche seule, et enfonce ensemble les notes de chaque accord. |
| Now the left hand alone. It holds one shape for each bar. | Maintenant, la main gauche seule. Elle garde une position par mesure. |
| Now the left hand alone. It holds one shape for half a bar or a whole bar. | Maintenant, la main gauche seule. Elle garde une position pendant une demi-mesure ou une mesure entière. |
| It holds one shape for half a bar at a time. | Elle garde chaque position une demi-mesure. |
| Now the left hand alone. It keeps one shape and changes it at most once a bar. | Maintenant, la main gauche seule. Elle garde une position et en change au plus une fois par mesure. |
| Play the Alberti bass alone until it rolls by itself: low, high, middle, high. | Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu. |
| Keep the Alberti bass soft, so the tune sings above it. | Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus. |
| Play the right hand's thirds and sixths alone, and press both notes of each pair as one. | Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste. |
| The tune is the top note of each pair, so let the upper finger lead. | La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener. |
| Play the right hand's chords alone, and let the top finger sing the tune. | Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie. |
| Play the top note of each chord a little louder than the others. | Joue la note du haut de chaque accord un peu plus fort que les autres. |
| Play the right hand's octaves alone, with the thumb and finger 5 kept in one shape. | Joue seules les octaves de la main droite, le pouce et le doigt 5 gardés dans la même position. |
| Play the stride bass alone: jump down for the octave, then back up for the chord. | Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord. |
| Change the pedal on each new bass note, twice in every bar. | Change de pédale à chaque nouvelle note de basse, deux fois par mesure. |
| Hold the pedal down for each whole bar, and change it right on the bar line. | Garde la pédale enfoncée toute la mesure, et change-la pile sur la barre de mesure. |
| Up high, the octaves should ring like bells. Keep the wrist loose. | Dans l’aigu, les octaves doivent sonner comme des cloches. Garde le poignet souple. |

More rules the guides settle:

- **A step that plays one part names the part, then `seule` or `seul`:** `Joue la basse d’Alberti
  seule.` A hand alone is `à la main droite seule`.
- **"Let the song wait for each note" is its own sentence: `Le morceau attend chaque note.`** A clause
  after `et` would make the song a second thing to do.
- **"First time through" is `premier passage`,** and the second and the last follow it.
- **"Slow down" as an instruction is `Ralentis`.** The noun is `ralentissement`.
- **Loud is `fort`, soft is `doux`, and slow is `lentement`.** `Doucement` never stands in a guide, since
  it reads as slowly and softly at once.
- **Rhythm syllables are `ta`,** such as `« ta-a, ta-ta »`. A counted beat is `un, deux, trois,
  quatre`, and "and" is `et`: `« un-et, deux-et »`.
- **A miss is `note manquée` everywhere,** the game's flash and its count included.
- **The thumb is `pouce` in every guide,** and the other fingers are numbers: `doigt 3`, `les doigts 5,
  4, 3 et 2`. A finger's name stands only where the English says it, such as "little finger".
- **The h of `habanera` is aspirated:** `la habanera`, `le rythme de habanera`. French Wikipedia writes
  it so, never `l’habanera`.
- **"Little finger" is `l’auriculaire`,** never `petit doigt`, as for every finger the English names.
- **`majeur` names the middle finger only where a lesson teaches the names.** Everywhere else it means
  major, so a finger is `doigt 3`.

### A lesson's recurring lines

The lessons repeat these lines. Each English line has one French text in every world.

| English | French |
|---|---|
| Well done. | Bravo. |
| Your turn. | À toi. |
| Your turn, after one bar of count-in. | À toi, après une mesure de décompte. |
| Watch and listen. | Regarde et écoute. |
| Listen and watch. | Écoute et regarde. |
| Listen. | Écoute. |
| Put your right hand in C position. | Pose la main droite en position de do. |
| Put your right thumb on middle C. | Pose le pouce droit sur le do central. |
| Keep your hand where it is. | Garde la main où elle est. |
| Press Start and listen to four clicks first. | Appuie sur Démarrer et écoute d’abord quatre clics. |

- **A boss's title is `Épreuve finale : <the song>`,** with `à deux mains` where the English says both
  hands.
- **A quiz answer starts with a capital, as any label does:** `Ré`, `Fa dièse`, `1er temps`. A note name
  inside an answer stays lower case.
- **Pachelbel's canon is `Canon de Pachelbel`,** the title of its French Wikipedia article.
- **A boss's song with a French title stands in `« »`,** as in prose: `Épreuve finale : « Hymne à la joie »`.
  A song with no French title stays bare: `Épreuve finale : Jingle Bells à deux mains`.
- **The fingers of a run of notes follow it:** `Joue-les avec les doigts 3, 2, 1.` Never `Les doigts font`.
- **A key pressed on each click is `appuie sur une touche au choix`.** A beat itself is `taper`.
- **A title that is a single Italian term takes its article:** `Le legato`, `Le staccato`.
- **A rest of two beats is `demi-pause`,** the French name, beside `pause`, `soupir` and `demi-soupir`.
- **A finger the English numbers is `le doigt 3`,** never a bare `le 3`. A finger the English names keeps
  its name, such as `le pouce` or `l’auriculaire`.

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are.
- **A Latin name follows its French noun with no hyphen:** `clavier MIDI`, `canal MIDI`, `scène 3D`.
- **Units are French, after a no-break space:** `ms`, `s`, `Hz`, `kHz`, `dB`, `Ko`, `Mo`, `px`. A unit
  takes no period. French writes `Ko` and `Mo` for kilobytes and megabytes. BPM, FPS, PDF, USB and 3D
  stay as they are.
- **Technical names:** JavaScript, MIT, and a computer key such as Q or Z. Escape is `Échap`, as MS
  writes it. A Roman numeral of a chord, such as V7, stays too.
- **Product and site names:** GitHub, Matomo, Wikipedia, Wikimedia Commons, Mutopia, Chrome, Edge,
  Firefox and Safari.
- **The printed marks of a score stay:** `p`, `mp`, `mf`, `f`, `pp`, `ff`, `rit.`, `rall.`, `cresc.`,
  `decresc.`, `dim.`, `a tempo` and `Ped.`
- **The Italian word behind a mark stays Italian,** as French methods print it: `piano`, `forte`,
  `mezzo-piano`, `ritardando`, `legato`, `staccato`, `crescendo`, `diminuendo`, `a tempo`.
- **A century is a Roman numeral and `e`:** `au XIXe siècle`. The `kept` list holds `XV` to `XX`.
- **Catalog numbers:** `BWV 1068`, `K. 525`, `HWV 437`, and `op. 27` for an opus.
- **The chord symbols,** as § 7 says.
- **A song title in the library stays as the library writes it,** without quotes. A title is data shared
  by every locale, and the library searches it. A kept title with a mark, such as *Moulin Rouge!*, goes
  in the `kept` list.
- **A guide's prose names a work by its French title where French Wikipedia has one,** in `« »`:
  `« Lettre à Élise »`, `« Le Lac des cygnes »`, `« Hymne à la joie »`, `« Douce nuit »`. A
  French reader knows these names. A work with no French article keeps the English guide's title, without
  quotes. This adds to the standing decision, which kept every title.
- **Twinkle, Twinkle is French to start with.** Its prose title is `« Ah ! vous dirai-je, maman »`,
  with the marks of § 9, and the `kept` list spares its `vous`.
- **A person's name takes the spelling of the person's French Wikipedia article:** `Haendel`,
  `Tchaïkovski`, `Moussorgski`, `Rimski-Korsakov`. Most names stay as they are: `Beethoven`, `Mozart`,
  `Bach`, `Chopin`.
- **A place takes its French name,** from its French Wikipedia article: `Vienne`, `Londres`, `Salzbourg`,
  `Bohême`, `New York`. A place with no article keeps the English guide's name.
- **A place or saint of the Bible takes the French Bible's name:** `Bethléem`, `Sion`, `saint Jean`.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they describe what a
  learner does. "Learn Piano" is `Apprendre le piano`, and "Just Play Piano" is `Jouer librement`.
- **The worlds' titles are** Découvrir le piano, Premières mélodies, Rythme, Lire la musique, Les deux
  mains, Gammes et tonalités, Accords and Expression. `src/learn/course.ts` takes them when French ships.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread, and each label
  French writes as English does, such as `Volume` or `Pause`.

## 7. Note names

- **Notes are solfège, fixed do:** `do ré mi fa sol la si`. WP *Do majeur* and ALS write them so, and the
  locale table names `solfege`.
- **A note name is lower case in prose,** as WP writes it: `joue do et mi`. It is masculine: `le la`,
  `un do aigu`, `du sol au do`.
- **`ré` keeps its accent everywhere,** in a capital too: `Ré`. WP and ALS both write it so.
- **A name the code builds keeps the form of `src/theory/note-names.ts`:** `Do4`, `Fa♯4`, `Si♭`. A text
  that points at that label writes it the same way.
- **A sharp or a flat in prose is a word after the note, with no hyphen:** `do dièse`, `si bémol`.
- **A key is the note and its mode:** `do majeur`, `la mineur`, `fa dièse mineur`. A chord names its key:
  `l’accord de do majeur`, `l’accord parfait de la mineur`.
- **A chord symbol stays where the English shows a symbol:** `C`, `Am`, `G7`. In prose the chord is
  named by its key, as above.
- **A chord takes its mode only where the song's notes hold that triad.** An open fifth or a seventh
  chord the English calls "the G chord" is named by its root: `l’accord sur sol`. A seventh chord the
  guide names is `l’accord de septième sur sol`.
- **Middle C is `do central` in prose, and no octave number appears there.** France numbers middle C
  `do 3`, while the code's label says `Do4`. A number in prose would contradict one of the two.
- **"Low C" and "high C" are `le do grave` and `le do aigu`,** where the English means the keys around
  middle C. A note named only by its place takes `du haut` or `du bas`.
- **A spelled-out chord lists its notes with commas and `et`:** `do, mi et sol`.
- **A chord played in a set order joins its notes with hyphens,** from the bottom up: `do-mi-sol`,
  `mi-sol-do`. The order is the point of an inversion or a broken chord.
- **The letters `C D E F G A B` never stand in prose,** apart from chord symbols. A French beginner reads
  solfège.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own.

## 8. Numbers

- **`Intl` formats every number for `fr`:** `1 234 567,5`, with a narrow no-break space between groups
  and a decimal comma. No separator is set by hand.
- **A message formats its count with `formatNumber`,** never a bare `${n}`, so a large count takes its
  spaces.
- **A percent sign follows its number after a no-break space:** `80 %`. CLDR writes it so, and MS
  § 4.1.14 agrees.
- **Fingers, octaves, bars, beats and time signatures keep their digits,** as printed music does:
  `mesure 3`, `mesures 9 à 16`, `doigt 3`, `Do4`, `3/4`.
- **An ordinal in digits takes `er` or `e`:** `1er temps`, `2e couplet`, `3e mesure`. Never `2ème` or
  `2nd`. In prose a small ordinal is a word: `le troisième doigt`.
- **A small count the English spells out is a word in prose:** `trois touches`, `deux mains`.
- **French has three plural forms: `one`, `many` and `other`.** `Intl` gives `one` for 0, 1 and any
  number below 2, such as 1,5. It gives `many` for a round million and more, which takes `de`. Every
  other number is `other`.
- **Write each form whole:** `0 leçon`, `1 leçon`, `1,5 temps`, `2 leçons`, `1 000 000 de leçons`.
- **"X of Y" is `X sur Y`, and the noun agrees with X:** `3 leçons sur 8`, `1 leçon sur 8`. Its message
  takes the plural of X.
- **A range in prose is `de … à …`:** `des mesures 9 à 16`. A label writes `9–16`.
- **A year is digits and `en`:** `en 1824`. A century is a Roman numeral, as § 6 says.
- **A time is the 24-hour clock with `h`:** `22 h`. A time `Intl` formats keeps its colon: `22:00`.

## 9. Marks

Each rule has its pattern in the `fr` entry of `src/i18n/typography.ts`. The rules test reads a text with
each kept word written as `X`.

This guide shows each French space as a plain space, so it stays readable. In a translation file, the
space before `;`, `!`, `?` and inside `« »` is U+202F. The space before `:` and `%` is U+00A0.

| Rule | Pattern (`mustNot`) |
|---|---|
| A quote stands in `« »`, never in straight or curly double quotes. | `["“”„]` |
| A narrow no-break space (U+202F) stands inside `« »`. | `«` not followed by it, `»` not after it |
| A space stands before `«` and after `»`, apart from an elision: `l’«`. | a letter or digit beside the quote |
| A narrow no-break space stands before `;`, `!` and `?`. | each mark not after it |
| A no-break space (U+00A0) stands before `:`, apart from a time such as `22:00`. | `:` not after it or a digit |
| No ASCII space stands before `;`, `:`, `!`, `?`, `»` or `%`, nor after `«`. | the space and the mark |
| A percent sign follows its number after a no-break space, as `Intl` writes it. | `\d%` |
| The apostrophe is `’`. | `'` |
| An ellipsis is the one character `…`. | `\.\.\.` |
| A space follows the end of a sentence. A text built from joined strings drops it most. | `[.!?…»]` and a capital |
| A range of numbers takes `–` with no spaces: `1–4`. | `\d\s*-\s*\d`, `\d\s+–`, `–\s+\d` |
| The learner is `tu`, never `vous`. | `vous`, `votre`, `vos`, whole, apart from `rendez-vous` |
| An instruction is the imperative of `tu`. | `appuyez`, `jouez`, `écoutez` and the like, whole |
| No point médian or bracketed ending marks a gender. | `\p{L}·\p{L}`, `(e)`, `(ne)` and the like |
| Soft is `doux` and slow is `lentement`, never `doucement`. | `doucement`, whole |
| A welcome is `Bienvenue`, never an adjective with a gender. | `bienvenu`, `bienvenus`, `bienvenues` |
| A capital keeps its accent: `À`, `É`, `Ç`. | `A la`, `A droite`, `Ecoute`, `Etape`, `Ca` and the like |

- **The narrow no-break space goes before `;`, `!` and `?`, and inside `« »`.** French print sets a thin
  space there, and CLDR uses the same character between a number's groups. MS asks for the wider U+00A0.
  The narrow one looks right on a phone and never breaks a line.
- **A Canadian reader sees a thin space before `!` and `?`,** where MSCA § 4.1.13 sets none. One text
  serves every country, and the narrow space is the least visible way to follow France.
- **The colon takes the wider U+00A0,** as both MS and MSCA ask. French print sets a full space there.
- **Type each space as an escape.** Write and Edit may turn a typed no-break space into an ASCII space,
  as the playbook warns. Type ` ` or ` `, and Grep the file afterwards.
- **An interface word the learner looks for stands without quotes, with its capital:** `Appuie sur
  Lire.` MS § 4.1.14 asks for it. A section named mid-sentence takes `« »`, as § 5 says.
- **A quote inside a quote is `“ ”`, and it is avoided.** The rules test refuses `“ ”`, so a writer
  rewrites the text with one quote.
- **A dash between words is avoided.** MS replaces it with a period, a comma or parentheses, and a writer
  does the same.
- **A semicolon is rare.** MS writes none in an interface, and two sentences read more plainly.
- **A sentence ends with a period, even in a lesson's short line.** A button, a label and a title take
  none, as MS says.
- **`!` is rare.** MS says not to carry it over by habit. A cheer may keep it: `Nouveau niveau !`
- **A colon is followed by a lower-case word,** as MS says, unless a name follows.
- **A label is sentence case:** only its first word and its proper names take a capital.
- **A capital keeps its accent:** `À toi.`, `Écoute.`, `Ça y est.` The Académie française asks for it,
  and MS writes `Édition`.
- **Emphasis is bold, never italic,** as the English writes it.

## 10. Length

French runs about a fifth longer than English. A word such as `réinitialiser` cannot wrap, so a narrow
label clips first. The layout checks at 360 pixels catch it.

| Long | Short, for a label |
|---|---|
| Lire | the icon alone, with the word as its name |
| pédale forte | pédale |
| clavier de l’ordinateur | clavier |
| Réinitialiser | Remettre à zéro, or the icon |
| entraînement en boucle | boucle |
| application | appli |
| Travail de l’oreille | Oreille |
| outils avancés | Avancé |
| raccourcis clavier | raccourcis |
| démonstration | démo |

- **A label stays a phrase, never a clipped word.** `Ouvrir le morceau` may become `Ouvrir`.
- **A word is never cut with a period to fit,** apart from the abbreviations French prints, such as `op.`
  and `env.`
- **A long word never breaks,** since the pages set no hyphenation. A label that clips takes a short
  form from the table above.

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | French | Why it beat the next best |
|---|---|---|---|
| Button | Continue | Continuer | The infinitive of a button. `Suivant` is *Next*, so it stays free for that. |
| Transport tooltip | Play or pause | Lire ou mettre en pause | `Lire` is the playback verb. `Jouer` would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | Répéter en boucle les mesures choisies dans les paramètres | `En boucle` is plain. `Boucler` reads like slang. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | Attendre tes notes / Le morceau s’arrête sur chacune de tes notes jusqu’à ce que tu tiennes toutes ses touches. | The song is the subject, and `jusqu’à ce que` is how a teacher says "until". |
| Error | Your browser refused to save. Nothing changed. | Impossible d’enregistrer. Rien n’a changé. | MS's error form. `Ton navigateur a refusé` gives the browser a will. |
| Toast | A new version is ready. | Une nouvelle version est prête. | `Prête` agrees with `version`, so no gender reaches the learner. |
| Dialog | Reset all progress? / Are you sure? | Réinitialiser toute la progression ? / Tu confirmes ? | `Tu confirmes ?` names no gender. `Tu es sûr ?` would. |
| Counter | 3 of 8 lessons | 3 leçons sur 8 | French counts so. `Leçons : 3/8` reads like a form. |
| Streak | 3-day streak | 3 jours d’affilée | Short and everyday. `Série de 3 jours` is a calque. |
| Feedback | Right! | Exact ! | A teacher's word. `Correct !` reads like a test. |
| Greeting | Hi, I'm your piano teacher. Shall we play? | Salut ! Je vais t’apprendre le piano. On commence ? | The verb names no gender. `Je suis ton professeur` would make the teacher a man. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | Hibou / Termine une leçon à 22 h ou plus tard. | The badge is the owl, so no gender reaches the learner. `Couche-tard` would name a person. |
| Joke | Quality control is a cat that walks over the keys now and then. | Le contrôle qualité, c’est un chat qui se promène de temps en temps sur les touches. | The fronted subject keeps the deadpan, and the cat does the walking. |
| Level up | Level up! / Every lesson takes you further. Keep going! | Nouveau niveau ! / Chaque leçon te fait progresser. Continue comme ça ! | `Nouveau niveau` is the word of games. `Niveau augmenté` reads like a system log. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | La pédale de droite est la pédale forte. Tant qu’elle est enfoncée, chaque note continue de sonner après que tu as lâché sa touche. | `Pédale forte` is the French name. `Pédale de sustain` is a synth word no method uses. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | À toi. Pose le pouce droit sur le do central et joue do et mi ensemble. | `Pouce droit` is short, and the notes are solfège in lower case. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | Combien de touches noires compte le petit groupe ? / Une, Deux, Trois, Quatre | Each answer agrees with `touche`. `Un` would be wrong. |
| Rhythm | Count "1-2" for each half note. | Compte « 1, 2 » sur chaque blanche. | French teachers count in numbers, and `blanche` is the method's name. |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | Beethoven a écrit cette mélodie pour le finale de sa Neuvième Symphonie. Elle a été jouée pour la première fois à Vienne en 1824. | `Le finale` is the last movement in French. Two sentences keep each idea apart. |
| Guide, tricky bar | Look before you jump. | Regarde avant de sauter. | Short and imperative, as the English is. |
| Mode name | Free jam | Improvisation libre | `Jam` is jargon few learners know. Transcreated, it keeps the freedom. |

## 12. Sources

- **Microsoft French Style Guide (France),** `aka.ms/french-france-styleguide`. It settled the warm and
  clear voice, the errors in `Impossible de …`, the curly apostrophe, the ellipsis, the colon's space,
  unquoted interface words and the neutral wording. Its `vous` is not followed, as § 2 says why.
- **Microsoft French Style Guide (Canada),** `aka.ms/french-canada-styleguide`. It settled the same
  voice and showed where Canada spaces its marks differently. § 9 says why the text follows France.
- **Neither Microsoft guide holds an interface glossary.** The terms it names are marked MS. The rest
  rest on the everyday words of French software, as each row says.
- **CLDR,** through `Intl`. It settled the narrow no-break space between groups, the decimal comma,
  `80 %` and the three plural forms.
- **French Wikipedia's music articles,** each named in the glossary. They settled the note values, the
  signs, the bar and the beat, the pedals, the fingering, the chords and their inversions.
- **apprendrelesolfege.com,** a French beginner's course in solfège and piano. It confirmed the note
  values, the rests, the clefs, `ligne supplémentaire`, `barre de reprise` and the capital `RÉ`.
- **No printed French piano method was reached.** The rows marked *unsourced* rest on French teaching
  usage alone.

## Open

- **A speaker from Canada and one from Africa should read the course.** They would catch a word that
  reads as France's only, and the thin space before `!` in Canada.
- **No printed French piano method was reached.** A French piano teacher's read would confirm `double
  portée`, `trait`, `soufflet`, `écart`, `passage du pouce` and `accord brisé`.
- **`Do central` has no source in the fetch,** though French teachers use it. The code's label `Do4`
  differs from France's `do 3`, and § 7 keeps every number out of prose.
- **`Tu` goes against Microsoft's `vous`.** § 2 says why. An adult reader's view of the first world would
  show whether it reads too familiar.
