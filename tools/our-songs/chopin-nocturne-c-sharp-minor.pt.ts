/** The guide of *Nocturne in C-sharp minor* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Chopin escreveu este noturno em 1830, mas ele só foi publicado em 1875, muito depois da morte do compositor. " +
    "Chopin o mandou para a irmã, Ludwika, para ela praticar antes do segundo concerto para piano dele. " +
    "O filme The Pianist usa a peça, e ela abre o álbum da trilha sonora.",
  funFact: "Em 1939, o pianista Władysław Szpilman tocava a peça ao vivo na Rádio Polonesa quando o ataque alemão a Varsóvia cortou a transmissão.",
  versions: {
    common: {
      practice: [
        "Toque os 2 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 3 a 10 só com a mão direita. A mão começa mais acima, com o dedo 5 no Lá agudo.",
        "Agora só a mão esquerda. Ela nunca se move, e cada dedo fica na sua própria tecla.",
        "Junte as mãos nos 4 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Esta é uma música noturna. Toque suave, e deixe cada nota longa cantar.",
        "Use a pausa curta depois do Lá grave para levar a mão até o Lá agudo.",
        "Use a pausa depois do Ré para levar a mão para baixo. Assim o dedo 3 cai no Dó.",
      ],
      tricky: {
        1: "Comece com o dedo 5 no Mi agudo e o dedo 4 no Ré. A mão esquerda segura Lá e Mi juntos.",
        3: "A mão subiu. O dedo 5 toca o Lá agudo, e o polegar agora fica no Ré.",
        11: "A mão voltou a descer. O dedo 3 toca o Dó, e o polegar termina no Lá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Uma nota grave vem no tempo, e um acorde de duas notas responde.",
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 5 a 12, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "A melodia salta uma oitava inteira. O polegar toca o Lá grave, e o dedo 5, o agudo.",
        "Mantenha o pedal pisado só nos compassos com um único acorde, e solte-o na barra de compasso seguinte.",
        "Use a pausa depois do Mi para levar a mão direita para baixo, e o dedo 3 cai no Dó.",
      ],
      tricky: {
        1: "O dedo 5 toca o Mi agudo. A mão esquerda toca o Lá no tempo, depois Dó e Mi juntos.",
        3: "Depois do salto de oitava, o dedo 5 cai no Lá agudo. Olhe para a tecla, não para a mão.",
        13: "A mão desceu durante a pausa. O dedo 3 toca o Dó, e o dedo 5 toca o Mi.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda até os acordes quebrados rolarem por igual, do grave ao agudo.",
        "Toque o desenho rápido do compasso 3 só com a mão direita, bem devagar.",
        "Junte as mãos nos 4 primeiros compassos, devagar.",
        "Toque só as terças da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Agora toque a música inteira com as duas mãos, na velocidade normal, com o pedal.",
      ],
      tips: [
        "Troque o pedal a cada nova nota do baixo, duas vezes por compasso.",
        "O desenho depois do Si longo é criação nossa. Toque com liberdade, como quem canta e toma fôlego.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        7: "O dedo 3 segura o Ré, depois os dedos 2 e 1 descem até o Si. A mão esquerda continua rolando Si, Fá sustenido e Ré.",
        12: "No fim do compasso, o polegar desce até o Lá sustenido. Depois os dedos 3 e 5 pegam a primeira terça da melodia.",
        17: "Toque Lá sustenido e Dó sustenido com os dedos 1 e 3, depois Dó sustenido e Mi com o 2 e o 4. A mão esquerda conduz a música de volta para Si menor.",
      },
    },
    legendary: {
      practice: [
        "Toque só os arpejos da mão esquerda. Na subida, o dedo 3 cruza por cima do polegar.",
        "Toque o desenho rápido do compasso 3 só com a mão direita, bem devagar.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Deixe os arpejos ondularem suaves por baixo da melodia que canta, como água à noite.",
        "Use a pausa curta no fim de cada arpejo para saltar de volta até a nota grave.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
      ],
      tricky: {
        3: "Segure o Dó sustenido agudo com o dedo 5. Depois toque o desenho com leveza: Si, Lá e então Fá sustenido com o polegar.",
        8: "A mão esquerda sobe a partir do Fá sustenido grave, depois a partir do Sol sustenido grave. Salte para baixo na pausa curta.",
        15: "Abra a mão sobre quatro notas, de Dó sustenido a Dó sustenido. Depois comece o desenho com o dedo 4.",
      },
    },
  },
};
