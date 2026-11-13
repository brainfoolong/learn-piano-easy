/** *Key signatures* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { KeySignaturesTexts } from "./key-signatures.en";

export const keySignaturesPt: Translation<KeySignaturesTexts> = {
  title: "Armaduras de clave",
  steps: {
    "signs-at-the-start": {
      text: "Em Sol maior, todo Fá é tocado como Fá♯. A partitura não marca cada um. Ela coloca um sustenido uma vez, no início de cada linha.",
    },
    "every-octave": {
      text: "Esses sinais se chamam armadura de clave. Um sustenido na linha do Fá quer dizer que todo Fá é Fá♯, agudo ou grave. Um bemol na linha do Si quer dizer que todo Si é Si♭.",
    },
    "one-sharp": {
      text: "A armadura mostra um sustenido, na linha do Fá. Em qual tonalidade está a música?",
      answers: ["Sol maior", "Fá maior", "Dó maior"],
    },
    "one-flat": {
      text: "A armadura mostra um bemol, na linha do Si. Em qual tonalidade está a música?",
      answers: ["Dó maior", "Fá maior", "Sol maior"],
    },
    "no-signs": {
      text: "A armadura não mostra nenhum sustenido e nenhum bemol. Em qual tonalidade está a música?",
      answers: ["Fá maior", "Sol maior", "Dó maior"],
    },
    "letter-stays": {
      text: "Diga o nome de cada nota. A armadura muda a tecla que você pressiona, mas a nota mantém o seu nome.",
    },
    "f-in-g-major": {
      text: "A armadura tem um sustenido. A pauta mostra um Fá. Qual tecla você toca?",
      answers: ["Fá♯, a tecla preta", "Fá, a tecla branca"],
    },
    "phrase-in-g": {
      text: "Aqui está uma frase em Sol maior. Seu polegar direito começa no segundo Ré acima do Dó central. Preste atenção no Fá♯ mais acima.",
    },
    "play-in-g": {
      text: "Sua vez. A armadura tem um sustenido, então todo Fá é Fá♯.",
    },
    "b-in-f-major": {
      text: "A armadura tem um bemol. A pauta mostra um Si. Qual tecla você toca?",
      answers: ["Si, a tecla branca", "Si♭, a tecla preta"],
    },
    "play-in-f": {
      text: "Agora uma frase em Fá maior. Coloque o polegar direito no Fá acima do Dó central. A armadura tem um bemol, então todo Si é Si♭.",
    },
    recap: {
      text: "Muito bem. Agora você já pode ler uma armadura de clave. Em seguida vem uma música em Dó maior, sem sustenidos nem bemóis.",
      points: [
        "A armadura de clave fica no início de cada linha.",
        "Os sustenidos ou bemóis da armadura valem para toda nota com aquele nome, em todas as oitavas.",
        "Um sustenido no Fá quer dizer Sol maior, e um bemol no Si quer dizer Fá maior.",
        "Nenhum sustenido e nenhum bemol quer dizer Dó maior.",
      ],
    },
  },
};
