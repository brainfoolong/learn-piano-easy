/** The guide of *In the Hall of the Mountain King* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg escreveu esta música para o drama Peer Gynt, de Henrik Ibsen, estreado em Cristiânia, a atual Oslo, em 1876. " +
    "Nesta cena, os trolls se amontoam em volta de Peer, no salão do rei deles. " +
    "A mesma melodia curta volta várias vezes, cada vez mais forte e mais rápida, até terminar com estrondo. " +
    "O filme The Social Network usa esta música numa corrida de remo.",
  funFact: "O próprio Grieg escreveu que esta peça cheirava a esterco de vaca e a presunção de troll, e que mal suportava ouvi-la.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Agora só a mão direita nos compassos 9 a 16, onde a melodia sobe mais.",
        "A mão esquerda mantém uma quinta ou uma nota em cada compasso. Junte as mãos nos 8 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Aqui cada dedo tem a sua própria tecla: polegar no Lá, dedo mínimo no Mi.",
        "Toque curto e suave, como um troll andando na ponta dos pés por uma caverna.",
        "Aqui a melodia sobe mais. Deixe-a crescer um pouco, como se os trolls estivessem acordando.",
      ],
      tricky: {
        4: "No compasso 3, o dedo 4 avançou até o Ré sustenido. Aqui, o dedo 2 avança até o Si bemol.",
        9: "O polegar pousa no Mi, e os dedos 2, 3 e 4 sobem uma tecla cada. A mão esquerda desce até o Mi.",
        17: "A melodia recomeça. Na pausa, leve o polegar de volta até o Lá, e a mão esquerda também até o Lá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Ela anda entre duas notas em cada tempo, como uma marcha de trolls.",
        "Toque só a mão direita nos compassos 3 e 4, e fique de olho no sustenido e no bemol.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Junte as mãos nos compassos 9 a 16, onde a melodia sobe.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Ré sustenido e Si bemol são teclas pretas. Os dedos 4 e 2 avançam um pouco mais para dentro.",
        "As duas mãos tocam em cada tempo. Marche junto, e mantenha os tempos regulares.",
        "Nesta parte, os trolls estão chegando mais perto. Toque-a um pouco mais forte que o começo.",
      ],
      tricky: {
        4: "O dedo 2 avança até o Si bemol, enquanto a mão esquerda anda entre Sol e Ré.",
        9: "Use a pausa para descer a mão esquerda até o Mi grave. O polegar direito começa a subida no Mi.",
        17: "As duas mãos voltam ao Lá durante a pausa, e a melodia recomeça mais uma vez.",
      },
    },
    epic: {
      practice: [
        "Toque só os acordes quebrados da mão esquerda até eles rolarem sozinhos: grave, meio, agudo, meio.",
        "Toque só a mão direita nos compassos 5 a 8, onde o polegar passa por baixo.",
        "Toque só o tema na mão esquerda, a partir do compasso 17.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o som crescer até o final.",
      ],
      tips: [
        "O baixo desliza do Dó sustenido para o Dó. É esse deslize assustador que dá aos trolls o seu ar sorrateiro.",
        "Depois do Dó sustenido com o dedo 2, passe o polegar por baixo até o Ré, e a mão sobe.",
        "Agora a mão esquerda toca a melodia. A mão direita só toca acordes curtos entre os tempos.",
      ],
      tricky: {
        9: "Na pausa curta, desça a mão esquerda até o Fá sustenido grave. O polegar direito começa a subida.",
        17: "As mãos trocam de papel. A mão esquerda toca a melodia nos tempos, e a mão direita toca de leve entre eles.",
        23: "A mão esquerda sobe por Fá sustenido, Lá sustenido, Dó sustenido e Mi, e depois solta tudo para achar o Si grave.",
      },
    },
    legendary: {
      practice: [
        "Toque só as oitavas da mão esquerda, curtas e pinçadas, com uma pausa depois de cada uma.",
        "Toque só as oitavas da mão direita. Mantenha a mão numa só posição e mova-a como uma peça só.",
        "Toque só as oitavas insistentes da mão esquerda, oito por compasso.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, de suave no começo a forte no final.",
      ],
      tips: [
        "Comece suave. A peça inteira cresce até o final, então guarde espaço para crescer.",
        "Nas oitavas, o polegar e o dedo mínimo mantêm a posição de oitava. Deixe o pulso fazer o movimento.",
        "Estes são os últimos estrondos dos trolls. Toque cada acorde forte e curto.",
      ],
      tricky: {
        9: "A mão direita começa as suas oitavas, e a mão esquerda começa as suas colcheias. Deixe as duas mãos soltas.",
        13: "As oitavas sobem de novo por Fá sustenido, Sol sustenido, Lá sustenido e Si. Deixe o pulso quicar de tecla em tecla.",
        27: "Os acordes alternam entre Si menor e Fá sustenido maior. Mantenha os dedos 1, 2, 3 e 5 na mesma posição.",
      },
    },
  },
};
