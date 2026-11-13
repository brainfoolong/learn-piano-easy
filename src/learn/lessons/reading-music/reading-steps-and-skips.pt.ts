/** *Reading steps and skips* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { ReadingStepsAndSkipsTexts } from "./reading-steps-and-skips.en";

export const readingStepsAndSkipsPt: Translation<ReadingStepsAndSkipsTexts> = {
  title: "Leitura de graus vizinhos e pulos",
  steps: {
    "moves-demo": {
      text: "Ouça. Primeiro as notas sobem por graus vizinhos, depois por pulos. Na pauta, cada movimento tem um aspecto próprio.",
    },
    "step-on-the-staff": {
      text: "Na pauta, um grau vizinho vai de uma linha ao espaço seguinte, ou de um espaço à linha seguinte. Nas teclas, ele vai para a próxima tecla branca.",
    },
    "step-from-line-quiz": {
      text: "Uma nota fica numa linha. Onde fica a nota um grau acima?",
      answers: ["No espaço logo acima", "Na próxima linha acima", "Duas linhas acima"],
    },
    "skip-on-the-staff": {
      text: "Na pauta, um pulo vai de uma linha à linha seguinte, ou de um espaço ao espaço seguinte. Nas teclas, ele pula uma tecla branca.",
    },
    "step-or-skip-quiz": {
      text: "Uma nota vai de uma linha para a próxima linha acima. Isso é um grau vizinho ou um pulo?",
      answers: ["Um grau vizinho", "Um pulo"],
    },
    "space-to-line-quiz": {
      text: "Uma nota vai de um espaço para a linha logo acima. Isso é um grau vizinho ou um pulo?",
      answers: ["Um grau vizinho", "Um pulo"],
    },
    "read-by-moves": {
      text: "Você não precisa dizer o nome de cada nota. Diga o nome da primeira, depois leia cada movimento: para cima ou para baixo, grau vizinho ou pulo.",
    },
    "skip-from-e-quiz": {
      text: "Uma nota é Mi, na linha de baixo da pauta da clave de Sol. A próxima nota fica na próxima linha acima. Que nota é?",
      answers: ["Ré", "Fá", "Sol"],
    },
    "first-note": {
      text: "A próxima música começa nesta nota. Diga o nome dela.",
    },
    "hand-on-d": {
      text: "Observe a mão direita subir a partir da posição de Dó. O polegar fica no Ré, e os dedos 2 a 5 cobrem Mi, Sol, Lá e Si. O Fá fica de fora, então os dedos 2 e 3 se abrem um pouco mais.",
    },
    "d-position": {
      text: "Sua vez. Coloque o polegar direito no Ré e toque Ré Mi Sol Lá Si com os dedos 1 a 5. Depois desça de volta até o Ré.",
    },
    "song-notes": {
      text: "A próxima música usa essas cinco notas. Leia cada uma e toque-a com a mão direita.",
    },
    "song-opening": {
      text: "Este é o começo da próxima música. Mantenha a mão direita sobre Ré, Mi, Sol, Lá e Si, e siga a tecla marcada.",
    },
    "opening-move-quiz": {
      text: "Nessa melodia, o Mi desce para o Ré. O Mi fica na linha de baixo. Onde fica o Ré?",
      answers: ["No espaço logo abaixo", "Na linha abaixo", "Na mesma linha"],
    },
    "dotted-demo": {
      text: "Ouça dois compassos da música. Um ponto aumenta a nota em metade da duração dela: uma mínima pontuada dura três tempos. O Ré em semínima pontuada dura um tempo e meio, e uma pausa de colcheia preenche o último meio tempo.",
    },
    "dotted-half-quiz": {
      text: "Uma mínima dura dois tempos. Quantos tempos dura uma mínima pontuada?",
      answers: ["Dois tempos", "Três tempos", "Quatro tempos"],
    },
    "dotted-tap": {
      text: "Sua vez, depois de um compasso de contagem inicial. Toque Mi, Mi e Ré nos cliques, e solte o Ré depois de um tempo e meio. Segure o Sol por três tempos, depois toque o Ré.",
    },
    recap: {
      text: "Muito bem. Agora você consegue ler uma melodia pelos movimentos dela.",
      points: [
        "Um grau vizinho vai de uma linha ao espaço seguinte, ou de um espaço à linha seguinte.",
        "Um pulo vai de linha a linha, ou de espaço a espaço.",
        "Diga o nome da primeira nota, depois leia cada movimento: a direção e o tamanho.",
        "Um ponto aumenta a nota em metade da duração dela.",
      ],
    },
  },
};
