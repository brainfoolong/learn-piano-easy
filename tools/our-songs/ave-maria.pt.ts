/** The guide of *Ave Maria* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Schubert musicou esta canção em 1825, a partir de uma tradução alemã do poema A Dama do Lago, de Walter Scott. " +
    "É o terceiro canto de Ellen e saiu em 1826, como parte do seu Opus 52. " +
    "O filme Fantasia (1940), de Walt Disney, usa a canção na parte final, logo depois de Uma Noite no Monte Calvo.",
  funFact:
    "Em Fantasia, os sinos do fim de Uma Noite no Monte Calvo parecem virar sinos de igreja que levam à Ave Maria.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 7 só com a mão direita. A mão fica no mesmo lugar.",
        "Agora só a mão esquerda. Ela segura cada nota do baixo por meio compasso ou mais.",
        "Junte as mãos nos 7 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cante as notas longas na cabeça. A melodia é uma oração, então toque suave.",
        "O polegar fica no Lá e o dedo 5 no Mi. Cada nota da mão direita está debaixo de um dedo.",
        "As quatro últimas notas têm a mesma duração. Conte-as “um, dois, três, quatro”.",
      ],
      tricky: {
        2: "Segure o Mi com o dedo 5 por quase todo o compasso. Depois o dedo 4 toca o Ré, curto e suave.",
        4: "Os dedos 3, 2, 1 e 2 descem e sobem de novo. No meio, a mão esquerda passa do Fá para o Sol.",
        6: "Segure o Ré com o dedo 4. Depois deixe os dedos 3 e 2 caírem no Dó e no Si.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Uma nota do baixo vem primeiro, e um acorde de duas notas responde.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Conte oito tempos em cada compasso. A mão esquerda toca nos tempos 1, 3, 5 e 7.",
        "A mão direita nunca se move. Os dedos 1 e 3 tocam juntas as terças Lá e Dó.",
        "Toque a mão esquerda mais suave que a melodia, como uma harpa baixinha sob uma voz.",
      ],
      tricky: {
        3: "A mão direita descansa por meio compasso. Continue contando enquanto a mão esquerda toca sozinha.",
        6: "Na mão esquerda, o dedo 2 pega o Si e o polegar pega o Fá logo acima.",
        7: "A mão esquerda se estica do Dó até o Mi grave com o dedo 5.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda. Cada meio compasso rola da nota do baixo para cima e volta para baixo.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como uma só.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "Deixe a mão esquerda ondular suave, como uma harpa sob a melodia.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        9: "Depois da pausa, abra a mão numa sexta, Ré e Si bemol. Os dedos 1 e 5 seguram a sexta por quase todo o compasso.",
        12: "As terças descem e sobem de novo. O polegar pega Mi bemol, depois Fá, Mi bemol e Fá de novo.",
        15: "As sextas descem uma tecla de cada vez, depois a mão salta de volta para cima após uma pausa curta.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: a oitava, quatro notas rápidas, depois uma pausa curta para saltar.",
        "Toque só as oitavas da mão direita. Mantenha a mão aberta, com o polegar e o dedo mínimo prontos.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta no fim de cada meio compasso para saltar para a próxima oitava.",
        "A melodia volta em oitavas. Deixe o dedo mínimo cantar a nota de cima.",
        "Toque o último acorde suave, e segure até o som sumir.",
      ],
      tricky: {
        9: "Depois da pausa, abra a mão numa sexta, Ré e Si bemol. Os dedos 1 e 5 seguram a sexta por quase todo o compasso.",
        17: "As oitavas começam. Mantenha a mão aberta do polegar ao dedo mínimo, e mova a mão inteira de uma vez.",
        18: "Use a pausa curta antes deste compasso para saltar para cima, até a oitava de Ré.",
      },
    },
  },
};
