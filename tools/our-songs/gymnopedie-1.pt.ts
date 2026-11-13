/** The guide of *Gymnopédie No. 1* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Erik Satie terminou as suas três Gymnopédies em 1888, e a primeira saiu numa revista naquele mesmo verão. " +
    "Ela traz a indicação “Lent et douloureux”, que quer dizer lento e doloroso. " +
    "O filme The Royal Tenenbaums (2001) usa esta peça.",
  funFact: "Claude Debussy, amigo de Satie, mais tarde orquestrou a primeira e a terceira Gymnopédie.",
  versions: {
    common: {
      practice: [
        "Toque só a mão esquerda. Ela mantém uma quinta aberta em cada compasso.",
        "Toque só a mão direita nos compassos 5 a 8, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 5 a 8, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Toque as quintas suaves e deixe-as soar. Elas balançam como um barco lento.",
        "Tire o polegar do Si um pouco antes. Assim ele desce até o Lá na hora certa.",
        "Vá um pouco mais devagar no final, e deixe o último Dó sumir.",
      ],
      tricky: {
        7: "O seu polegar desce do Si para o Lá. Depois os dedos 2 e 3 sobem até Si e Dó.",
        11: "Como no compasso 7, o polegar desce até o Lá depois da pausa curta.",
        12: "Segure o Ré com o dedo 4 por dois tempos. Ao mesmo tempo, a sua mão esquerda desce até o Sol grave.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Uma nota grave vem no tempo 1, e duas notas juntas no tempo 2.",
        "Toque só a mão direita nos compassos 5 a 8, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 5 a 8, devagar, com o pedal.",
        "Toque o final, onde a melodia encontra o caminho de volta para casa, no Dó.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Mantenha o pedal pisado durante cada compasso inteiro, e troque-o bem na barra de compasso.",
        "O polegar toca o Si e depois desce para o Lá. Deixe os outros dedos soltos.",
        "Deixe os dois últimos compassos soarem suaves, como o fim de uma canção de ninar.",
      ],
      tricky: {
        7: "O seu polegar desce do Si para o Lá. Mantenha a mão perto das teclas.",
        11: "O mesmo passo do compasso 7. O polegar desce do Si para o Lá.",
        15: "A sua mão esquerda desce até o Dó grave. Use a pausa no fim do compasso 14.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda. Na pausa curta, salte da nota grave para cima, até o acorde.",
        "Toque os compassos 5 a 8 com as duas mãos, devagar.",
        "Toque só as sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "O pedal segura a nota grave enquanto a sua mão salta para cima, até o acorde.",
        "O Dó sustenido faz atrito com o Ré da mão esquerda. Esse atrito suave é a cor que Satie adorava.",
        "O polegar pega a nota de baixo de cada sexta. O dedo 4 ou 5 leva a melodia por cima.",
      ],
      tricky: {
        6: "O seu polegar desce até o Dó sustenido enquanto o dedo 3 solta o Fá sustenido.",
        10: "As sextas descem grau a grau e depois saltam para baixo, até Mi e Dó sustenido. Mantenha os dedos 1 e 4 na mesma abertura.",
        12: "Segure Fá sustenido e Lá pelo compasso inteiro. Depois suba para Sol e Mi no compasso seguinte.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda. Na pausa curta, salte da oitava grave para cima, até o acorde.",
        "Toque os compassos 5 a 8 com as duas mãos, devagar.",
        "Toque só os acordes da mão direita, e levante a mão entre um e outro.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Olhe para o próximo acorde enquanto o pedal segura a oitava grave. Os seus olhos guiam a mão.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "As primeiras notas da melodia voltam sozinhas. Toque-as suaves, como uma lembrança.",
      ],
      tricky: {
        9: "Levante a mão depois de cada acorde, e mantenha a mesma posição enquanto ela sobe.",
        11: "Três acordes sobem um grau de cada vez. Mantenha os dedos 1, 2 e 4 na mesma posição.",
        15: "A melodia volta sozinha. O dedo 3 toca Fá sustenido, e o dedo 5 toca Lá.",
      },
    },
  },
};
