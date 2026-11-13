/** The play modes in Brazilian Portuguese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playModes as en } from "./play-modes.en";

export const playModes: Translation<typeof en> = {
  eyebrow: "Preparar, apontar, tocar",
  lead: "Escolha um modo, e o player se ajusta sozinho com a música, a ajuda e o visual certos. Depois é só tocar.",
  note: "Um modo muda algumas opções do player. Depois que ele começa, você pode desfazer tudo com um clique e mudar qualquer opção mais tarde.",
  traits: "O que ele ajusta",
  song: (title: string) => `Música: ${title}`,
  noSong: "Não precisa de música",
  start: "Começar",
  keyNames: ["Dó", "Ré", "Mi", "Fá", "Sol", "Lá", "Si"],
  groups: {
    fun: {
      heading: "Tocar por diversão",
      lead: "Pontos, faíscas e espetáculo. Escolha um e deixe o piano divertir você.",
    },
    learn: {
      heading: "Aprender uma música",
      lead: "Cada um ajuda você a aprender uma música do seu jeito, de uma mão por vez até a leitura da partitura.",
    },
    skills: {
      heading: "Treinar uma habilidade",
      lead: "Encontre notas rápido, toque livremente ou ouça como os acordes funcionam. Alguns nem precisam de música.",
    },
  },
  modes: {
    game: {
      tag: "Por diversão",
      name: "Modo jogo",
      text: "Cada nota que você acerta vale pontos, e o piano responde com brilhos. Busque um combo e supere sua melhor pontuação.",
      traits: ["Pontos e combos no nível fácil", "Faíscas, clarões e um piano que brilha", "Uma música curta e animada"],
      song: "In the Hall of the Mountain King, Iniciante",
    },
    challenge: {
      tag: "Para especialistas",
      name: "Desafio",
      text: "O modo jogo no nível mais difícil, sem nomes e sem dicas. Só uma execução sem erros alcança a pontuação máxima.",
      traits: ["Pontos e combos no nível difícil", "Sem nomes e sem dicas nas teclas", "Uma versão mais difícil da música"],
      song: "In the Hall of the Mountain King, Intermediário",
    },
    concert: {
      tag: "Relaxe",
      name: "Concerto",
      text: "O piano toca uma música para você, com chamas, estrelas e uma câmera em movimento. Assista ao espetáculo, ou toque junto se tiver coragem.",
      traits: ["Uma câmera de cinema", "Chamas, estrelas e faíscas", "Um piano que brilha e uma onda de luz"],
      song: "Carol of the Bells, Difícil",
    },
    playAlong: {
      tag: "Passo a passo",
      name: "Tocar junto",
      text: "A música espera você em cada nota. Cada nota mostra o nome e o dedo, e cada tecla mostra o nome.",
      traits: ["As notas esperam você", "Nomes das notas e dedos sobre as notas", "Nomes nas teclas brancas e pretas"],
      song: "Ode to Joy, Iniciante",
    },
    oneHand: {
      tag: "Comece aos poucos",
      name: "Uma mão por vez",
      text: "Aprenda primeiro a mão direita enquanto o app toca a esquerda. A música espera cada uma das suas notas.",
      traits: ["Só a mão direita toca", "O app toca a mão esquerda", "Troque de mão nas configurações, em “Suas mãos”"],
      song: "Jingle Bells, Iniciante",
    },
    readMusic: {
      tag: "Partitura",
      name: "Ler a partitura",
      text: "A partitura aparece acima do piano, e a música espera você. As notas não têm nomes, então você as lê na pauta.",
      traits: ["Partitura acima do piano", "As notas esperam você", "Uma luz suave atrás de cada nota que soa"],
      song: "Mary Had a Little Lamb, Iniciante",
    },
    slowSteady: {
      tag: "Prática",
      name: "Devagar e sempre",
      text: "Os quatro primeiros compassos se repetem, começando na metade da velocidade. Cada volta fica um pouco mais rápida, até você tocar na velocidade normal.",
      traits: ["Os quatro primeiros compassos se repetem", "Metade da velocidade primeiro, mais rápido a cada volta", "Uma contagem inicial antes de cada volta"],
      song: "Für Elise, Fácil",
    },
    rhythm: {
      tag: "Ritmo",
      name: "No compasso",
      text: "Um metrônomo marca a pulsação, e cada nota que você toca é avaliada pelo tempo certo. Sem nomes e sem espera, só a pulsação.",
      traits: ["Um metrônomo em cada tempo", "Cada nota avaliada pelo tempo certo", "A música nunca espera"],
      song: "Twinkle Twinkle Little Star, Fácil",
    },
    colourByFinger: {
      tag: "Dedos",
      name: "Cores por dedo",
      text: "Cada dedo tem sua própria cor, nas notas e nas teclas. A música espera enquanto você encontra o dedo certo.",
      traits: ["Notas coloridas por dedo", "As teclas acendem na cor do dedo", "As notas esperam você"],
      song: "Twinkle Twinkle Little Star, Iniciante",
    },
    noteTrainer: {
      tag: "Notas",
      name: "Treino de notas",
      text: "O app diz uma nota, e você a encontra nas teclas. No fim, você vê quais notas confundiu.",
      traits: ["Notas de Dó maior, do Dó central para cima", "Dez notas por rodada", "Uma lista das confusões no fim"],
    },
    freeJam: {
      tag: "Só você",
      name: "Improviso livre",
      text: "Sem música e sem regras. Toque o que quiser, e o piano responde com faíscas e luz. Grave e salve como arquivo MIDI.",
      traits: ["Tocar livremente, sem música", "Faíscas, estrelas e um piano que brilha", "Grave e salve o que você toca"],
    },
    chordExplorer: {
      tag: "Harmonia",
      name: "Explorador de acordes",
      text: "Cada acorde da música recebe o nome enquanto toca, com o grau dele na tonalidade. Blocos sobre as notas mostram o lugar de cada nota na escala.",
      traits: ["Nomes dos acordes enquanto a música toca", "Um numeral romano para cada acorde", "Graus da escala, com cada fundamental marcada"],
      song: "Canon in D, Fácil",
    },
  },
  toast: {
    started: (name: string) => `Modo ativado: ${name}.`,
    undo: "Desfazer",
    undone: "Suas configurações voltaram.",
  },
};
