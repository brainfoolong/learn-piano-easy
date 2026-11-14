/** The player's settings from the site's own to the piano's, in French. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsPlay as en } from "./player-settings-play.en";

export const playerSettingsPlay: Translation<typeof en> = {
  // Site
  siteTheme: {
    label: "Thème du site",
    help: "Les couleurs des pages du site. Le thème de la scène 3D règle les couleurs du piano et de ses couloirs.",
    options: { system: "Comme le système", light: "Clair", dark: "Sombre" },
  },
  language: {
    label: "Langue",
    help: "Avec « Comme le navigateur », le site s’ouvre dans la langue du navigateur quand il la propose.",
    options: { auto: "Comme le navigateur" },
  },
  learnSounds: {
    label: "Sons de récompense",
    help: "Les carillons d’« Apprendre le piano » pour une étape réussie, une étoile, un nouveau niveau et un badge. Le piano sonne toujours.",
  },
  learnDailyGoal: {
    label: "Objectif du jour",
    help: "Les XP qu’une journée d’« Apprendre le piano » demande pour que ta série continue.",
    options: { "10": "10 XP", "20": "20 XP", "30": "30 XP", "50": "50 XP" },
  },
  learnSetupDone: {
    label: "Premiers pas terminés",
    help: "« Apprendre le piano » te guide dans de courts premiers pas lors de ta première visite, jusqu’à ce qu’ils soient terminés.",
  },
  expertControls: {
    label: "Outils avancés",
    help: "Le bouton Avancé de la barre de commandes affiche la vitesse, la transposition, la première et la dernière mesure de la boucle, l’ajustement du zoom et le décalage latéral de la vue.",
  },
  // General
  theme: {
    label: "Thème de la scène 3D",
    help: "Règle les couleurs du piano et de ses couloirs. Le thème du site, dans la barre du haut, règle le reste du lecteur.",
    options: { dark: "Sombre", light: "Clair" },
  },
  yourData: {
    label: "Sauvegarder ou restaurer tes données",
    help: "Ouvre la page qui sauvegarde tes paramètres, ta progression, tes morceaux et tes résultats dans un seul fichier, et qui les restaure.",
  },
  startWithLastSong: {
    label: "Rouvrir le dernier morceau au démarrage",
    help: "Ouvre le dernier morceau joué chaque fois que tu ouvres le lecteur.",
  },
  saveIndexedDb: {
    label: "Garder tes fichiers dans ce navigateur",
    help: "Les morceaux ouverts depuis ton ordinateur restent dans ta bibliothèque après le rechargement de la page.",
  },
  disableHotkeys: {
    label: "Désactiver les raccourcis clavier",
    help: "Les touches de l’ordinateur ne servent plus à lire le morceau, à t’y déplacer ni à le répéter en boucle.",
  },
  hotKeyBindings: {
    label: "Raccourcis clavier",
    help: "Les touches pour lire le morceau, t’y déplacer, le répéter en boucle et régler son zoom.",
  },
  leadIn: {
    label: "Temps avant la première note (s)",
    help: "Chaque morceau commence ce temps-là avant sa première note. Quand il reprend depuis sa fin, il attend encore autant.",
  },
  restartSongOnEnd: {
    label: "Relancer le morceau à la fin",
    help: "Après sa dernière note, le morceau reprend depuis le début.",
  },
  playNotesOnScrollEnabled: {
    label: "Jouer les notes en faisant glisser la chronologie",
    help: "Quand tu fais glisser la chronologie, tu entends chaque note que tu passes.",
  },
  fitZoomOnNewSong: {
    label: "Ajuster le zoom à chaque nouveau morceau",
    help: "Un morceau que tu ouvres tient en entier dans les couloirs devant le piano.",
  },
  transposeOffset: {
    label: "Transposer (demi-tons)",
    help: "Monte ou descend toutes les notes du morceau.",
  },
  reverseNoteDirection: {
    label: "Inverser le sens des notes",
    help: "Les notes s’éloignent du piano au lieu de venir vers lui.",
  },
  renderOffset: {
    label: "Décalage de l’image (ms)",
    help: "Retarde l’image par rapport au son. Sous 0, elle s’affiche plus tôt.",
  },
  showBPM: {
    label: "Afficher le tempo en BPM",
    help: "Affiche les pulsations par minute actuelles du morceau au-dessus de la scène, à côté des images par seconde.",
  },
  showFps: {
    label: "Afficher les images par seconde",
    help: "Affiche combien d’images par seconde la scène dessine. Un petit nombre veut dire que l’image saccade.",
  },
  showNoteDebugInfo: {
    label: "Afficher les détails d’une note au survol",
    help: "Quand tu pointes une note, tu vois sa hauteur, son moment, sa durée et sa force de frappe.",
  },
  showMilliseconds: {
    label: "Afficher les millisecondes sur la chronologie",
    help: "Le temps de la chronologie affiche aussi les millièmes de seconde.",
  },
  progressBarMeasures: {
    label: "Afficher la chronologie en mesures",
    help: "La chronologie compte les mesures au lieu des minutes et des secondes.",
  },
  progressBarMeasureLines: {
    label: "Afficher les barres de mesure sur la chronologie",
    help: "Trace un trait fin sur la chronologie là où commence chaque mesure.",
  },
  showMarkersTimeline: {
    label: "Afficher les repères sur la chronologie",
    help: "Affiche les repères du morceau, comme un couplet ou le refrain, sur la chronologie.",
  },
  // Loop
  enableLoop: {
    label: "Répéter un passage en boucle",
    help: "Répète encore et encore les mesures ci-dessous, pour que tu puisses les travailler.",
  },
  loopStart: {
    label: "Première mesure de la boucle",
    help: "La boucle commence au début de cette mesure.",
  },
  loopEnd: {
    label: "Dernière mesure de la boucle",
    help: "La boucle finit à la fin de cette mesure.",
  },
  loopDelay: {
    label: "Décompte (temps)",
    help: "Les temps joués avant chaque tour de la boucle.",
  },
  enableLoopBeats: {
    label: "Clic sur les temps du décompte",
    help: "Tu entends un clic sur chaque temps du décompte.",
  },
  autoLoop: {
    label: "Lancer chaque tour aussitôt",
    help: "Quand c’est désactivé, le morceau s’arrête sur le décompte après chaque tour.",
  },
  muteLoop: {
    label: "Couper le son hors de la boucle",
    help: "Seules les notes des mesures en boucle sonnent.",
  },
  loopTrainer: {
    label: "Entraînement en boucle",
    help: "Commence lentement et ajoute 5 % de vitesse après chaque tour, jusqu’à 100 %.",
  },
  loopTrainerSpeed: {
    label: "Vitesse de départ de l’entraînement en boucle (%)",
    help: "La vitesse du premier tour de l’entraînement en boucle.",
  },
  // Audio
  volumeMain: {
    label: "Volume",
    help: "Le volume de tout ce que l’application joue.",
  },
  masterGain: {
    label: "Volume du morceau",
    help: "À quel volume sonnent les notes du morceau.",
  },
  inputGain: {
    label: "Volume de ton jeu",
    help: "À quel volume sonnent les notes que tu joues sur ton clavier.",
  },
  velocityStrength: {
    label: "Effet de la force de frappe",
    help: "À quel point la force de frappe d’une note change son volume.",
  },
  sustainEnabled: {
    label: "Pédale forte",
    help: "Les notes continuent de sonner tant que la pédale est enfoncée, par toi ou par le morceau.",
  },
  enableReverb: {
    label: "Réverbération",
    help: "Ajoute au son l’écho d’une pièce.",
  },
  reverbImpulseResponse: {
    label: "Pièce de la réverbération",
    help: "La pièce dont la réverbération imite le son. Une pièce plus grande résonne plus longtemps.",
    options: { room: "Pièce", hall: "Salle de concert", church: "Église" },
  },
  detune: {
    label: "Désaccord (cents)",
    help: "Accorde chaque note un peu plus haut ou plus bas. 100 cents font un demi-ton.",
  },
  adsrAttack: {
    label: "Attaque (s)",
    help: "Le temps que met une note pour atteindre son plein volume.",
  },
  adsrDecay: {
    label: "Déclin (s)",
    help: "Le temps que met une note pour descendre à son niveau de maintien.",
  },
  adsrSustain: {
    label: "Niveau de maintien (%)",
    help: "Le volume que garde une note tenue.",
  },
  adsrReleaseKey: {
    label: "Relâchement après la touche (s)",
    help: "Le temps que met une note à s’éteindre une fois sa touche relâchée.",
  },
  adsrReleasePedal: {
    label: "Relâchement après la pédale (s)",
    help: "Le temps que met une note tenue à s’éteindre une fois la pédale relâchée.",
  },
  enableMetronome: {
    label: "Métronome",
    help: "Fait un clic sur chaque temps du morceau.",
  },
  metronomeMidiOutput: {
    label: "Sortie du métronome",
    help: "Où sonne le métronome.",
    options: { both: "Haut-parleurs et appareil MIDI", midi: "Appareil MIDI", speakers: "Haut-parleurs" },
  },
  metronomeNoteNumber: {
    label: "Note du métronome sur l’appareil MIDI",
    help: "La note que le métronome envoie à ton appareil MIDI à chaque temps.",
  },
  metronomeInstrument: {
    label: "Son du métronome sur l’appareil MIDI",
    help: "Avec la batterie, la note choisit l’élément de la batterie.",
    options: { woodblock: "Wood-block", drums: "Batterie", piano: "Piano" },
  },
  metronomeVolume: {
    label: "Volume du métronome",
    help: "À quel volume sonnent les clics du métronome.",
  },
  synchedMetronome: {
    label: "Garder le métronome en phase avec le morceau",
    help: "Activé, le métronome bat les temps du morceau et suit ses changements de tempo et la vitesse. Désactivé, il garde une pulsation régulière au tempo du morceau là où la lecture commence. Les changements de tempo et de vitesse qui suivent ne la modifient pas. Il démarre et s’arrête avec la lecture. Il se tait pendant le décompte d’une boucle et reprend sur le premier temps de la boucle.",
  },
  enableEqualizer: {
    label: "Égaliseur",
    help: "Rend les sons graves, médiums et aigus plus forts ou plus faibles.",
  },
  equalizerGain0: {
    label: "Graves, 60 Hz (dB)",
    help: "Monte ou baisse les sons les plus graves.",
  },
  equalizerGain1: {
    label: "Bas-médiums, 250 Hz (dB)",
    help: "Monte ou baisse le bas-médium, la partie chaude du son.",
  },
  equalizerGain2: {
    label: "Médiums, 1 kHz (dB)",
    help: "Monte ou baisse le milieu du son.",
  },
  equalizerGain3: {
    label: "Haut-médiums, 4 kHz (dB)",
    help: "Monte ou baisse le haut-médium, la partie brillante du son.",
  },
  equalizerGain4: {
    label: "Aigus, 12 kHz (dB)",
    help: "Monte ou baisse les sons les plus aigus.",
  },
  scheduleAheadMs: {
    label: "Anticipation audio (ms)",
    help: "L’avance avec laquelle les notes sont mises en file. Plus d’avance est plus stable, moins d’avance réagit plus vite.",
  },
  scheduleIntervalMs: {
    label: "Intervalle de planification audio (ms)",
    help: "La fréquence à laquelle les notes suivantes sont mises en file.",
  },
  // Backing track
  bgTrackFile: {
    label: "Choisir un fichier audio",
    help: "Un enregistrement pour jouer avec, comme un groupe d’accompagnement. Il reste chargé jusqu’au rechargement de la page.",
  },
  bgTrackEnable: {
    label: "Lire l’accompagnement",
    help: "L’enregistrement choisi se lit en même temps que le morceau.",
  },
  bgTrackVolume: {
    label: "Volume (%)",
    help: "À quel volume sonne l’accompagnement.",
  },
  bgTrackSpeed: {
    label: "Vitesse (%)",
    help: "À quelle vitesse l’accompagnement défile par rapport au morceau, pour suivre un enregistrement à un autre tempo.",
  },
  bgTrackOffset: {
    label: "Décalage (secondes)",
    help: "La seconde du morceau où sonne le début de l’accompagnement. Sous 0, le début de l’accompagnement est sauté.",
  },
  bgTrackLoop: {
    label: "Répéter l’accompagnement en boucle",
    help: "L’accompagnement reprend depuis le début quand il se termine.",
  },
  // View
  cameraPreset: {
    label: "Caméra",
    help: "Fais glisser la scène pour regarder autour, sauf en vue plate. Un double clic dessus te ramène à cette caméra. La vue plate s’aligne sur un clavier posé juste sous l’écran.",
    options: {
      classic: "Classique, vue de dessus",
      player: "Depuis la banquette",
      cinematic: "Cinématique, en mouvement lent",
      flat: "Plate, les touches remplissent la largeur de l’écran",
    },
  },
  resetCamera: {
    label: "Revenir à la caméra",
    help: "Remet la caméra en place après que tu as fait glisser la scène.",
  },
  glowMode: {
    label: "Lueur",
    help: "Automatique désactive la lueur sur un appareil en économie d’énergie, ou quand l’image saccade.",
    options: { auto: "Automatique", on: "Activée", off: "Désactivée" },
  },
  glowStrength: {
    label: "Intensité de la lueur",
    help: "À quel point les notes et les touches brillent.",
  },
  zoomByMeasures: {
    label: "Zoom en mesures",
    help: "Les couloirs montrent un nombre de mesures au lieu d’un nombre de secondes.",
  },
  noteToHeightConst: {
    label: "Secondes affichées à l’avance",
    help: "Combien de secondes de notes à venir les couloirs montrent. Moins de secondes rendent les notes plus longues et plus rapides.",
  },
  measuresShownOnScreen: {
    label: "Mesures affichées à l’avance",
    help: "Combien de mesures de notes à venir les couloirs montrent quand tu zoomes en mesures.",
  },
  // Keyboard
  keyboardFirstNote: {
    label: "Première touche",
    help: "La touche la plus grave de ton clavier, comme C2 ou 36.",
  },
  keyboardLastNote: {
    label: "Dernière touche",
    help: "La touche la plus aiguë de ton clavier, comme C7 ou 96.",
  },
  foldOutsideNotes: {
    label: "Ramener les notes hors de tes touches",
    help: "Les notes absentes de ton clavier se déplacent d’octave en octave jusqu’à tes touches, et tu les joues là.",
  },
  // Input
  playMode: {
    label: "Mode",
    help: "Le jeu libre met le morceau de côté pour que tu puisses jouer et enregistrer. Le travail de l’oreille te demande de trouver des notes.",
    options: { player: "Jouer un morceau", freePlay: "Jeu libre et enregistrement", pitchPractice: "Travail de l’oreille" },
  },
  pitchPracticeKey: {
    label: "Tonalité du travail de l’oreille",
    help: "Le travail de l’oreille ne demande que les notes de cette tonalité.",
    options: {
      chromatic: "Toutes les touches, noires et blanches",
      C: "Do majeur",
      G: "Sol majeur",
      D: "Ré majeur",
      A: "La majeur",
      E: "Mi majeur",
      B: "Si majeur",
      Gb: "Sol bémol majeur",
      Db: "Ré bémol majeur",
      Ab: "La bémol majeur",
      Eb: "Mi bémol majeur",
      Bb: "Si bémol majeur",
      F: "Fa majeur",
    },
  },
  pitchPracticeFirstNote: {
    label: "Note la plus grave du travail de l’oreille",
    help: "La note la plus grave que demande le travail de l’oreille, dans les limites de ton clavier.",
  },
  pitchPracticeLastNote: {
    label: "Note la plus aiguë du travail de l’oreille",
    help: "La note la plus aiguë que demande le travail de l’oreille, dans les limites de ton clavier.",
  },
  pitchPracticeCount: {
    label: "Notes par manche du travail de l’oreille",
    help: "Combien de notes le travail de l’oreille demande avant d’afficher ton résultat.",
  },
  saveMidiDevices: {
    label: "Retenir les appareils MIDI choisis",
    help: "Le lecteur se connecte à la même entrée et à la même sortie MIDI la prochaine fois que tu l’ouvres.",
  },
  keyBindings: {
    label: "Touches du clavier de l’ordinateur",
    help: "Les touches de l’ordinateur qui jouent des notes. De Z à M, elles jouent de Do3 à Si3. De Q à I, elles jouent de Do4 à Do5.",
  },
  waitForNotes: {
    label: "Attendre tes notes",
    help: "Le morceau s’arrête sur chacune de tes notes jusqu’à ce que tu tiennes toutes ses touches. En mode jeu, une note qu’il attend longtemps compte comme jouée trop tard.",
  },
  playHands: {
    label: "Tes mains",
    help: "Les mains sur lesquelles ton jeu est noté. Avec « Attendre tes notes » activé, l’application joue la main que tu laisses de côté.",
    options: { both: "Les deux mains", right: "Main droite", left: "Main gauche" },
  },
  playalongSilentNotes: {
    label: "Allumer les touches à jouer sur ton clavier MIDI",
    help: "Envoie chaque note suivante à très faible volume vers la sortie MIDI, pour qu’un clavier aux touches lumineuses l’affiche.",
  },
  playalongSilentNotesChannel: {
    label: "Canal MIDI des touches lumineuses",
    help: "Le canal MIDI sur lequel ton clavier écoute pour allumer ses touches.",
  },
  enableScoreMode: {
    label: "Évaluer chaque note",
    help: "Compare chaque note que tu joues au morceau, et garde ta précision pour chaque morceau.",
  },
  scoreHitWindow: {
    label: "Fenêtre de frappe (ms)",
    help: "Une note jouée à cet écart de son moment ou moins, en avance ou en retard, compte comme réussie.",
  },
  scorePerfectWindow: {
    label: "Fenêtre « Parfait » (ms)",
    help: "Une note réussie à cet écart de son moment ou moins est parfaite.",
  },
  enableGameMode: {
    label: "Mode jeu",
    help: "Rapporte des points pour chaque note réussie avec précision et chaque note tenue, en retire à chaque erreur, et multiplie les points d’un combo de notes réussies d’affilée.",
  },
  gameDifficulty: {
    label: "Difficulté du jeu",
    help: "La précision demandée, ce que rapporte une note et ce que coûte une erreur.",
    options: {
      easy: "Facile : quelques heures de pratique",
      normal: "Normale : quelques mois",
      hard: "Difficile : environ un an",
    },
  },
  // Piano
  clickablePiano: {
    label: "Jouer du piano à la souris ou au toucher",
    help: "Les touches à l’écran sonnent quand tu appuies dessus.",
  },
  highlightActivePianoKeys: {
    label: "Colorer les touches enfoncées",
    help: "Colore les touches que tu tiens avec les couleurs ci-dessous.",
  },
  inputNoteColorWhite: {
    label: "Couleur de tes touches blanches",
    help: "La couleur d’une touche blanche que tu tiens.",
  },
  inputNoteColorBlack: {
    label: "Couleur de tes touches noires",
    help: "La couleur d’une touche noire que tu tiens.",
  },
  pianoWhiteKeyColor: {
    label: "Couleur des touches blanches",
    help: "La couleur des touches blanches du piano.",
  },
  pianoBlackKeyColor: {
    label: "Couleur des touches noires",
    help: "La couleur des touches noires du piano.",
  },
  pianoVelvetColor: {
    label: "Couleur du feutre",
    help: "La bande de feutre derrière les touches.",
  },
  pianoBackgroundColor: {
    label: "Couleur du fond",
    help: "La couleur derrière le piano et les couloirs.",
  },
  pianoPosition: {
    label: "Hauteur du piano à l’écran (%)",
    help: "Monte ou descend le piano à l’écran.",
  },
  whiteKeyHeight: {
    label: "Longueur des touches blanches (%)",
    help: "La longueur des touches blanches dessinées.",
  },
  enableKeyFlare: {
    label: "Éclat sur les touches enfoncées",
    help: "Une lumière vive brille au-dessus de chaque touche qui sonne.",
  },
  pianoLineEnabled: {
    label: "Onde au-dessus des touches",
    help: "Une ligne qui ondule au-dessus de chaque touche qui sonne.",
  },
  pianoLineSpeed: {
    label: "Vitesse de l’onde",
    help: "À quelle vitesse bougent les ondulations de la ligne.",
  },
  pianoLineResolution: {
    label: "Ondulations par octave",
    help: "Combien d’ondulations tiennent sur une octave. Plus il y en a, plus le tracé est fin.",
  },
  pianoLineAmplitude: {
    label: "Hauteur des ondulations",
    help: "En largeurs de touche, au-dessus d’une touche qui sonne à pleine force.",
  },
  pianoLineColor: {
    label: "Couleur de l’onde",
    help: "La couleur de la ligne d’onde.",
  },
  pianoLineOpacity: {
    label: "Opacité de l’onde",
    help: "À quel point l’onde se voit. Plus la valeur est basse, plus elle est pâle.",
  },
  pianoLineYOffset: {
    label: "Position de l’onde",
    help: "En largeurs de touche au-dessus des touches.",
  },
};
