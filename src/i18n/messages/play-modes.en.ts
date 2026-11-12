/** The play modes at `modes/`, and the player's toast that applies one, in English. */
export const playModes = {
  eyebrow: "Ready, set, play",
  lead: "Pick a mode, and the player sets itself up with the right song, the right help and the right look. Then you play.",
  /** The line under the cards. */
  note: "A mode changes a few settings of the player. Once it starts, you can undo it with one click, and change any setting later.",
  /** The list of what a mode sets, by its accessible name. */
  traits: "What it sets",
  /** The song line of a card, or the line of a mode that keeps the open song. */
  song: (title: string) => `Song: ${title}`,
  noSong: "No song needed",
  /** The face of a card's start, which the whole card answers. */
  start: "Start",
  /** The keys under each card's picture, from C to the next B. */
  keyNames: ["C", "D", "E", "F", "G", "A", "B"],
  groups: {
    fun: {
      heading: "Play for fun",
      lead: "Points, sparks and a show. Pick one, and let the piano entertain you.",
    },
    learn: {
      heading: "Learn a song",
      lead: "Each helps you learn a song in its own way, from one hand at a time to reading the music.",
    },
    skills: {
      heading: "Train a skill",
      lead: "Find notes fast, play freely, or hear how chords work. Some need no song at all.",
    },
  },
  modes: {
    game: {
      tag: "For fun",
      name: "Game mode",
      text: "Every note you hit earns points, and the piano sparkles back. Chase a combo and beat your best score.",
      traits: ["Points and combos on easy", "Sparks, flares and a glowing piano", "A short, catchy song"],
      song: "In the Hall of the Mountain King, Beginner",
    },
    challenge: {
      tag: "For experts",
      name: "Challenge",
      text: "Game mode on its hardest level, with no names and no hints. Only a clean run earns the top score.",
      traits: ["Points and combos on hard", "No names and no key hints", "A harder version of the song"],
      song: "In the Hall of the Mountain King, Medium",
    },
    concert: {
      tag: "Sit back",
      name: "Concert",
      text: "The piano plays a song for you, with flames, stars and a moving camera. Watch the show, or join in if you dare.",
      traits: ["A cinematic camera", "Flames, stars and sparks", "A glowing piano and a wave of light"],
      song: "Carol of the Bells, Hard",
    },
    playAlong: {
      tag: "Step by step",
      name: "Play along",
      text: "The song waits for you at every note. Each note shows its name and its finger, and each key shows its name.",
      traits: ["The notes wait for you", "Note names and fingers on the notes", "Names on the white and the black keys"],
      song: "Ode to Joy, Beginner",
    },
    oneHand: {
      tag: "Start small",
      name: "One hand at a time",
      text: "Learn the right hand first while the app plays the left. The song waits for each of your notes.",
      traits: ["Only your right hand plays", "The app plays the left hand", "Switch hands in the settings, under “Your hands”"],
      song: "Jingle Bells, Beginner",
    },
    readMusic: {
      tag: "Sheet music",
      name: "Read the music",
      text: "The sheet music shows above the piano, and the song waits for you. The notes carry no names, so you read them from the staff.",
      traits: ["Sheet music above the piano", "The notes wait for you", "A soft light behind each sounding note"],
      song: "Mary Had a Little Lamb, Beginner",
    },
    slowSteady: {
      tag: "Practice",
      name: "Slow and steady",
      text: "The first four bars loop, starting at half speed. Each pass gets a little faster, until you play at full speed.",
      traits: ["The first four bars loop", "Half speed first, faster each pass", "A count-in before each pass"],
      song: "Für Elise, Easy",
    },
    rhythm: {
      tag: "Timing",
      name: "Rhythm keeper",
      text: "A metronome ticks, and each note you play is scored on its timing. No names and no waiting, only the beat.",
      traits: ["A metronome on every beat", "Each note scored on its timing", "The song never waits"],
      song: "Twinkle Twinkle Little Star, Easy",
    },
    colourByFinger: {
      tag: "Fingers",
      name: "Colour by finger",
      text: "Every finger has its own colour, on the notes and on the keys. The song waits while you find the right one.",
      traits: ["Notes coloured by finger", "Keys light up in the finger's colour", "The notes wait for you"],
      song: "Twinkle Twinkle Little Star, Beginner",
    },
    noteTrainer: {
      tag: "Notes",
      name: "Note trainer",
      text: "The app names a note, and you find it on the keys. At the end you see which notes you mixed up.",
      traits: ["Notes of C major, from middle C up", "Ten notes a round", "A list of mix-ups at the end"],
    },
    freeJam: {
      tag: "Just you",
      name: "Free jam",
      text: "No song and no rules. Play anything, and the piano answers with sparks and light. Record it and keep it as a MIDI file.",
      traits: ["Free play, with no song", "Sparks, stars and a glowing piano", "Record and save what you play"],
    },
    chordExplorer: {
      tag: "Harmony",
      name: "Chord explorer",
      text: "Every chord of the song is named as it plays, with its number in the key. Blocks over the notes show each note's place in the scale.",
      traits: ["Chord names as the song plays", "A Roman numeral for each chord", "Scale degrees, with each root marked"],
      song: "Canon in D, Easy",
    },
  },
  /** The player's toast once a mode applies, and its undo. */
  toast: {
    started: (name: string) => `${name} is on.`,
    undo: "Undo",
    undone: "Your own settings are back.",
  },
};
