/** The guide of *Sarabande in D minor* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Handel escreveu esta suíte para cravo quando tinha pouco mais de vinte anos, e ela foi publicada pela primeira vez em 1733. " +
    "Sua sarabanda é uma dança lenta e solene, em três tempos. " +
    "O filme Barry Lyndon (1975), de Stanley Kubrick, usa a peça num arranjo para orquestra.",
  funFact: "O número de catálogo da suíte, HWV 437, vem do Händel-Werke-Verzeichnis, a lista de todas as obras de Handel.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 4 a 8. No compasso 4, o polegar sobe para o Lá.",
        "Agora só a mão esquerda. Ela segura uma nota grave em cada compasso.",
        "Junte as mãos nos 8 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Conte três tempos lentos em cada compasso. A nota curta vem logo antes do compasso seguinte.",
        "Esta é uma dança lenta e altiva. Toque cada nota longa com calma e som cheio.",
        "Mantenha o polegar perto do Lá e do Dó sustenido. Seus dedos 2 a 4 sobem até o Fá e voltam.",
      ],
      tricky: {
        4: "Aproveite a pausa para levar o polegar direito até o Lá. Ele fica ali até o compasso 8.",
        9: "Depois da pausa, a mão direita desce de novo. O dedo 2 cai no Fá.",
        12: "Como no compasso 4, aproveite a pausa para levar o polegar direito até o Lá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Primeiro vem uma nota grave, e um acorde de duas notas responde.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar e com o pedal.",
        "Toque o final, onde a mão esquerda muda de acorde a cada tempo.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Mantenha o pedal pisado durante cada compasso inteiro, e troque o pedal bem na barra de compasso.",
        "Toque a nota grave um pouco mais forte que o acorde depois dela. É ela que conduz a dança.",
        "Nestes dois compassos não há pedal, para os acordes soarem limpos. Segure cada um com os dedos.",
      ],
      tricky: {
        3: "Aproveite a pausa curta para a mão esquerda saltar para baixo, até o Fá. Quem toca é o dedo 5.",
        6: "Aproveite a pausa para levar a mão esquerda de volta para cima. O dedo 4 toca o Ré.",
        9: "A mão esquerda sobe para o Ré, e a mão direita desce de volta para o Fá.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele fluir sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos 4 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave e por igual, para a melodia lenta cantar por cima.",
        "No fim deste compasso, o baixo passa para Ré maior. Troque o pedal ali.",
        "A melodia é a nota de cima de cada terça. Por isso, deixe o dedo de cima conduzir.",
      ],
      tricky: {
        11: "Toque Fá e Lá com os dedos 2 e 4, para os dedos 3 e 5 ficarem prontos para Sol e Si bemol.",
        15: "Primeiro toque devagar as notas deste compasso. Os dedos mudam a cada nota.",
        16: "Abra a mão direita sobre Fá, Lá e Ré, com os dedos 1, 2 e 5.",
      },
    },
    legendary: {
      practice: [
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só a mão esquerda nos 8 primeiros compassos. Levante a mão antes de cada salto.",
        "Toque só os arpejos da mão esquerda. O polegar passa por baixo, e o dedo 3 cruza por cima.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "O Lá faz atrito de propósito com o Si bemol do baixo. Deixe doer um instante, e depois siga em frente.",
        "Levante a mão direita um pouco antes de cada acorde novo, para ela cair no tempo.",
      ],
      tricky: {
        9: "Aqui a melodia salta uma oitava para cima. Caia nas quatro notas ao mesmo tempo.",
        14: "Depois do acorde grande, o dedo 2 pega o Lá agudo, e o dedo 5 se estica até o Ré.",
        15: "Os dedos mudam a cada nota deste compasso. Pratique devagar, em separado.",
      },
    },
  },
};
