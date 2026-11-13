/** The guide of *Carol of the Bells* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Shchedryk é uma canção ucraniana de Ano-Novo, e o nome vem de “noite generosa”. " +
    "Mykola Leontovych, compositor, maestro e professor ucraniano, construiu a canção sobre um padrão de quatro notas em compasso 3/4. " +
    "Ela foi cantada pela primeira vez em dezembro de 1916, em Kiev. " +
    "Mais tarde, Peter J. Wilhousky fez dela a canção em inglês Carol of the Bells.",
  funFact: "Wilhousky deu à canção uma letra sobre sinos, porque a melodia o fazia lembrar de sinos de mão.",
  versions: {
    common: {
      practice: [
        "Toque os 4 primeiros compassos só com a mão direita: Dó, Si, Dó, Lá, várias vezes seguidas.",
        "Toque os compassos 12 a 16 só com a mão direita, subindo até o Lá agudo e descendo de volta.",
        "Agora só a mão esquerda. Ela mantém uma posição em cada compasso.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "As quatro notas soam como sininhos. Toque as quatro leves e regulares.",
        "O polegar pega o último Dó, para o dedo mínimo alcançar o Lá agudo.",
        "No terceiro Mi, troque do dedo 2 para o dedo 3. A mão fica onde está.",
      ],
      tricky: {
        12: "Toque o último Dó com o polegar, e use a pausa curta para abrir a mão até o Lá agudo.",
        18: "Os dedos 4 e 5 balançam entre Ré e Mi, depois o dedo 3 cai no Dó.",
        20: "Igual ao compasso 18. Segure o Dó pela mínima inteira antes de os sinos voltarem.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Pressione juntas as três notas de cada acorde.",
        "Toque os compassos 17 a 20 só com a mão direita, e levante a mão depois do Sol sustenido.",
        "Junte as mãos nos 12 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda deixa o Dó de fora, para ele nunca fazer atrito com o Si da melodia.",
        "Toque o último Lá com o dedo 3. Assim o polegar fica livre para o Mi grave.",
        "Toque o Sol sustenido curto, levante a mão e caia com o polegar no Lá.",
      ],
      tricky: {
        12: "O polegar pega o último Dó, para o dedo mínimo alcançar o Lá agudo no compasso seguinte.",
        17: "Toque o Sol sustenido curto, depois levante a mão e caia com o polegar no Lá.",
        19: "A mesma subida do compasso 17. Levante a mão depois do Sol sustenido, e mantenha a pulsação firme.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda até ela balançar sozinha: grave, sobe, sobe, topo, desce, desce.",
        "Toque só as sextas e terças da mão direita, e mantenha juntas as duas notas de cada par.",
        "Toque a subida dos compassos 17 a 20 só com a mão direita. O polegar passa por baixo no Lá.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "O baixo desce um grau a cada compasso, do Lá até o Mi, enquanto os sinos continuam tocando por cima.",
        "A melodia é a nota de cima de cada sexta, então deixe o dedo de cima conduzir.",
        "Depois do Sol sustenido, passe o polegar por baixo até o Lá, e a mão continua subindo.",
      ],
      tricky: {
        9: "A mão salta das sextas graves até Sol e Mi. Levante a mão durante a pausa curta no fim do compasso 8.",
        10: "O polegar passa por Sol, Fá, Sol e Mi, enquanto os dedos 5 e 4 tocam a melodia por cima, como sinos.",
        19: "Passe o polegar por baixo depois do Sol sustenido, sem nenhum tropeço no som.",
      },
    },
    legendary: {
      practice: [
        "Toque só as oitavas da mão esquerda. Elas repetem o mesmo padrão de quatro notas, duas oitavas abaixo.",
        "Toque só o baixo stride: salte para baixo até a oitava, depois volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "As duas mãos tocam o mesmo padrão, a duas oitavas de distância, como um sino grande e um pequeno.",
        "A mão esquerda mantém o padrão de quatro notas por baixo da melodia, para os sinos nunca pararem.",
        "As duas mãos sobem juntas. O polegar direito passa por baixo, e o dedo 3 da mão esquerda cruza por cima.",
      ],
      tricky: {
        6: "A mão direita toca o seu Mi grave entre as notas da melodia, enquanto a mão esquerda salta no baixo stride.",
        15: "Toque o acorde de Sol leve, depois Mi e Ré com os dedos 5 e 4, e levante a mão para o próximo acorde.",
        16: "A mão direita repete um acorde enquanto a mão esquerda salta. Deixe o Lá de cima continuar soando.",
      },
    },
  },
};
