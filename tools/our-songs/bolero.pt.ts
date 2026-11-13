/** The guide of *Boléro* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Ravel escreveu o Boléro para orquestra em 1928, e a editora Durand o publicou pela primeira vez em 1929. " +
    "Duas melodias se revezam sobre um único ritmo de caixa clara, que cresce do suave ao forte. " +
    "O filme 10, de 1979, deu grande destaque à peça, e as vendas dela dispararam.",
  funFact: "Ravel tocou a melodia pela primeira vez para o amigo Gustave Samazeuilh, com um dedo só, e perguntou se ela tinha algo de insistente.",
  versions: {
    common: {
      practice: [
        "Toque os 4 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. A melodia desce devagar até o Dó.",
        "Agora só a mão esquerda. Ela segura uma nota ou uma quinta por um compasso inteiro.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Toque suave e por igual, como uma flauta ao longe. O volume da melodia quase não deve mudar.",
        "Pegue o Dó longo com o dedo 5. Assim o dedo 2 alcança o Mi, mais abaixo, sem a mão se mover.",
        "No começo do compasso 6, toque o Mi de novo com o dedo 3. Assim o polegar fica pronto para o Dó.",
      ],
      tricky: {
        2: "O dedo 2 toca o Lá, depois o dedo 5 pega o Dó longo. Em seguida os dedos 4 e 5 tocam Si e Dó.",
        9: "Use a pausa curta para levar a mão esquerda para Fá e Dó, mais abaixo. A mão direita começa no Fá com o dedo 4.",
        12: "Leve o polegar direito do Ré para o Dó, logo abaixo. A mão esquerda cai em Dó e Sol depois da pausa.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: a fundamental, a quinta e depois as duas, uma em cada tempo.",
        "Toque os compassos 5 e 6 só com a mão direita. O polegar desce duas vezes.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Conte três tempos lentos em cada compasso. A mão esquerda toca uma vez em cada tempo, como um tambor suave.",
        "Depois do Mi, o polegar desce para o Ré. No compasso seguinte ele desce de novo, para o Dó.",
        "Pressione Dó e Mi juntos, e deixe as duas notas soarem até o fim.",
      ],
      tricky: {
        5: "Depois do Sol longo, os dedos 4 e 5 sobem até o Si. No final, o polegar toca o Mi e depois desce para o Ré.",
        6: "O dedo 2 toca o Mi, e o polegar toca o Ré. Depois o polegar desce para o Dó e fica ali.",
        9: "Use a pausa curta para levar a mão esquerda para o Fá, mais abaixo. A mão direita começa no Fá com o dedo 4.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda. Primeiro vem uma nota longa, depois três notas rápidas, como uma caixa clara.",
        "Toque só a mão direita nos compassos 9 a 16. Passe o polegar por baixo nas passagens rápidas.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal nos compassos 9 a 16.",
      ],
      tips: [
        "As três notas rápidas cabem no tempo de duas notas da melodia. Toque as três leves e regulares.",
        "Passe o polegar por baixo até o Fá, depois suba com os dedos 2 a 5 até o Dó.",
        "A melodia volta mais cheia. Deixe a nota de cima cantar sobre as notas mais graves.",
      ],
      tricky: {
        6: "O polegar desce do Ré para o Dó, enquanto a mão esquerda mantém o ritmo do tambor.",
        9: "A mão esquerda começa o baixo Alberti no Fá. Toque o Fá e o Lá da mão direita juntos, com os dedos 1 e 3.",
        17: "Toque Mi e Dó juntos com os dedos 1 e 4. A mão esquerda volta ao ritmo do tambor.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda nos 2 primeiros compassos. Caia firme em cada oitava, depois toque as notas rápidas leves.",
        "Toque a passagem rápida dos compassos 11 e 12 só com a mão direita, bem devagar.",
        "Toque só as oitavas da mão direita nos compassos 17 a 24. Mantenha a mão aberta, com o polegar e o dedo mínimo prontos.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o som crescer até o último acorde.",
      ],
      tips: [
        "No baixo stride, use cada pausa curta para saltar entre a oitava grave e o acorde.",
        "O polegar passa por baixo até o Ré, e o dedo 3 cruza de volta por cima até o Dó. Mantenha o pulso nivelado.",
        "Comece as oitavas suave e vá tocando mais forte, como a orquestra inteira faz na peça.",
      ],
      tricky: {
        9: "A mão esquerda salta da oitava grave de Fá até o acorde. Use cada pausa curta para o salto.",
        15: "Passe o polegar por baixo até o Sol e suba até o Ré. A mão esquerda salta entre o Sol e o acorde dele.",
        17: "As oitavas começam. Abra a mão, com o polegar no Dó e o dedo mínimo no Dó de cima.",
      },
    },
  },
};
