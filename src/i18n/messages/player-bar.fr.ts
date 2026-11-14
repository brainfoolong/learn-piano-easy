/** The player's bar in French. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "Lire ou mettre en pause",
    stop: "Arrêter et revenir au début",
    seekBack: "Reculer de 5 secondes",
    seekForward: "Avancer de 5 secondes",
    toStart: "Revenir au début",
    faster: "Plus vite",
    slower: "Plus lentement",
    transposeUp: "Transposer vers l’aigu",
    transposeDown: "Transposer vers le grave",
    loop: "Répéter les mesures choisies, puis tout le morceau, puis ne plus répéter",
    loopStart: "Boucle à partir de cette mesure",
    loopEnd: "Boucle jusqu’à cette mesure",
    zoomIn: "Zoom avant",
    zoomOut: "Zoom arrière",
    fit: "Ajuster au morceau",
    viewLeft: "Déplacer la vue à gauche",
    viewRight: "Déplacer la vue à droite",
    fullscreen: "Plein écran",
  },
  controls: {
    play: "Lire",
    pause: "Pause",
    stop: "Arrêter",
    speed: "Vitesse",
    speedPercent: (n: number) => `${formatNumber("fr", n)} %`,
    transpose: "Transposer",
    loop: "Boucle",
    repeatAll: "Tout répéter",
    loopTitles: {
      off: "Répéter en boucle les mesures choisies dans les paramètres",
      measures: "Répéter plutôt tout le morceau",
      song: "Arrêter de répéter",
    },
    more: "Autres outils",
    zoom: "Zoom",
    fit: "Ajuster",
    view: "Vue",
    leaveFullScreen: "Quitter le plein écran",
    expert: "Avancé",
    expertTitles: {
      off: "Afficher tous les outils",
      on: "Afficher seulement les outils principaux",
    },
  },
  hotkeys: {
    modifiers: { Ctrl: "Ctrl", Alt: "Alt", Shift: "Maj", Meta: "Meta" },
    none: "Aucune",
  },
  hotkeyDialog: {
    pressKey: "Appuie sur une touche…",
    keyFor: (label: string) => `Touche pour « ${label} »`,
    clear: "Effacer",
    clearTitle: (label: string) => `Effacer la touche pour « ${label} »`,
    resetAll: "Réinitialiser toutes les touches",
    help: "Appuie sur la touche d’une action, puis sur la touche voulue. La touche Échap ferme cette fenêtre.",
    off: "Les raccourcis clavier sont désactivés dans les paramètres. Ces touches ne font rien pour l’instant.",
    open: "Modifier les raccourcis",
  },
  timeline: {
    position: "Position dans le morceau",
  },
};
