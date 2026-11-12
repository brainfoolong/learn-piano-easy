/** The player's settings from the notes to the offline files, in English: each setting's label, help and options, by id. */
import type { SettingsTexts } from "../../settings/schema";

export const playerSettingsLook = {
  // Notes
  showHitKeys: {
    label: "Light up sounding notes",
    help: "A note glows in its own colour while it sounds.",
  },
  noteWidth: {
    label: "Note width (% of key)",
    help: "How wide each falling note is, measured against its key.",
  },
  roundedNotes: {
    label: "Rounded notes",
    help: "Gives the falling notes round corners.",
  },
  noteBorderRadius: {
    label: "Corner radius (%)",
    help: "How round the corners of a note are, as a share of its width.",
  },
  minNoteHeight: {
    label: "Shortest note length",
    help: "In key widths, so a very short note still shows.",
  },
  strokeNotes: {
    label: "Edge glow",
    help: "A rim of light in each note's own colour.",
  },
  strokeNotesWidth: {
    label: "Edge glow strength",
    help: "How wide and bright the rim of light around each note is.",
  },
  noteEndedShrink: {
    label: "Played notes shrink into their key",
    help: "A note sinks into its key as it sounds. When off, it runs on past the keys.",
  },
  playedNoteFalloffSpeed: {
    label: "How far played notes run past the keys",
    help: "In key widths, when played notes do not shrink.",
  },
  showSustainedNotes: {
    label: "Show how long the pedal holds a note",
    help: "A thin tail runs on from each note the pedal holds.",
  },
  sustainedNotesOpacity: {
    label: "Pedal tail brightness (%)",
    help: "How strongly the pedal tails show behind the notes.",
  },

  // Lanes
  bgCol1: {
    label: "Lane colour",
    help: "The colour of the lanes above the white keys.",
  },
  bgCol5: {
    label: "Black key lane colour",
    help: "The colour of the lanes above the black keys.",
  },
  bgCol3: {
    label: "Octave divider colour",
    help: "The colour of the line between each B and the next C.",
  },
  drawMeasureLines: {
    label: "Measure lines",
    help: "A line across the lanes at the start of each measure.",
  },
  measureLineThickness: {
    label: "Measure line thickness",
    help: "How thick the line at each measure is.",
  },
  measureLineColor: {
    label: "Measure line colour",
    help: "The colour of the line at each measure.",
  },
  enableDrawBeatLines: {
    label: "Beat lines",
    help: "A fainter line across the lanes on each beat.",
  },
  beatLineThickness: {
    label: "Beat line thickness",
    help: "How thick the line on each beat is.",
  },
  beatLineColor: {
    label: "Beat line colour",
    help: "The colour of the line on each beat.",
  },
  enableDrawMeasureNumbers: {
    label: "Measure numbers",
    help: "The number of each measure, beside its line.",
  },
  measureNumbersColor: {
    label: "Measure number colour",
    help: "The colour of the measure numbers.",
  },
  highlightInputLanes: {
    label: "Light the lanes of the keys you hold",
    help: "The lane above a key brightens while you hold that key.",
  },
  inputLaneOpacity: {
    label: "Lane light strength",
    help: "How bright a lane turns while you hold its key.",
  },
  showMarkersSong: {
    label: "Markers",
    help: "A line and its text where the song names a part, such as a verse.",
  },
  showSustainPeriods: {
    label: "Pedal periods",
    help: "A band across the lanes while the song holds the sustain pedal.",
  },
  showSustainOnOffs: {
    label: "Pedal down and up",
    help: "A line marked Ped. where the pedal goes down, and ✱ where it comes up.",
  },
  showSustainChannels: {
    label: "Pedal channels",
    help: "Names the MIDI channel of each pedal period.",
  },

  // Particles
  showParticles: {
    label: "Particles",
    help: "Effects rise from each key that sounds. They cost the graphics card, so they start off.",
  },
  particlesFlames: {
    label: "Flames",
    help: "Each key burns with its note in the note's colour. They cost the graphics card the most.",
  },
  particlesSparks: {
    label: "Sparks",
    help: "Small bright sparks fly up from each key.",
  },
  particlesEmbers: {
    label: "Embers",
    help: "Glowing embers drift slowly up from each key.",
  },
  particlesStars: {
    label: "Stars",
    help: "Small spinning stars rise from each key.",
  },
  particlesCustom: {
    label: "Your own particles",
    help: "Particles made from the settings below.",
  },
  particlesTexture: {
    label: "Shape",
    help: "The picture each of your own particles shows.",
    options: { circle: "Glow", spark: "Spark", smoke: "Smoke", star: "Star", ring: "Ring" },
  },
  particlesBlending: {
    label: "Blending",
    help: "Add light brightens what is behind, as fire does. Cover hides it, as smoke does.",
    options: { additive: "Add light", normal: "Cover" },
  },
  particleOverrideColor: {
    label: "Own colour",
    help: "When off, each particle takes the colour of its key.",
  },
  particleColor: {
    label: "Colour",
    help: "The colour of your particles, when they have their own colour.",
  },
  particlesOpacity: {
    label: "Opacity",
    help: "How solid each particle looks. Lower values let more show through.",
  },
  particleSize: {
    label: "Size",
    help: "In key widths.",
  },
  particleAmount: {
    label: "Amount",
    help: "Particles per key per frame, at 60 frames a second.",
  },
  particleLife: {
    label: "Life (s)",
    help: "How long each particle lasts before it disappears.",
  },
  particleSpeed: {
    label: "Motion speed",
    help: "Speeds up or slows down every movement of the particles.",
  },
  particleFadeOut: {
    label: "Fade out",
    help: "The share of its life over which a particle fades, at its end.",
  },
  particlesShrink: {
    label: "Shrink",
    help: "The share of its size a particle loses. Below 0 it grows.",
  },
  particleSpeedX: {
    label: "Sideways speed",
    help: "In key widths per second.",
  },
  particleSpeedY: {
    label: "Rising speed",
    help: "In key widths per second.",
  },
  particlesFriction: {
    label: "Drag",
    help: "How fast the particles slow down as they fly.",
  },
  particleRising: {
    label: "Gravity",
    help: "Above 0 particles fall back, below 0 they rise faster.",
  },
  particlesRotation: {
    label: "Angle (°)",
    help: "How far each particle is turned when it starts.",
  },
  particlesRotationRandom: {
    label: "Random angle (°)",
    help: "Each particle starts turned by a random amount up to this angle.",
  },
  particlesRotationSpeed: {
    label: "Spin (° per second)",
    help: "How fast each particle turns as it flies.",
  },
  particleNoiseResX: {
    label: "Sideways wander detail",
    help: "Higher values make the sideways wander change direction more often.",
  },
  particleNoiseStrengthX: {
    label: "Sideways wander",
    help: "How far the particles drift at random to the sides.",
  },
  particleNoiseResY: {
    label: "Rising wander detail",
    help: "Higher values make the rising wander change more often.",
  },
  particleNoiseStrengthY: {
    label: "Rising wander",
    help: "How much the particles speed up and slow down at random as they rise.",
  },
  particleNoiseStrengthSize: {
    label: "Size wander",
    help: "How much each particle grows and shrinks at random.",
  },
  turbulenceXAmplitude: {
    label: "Sideways sway",
    help: "How far the particles swing from side to side.",
  },
  turbulenceXFrequency: {
    label: "Sideways sway rate",
    help: "Sways per second.",
  },
  turbulenceYAmplitude: {
    label: "Rising sway",
    help: "How far the particles swing up and down as they rise.",
  },
  turbulenceYFrequency: {
    label: "Rising sway rate",
    help: "Sways per second.",
  },
  particleYOffset: {
    label: "Start height",
    help: "In key widths above the key.",
  },
  particleDistributionX: {
    label: "Start across the key",
    help: "Where across its key each particle starts.",
    options: { across: "Anywhere across it", centre: "At its centre" },
  },
  particleDistributionXSpread: {
    label: "Start spread (%)",
    help: "The share of the key's width particles start across.",
  },
  particleDistributionY: {
    label: "Start along the key",
    help: "Where along its key each particle starts.",
    options: { hitLine: "At the hit line", key: "Anywhere along its top" },
  },
  particleDistributionZ: {
    label: "Layer",
    help: "Whether the keys hide the particles or the particles cover the piano.",
    options: { behind: "Hidden by the keys", front: "In front of the piano" },
  },

  // Labels
  pitchNotationSystem: {
    label: "Note names",
    help: "How the names on the notes and the keys are written. Do is always C.",
    options: { letters: "Letters: C D E", solfege: "Solfège: Do Re Mi" },
  },
  noteLabel: {
    label: "Note labels",
    help: "The texts on each note: pick any of them, or none. Click a note and press 1 to 5 to set its finger.",
    options: { name: "Note name", keyBinding: "Computer key", fingering: "Finger" },
  },
  noteLabelColor: {
    label: "Note label colour",
    help: "The colour of the text on each note.",
  },
  showKeyNamesOnPianoWhite: {
    label: "Names on the white keys",
    help: "Each white key shows its note name.",
  },
  showKeyNamesOnPianoBlack: {
    label: "Names on the black keys",
    help: "Each black key shows its note name.",
  },
  showPianoKeyNameFlats: {
    label: "Black keys named with flats",
    help: "D♭ in place of C♯, on the keys only. The notes follow the song's key.",
  },
  octaveLabel: {
    label: "Octave on the key names",
    help: "Adds the octave number to the names on the keys, such as C4.",
    options: { none: "None", all: "On every key", onlyC: "On C only" },
  },
  showKeyBindingsOnPiano: {
    label: "Computer keys on the piano",
    help: "Each key shows the computer key that plays it.",
  },
  showChords: {
    label: "Chord names",
    help: "Names each chord the notes form, held pedal included.",
  },
  chordLabelStyle: {
    label: "Chord label style",
    help: "How each chord name is drawn.",
    options: { bar: "Bar over the chord's keys", ribbon: "Ribbon across the lanes" },
  },
  chordLabelPlacement: {
    label: "Chord label placement",
    help: "The top is the chord's far end, away from the piano.",
    options: {
      above: "Above the chord",
      top: "At its top",
      middle: "In its middle",
      bottom: "At its bottom",
      below: "Below the chord",
    },
  },
  showChordRomanNumerals: {
    label: "Roman numerals",
    help: "Each chord's degree in the song's key, such as V7.",
  },
  chordBlocks: {
    label: "Note blocks",
    help: "A block above each note of a named chord says what the note is.",
    options: { none: "None", tone: "Chord tone", degree: "Scale degree" },
  },
  chordToneNotation: {
    label: "Note block notation",
    help: "Whether the note blocks use short signs or full words.",
    options: { simple: "Simple: R ♭3 5", full: "Full: Root ♭3rd 5th" },
  },
  chordMarkRoot: {
    label: "Mark the root",
    help: "Each chord's root note carries a gold block.",
  },

  // Lyrics
  lyricsEnabled: {
    label: "Lyrics",
    help: "Shows a song's lyrics, when it has them, a line at a time.",
  },
  lyricsBackground: {
    label: "Background colour",
    help: "The colour of the strip behind the lyrics.",
  },
  lyricsFontColor: {
    label: "Text colour",
    help: "The colour of the words still to come.",
  },
  lyricsFontColorPlayed: {
    label: "Sung text colour",
    help: "The colour of the words already sung.",
  },
  lyricsFontColorActive: {
    label: "Colour of the syllable sung now",
    help: "The syllable in play stands out in this colour.",
  },
  lyricsFontSize: {
    label: "Text size (px)",
    help: "How large the lyrics are written.",
  },
  lyricsY: {
    label: "Height (% from the top)",
    help: "Where the lyrics sit on the screen. 0 is the top edge.",
  },
  lyricsCursorEnabled: {
    label: "Cursor",
    help: "A dot over the syllable sung now.",
  },
  lyricsBouncingCursor: {
    label: "Bouncing cursor",
    help: "The dot hops from each syllable to the next.",
  },

  // Coding
  enableColorCodingNote: {
    label: "Colour notes by pitch",
    help: "Each of the 12 pitches takes its own colour.",
  },
  enableColorCodingNotePiano: {
    label: "Colour keys by pitch",
    help: "Each key lights up in its pitch's colour while it sounds.",
  },
  colorCodeNote0: { label: "C", help: "The colour of every C." },
  colorCodeNote1: { label: "C♯ or D♭", help: "The colour of every C♯ or D♭." },
  colorCodeNote2: { label: "D", help: "The colour of every D." },
  colorCodeNote3: { label: "D♯ or E♭", help: "The colour of every D♯ or E♭." },
  colorCodeNote4: { label: "E", help: "The colour of every E." },
  colorCodeNote5: { label: "F", help: "The colour of every F." },
  colorCodeNote6: { label: "F♯ or G♭", help: "The colour of every F♯ or G♭." },
  colorCodeNote7: { label: "G", help: "The colour of every G." },
  colorCodeNote8: { label: "G♯ or A♭", help: "The colour of every G♯ or A♭." },
  colorCodeNote9: { label: "A", help: "The colour of every A." },
  colorCodeNote10: { label: "A♯ or B♭", help: "The colour of every A♯ or B♭." },
  colorCodeNote11: { label: "B", help: "The colour of every B." },
  enableColorCodingFinger: {
    label: "Colour notes by finger",
    help: "A note no hand plays keeps its other colour.",
  },
  enableColorCodingFingerPiano: {
    label: "Colour keys by finger",
    help: "Each key lights up in the colour of the finger that plays it.",
  },
  colorCodeFinger1Right: { label: "Right hand, finger 1", help: "The colour of notes the right thumb plays." },
  colorCodeFinger2Right: { label: "Right hand, finger 2", help: "The colour of notes the right index finger plays." },
  colorCodeFinger3Right: { label: "Right hand, finger 3", help: "The colour of notes the right middle finger plays." },
  colorCodeFinger4Right: { label: "Right hand, finger 4", help: "The colour of notes the right ring finger plays." },
  colorCodeFinger5Right: { label: "Right hand, finger 5", help: "The colour of notes the right little finger plays." },
  colorCodeFingerDefaultRight: {
    label: "Right hand, no finger",
    help: "The colour of right hand notes without a finger set.",
  },
  colorCodeFinger1Left: { label: "Left hand, finger 1", help: "The colour of notes the left thumb plays." },
  colorCodeFinger2Left: { label: "Left hand, finger 2", help: "The colour of notes the left index finger plays." },
  colorCodeFinger3Left: { label: "Left hand, finger 3", help: "The colour of notes the left middle finger plays." },
  colorCodeFinger4Left: { label: "Left hand, finger 4", help: "The colour of notes the left ring finger plays." },
  colorCodeFinger5Left: { label: "Left hand, finger 5", help: "The colour of notes the left little finger plays." },
  colorCodeFingerDefaultLeft: {
    label: "Left hand, no finger",
    help: "The colour of left hand notes without a finger set.",
  },

  // Sheet
  enableSheet: {
    label: "Show the sheet music",
    help: "The song as sheet music, over the top of the scene.",
  },
  enableFullSheet: {
    label: "Sheet music alone",
    help: "The sheet fills the screen in place of the scene.",
  },
  sheetMeasureScroll: {
    label: "Scroll the sheet with the song",
    help: "When off, the measures stand in lines, and the line in play stays in view.",
  },
  sheetMeasureNumbers: {
    label: "Measure numbers",
    help: "Where the sheet shows the number of each measure.",
    options: { off: "None", lineStart: "At the start of each line", every: "On every measure" },
  },
  enableGrandStaff: {
    label: "Join two staves with a brace",
    help: "The brace of a grand staff, at the start of each line.",
  },
  sheetAutoClef: {
    label: "Choose each clef from the notes",
    help: "When off, the first staff is treble and the rest are bass.",
  },
  overrideTimeSignature: {
    label: "Time signature",
    help: "The time signature the sheet is written in. Choose one when the song's own is wrong.",
    options: {
      auto: "From the song",
      "2/4": "2/4",
      "3/4": "3/4",
      "4/4": "4/4",
      "5/4": "5/4",
      "2/2": "2/2",
      "6/8": "6/8",
      "9/8": "9/8",
      "12/8": "12/8",
    },
  },
  sheetMinNoteDenom: {
    label: "Shortest note value",
    help: "Every note is placed on a grid of this value.",
    options: { "4": "Quarter", "8": "Eighth", "16": "16th", "32": "32nd", "64": "64th" },
  },
  hideRestsBelow: {
    label: "Hide rests shorter than",
    help: "Leaves out short rests, so the sheet is easier to read.",
    options: { none: "Hide none", "4": "A quarter", "8": "An eighth", "16": "A 16th", "32": "A 32nd" },
  },
  renderSheetCursor: {
    label: "Cursor",
    help: "A line marks the place in the song.",
  },
  sheetColorActiveNotes: {
    label: "Colour sounding notes",
    help: "Notes on the sheet change colour while they sound.",
  },
  sheetColorByTrack: {
    label: "Sounding notes take their track's colour",
    help: "When off, they take the colour below.",
  },
  sheetActiveNotesColor: {
    label: "Sounding note colour",
    help: "The colour of a note on the sheet while it sounds.",
  },
  sheetHighlightActiveNotes: {
    label: "Glow behind sounding notes",
    help: "A soft light shows behind each note on the sheet while it sounds.",
  },
  sheetActiveHighlightColor: {
    label: "Glow colour",
    help: "The colour of the light behind sounding notes.",
  },
  sheetActiveGrowEffect: {
    label: "Sounding notes grow",
    help: "A note on the sheet gets bigger while it sounds.",
  },
  sheetRenderInputNotes: {
    label: "Draw the notes you play",
    help: "Each key you hold shows as a note at the cursor.",
  },
  sheetShowHoverInfo: {
    label: "Name the notes under the pointer",
    help: "Point at a note on the sheet to see its name.",
  },
  sheetBgColor: {
    label: "Paper colour",
    help: "The ink turns light on a dark paper.",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "Save the notes as a PDF",
    help: "Opens a dialog that saves the open song's falling notes, a screen to a page.",
  },
  exportPdfBackground: {
    label: "Use background colours",
    help: "The pages take the lane and key colours. When off, they print on white paper.",
  },

  // Offline
  offlineCache: {
    label: "Manage offline files",
    help: "Shows the size of the app, the songs and the piano sounds, and saves or removes each.",
  },
  autoCacheSongs: {
    label: "Keep the songs saved",
    help: "Saves every example song now, and again after each update.",
  },
  autoCacheSounds: {
    label: "Keep the piano sounds saved",
    help: "Saves every sound set now, and again after each update.",
  },
} satisfies Partial<SettingsTexts>;
