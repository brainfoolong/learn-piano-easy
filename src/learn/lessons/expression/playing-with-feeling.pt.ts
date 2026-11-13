/** *Playing with feeling* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { PlayingWithFeelingTexts } from "./playing-with-feeling.en";

export const playingWithFeelingPt: Translation<PlayingWithFeelingTexts> = {
  title: "Tocar com sentimento",
  steps: {
    "all-the-marks": {
      text: "Agora você conhece as indicações deste mundo. Entre elas estão p e f, os sinais de crescendo e diminuendo, as ligaduras, os pontos de staccato e o rit. Juntas, elas mostram o sentimento que uma peça deve ter.",
    },
    "read-the-marks": {
      text: "Uma melodia começa com p. Uma ligadura une as quatro primeiras notas, e há um rit. sobre o último compasso. Como você toca essa melodia?",
      answers: ["Forte e curta, acelerando", "Forte e ligada, mantendo o andamento", "Suave e curta, mantendo o andamento", "Suave e ligada, indo mais devagar no fim"],
    },
    "flat-demo": {
      text: "Ouça uma melodia curta com todas as notas igualmente fortes e igualmente longas. Está correta, mas não diz nada.",
    },
    "shaped-demo": {
      text: "Agora as mesmas notas de novo. Ouça como desta vez a sensação é diferente.",
    },
    "what-changed": {
      text: "As notas eram as mesmas. O que deu vida à segunda versão?",
      answers: ["Ela usou outras notas", "Foi mais rápida do começo ao fim", "Ficou mais forte, depois mais suave, e foi mais devagar no fim", "Deixou de fora a última nota"],
    },
    "bright-demo": {
      text: "Ouça uma melodia em Dó maior, tocada forte e com as notas um pouco curtas.",
    },
    "sad-demo": {
      text: "Agora a sua gêmea em Lá menor, tocada suave, lenta e ligada.",
    },
    "major-and-minor": {
      text: "A tonalidade dá cor ao clima da música. Dó maior muitas vezes soa luminoso e alegre, e Lá menor muitas vezes soa triste. Você escolhe um toque e uma velocidade que combinem com isso.",
    },
    "which-sounds-sad": {
      text: "Você quer que uma melodia soe triste e delicada. O que combina melhor?",
      answers: ["Dó maior, forte e curta", "Lá menor, suave e ligada", "Dó maior, rápida e em staccato", "Lá menor, forte e áspera"],
    },
    "play-bright": {
      text: "Toque a melodia luminosa: o Dó central, Mi, Sol e o Dó seguinte, e depois desça de volta. Toque com firmeza e com as notas um pouco curtas.",
    },
    "play-sad": {
      text: "Toque a melodia triste: o Lá abaixo do Dó central, Dó, Mi e o Lá acima, e depois desça de volta. Toque com delicadeza e ligue as notas.",
    },
    "elise-demo": {
      text: "É assim que começa o desafio final, Für Elise. A peça está em Lá menor e é tocada suave, sobre um acorde quebrado na mão esquerda.",
    },
    "play-softly": {
      text: "Toque as primeiras notas suavemente com a mão direita: Mi, Ré sustenido, Mi, Ré sustenido, Mi, Si, Ré, Dó e Lá. Comece no segundo Mi acima do Dó central e pressione cada tecla com delicadeza.",
    },
    "hear-loud-and-soft": {
      text: "Ouça as primeiras notas de Für Elise duas vezes. Na primeira vez, elas soam fortes. Na segunda, soam suaves.",
    },
    "which-fits-elise": {
      text: "Für Elise tem a indicação p. Qual vez combinou com a peça?",
      answers: ["A segunda vez, a suave", "A primeira vez, a forte", "As duas, porque eram iguais", "Nenhuma delas"],
    },
    "elise-left-demo": {
      text: "Ouça a mão esquerda do desafio final, com os dedos 5, 2 e 1. Ela quebra o acorde de Lá menor em Lá, Mi e Lá, e depois o de Mi maior em Mi, Si e Sol sustenido. A forma de Mi maior é mais larga que uma oitava, então deixe a mão subir enquanto toca.",
    },
    "elise-left-hand": {
      text: "Sua vez. Toque Lá, Mi e Lá a partir do segundo Lá abaixo do Dó central. Depois toque Mi, Si e Sol sustenido a partir do segundo Mi abaixo do Dó central. Termine de novo em Lá, Mi e Lá.",
    },
    "elise-octave-demo": {
      text: "No compasso 9, a mão direita do desafio final se abre numa oitava. O polegar toca o Mi acima do Dó central, e o dedo 5 o Mi uma oitava acima. Depois a melodia continua como começou.",
    },
    "elise-octave": {
      text: "Sua vez. Abra a mão sobre a oitava: o polegar no Mi acima do Dó central e o dedo 5 no Mi seguinte, mais acima. Toque a frase suavemente.",
    },
    "how-to-play-the-boss": {
      text: "Für Elise está em Lá menor e começa com p. Como você vai tocar a peça?",
      answers: ["Com força e brilho", "Rápido e com notas curtas", "Com suavidade e delicadeza, como uma canção tranquila", "Com todas as notas iguais e duras"],
    },
    recap: {
      text: "Muito bem. Você terminou a última lição do primeiro ano, e Für Elise está esperando.",
      points: [
        "As indicações de uma peça dizem quão forte, quão ligado e quão rápido tocar.",
        "As mesmas notas ganham vida quando crescem, se desfazem e ficam mais lentas.",
        "Uma tonalidade maior muitas vezes soa luminosa, e uma menor muitas vezes soa triste.",
        "Você escolhe um toque que combine com o sentimento da peça.",
      ],
    },
  },
};
