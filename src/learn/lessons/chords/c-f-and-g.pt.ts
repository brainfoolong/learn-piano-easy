/** *C, F and G* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { CFAndGTexts } from "./c-f-and-g.en";

export const cFAndGPt: Translation<CFAndGTexts> = {
  title: "Dó, Fá e Sol",
  steps: {
    "progression-demo": {
      text: "Ouça quatro acordes: Dó, Fá, Sol e de volta ao Dó. Eles soam como uma pequena música que repousa no Dó.",
    },
    "three-main-chords": {
      text: "Monte uma tríade no 1.º, no 4.º e no 5.º grau da escala de Dó maior. Você tem Dó, Fá e Sol, os três acordes principais de Dó maior.",
    },
    "fourth-step": {
      text: "Suba a escala de Dó maior a partir do Dó. Qual nota é o 4.º grau?",
      answers: ["Mi", "Sol", "Ré", "Fá"],
    },
    "the-f-triad": {
      text: "A tríade de Fá é Fá, Lá e Dó. É uma tríade maior, como Dó maior, então os dedos mantêm o mesmo formato.",
    },
    "c-and-f": {
      text: "Sua vez. Toque Dó maior a partir do Dó central com os dedos 1, 3 e 5. Depois leve o polegar ao Fá acima do Dó central para a tríade de Fá, e volte ao Dó.",
    },
    "g-triad-notes": {
      text: "A tríade de Sol fica no 5.º grau da escala. Quais notas a formam?",
      answers: ["Sol, Si♭ e Ré", "Sol, Si e Ré", "Sol, Lá e Si", "Fá, Lá e Dó"],
    },
    "c-and-g": {
      text: "Toque Dó maior a partir do Dó central, depois leve o polegar ao Sol acima do Dó central para a tríade de Sol, e volte ao Dó.",
    },
    "move-the-hand": {
      text: "Levante a mão inteira de um acorde para o outro. Mantenha os dedos 1, 3 e 5 no mesmo formato, e deixe o polegar achar a nova fundamental.",
    },
    "c-f-g-c": {
      text: "Toque quatro acordes com a mão direita: Dó-Mi-Sol a partir do Dó central, depois Fá-Lá-Dó, Sol-Si-Ré e Dó-Mi-Sol. Não tenha pressa entre eles.",
    },
    "left-hand-chords": {
      text: "A mão esquerda toca os mesmos acordes mais graves, com os dedos 5, 3 e 1. O dedo 5 fica na fundamental.",
    },
    "left-c-f-g-c": {
      text: "Coloque o dedo 5 da mão esquerda no Dó abaixo do Dó central. Toque Dó, Fá, Sol e Dó, levando o dedo 5 a cada fundamental.",
    },
    "tune-demo": {
      text: "Aqui está uma pequena melodia sobre os três acordes. A mão esquerda toca cada acorde, e a mão direita toca duas notas acima dele.",
    },
    tune: {
      text: "Coloque o polegar direito no Sol acima do Dó central. Toque cada acorde junto com a primeira nota do compasso, depois a segunda nota sozinha. O último compasso não tem segunda nota.",
    },
    recap: {
      text: "Muito bem. Agora você já toca os três acordes principais de Dó maior.",
      points: [
        "Dó, Fá e Sol são as tríades do 1.º, do 4.º e do 5.º grau de Dó maior.",
        "A tríade de Fá é Fá, Lá e Dó, e a tríade de Sol é Sol, Si e Ré.",
        "Para mudar de acorde, levante a mão inteira e mantenha o formato.",
        "Ir do Sol de volta ao Dó soa como um final.",
      ],
    },
  },
};
