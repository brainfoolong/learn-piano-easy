/** *The staff* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { TheStaffTexts } from "./the-staff.en";

export const theStaffPt: Translation<TheStaffTexts> = {
  title: "A pauta",
  steps: {
    "five-lines": {
      text: "A música é escrita numa pauta. A pauta tem cinco linhas, uma acima da outra. Você conta as linhas de baixo para cima, então a linha de baixo é a primeira.",
    },
    "lines-quiz": {
      text: "Quantas linhas tem uma pauta?",
      answers: ["Quatro", "Cinco", "Seis"],
    },
    "four-spaces": {
      text: "Entre as cinco linhas há quatro espaços. Você também conta os espaços de baixo para cima.",
    },
    "spaces-quiz": {
      text: "Quantos espaços há entre as linhas de uma pauta?",
      answers: ["Três", "Quatro", "Cinco"],
    },
    "line-or-space": {
      text: "Uma nota fica numa linha ou num espaço. Numa linha, a linha passa pelo meio da nota. Num espaço, a nota preenche o vão entre duas linhas.",
    },
    "line-or-space-quiz": {
      text: "Uma linha passa bem pelo meio de uma nota. Onde fica essa nota?",
      answers: ["Numa linha", "Num espaço"],
    },
    "higher-is-higher": {
      text: "Quanto mais alto uma nota fica na pauta, mais aguda ela soa. Um grau vizinho acima, de uma linha para o espaço seguinte, é a próxima tecla branca à direita.",
    },
    "climb-demo": {
      text: "Observe e ouça. O piano sobe da linha de baixo até a linha de cima, uma linha ou um espaço por vez. Cada nota soa um pouco mais aguda.",
    },
    "higher-or-lower-listen": {
      text: "Você ouve duas notas. A segunda é mais aguda, mais grave ou igual à primeira? Uma nota mais aguda ficaria mais alto na pauta.",
    },
    "top-or-bottom-quiz": {
      text: "Uma nota fica na linha de cima, e outra na linha de baixo. Qual soa mais aguda?",
      answers: ["A nota da linha de baixo", "A nota da linha de cima", "As duas soam iguais"],
    },
    "first-line-quiz": {
      text: "Qual linha da pauta é a primeira?",
      answers: ["A linha de baixo", "A linha do meio", "A linha de cima"],
    },
    recap: {
      text: "Muito bem. Agora você conhece a pauta.",
      points: [
        "Uma pauta tem cinco linhas e quatro espaços, contados de baixo para cima.",
        "Uma nota fica numa linha ou num espaço.",
        "Quanto mais alto na pauta, mais aguda a nota soa.",
      ],
    },
  },
};
