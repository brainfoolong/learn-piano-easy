/** The player's settings from the site's own to the piano's, in English: each setting's label, help and options, by id. */
import type { SettingsTexts } from "../../settings/schema";

export const playerSettingsPlay = {
  // Site
  siteTheme: {
    label: "Site theme",
    help: "The colours of the site's pages. The scene theme sets the colours of the piano and its lanes.",
    options: { system: "Like the system", light: "Light", dark: "Dark" },
  },
  language: {
    label: "Language",
    help: "Like the browser, the site opens in the browser's language when it has one.",
    options: { auto: "Like the browser", en: "English", de: "Deutsch", es: "Español", zh: "简体中文", hi: "हिन्दी", ar: "العربية" },
  },
  learnSounds: {
    label: "Reward sounds",
    help: "The chimes of Learn Piano for a passed step, a star, a new level and a badge. The piano always sounds.",
  },
  learnDailyGoal: {
    label: "Daily goal",
    help: "The XP a day of Learn Piano needs to keep your streak going.",
    options: { "10": "10 XP", "20": "20 XP", "30": "30 XP", "50": "50 XP" },
  },
  learnSetupDone: {
    label: "First visit done",
    help: "Learn Piano shows its short setup on your first visit, until it is done.",
  },
  expertControls: {
    label: "Expert tools",
    help: "The control bar's Expert button shows the speed, transpose, the loop's first and last bar, fit and the view's sideways move.",
  },
  // General
  theme: {
    label: "Scene theme",
    help: "Sets the colours of the piano and its lanes. The site's theme in the top bar sets the rest of the player.",
    options: { dark: "Dark", light: "Light" },
  },
  yourData: {
    label: "Back up or restore your data",
    help: "Opens the page that saves your settings, progress, songs and scores to one file, and restores them.",
  },
  startWithLastSong: {
    label: "Reopen the last song on start",
    help: "Opens the song you played last each time you open the player.",
  },
  saveIndexedDb: {
    label: "Keep your files in this browser",
    help: "Songs you open from your computer stay in your library after the page reloads.",
  },
  disableHotkeys: {
    label: "Turn off hotkeys",
    help: "The computer keys no longer play, seek or loop the song.",
  },
  hotKeyBindings: {
    label: "Hotkeys",
    help: "The keys that play, seek, loop and zoom the song.",
  },
  leadIn: {
    label: "Time before the first note (s)",
    help: "Every song starts this long before its first note, and waits as long again each time it plays again from its end.",
  },
  restartSongOnEnd: {
    label: "Restart the song when it ends",
    help: "The song plays again from its start after its last note.",
  },
  playNotesOnScrollEnabled: {
    label: "Play notes while dragging the timeline",
    help: "You hear each note you pass while you drag through the song.",
  },
  fitZoomOnNewSong: {
    label: "Fit the zoom to each new song",
    help: "A song you open fits whole in the lanes ahead of the piano.",
  },
  transposeOffset: {
    label: "Transpose (semitones)",
    help: "Moves every note of the song up or down.",
  },
  reverseNoteDirection: {
    label: "Reverse the note direction",
    help: "Notes move away from the piano instead of towards it.",
  },
  renderOffset: {
    label: "Picture offset (ms)",
    help: "Delays the picture against the sound, or shows it early below 0.",
  },
  showBPM: {
    label: "Show the tempo in BPM",
    help: "Shows the song's current beats per minute over the scene, beside the frames per second.",
  },
  showFps: {
    label: "Show frames per second",
    help: "Shows how many pictures a second the scene draws. A low number means the picture runs slowly.",
  },
  showNoteDebugInfo: {
    label: "Show a note's details on hover",
    help: "Pointing at a note shows its pitch, time, length and velocity.",
  },
  showMilliseconds: {
    label: "Show milliseconds on the timeline",
    help: "The time on the timeline also shows thousandths of a second.",
  },
  progressBarMeasures: {
    label: "Show the timeline in bars",
    help: "The timeline counts bars instead of minutes and seconds.",
  },
  progressBarMeasureLines: {
    label: "Show bar lines on the timeline",
    help: "Draws a thin line on the timeline where each bar starts.",
  },
  showMarkersTimeline: {
    label: "Show markers on the timeline",
    help: "Shows the song's own markers, such as verse or chorus, on the timeline.",
  },
  // Loop
  enableLoop: {
    label: "Loop a passage",
    help: "Repeats the bars below again and again, so you can practise them.",
  },
  loopStart: {
    label: "First bar of the loop",
    help: "The loop starts at the beginning of this bar.",
  },
  loopEnd: {
    label: "Last bar of the loop",
    help: "The loop ends at the end of this bar.",
  },
  loopDelay: {
    label: "Count-in (beats)",
    help: "The beats played before each pass of the loop.",
  },
  enableLoopBeats: {
    label: "Click on the count-in beats",
    help: "You hear a click on each beat of the count-in.",
  },
  autoLoop: {
    label: "Start each pass at once",
    help: "When off, the song pauses at the count-in after each pass.",
  },
  muteLoop: {
    label: "Silence the song outside the loop",
    help: "Only the notes of the looped bars sound.",
  },
  loopTrainer: {
    label: "Loop trainer",
    help: "Starts slow and adds 5 % speed after each pass, up to 100 %.",
  },
  loopTrainerSpeed: {
    label: "Loop trainer start speed (%)",
    help: "The speed of the loop trainer's first pass.",
  },
  // Audio
  volumeMain: {
    label: "Volume",
    help: "The volume of everything the app plays.",
  },
  masterGain: {
    label: "Song volume",
    help: "How loud the song's notes sound.",
  },
  inputGain: {
    label: "Volume of your playing",
    help: "How loud the notes you play on your keyboard sound.",
  },
  velocityStrength: {
    label: "Velocity strength",
    help: "How much a note's velocity changes how loud it sounds.",
  },
  sustainEnabled: {
    label: "Sustain pedal",
    help: "Notes keep sounding while the song or you hold the pedal down.",
  },
  enableReverb: {
    label: "Reverb",
    help: "Adds the echo of a room to the sound.",
  },
  reverbImpulseResponse: {
    label: "Reverb room",
    help: "The room the reverb sounds like. A bigger room echoes longer.",
    options: { room: "Room", hall: "Concert hall", church: "Church" },
  },
  detune: {
    label: "Detune (cents)",
    help: "Tunes every note a little higher or lower. 100 cents are one semitone.",
  },
  adsrAttack: {
    label: "Attack (s)",
    help: "How long a note takes to reach full volume.",
  },
  adsrDecay: {
    label: "Decay (s)",
    help: "How long a note takes to fall to its sustain level.",
  },
  adsrSustain: {
    label: "Sustain level (%)",
    help: "The volume a held note keeps.",
  },
  adsrReleaseKey: {
    label: "Release after the key (s)",
    help: "How long a note fades once its key is let go.",
  },
  adsrReleasePedal: {
    label: "Release after the pedal (s)",
    help: "How long a held note fades once the pedal is let go.",
  },
  enableMetronome: {
    label: "Metronome",
    help: "Clicks on every beat of the song.",
  },
  metronomeMidiOutput: {
    label: "Metronome output",
    help: "Where the metronome sounds.",
    options: { both: "Speakers and MIDI device", midi: "MIDI device", speakers: "Speakers" },
  },
  metronomeNoteNumber: {
    label: "Metronome note on the MIDI device",
    help: "The note the metronome sends to your MIDI device for each beat.",
  },
  metronomeInstrument: {
    label: "Metronome sound on the MIDI device",
    help: "With the drum kit, the note picks the drum.",
    options: { woodblock: "Wood block", drums: "Drum kit", piano: "Piano" },
  },
  metronomeVolume: {
    label: "Metronome volume",
    help: "How loud the metronome clicks.",
  },
  synchedMetronome: {
    label: "Keep the metronome in time with the song",
    help: "On, the metronome clicks on the song's beats and follows its tempo changes and speed. Off, it keeps a steady beat at the song's tempo where playback starts. Later tempo and speed changes leave that beat alone. It starts and stops with playback. It rests during a loop's count-in, and starts again on the loop's first beat.",
  },
  enableEqualizer: {
    label: "Equaliser",
    help: "Makes the low, middle and high sounds louder or quieter.",
  },
  equalizerGain0: {
    label: "Low, 60 Hz (dB)",
    help: "Raises or lowers the deepest sounds.",
  },
  equalizerGain1: {
    label: "Low mid, 250 Hz (dB)",
    help: "Raises or lowers the warm lower middle of the sound.",
  },
  equalizerGain2: {
    label: "Mid, 1 kHz (dB)",
    help: "Raises or lowers the middle of the sound.",
  },
  equalizerGain3: {
    label: "High mid, 4 kHz (dB)",
    help: "Raises or lowers the bright upper middle of the sound.",
  },
  equalizerGain4: {
    label: "High, 12 kHz (dB)",
    help: "Raises or lowers the highest sounds.",
  },
  scheduleAheadMs: {
    label: "Audio look-ahead (ms)",
    help: "How far ahead notes are queued. More is steadier, less reacts faster.",
  },
  scheduleIntervalMs: {
    label: "Audio scheduling interval (ms)",
    help: "How often the next notes are queued.",
  },
  // Backing track
  bgTrackFile: {
    label: "Choose an audio file",
    help: "A recording to play along with, such as a backing band. It is kept until the page reloads.",
  },
  bgTrackEnable: {
    label: "Play the background track",
    help: "The chosen recording plays together with the song.",
  },
  bgTrackVolume: {
    label: "Volume (%)",
    help: "How loud the background track sounds.",
  },
  bgTrackSpeed: {
    label: "Speed (%)",
    help: "How fast the track runs against the song, to match a recording at another tempo.",
  },
  bgTrackOffset: {
    label: "Offset (seconds)",
    help: "The second of the song the track's start sounds at. Below 0 skips the track's start.",
  },
  bgTrackLoop: {
    label: "Loop the background track",
    help: "The track starts again from its beginning when it ends.",
  },
  // View
  cameraPreset: {
    label: "Camera",
    help: "Drag the scene to look around, except in the flat view. Double-click it to go back to this camera. The flat view lines up with a keyboard right below the screen.",
    options: {
      classic: "Classic, from above",
      player: "From the piano stool",
      cinematic: "Cinematic, slowly moving",
      flat: "Flat, keys fill the screen width",
    },
  },
  resetCamera: {
    label: "Return to the camera",
    help: "Brings the camera back after you dragged the scene.",
  },
  glowMode: {
    label: "Glow",
    help: "Auto turns glow off on a device that saves power, or when the picture runs slowly.",
    options: { auto: "Auto", on: "On", off: "Off" },
  },
  glowStrength: {
    label: "Glow strength",
    help: "How brightly the notes and keys shine.",
  },
  zoomByMeasures: {
    label: "Zoom by bars",
    help: "The lanes show a number of bars instead of a number of seconds.",
  },
  noteToHeightConst: {
    label: "Seconds shown ahead",
    help: "How many seconds of coming notes the lanes show. Fewer seconds make the notes longer and faster.",
  },
  measuresShownOnScreen: {
    label: "Bars shown ahead",
    help: "How many bars of coming notes the lanes show when you zoom by bars.",
  },
  // Keyboard
  keyboardFirstNote: {
    label: "First key",
    help: "The lowest key of your keyboard, such as C2 or 36.",
  },
  keyboardLastNote: {
    label: "Last key",
    help: "The highest key of your keyboard, such as C7 or 96.",
  },
  foldOutsideNotes: {
    label: "Move notes outside your keys into range",
    help: "Notes your keyboard lacks move by octaves onto your keys, and you play them there.",
  },
  // Input
  playMode: {
    label: "Mode",
    help: "Free play sets the song aside so you can play and record. Pitch practice asks you notes to find.",
    options: { player: "Play a song", freePlay: "Free play and record", pitchPractice: "Pitch practice" },
  },
  pitchPracticeKey: {
    label: "Pitch practice key",
    help: "Pitch practice asks only the notes of this key.",
    options: {
      chromatic: "Every key, black and white",
      C: "C major",
      G: "G major",
      D: "D major",
      A: "A major",
      E: "E major",
      B: "B major",
      Gb: "G♭ major",
      Db: "D♭ major",
      Ab: "A♭ major",
      Eb: "E♭ major",
      Bb: "B♭ major",
      F: "F major",
    },
  },
  pitchPracticeFirstNote: {
    label: "Pitch practice lowest note",
    help: "The lowest note pitch practice asks, within your keyboard.",
  },
  pitchPracticeLastNote: {
    label: "Pitch practice highest note",
    help: "The highest note pitch practice asks, within your keyboard.",
  },
  pitchPracticeCount: {
    label: "Pitch practice notes per round",
    help: "How many notes pitch practice asks before it shows your result.",
  },
  saveMidiDevices: {
    label: "Remember the chosen MIDI devices",
    help: "The player connects to the same MIDI input and output the next time you open it.",
  },
  keyBindings: {
    label: "Computer keyboard keys",
    help: "The computer keys that play notes. Z to M play C3 to B3, and Q to I play C4 to C5.",
  },
  waitForNotes: {
    label: "Wait for your notes",
    help: "The song stops at each of your notes until you hold every key of it. In game mode, a note it waits long for scores as late.",
  },
  playHands: {
    label: "Your hands",
    help: "The hands your playing is scored on. With “Wait for your notes” on, the app plays the hand you leave out.",
    options: { both: "Both hands", right: "Right hand", left: "Left hand" },
  },
  playalongSilentNotes: {
    label: "Light the keys to play on your MIDI keyboard",
    help: "Sends each next note very quietly to the MIDI output, so a keyboard with key lights shows it.",
  },
  playalongSilentNotesChannel: {
    label: "Key light MIDI channel",
    help: "The MIDI channel your keyboard listens on for its key lights.",
  },
  enableScoreMode: {
    label: "Score each note",
    help: "Judges each note you play against the song, and keeps your accuracy per song.",
  },
  scoreHitWindow: {
    label: "Hit window (ms)",
    help: "A note played this close to its time, early or late, is a hit.",
  },
  scorePerfectWindow: {
    label: "Perfect window (ms)",
    help: "A hit this close to its time is perfect.",
  },
  enableGameMode: {
    label: "Game mode",
    help: "Earns points for accurate hits and held notes, fines each slip, and multiplies a combo of hits in a row.",
  },
  gameDifficulty: {
    label: "Game difficulty",
    help: "How tight the timing is, and how much a note earns and a slip costs.",
    options: { easy: "Easy: a few hours of playing", normal: "Normal: some months", hard: "Hard: about a year" },
  },
  // Piano
  clickablePiano: {
    label: "Play the piano by clicking or touching it",
    help: "The keys on the screen sound when you click or tap them.",
  },
  highlightActivePianoKeys: {
    label: "Colour pressed keys",
    help: "Colours the keys you hold in the colours below.",
  },
  inputNoteColorWhite: {
    label: "Your white keys' colour",
    help: "The colour of a white key you hold.",
  },
  inputNoteColorBlack: {
    label: "Your black keys' colour",
    help: "The colour of a black key you hold.",
  },
  pianoWhiteKeyColor: {
    label: "White key colour",
    help: "The colour of the piano's white keys.",
  },
  pianoBlackKeyColor: {
    label: "Black key colour",
    help: "The colour of the piano's black keys.",
  },
  pianoVelvetColor: {
    label: "Felt colour",
    help: "The felt strip behind the keys.",
  },
  pianoBackgroundColor: {
    label: "Background colour",
    help: "The colour behind the piano and the lanes.",
  },
  pianoPosition: {
    label: "Piano height on screen (%)",
    help: "Moves the piano up or down on the screen.",
  },
  whiteKeyHeight: {
    label: "White key length (%)",
    help: "How long the white keys are drawn.",
  },
  enableKeyFlare: {
    label: "Flare on pressed keys",
    help: "A bright light glows over each key that sounds.",
  },
  pianoLineEnabled: {
    label: "Wave line above the keys",
    help: "A line that ripples over each key that sounds.",
  },
  pianoLineSpeed: {
    label: "Wave speed",
    help: "How fast the waves of the line move.",
  },
  pianoLineResolution: {
    label: "Waves per octave",
    help: "How many waves fit across one octave. More waves look finer.",
  },
  pianoLineAmplitude: {
    label: "Wave height",
    help: "In key widths, over a key that sounds at full strength.",
  },
  pianoLineColor: {
    label: "Wave line colour",
    help: "The colour of the wave line.",
  },
  pianoLineOpacity: {
    label: "Wave line opacity",
    help: "How strongly the wave line shows. Lower is fainter.",
  },
  pianoLineYOffset: {
    label: "Wave line height",
    help: "In key widths above the keys.",
  },
} satisfies Partial<SettingsTexts>;
