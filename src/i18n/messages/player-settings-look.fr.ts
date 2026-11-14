/** The player's settings from the notes to the offline files, in French. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: Translation<typeof en> = {
  // Notes
  showHitKeys: {
    label: "Éclairer les notes qui sonnent",
    help: "Une note brille de sa propre couleur pendant qu’elle sonne.",
  },
  noteWidth: {
    label: "Largeur des notes (% de la touche)",
    help: "La largeur de chaque note qui tombe, par rapport à sa touche.",
  },
  roundedNotes: {
    label: "Notes arrondies",
    help: "Arrondit les coins des notes qui tombent.",
  },
  noteBorderRadius: {
    label: "Arrondi des coins (%)",
    help: "À quel point les coins d’une note sont arrondis.",
  },
  minNoteHeight: {
    label: "Longueur minimale d’une note",
    help: "En largeurs de touche, pour qu’une note très courte reste visible.",
  },
  strokeNotes: {
    label: "Contour lumineux",
    help: "Un liseré de lumière dans la couleur de chaque note.",
  },
  strokeNotesWidth: {
    label: "Intensité du contour lumineux",
    help: "La luminosité du liseré autour de chaque note.",
  },
  noteEndedShrink: {
    label: "Les notes jouées rentrent dans leur touche",
    help: "Une note s’enfonce dans sa touche pendant qu’elle sonne. Quand c’est désactivé, elle continue au-delà des touches.",
  },
  playedNoteFalloffSpeed: {
    label: "Distance des notes jouées au-delà des touches",
    help: "En largeurs de touche, quand les notes jouées ne rentrent pas dans leur touche.",
  },
  showSustainedNotes: {
    label: "Montrer combien de temps la pédale tient une note",
    help: "Une fine traîne prolonge chaque note que la pédale tient.",
  },
  sustainedNotesOpacity: {
    label: "Luminosité des traînes de pédale (%)",
    help: "À quel point les traînes de pédale ressortent derrière les notes.",
  },

  // Lanes
  bgCol1: {
    label: "Couleur des couloirs",
    help: "La couleur des couloirs au-dessus des touches blanches.",
  },
  bgCol5: {
    label: "Couleur des couloirs des touches noires",
    help: "La couleur des couloirs au-dessus des touches noires.",
  },
  bgCol3: {
    label: "Couleur de la séparation des octaves",
    help: "La couleur de la ligne entre chaque si et le do suivant.",
  },
  drawMeasureLines: {
    label: "Barres de mesure",
    help: "Une ligne en travers des couloirs au début de chaque mesure.",
  },
  measureLineThickness: {
    label: "Épaisseur des barres de mesure",
    help: "L’épaisseur de la ligne à chaque mesure.",
  },
  measureLineColor: {
    label: "Couleur des barres de mesure",
    help: "La couleur de la ligne à chaque mesure.",
  },
  enableDrawBeatLines: {
    label: "Lignes de temps",
    help: "Une ligne plus discrète en travers des couloirs à chaque temps.",
  },
  beatLineThickness: {
    label: "Épaisseur des lignes de temps",
    help: "L’épaisseur de la ligne à chaque temps.",
  },
  beatLineColor: {
    label: "Couleur des lignes de temps",
    help: "La couleur de la ligne à chaque temps.",
  },
  enableDrawMeasureNumbers: {
    label: "Numéros de mesure",
    help: "Le numéro de chaque mesure, à côté de sa ligne.",
  },
  measureNumbersColor: {
    label: "Couleur des numéros de mesure",
    help: "La couleur des numéros de mesure.",
  },
  highlightInputLanes: {
    label: "Éclairer les couloirs des touches tenues",
    help: "Le couloir au-dessus d’une touche s’éclaire tant que tu tiens cette touche.",
  },
  inputLaneOpacity: {
    label: "Intensité de l’éclairage des couloirs",
    help: "La luminosité d’un couloir tant que tu tiens sa touche.",
  },
  showMarkersSong: {
    label: "Repères",
    help: "Une ligne et son texte là où le morceau nomme une partie, comme un couplet.",
  },
  showSustainPeriods: {
    label: "Durées de pédale",
    help: "Une bande en travers des couloirs tant que le morceau tient la pédale forte.",
  },
  showSustainOnOffs: {
    label: "Pédale enfoncée et relevée",
    help: "Une ligne marquée « Ped. » là où la pédale s’enfonce, et « ✱ » là où elle se relève.",
  },
  showSustainChannels: {
    label: "Canaux de pédale",
    help: "Indique le canal MIDI de chaque durée de pédale.",
  },

  // Particles
  showParticles: {
    label: "Particules",
    help: "Des effets s’élèvent de chaque touche qui sonne. Ils sollicitent la carte graphique, donc ils sont désactivés au départ.",
  },
  particlesFlames: {
    label: "Flammes",
    help: "Chaque touche brûle avec sa note, dans la couleur de la note. C’est l’effet qui sollicite le plus la carte graphique.",
  },
  particlesSparks: {
    label: "Étincelles",
    help: "De petites étincelles vives jaillissent de chaque touche.",
  },
  particlesEmbers: {
    label: "Braises",
    help: "Des braises rougeoyantes montent lentement de chaque touche.",
  },
  particlesStars: {
    label: "Étoiles",
    help: "De petites étoiles et des points qui tournent montent de chaque touche, puis retombent.",
  },
  particlesCustom: {
    label: "Tes propres particules",
    help: "Des particules faites à partir des paramètres ci-dessous.",
  },
  particlesTexture: {
    label: "Forme",
    help: "L’image que montre chacune de tes propres particules.",
    options: { circle: "Lueur", spark: "Étincelle", smoke: "Fumée", star: "Étoile", ring: "Anneau" },
  },
  particlesBlending: {
    label: "Fusion",
    help: "Ajouter la lumière éclaire ce qui est derrière, comme le feu. Recouvrir le cache, comme la fumée.",
    options: { additive: "Ajouter la lumière", normal: "Recouvrir" },
  },
  particleOverrideColor: {
    label: "Couleur propre",
    help: "Quand c’est désactivé, chaque particule prend la couleur de sa touche.",
  },
  particleColor: {
    label: "Couleur",
    help: "La couleur de tes particules, quand elles ont leur propre couleur.",
  },
  particlesOpacity: {
    label: "Opacité",
    help: "À quel point chaque particule paraît pleine. Une valeur plus basse laisse plus voir au travers.",
  },
  particleSize: {
    label: "Taille",
    help: "En largeurs de touche.",
  },
  particleAmount: {
    label: "Quantité",
    help: "Particules par touche et par image, à 60 images par seconde.",
  },
  particleLife: {
    label: "Durée de vie (s)",
    help: "Combien de temps dure chaque particule avant de disparaître.",
  },
  particleSpeed: {
    label: "Vitesse du mouvement",
    help: "Accélère ou ralentit chaque mouvement des particules.",
  },
  particleFadeOut: {
    label: "Fondu",
    help: "La part de sa vie pendant laquelle une particule s’efface, à la fin.",
  },
  particlesShrink: {
    label: "Rétrécissement",
    help: "La part de sa taille qu’une particule perd. En dessous de 0, elle grandit.",
  },
  particleSpeedX: {
    label: "Vitesse latérale",
    help: "La vitesse latérale maximale, en largeurs de touche par seconde.",
  },
  particleSpeedY: {
    label: "Vitesse de montée",
    help: "La vitesse de montée maximale, en largeurs de touche par seconde.",
  },
  particlesFriction: {
    label: "Freinage",
    help: "À quelle vitesse les particules ralentissent en vol.",
  },
  particleRising: {
    label: "Gravité",
    help: "Au-dessus de 0, les particules retombent. En dessous de 0, elles montent plus vite.",
  },
  particlesRotation: {
    label: "Angle de départ (°)",
    help: "De combien chaque particule est tournée au départ.",
  },
  particlesRotationRandom: {
    label: "Angle aléatoire (°)",
    help: "Chaque particule part tournée d’un angle aléatoire, jusqu’à cet angle.",
  },
  particlesRotationSpeed: {
    label: "Rotation (° par seconde)",
    help: "À quelle vitesse chaque particule tourne en vol.",
  },
  particleNoiseResX: {
    label: "Détail de la dérive latérale",
    help: "Plus la valeur est haute, plus les particules de touches voisines dérivent différemment sur les côtés.",
  },
  particleNoiseStrengthX: {
    label: "Dérive latérale",
    help: "Jusqu’où les particules dérivent au hasard sur les côtés.",
  },
  particleNoiseResY: {
    label: "Détail de la dérive en montée",
    help: "Plus la valeur est haute, plus la dérive en montée des touches voisines diffère.",
  },
  particleNoiseStrengthY: {
    label: "Dérive en montée",
    help: "Jusqu’où les particules dérivent au hasard vers le haut et le bas en montant.",
  },
  particleNoiseStrengthSize: {
    label: "Dérive de taille",
    help: "À quel point chaque particule grandit et rétrécit au hasard.",
  },
  turbulenceXAmplitude: {
    label: "Balancement latéral",
    help: "Jusqu’où les particules se balancent d’un côté à l’autre.",
  },
  turbulenceXFrequency: {
    label: "Rythme du balancement latéral",
    help: "Balancements par seconde.",
  },
  turbulenceYAmplitude: {
    label: "Balancement en montée",
    help: "Jusqu’où les particules se balancent de haut en bas en montant.",
  },
  turbulenceYFrequency: {
    label: "Rythme du balancement en montée",
    help: "Balancements par seconde.",
  },
  particleYOffset: {
    label: "Hauteur de départ",
    help: "En largeurs de touche au-dessus de la touche.",
  },
  particleDistributionX: {
    label: "Départ sur la largeur de la touche",
    help: "Où chaque particule part, sur la largeur de sa touche.",
    options: { across: "N’importe où sur la largeur", centre: "Au centre" },
  },
  particleDistributionXSpread: {
    label: "Étendue du départ (%)",
    help: "La part de la largeur de la touche sur laquelle les particules partent.",
  },
  particleDistributionY: {
    label: "Départ sur la longueur de la touche",
    help: "Où chaque particule part, sur la longueur de sa touche.",
    options: { hitLine: "Sur la ligne de frappe", key: "N’importe où sur le dessus" },
  },
  particleDistributionZ: {
    label: "Plan",
    help: "Si les touches cachent les particules, ou si les particules recouvrent le piano.",
    options: { behind: "Cachées par les touches", front: "Devant le piano" },
  },

  // Labels
  pitchNotationSystem: {
    label: "Noms des notes",
    help: "Comment s’écrivent les noms sur les notes et les touches. Do correspond toujours à C.",
    options: { auto: "Comme dans ma langue", letters: "Lettres : C D E", solfege: "Solfège : Do Ré Mi" },
  },
  noteLabel: {
    label: "Étiquettes des notes",
    help: "Les textes sur chaque note : choisis-en autant que tu veux, ou aucun. Appuie sur une note, puis sur une touche de 1 à 5 pour lui donner son doigt.",
    options: { name: "Nom de la note", keyBinding: "Touche de l’ordinateur", fingering: "Doigt" },
  },
  noteLabelColor: {
    label: "Couleur des étiquettes des notes",
    help: "La couleur du texte sur chaque note.",
  },
  showKeyNamesOnPianoWhite: {
    label: "Noms sur les touches blanches",
    help: "Chaque touche blanche affiche le nom de sa note.",
  },
  showKeyNamesOnPianoBlack: {
    label: "Noms sur les touches noires",
    help: "Chaque touche noire affiche le nom de sa note.",
  },
  showPianoKeyNameFlats: {
    label: "Touches noires nommées en bémols",
    help: "Ré♭ au lieu de do♯, sur les touches seulement. Les notes suivent la tonalité du morceau.",
  },
  octaveLabel: {
    label: "Octave dans les noms des touches",
    help: "Ajoute le numéro d’octave aux noms sur les touches, comme Do4.",
    options: { none: "Aucune", all: "Sur chaque touche", onlyC: "Sur les do seulement" },
  },
  showKeyBindingsOnPiano: {
    label: "Touches de l’ordinateur sur le piano",
    help: "Chaque touche affiche la touche de l’ordinateur qui la joue.",
  },
  showChords: {
    label: "Noms des accords",
    help: "Nomme chaque accord que forment les notes, y compris celles que la pédale tient.",
  },
  chordLabelStyle: {
    label: "Style des noms d’accord",
    help: "Comment chaque nom d’accord est dessiné.",
    options: { bar: "Barre au-dessus des touches de l’accord", ribbon: "Bande en travers des couloirs" },
  },
  chordLabelPlacement: {
    label: "Position des noms d’accord",
    help: "Le haut est l’extrémité de l’accord la plus éloignée du piano.",
    options: {
      above: "Au-dessus de l’accord",
      top: "En haut",
      middle: "Au milieu",
      bottom: "En bas",
      below: "Sous l’accord",
    },
  },
  showChordRomanNumerals: {
    label: "Chiffres romains",
    help: "Le degré de chaque accord dans la tonalité du morceau, comme V7.",
  },
  chordBlocks: {
    label: "Blocs de notes",
    help: "Un bloc au-dessus de chaque note d’un accord nommé indique le rôle de la note.",
    options: { none: "Aucun", tone: "Note de l’accord", degree: "Degré de la gamme" },
  },
  chordToneNotation: {
    label: "Écriture des blocs de notes",
    help: "Si les blocs de notes affichent des signes courts ou des mots entiers.",
    options: { simple: "Simple : R ♭3 5", full: "Complète : fondamentale ♭3e 5e" },
  },
  chordMarkRoot: {
    label: "Marquer la fondamentale",
    help: "La fondamentale de chaque accord porte un bloc doré.",
  },

  // Lyrics
  lyricsEnabled: {
    label: "Paroles",
    help: "Affiche les paroles d’un morceau, quand il en a, une ligne à la fois.",
  },
  lyricsBackground: {
    label: "Couleur du fond",
    help: "La couleur de la bande derrière les paroles.",
  },
  lyricsFontColor: {
    label: "Couleur du texte",
    help: "La couleur des mots encore à venir.",
  },
  lyricsFontColorPlayed: {
    label: "Couleur du texte chanté",
    help: "La couleur des mots déjà chantés.",
  },
  lyricsFontColorActive: {
    label: "Couleur de la syllabe en cours",
    help: "La syllabe chantée en ce moment ressort dans cette couleur.",
  },
  lyricsFontSize: {
    label: "Taille du texte (px)",
    help: "La taille d’écriture des paroles.",
  },
  lyricsY: {
    label: "Hauteur (% depuis le haut)",
    help: "Où se trouve le milieu de la ligne de paroles dans la scène. 0 est le bord du haut.",
  },
  lyricsCursorEnabled: {
    label: "Curseur",
    help: "Un point au-dessus de la syllabe chantée en ce moment.",
  },
  lyricsBouncingCursor: {
    label: "Curseur rebondissant",
    help: "Le point saute de chaque syllabe à la suivante.",
  },

  // Coding
  enableColorCodingNote: {
    label: "Colorer les notes par hauteur",
    help: "Chacune des 12 hauteurs prend sa propre couleur.",
  },
  enableColorCodingNotePiano: {
    label: "Colorer les touches par hauteur",
    help: "Chaque touche s’éclaire dans la couleur de sa hauteur pendant qu’elle sonne.",
  },
  colorCodeNote0: { label: "Do", help: "La couleur de chaque do." },
  colorCodeNote1: { label: "Do♯ ou ré♭", help: "La couleur de chaque do♯ ou ré♭." },
  colorCodeNote2: { label: "Ré", help: "La couleur de chaque ré." },
  colorCodeNote3: { label: "Ré♯ ou mi♭", help: "La couleur de chaque ré♯ ou mi♭." },
  colorCodeNote4: { label: "Mi", help: "La couleur de chaque mi." },
  colorCodeNote5: { label: "Fa", help: "La couleur de chaque fa." },
  colorCodeNote6: { label: "Fa♯ ou sol♭", help: "La couleur de chaque fa♯ ou sol♭." },
  colorCodeNote7: { label: "Sol", help: "La couleur de chaque sol." },
  colorCodeNote8: { label: "Sol♯ ou la♭", help: "La couleur de chaque sol♯ ou la♭." },
  colorCodeNote9: { label: "La", help: "La couleur de chaque la." },
  colorCodeNote10: { label: "La♯ ou si♭", help: "La couleur de chaque la♯ ou si♭." },
  colorCodeNote11: { label: "Si", help: "La couleur de chaque si." },
  enableColorCodingFinger: {
    label: "Colorer les notes par doigt",
    help: "Une note qu’aucune main ne joue garde son autre couleur.",
  },
  enableColorCodingFingerPiano: {
    label: "Colorer les touches par doigt",
    help: "Chaque touche s’éclaire dans la couleur du doigt qui la joue.",
  },
  colorCodeFinger1Right: { label: "Main droite, doigt 1", help: "La couleur des notes que joue le pouce droit." },
  colorCodeFinger2Right: { label: "Main droite, doigt 2", help: "La couleur des notes que joue l’index droit." },
  colorCodeFinger3Right: { label: "Main droite, doigt 3", help: "La couleur des notes que joue le majeur droit." },
  colorCodeFinger4Right: { label: "Main droite, doigt 4", help: "La couleur des notes que joue l’annulaire droit." },
  colorCodeFinger5Right: { label: "Main droite, doigt 5", help: "La couleur des notes que joue l’auriculaire droit." },
  colorCodeFingerDefaultRight: {
    label: "Main droite, sans doigt",
    help: "La couleur des notes de la main droite sans doigt indiqué.",
  },
  colorCodeFinger1Left: { label: "Main gauche, doigt 1", help: "La couleur des notes que joue le pouce gauche." },
  colorCodeFinger2Left: { label: "Main gauche, doigt 2", help: "La couleur des notes que joue l’index gauche." },
  colorCodeFinger3Left: { label: "Main gauche, doigt 3", help: "La couleur des notes que joue le majeur gauche." },
  colorCodeFinger4Left: { label: "Main gauche, doigt 4", help: "La couleur des notes que joue l’annulaire gauche." },
  colorCodeFinger5Left: { label: "Main gauche, doigt 5", help: "La couleur des notes que joue l’auriculaire gauche." },
  colorCodeFingerDefaultLeft: {
    label: "Main gauche, sans doigt",
    help: "La couleur des notes de la main gauche sans doigt indiqué.",
  },

  // Sheet
  enableSheet: {
    label: "Afficher la partition",
    help: "Le morceau en partition, par-dessus le haut de la scène.",
  },
  enableFullSheet: {
    label: "Partition seule",
    help: "La partition remplit l’écran à la place de la scène.",
  },
  sheetMeasureScroll: {
    label: "Faire défiler la partition avec le morceau",
    help: "Quand c’est désactivé, les mesures sont rangées en lignes, et la ligne en cours reste visible.",
  },
  sheetMeasureNumbers: {
    label: "Numéros de mesure",
    help: "Où la partition affiche le numéro de chaque mesure.",
    options: { off: "Aucun", lineStart: "Au début de chaque ligne", every: "Sur chaque mesure" },
  },
  enableGrandStaff: {
    label: "Relier deux portées par une accolade",
    help: "L’accolade d’une double portée, au début de chaque ligne.",
  },
  sheetAutoClef: {
    label: "Choisir chaque clef d’après les notes",
    help: "Quand c’est désactivé, la première portée est en clef de sol et les autres en clef de fa.",
  },
  overrideTimeSignature: {
    label: "Chiffrage de mesure",
    help: "Le chiffrage de mesure de la partition. Choisis-en un quand celui du morceau est faux.",
    options: {
      auto: "Celui du morceau",
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
    label: "Valeur de note la plus courte",
    help: "La note la plus courte que la partition écrit. Ses triolets restent possibles.",
    options: { "4": "Noire", "8": "Croche", "16": "Double croche", "32": "Triple croche", "64": "Quadruple croche" },
  },
  hideRestsBelow: {
    label: "Masquer les silences plus courts que",
    help: "Omet les silences courts, pour que la partition soit plus facile à lire.",
    options: { none: "N’en masquer aucun", "4": "Un soupir", "8": "Un demi-soupir", "16": "Un quart de soupir", "32": "Un huitième de soupir" },
  },
  renderSheetCursor: {
    label: "Curseur",
    help: "Une ligne marque l’endroit où en est le morceau.",
  },
  sheetColorActiveNotes: {
    label: "Colorer les notes qui sonnent",
    help: "Les notes de la partition changent de couleur pendant qu’elles sonnent.",
  },
  sheetColorByTrack: {
    label: "Notes qui sonnent dans la couleur de leur piste",
    help: "Quand c’est désactivé, elles prennent la couleur ci-dessous.",
  },
  sheetActiveNotesColor: {
    label: "Couleur des notes qui sonnent",
    help: "La couleur d’une note de la partition pendant qu’elle sonne.",
  },
  sheetHighlightActiveNotes: {
    label: "Lueur derrière les notes qui sonnent",
    help: "Une douce lumière apparaît derrière chaque note de la partition pendant qu’elle sonne.",
  },
  sheetActiveHighlightColor: {
    label: "Couleur de la lueur",
    help: "La couleur de la lumière derrière les notes qui sonnent.",
  },
  sheetActiveGrowEffect: {
    label: "Les notes qui sonnent grossissent",
    help: "Une note de la partition grossit pendant qu’elle sonne.",
  },
  sheetRenderInputNotes: {
    label: "Dessiner les notes que tu joues",
    help: "Chaque touche que tu tiens apparaît comme une note au niveau du curseur.",
  },
  sheetShowHoverInfo: {
    label: "Nommer les notes sous le pointeur",
    help: "Pointe une note ou un accord de la partition pour voir le nom de ses notes.",
  },
  sheetBgColor: {
    label: "Couleur du papier",
    help: "La couleur derrière la partition. Sur un papier sombre, l’encre devient claire.",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "Enregistrer les notes en PDF",
    help: "Ouvre une fenêtre qui enregistre les notes qui tombent du morceau ouvert en pages, dont tu choisis la longueur.",
  },
  exportPdfBackground: {
    label: "Utiliser les couleurs de fond",
    help: "Les pages prennent les couleurs des couloirs et des touches. Quand c’est désactivé, elles s’impriment sur papier blanc.",
  },

  // Offline
  offlineCache: {
    label: "Gérer les fichiers hors ligne",
    help: "Affiche la taille de l’application, des morceaux et des sons de piano, et enregistre ou retire chacun d’eux.",
  },
  autoCacheSongs: {
    label: "Garder les morceaux enregistrés",
    help: "Enregistre maintenant chaque morceau d’exemple, puis de nouveau après chaque mise à jour.",
  },
  autoCacheSounds: {
    label: "Garder les sons de piano enregistrés",
    help: "Enregistre maintenant chaque banque de sons, puis de nouveau après chaque mise à jour.",
  },
};
