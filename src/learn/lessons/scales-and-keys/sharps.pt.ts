/** *Sharps* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { SharpsTexts } from "./sharps.en";

export const sharpsPt: Translation<SharpsTexts> = {
  title: "Sustenidos",
  steps: {
    "raised-by-a-half-step": {
      text: "Ouça: o Dó, depois a tecla preta logo à direita dele. Depois o Fá, e a tecla preta logo à direita do Fá.",
    },
    "the-sharp-sign": {
      text: "Este sinal ♯ é um sustenido. Ele sobe uma nota um semitom, até a tecla logo à direita dela. Então Dó♯ é a tecla preta à direita do Dó.",
    },
    "find-c-sharp": {
      text: "Encontre o Dó sustenido. Comece em qualquer Dó e suba um semitom.",
    },
    "find-f-sharp": {
      text: "Agora encontre o Fá sustenido. É a primeira tecla preta do grupo de três.",
    },
    "where-is-g-sharp": {
      text: "Onde fica o Sol♯?",
      answers: ["A tecla preta logo à esquerda do Sol", "A tecla preta logo à direita do Sol", "A tecla branca Lá"],
    },
    "e-sharp": {
      text: "Não há tecla preta à direita do Mi. Um semitom acima do Mi já é o Fá. Então Mi♯ é Fá, e Si♯ é Dó.",
    },
    "e-sharp-is": {
      text: "Qual tecla você pressiona para o Mi♯?",
      answers: ["Fá", "Mi", "Fá♯"],
    },
    "sharp-on-the-staff": {
      text: "Na pauta, o ♯ fica logo à esquerda da nota, na mesma linha ou no mesmo espaço. Você lê a nota e depois sobe um semitom.",
    },
    "play-sharps": {
      text: "Leia cada nota com o seu sustenido e toque. Encontre primeiro a tecla branca, depois suba um semitom.",
    },
    "through-f-sharp": {
      text: "Coloque o polegar direito no Ré acima do Dó central e o dedo médio no Fá sustenido. Toque Ré, Mi, Fá♯ e Sol, depois desça de volta até o Ré.",
    },
    recap: {
      text: "Muito bem. Agora você já pode ler e tocar sustenidos.",
      points: [
        "Um sustenido ♯ sobe uma nota um semitom, até a tecla logo à direita dela.",
        "A maioria dos sustenidos são teclas pretas, como Dó♯ e Fá♯.",
        "Mi♯ é Fá, e Si♯ é Dó, porque não há tecla preta entre eles.",
        "Na pauta, o ♯ fica logo à esquerda da sua nota.",
      ],
    },
  },
};
