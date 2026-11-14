/** The play modes in French. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playModes as en } from "./play-modes.en";

export const playModes: Translation<typeof en> = {
  eyebrow: "Trois, deux, un, à toi",
  lead: "Choisis un mode, et le lecteur se règle tout seul : le bon morceau, la bonne aide et le bon affichage. Ensuite, à toi de jouer.",
  note: "Un mode change quelques paramètres du lecteur. Une fois le mode lancé, tu peux revenir en arrière en un geste, et changer n’importe quel paramètre plus tard.",
  traits: "Ce qu’il règle",
  song: (title: string) => `Morceau : ${title}`,
  noSong: "Aucun morceau requis",
  start: "Commencer",
  keyNames: ["Do", "Ré", "Mi", "Fa", "Sol", "La", "Si"],
  groups: {
    fun: {
      heading: "Jouer pour le plaisir",
      lead: "Des points, des étincelles et du spectacle. Choisis un mode, et laisse le piano te divertir.",
    },
    learn: {
      heading: "Apprendre un morceau",
      lead: "Chaque mode t’aide à apprendre un morceau à sa façon, d’une main à la fois jusqu’à la lecture de la partition.",
    },
    skills: {
      heading: "Travailler une compétence",
      lead: "Trouve vite les notes, joue librement, ou écoute comment marchent les accords. Certains modes n’ont même pas besoin de morceau.",
    },
  },
  modes: {
    game: {
      tag: "Pour s’amuser",
      name: "Mode jeu",
      text: "Chaque note réussie rapporte des points, et le piano te répond en étincelles. Enchaîne les combos et bats ton record.",
      traits: ["Points et combos en mode Facile", "Étincelles, éclats et piano lumineux", "Un morceau court et entraînant"],
      song: "In the Hall of the Mountain King, Débutant",
    },
    challenge: {
      tag: "Haut niveau",
      name: "Défi",
      text: "Le mode jeu à son niveau le plus difficile, sans noms de notes ni indices. Seul un parcours sans faute décroche le meilleur score.",
      traits: ["Points et combos en mode Difficile", "Ni noms de notes ni indices sur les touches", "Une version plus difficile du morceau"],
      song: "In the Hall of the Mountain King, Moyen",
    },
    concert: {
      tag: "Installe-toi",
      name: "Concert",
      text: "Le piano te joue un morceau, avec des flammes, des étoiles et une caméra en mouvement. Profite du spectacle, ou accompagne-le si tu l’oses.",
      traits: ["Une caméra de cinéma", "Flammes, étoiles et étincelles", "Un piano lumineux et une onde de lumière"],
      song: "Carol of the Bells, Difficile",
    },
    playAlong: {
      tag: "Pas à pas",
      name: "Jouer avec le morceau",
      text: "Le morceau t’attend à chaque note. Chaque note affiche son nom et son doigté, et chaque touche son nom.",
      traits: ["Les notes t’attendent", "Noms des notes et doigtés sur les notes", "Noms sur les touches blanches et noires"],
      song: "Ode to Joy, Débutant",
    },
    oneHand: {
      tag: "Petit à petit",
      name: "Une main à la fois",
      text: "Apprends d’abord la main droite pendant que l’application joue la gauche. Le morceau attend chacune de tes notes.",
      traits: ["Seule la main droite joue", "L’application joue la main gauche", "Change de main dans les paramètres, sous « Tes mains »"],
      song: "Jingle Bells, Débutant",
    },
    readMusic: {
      tag: "Partition",
      name: "Lire la partition",
      text: "La partition s’affiche au-dessus du piano, et le morceau t’attend. Les notes ne portent pas de nom, alors lis-les sur la portée.",
      traits: ["Partition au-dessus du piano", "Les notes t’attendent", "Une douce lueur derrière chaque note qui sonne"],
      song: "Mary Had a Little Lamb, Débutant",
    },
    slowSteady: {
      tag: "Entraînement",
      name: "Lentement mais sûrement",
      text: "Les quatre premières mesures tournent en boucle, d’abord à mi-vitesse. Chaque tour va un peu plus vite, jusqu’à ce que tu joues au tempo.",
      traits: ["Les quatre premières mesures en boucle", "D’abord à mi-vitesse, puis plus vite à chaque tour", "Un décompte avant chaque tour"],
      song: "Für Elise, Facile",
    },
    rhythm: {
      tag: "En mesure",
      name: "Garde le rythme",
      text: "Un métronome bat la mesure, et chaque note que tu joues est jugée sur son calage. Ni noms ni attente, rien que la pulsation.",
      traits: ["Un métronome sur chaque temps", "Chaque note jugée sur son calage", "Le morceau n’attend jamais"],
      song: "Twinkle Twinkle Little Star, Facile",
    },
    colourByFinger: {
      tag: "Doigts",
      name: "Couleurs des doigts",
      text: "Chaque doigt a sa couleur, sur les notes et sur les touches. Le morceau attend que tu trouves le bon.",
      traits: ["Notes colorées selon le doigt", "Touches éclairées à la couleur du doigt", "Les notes t’attendent"],
      song: "Twinkle Twinkle Little Star, Débutant",
    },
    noteTrainer: {
      tag: "Notes",
      name: "Lecture de notes",
      text: "L’application nomme une note, et tu la trouves sur le clavier. À la fin, tu vois quelles notes tu as confondues.",
      traits: ["Notes de do majeur, à partir du do central", "Dix notes par manche", "La liste des confusions à la fin"],
    },
    freeJam: {
      tag: "Rien que toi",
      name: "Improvisation libre",
      text: "Ni morceau ni règles. Joue ce que tu veux, et le piano te répond en étincelles et en lumière. Enregistre une prise et garde-la en fichier MIDI.",
      traits: ["Jeu libre, sans morceau", "Étincelles, étoiles et piano lumineux", "Enregistre et garde ce que tu joues"],
    },
    chordExplorer: {
      tag: "Harmonie",
      name: "Exploration des accords",
      text: "Chaque accord du morceau est nommé quand il sonne, avec son degré dans la tonalité. Des blocs sur les notes montrent la place de chaque note dans la gamme.",
      traits: ["Noms des accords pendant le morceau", "Un chiffre romain pour chaque accord", "Degrés de la gamme, fondamentale marquée"],
      song: "Canon in D, Facile",
    },
  },
  toast: {
    started: (name: string) => `C’est parti : ${name}.`,
    undo: "Défaire",
    undone: "Tes paramètres sont rétablis.",
  },
};
