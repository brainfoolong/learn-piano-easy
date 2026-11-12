# The settings

Every setting a complete piano-learning app offers, by the menu section it sits in.
[features.md](features.md) says what the app does with them. Our own catalog is `src/settings/schema.ts`, and it covers every row.
A default shown as "a colour" is an RGBA value.

## General

| Id | Label | Default | Options |
|---|---|---|---|
| `volumePP` | Volume | 100 |  |
| `volumeMain` | Volume | xr().volume |  |
| `volumeMainSW` | Volume | xr().volume |  |
| `keyOverride` | Key override | l |  |
| `enableScoreMode` | Enable Score Mode | false |  |
| `renderOffset` | Render offset (ms) | 0 |  |
| `disableHotkeys` | Disable hotkeys | false |  |
| `startWithLastSong` | Remember song on reload | true |  |
| `saveMidiDevices` | Remember selected MIDI devices | true |  |
| `fitZoomOnNewSong` | Auto fit zoom for new songs | false |  |
| `saveIndexedDb` | Save uploaded songs in browser | true |  |
| `playNotesOnScrollEnabled` | Play notes while scrolling/dragging | false |  |
| `restartSongOnEnd` | Restart song on end | false |  |
| `reverseNoteDirection` | Reverse note direction | false |  |
| `showBPM` | Show BPM | false |  |
| `showFps` | Show FPS | false |  |
| `showMiliseconds` | Show Miliseconds | false |  |
| `progressBarMeasures` | Timeline in measures | false |  |
| `progressBarMeasureLines` | Show measure lines on timeline | false |  |
| `showNoteDebugInfo` | Enable note debug info on hover over note | false |  |
| `showMarkersSong` | Show markers in the song | false |  |
| `showMarkersTimeline` | Show markers on timeline | false |  |
| `inputNoteColorWhite` | Your white note color | a colour |  |
| `inputNoteColorBlack` | Your black note color | a colour |  |
| `highlightInputLanes` | Highlight input key lanes | false |  |
| `inputLaneOpacity` | Lane highlight opacity | .15 |  |
| `inputInstrument` | Your Instrument | "acoustic_grand_piano" |  |
| `scrollSensitivity` | Scroll sensitivity | 1 |  |
| `transposeOffset` | Transpose (+/- semitone) | 0 |  |

## Note Labels

| Id | Label | Default | Options |
|---|---|---|---|
| `pitchNotationSystem` | Pitch notation system | "Letter notation" |  |
| `noteLabel` | Note Labels | "None" | None, Note name, Key Binding, Fingering |
| `noteLabelColor` | Note label color | a colour |  |
| `showKeyNamesOnPianoWhite` | Show white key names on piano | false |  |
| `octaveLabel` | Octave label | "None" | None, All, Only C |
| `showKeyNamesOnPianoBlack` | Show black key names on piano | false |  |
| `showPianoKeyNameFlats` | Black key names as flats | false |  |
| `showKeyBindingsOnPiano` | Show key bindings on piano | false |  |

## Color Coding by Note

| Id | Label | Default | Options |
|---|---|---|---|
| `enableColorCodingNote` | Enable color coding by note | false |  |
| `enableColorCodingNotePiano` | Color piano keys | false |  |
| `colorCodeNote0` | C | a colour |  |
| `colorCodeNote1` | C# | a colour |  |
| `colorCodeNote2` | D | a colour |  |
| `colorCodeNote3` | D# | a colour |  |
| `colorCodeNote4` | E | a colour |  |
| `colorCodeNote5` | F | a colour |  |
| `colorCodeNote6` | F# | a colour |  |
| `colorCodeNote7` | G | a colour |  |
| `colorCodeNote8` | G# | a colour |  |
| `colorCodeNote9` | A | a colour |  |
| `colorCodeNote10` | A# | a colour |  |
| `colorCodeNote11` | B | a colour |  |

## Color Coding by Finger

| Id | Label | Default | Options |
|---|---|---|---|
| `enableColorCodingFinger` | Enable color coding by finger | false |  |
| `enableColorCodingFingerPiano` | Color piano keys | false |  |
| `colorCodeFinger1Right` | 1 | a colour |  |
| `colorCodeFinger2Right` | C# | a colour |  |
| `colorCodeFinger3Right` | D | a colour |  |
| `colorCodeFinger4Right` | D# | a colour |  |
| `colorCodeFinger5Right` | E | a colour |  |
| `colorCodeFingerDefaultRight` | Default | a colour |  |
| `colorCodeFinger1Left` | 1 | a colour |  |
| `colorCodeFinger2Left` | C# | a colour |  |
| `colorCodeFinger3Left` | D | a colour |  |
| `colorCodeFinger4Left` | D# | a colour |  |
| `colorCodeFinger5Left` | E | a colour |  |
| `colorCodeFingerDefaultLeft` | Default | a colour |  |
| `enableAutoFingering` | Generate fingerings on load | false |  |
| `fingeringButtons` | Button Group | null |  |
| `lyricsEnabled` | Enable lyrics | false |  |
| `lyricsBackground` | Background color | a colour |  |
| `lyricsFontColor` | Font color | a colour |  |
| `lyricsFontColorPlayed` | Passed font color | a colour |  |
| `lyricsFontColorActive` | Font color active | a colour |  |
| `lyricsFontSize` | Font size | 40 |  |
| `lyricsY` | Y-Position | 30 |  |
| `lyricsCursorEnabled` | Enable cursor | true |  |
| `lyricsBouncingCursor` | Bouncing cursor | true |  |
| `enableLoop` | Enable looping | false |  |
| `autoLoop` | Auto reset to loop start | true |  |
| `loopDelay` | Loop delay (beats) | 4 |  |
| `enableLoopBeats` | Play beats before loop | true |  |
| `loopStart` | Loop start (Measure #) | 0 |  |
| `loopEnd` | Loop end (Measure #) | 2 |  |
| `muteLoop` | Mute notes outside of loop | true |  |
| `forceDelay` | Force pause between notes (ms) | 0 |  |
| `minNoteDuration` | Minimum note duration of forced pauses (ms) | 0 |  |
| `restrictInputRange` | Restrict input to range for playalong | false |  |
| `minInputNote` | Minimum input key | 0 |  |
| `maxInputNote` | Maximum input key | 88 |  |
| `playalongSilentNotes` | Highlight keyboard keys to be played | false |  |
| `playalongSilentNotesChannel` | Highlight keys MIDI Channel | 3 | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 |

## Sheet Music

| Id | Label | Default | Options |
|---|---|---|---|
| `enableSheet` | Show Sheet Music | false |  |
| `enableFullSheet` | Show Only Sheet | false |  |
| `sheetMeasureScroll` | Scrolling sheet | true |  |
| `sheetAutoClef` | Auto detect clef | false |  |
| `sheetFormatToStave` | Format staves | true |  |
| `sheetMeasureNumbers` | Measure numbers | "Off" | Off, Row start, Every measure |
| `overrideTimeSignature` | Override time signature | "Auto" |  |
| `sheetMinNoteDenom` | Minimum note denomination | "32nd" |  |
| `hideRestsBelow` | Hide rests below denomination | "16th" |  |
| `enableGrandStaff` | Grand Staff | true |  |
| `sheetRenderInputNotes` | Draw input notes | true |  |
| `sheetShowHoverInfo` | Show info on mouse over | true |  |
| `renderSheetCursor` | Draw Cursor | false |  |
| `sheetColorActiveNotes` | Color active notes | true |  |
| `sheetHighlightActiveNotes` | Highlight active notes | false |  |
| `sheetColorByTrack` | Use track color | true |  |
| `sheetActiveGrowEffect` | Grow effect | false |  |
| `sheetActiveNotesColor` | Active note color | a colour |  |
| `sheetActiveHighlightColor` | Highlight note color | a colour |  |
| `sheetBgColor` | Background color | a colour |  |

## On Screen Piano

| Id | Label | Default | Options |
|---|---|---|---|
| `clickablePiano` | Clickable piano | true |  |
| `highlightActivePianoKeys` | Color active piano keys | true |  |
| `drawPianoKeyHitEffect` | Hit keys effect | true |  |
| `highlightIncomingPianoKeys` | Highlight incoming piano keys | false |  |
| `incomingPianoKeysStyle` | Incoming keys style | "Dot" | Key, Dot, Both |
| `incomingPianoKeysMode` | Incoming keys mode | "Next notes" | Time window, Next notes |
| `incomingPianoKeysLookAhead` | Incoming keys look-ahead (s) | 1 |  |
| `incomingPianoKeysFadeIn` | Fade in incoming keys | true |  |
| `incomingPianoKeysOpacity` | Incoming keys opacity | .5 |  |
| `pianoEnableLighter` | Enable 'lighter' draw | false |  |
| `pianoWhiteKeyColor` | White key color | a colour |  |
| `pianoBlackKeyColor` | Black key color | a colour |  |
| `pianoBackgroundColor` | Background color | a colour |  |
| `pianoVelvetColor` | Velvet color | a colour |  |
| `pianoShadowColor` | Shadow color | a colour |  |
| `pianoShadowBlur` | Shadow blur | 0 |  |
| `pianoPosition` | Piano Position | 0 |  |
| `whiteKeyHeight` | Height (%) - White keys | 100 |  |
| `blackKeyHeight` | Height (%) - Black keys | 100 |  |
| `enableKeyFlare` | Enable flare on keys | false |  |
| `keyFlareOnlyPiano` | Flare only on keys | false |  |
| `keyFlareSize` | Flare size | 1 |  |
| `keyFlareOpacity` | Flare opacity | 1 |  |
| `keyFlareColor` | Flare color | a colour |  |
| `keyFlareOffset` | Flare offset | 0 |  |

## PDF Export

| Id | Label | Default | Options |
|---|---|---|---|
| `exportPdfBackground` | Use background colors | false |  |
| `pdfExportButtonGroup` | Button Group | null |  |
| `noteToHeightConst` | Seconds shown on screen | 3 |  |
| `zoomByMeasures` | Show by measures | false |  |
| `measuresShownOnScreen` | Measures shown on screen | 4 |  |
| `showChords` | Show chords | false |  |
| `chordLabelStyle` | Chord label style | "Bar" | Ribbon, Bar |
| `chordLabelPlacement` | Chord label placement | "Middle" | Above, Top, Middle, Bottom, Below |
| `showChordRomanNumerals` | Show Roman numerals | false |  |
| `chordBlocks` | Note blocks | "Chord tone" | None, Chord tone, Scale degree |
| `chordToneNotation` | Note block notation | "Simple" | Simple, Full |
| `chordMarkRoot` | Highlight root | false |  |

## Measure & Beat Lines

| Id | Label | Default | Options |
|---|---|---|---|
| `drawMeasureLines` | Draw measure lines | true |  |
| `measureLineThickness` | Measure line thickness | .5 |  |
| `measureLineColor` | Measure line color | a colour |  |
| `enableDrawMeasureNumbers` | Draw measure numbers | true |  |
| `measureNumbersColor` | Measure numbers color | a colour |  |
| `enableDrawBeatLines` | Draw beat lines | true |  |
| `beatLineThickness` | Beat line thickness | .4 |  |
| `beatLineColor` | Beat line color | a colour |  |

## Note Appearance

| Id | Label | Default | Options |
|---|---|---|---|
| `showHitKeys` | Active Notes effect | true |  |
| `noteEnableLighterDraw` | Enable 'lighter' draw | false |  |
| `noteShadowColor` | Shadow color | a colour |  |
| `noteShadowBlur` | Shadow blur | 0 |  |
| `strokeActiveNotes` | Stroke active notes | true |  |
| `strokeActiveNotesColor` | Stroke color | a colour |  |
| `strokeActiveNotesWidth` | Stroke width | 2 |  |
| `strokeNotes` | Stroke notes | false |  |
| `strokeNotesColor` | Stroke color | a colour |  |
| `strokeNotesWidth` | Stroke width | 1 |  |
| `roundedNotes` | Rounded notes | true |  |
| `noteBorderRadius` | Note border radius (%) | 15 |  |
| `noteWidth` | Note width (% of key) | 100 |  |
| `minNoteHeight` | Minimum Note height (px) | 10 |  |
| `noteEndedShrink` | Played Notes shrink speed | 1 |  |
| `playedNoteFalloffSpeed` | Played Note Speed | 1 |  |
| `showSustainOnOffs` | Draw Sustain On/Off Events | false |  |
| `showSustainChannels` | Show sustain channels | false |  |
| `showSustainPeriods` | Draw Sustain Periods | false |  |
| `showSustainedNotes` | Draw Sustained Notes | false |  |
| `sustainedNotesOpacity` | Sustained Notes Opacity (%) | 50 |  |
| `showParticles` | Enable particles | false |  |
| `particlesTexture` | Texture | i.PARTICLE_TEXTURES[0] |  |
| `particlesBlending` | Blending | String(i.BLENDING.Normal) |  |
| `particleOverrideColor` | Enable custom color | false |  |
| `particleColor` | Custom color | a colour |  |
| `particlesOpacity` | Opacity | 1 |  |
| `particleSize` | Size | 4 |  |
| `particleAmount` | Amount (per frame) | 1 |  |
| `particleLife` | Duration | 150 |  |
| `particleSpeed` | Physics speed | 1 |  |
| `particleFadeOut` | Fade out | 1 |  |
| `particlesShrink` | Shrink | 1 |  |
| `particleSpeedX` | Initial X Speed | 2 |  |
| `particleSpeedY` | Initial Y Speed | 10 |  |
| `particlesFriction` | Friction | .05 |  |
| `particleRising` | Gravity | -1 |  |
| `particlesRotation` | Starting rotation | 360 |  |
| `particlesRotationRandom` | Starting rotation randomness | 180 |  |
| `particlesRotationSpeed` | Rotation speed | 0 |  |
| `particleNoiseResX` | Noise resolution X | .001 |  |
| `particleNoiseStrengthX` | Noise strength X | 1 |  |
| `particleNoiseResY` | Noise resolution Y | .001 |  |
| `particleNoiseStrengthY` | Noise strength Y | 1 |  |
| `particleNoiseStrengthSize` | Noise strength size | .5 |  |
| `turbulenceXAmplitude` | Turbulence X Amplitude | 6 |  |
| `turbulenceXFrequency` | Turbulence X Frequency | .5 |  |
| `turbulenceYAmplitude` | Turbulence Y Amplitude | 6 |  |
| `turbulenceYFrequency` | Turbulence Y Frequency | .5 |  |
| `particleYOffset` | Y Offset | 0 |  |
| `particleDistributionX` | X-Distribution | i.DISTRIBUTIONS.X.ACROSS |  |
| `particleDistributionXSpread` | X-Spread (%) | 100 |  |
| `particleDistributionY` | Y-Distribution | i.DISTRIBUTIONS.Y.KEYS_TOP |  |
| `particleDistributionZ` | Layer | i.DISTRIBUTIONS.Z.BEHIND_PIANO |  |

## Piano Line

| Id | Label | Default | Options |
|---|---|---|---|
| `pianoLineEnabled` | Enable piano line | false |  |
| `pianoLineSpeed` | Speed | 6 |  |
| `pianoLineResolution` | Resolution | 5 |  |
| `pianoLineAmplitude` | Amplitude | 3 |  |
| `pianoLineColor` | Color | a colour |  |
| `pianoLineOpacity` | Opacity | 1 |  |
| `pianoLineYOffset` | Y-Offset | 0 |  |
| `extendBgPastPiano` | Extend background past piano | false |  |
| `bgCol1` | Background fill color 1 | a colour |  |
| `bgCol2` | Background fill color 2 | a colour |  |
| `bgCol3` | Background stroke color 1 | a colour |  |
| `bgCol4` | Background stroke color 2 | a colour |  |
| `bgCol5` | Background black key color | a colour |  |
| `masterGain` | Volume multiplier | 1 |  |
| `inputGain` | Input Volume multiplier | 1 |  |
| `velocityStrength` | Velocity strength | 1 |  |
| `soundfontName` | Soundfont | "MusyngKite" | MusyngKite, FluidR3_GM, FatBoy |
| `useHQPianoSoundfont` | Use HQ Piano Soundfont (~13MB) | false |  |
| `sustainEnabled` | Enable Sustain | true |  |
| `enableReverb` | Enable convolver (reverb) | true |  |
| `reverbImpulseResponse` | Impulse Response | i.REVERBS[0] |  |
| `detune` | Detune (per cent) | 0 |  |
| `enableMetronome` | Enable Metronome | false |  |
| `metronomeMidiOutput` | Metronome output | "Both" | Both, MIDI, PC |
| `metronomeNoteNumber` | Metronome Note | 76 |  |
| `metronomeInstrument` | Metronome Instrument (Only for MIDI output) | "woodblock" |  |
| `metronomeVolume` | Metronome Volume | .1 |  |
| `synchedMetronome` | Synch Metronome to Song | true |  |

## Background Track

| Id | Label | Default | Options |
|---|---|---|---|
| `bgTrackEnable` | Enable background track | false |  |
| `bgTrackVolume` | Volume | 50 |  |
| `bgTrackSpeed` | Playback speed | 100 |  |
| `bgTrackOffset` | Offset (seconds) | 0 |  |
| `bgTrackLoop` | Loop background track | false |  |
| `enableEqualizer` | Enable Equalizer | false |  |
| `equalizerGain0` | Low Band - 60Hz (db) | 0 |  |
| `equalizerGain1` | Low-Mid Band - 250Hz (db) | 0 |  |
| `equalizerGain2` | Mid Band - 1kHz (db) | 0 |  |
| `equalizerGain3` | High-Mid Band - 4kHz (db) | 0 |  |
| `equalizerGain4` | High Band - 12kHz (db) | 0 |  |

## ADSR Envelope

| Id | Label | Default | Options |
|---|---|---|---|
| `adsrAttack` | Attack (Seconds) | 0 |  |
| `adsrDecay` | Decay (Seconds) | 0 |  |
| `adsrSustain` | Sustain (%) | 100 |  |
| `adsrReleaseKey` | Release - Key (Seconds) | .35 |  |
| `adsrReleasePedal` | Release - Pedal (Seconds) | .35 |  |
| `autoCacheMain` | Auto Cache | false |  |
| `autoCacheSongs` | Auto Cache | false |  |
| `autoCacheHqPiano` | Auto Cache | false |  |
| `autoCacheFluidR3` | Auto Cache | false |  |
| `autoCacheFatBoy` | Auto Cache | false |  |
| `autoCacheMusyngKite` | Auto Cache | false |  |
| `playMode` | Play Mode | "player" | player, pitchPractice |
| `lastSong` | Last Song | "" |  |
| `particlePresetName` | Preset Name | "Default" |  |
| `particleTypeName` | Type Name | "Default" |  |
| `keyBindings` | Key Bindings | {0:[36] |  |
| `hotKeyBindings` | Hot Key Bindings | null |  |
