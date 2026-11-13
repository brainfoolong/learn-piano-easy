/** A lesson page of *Learn Piano* in Brazilian Portuguese. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnLesson as en } from "./learn-lesson.en";

export const learnLesson: Translation<typeof en> = {
  stepOf: (step: number, count: number) => `Passo ${formatNumber("pt", step)} de ${formatNumber("pt", count)}`,
  leave: "Sair da lição",
  leaveDialog: {
    title: "Quer sair desta lição?",
    body: "Seu progresso nesta lição só é salvo quando ela termina.",
    stay: "Continuar aprendendo",
    leave: "Sair",
    close: "Fechar",
  },
  lacks: {
    touch: "Meu teclado não diferencia forte e suave",
    pedal: "Meu teclado não tem pedal",
  },
  loading: "Carregando a lição…",
  missing: "Esta lição não existe.",
  backToCourse: "Voltar ao curso",
  band: {
    continue: "Continuar",
    right: "Certo!",
    tryAgain: "Quase. Tente de novo.",
  },
  demo: {
    play: "Ouvir",
    playAgain: "Ouvir de novo",
    skip: "Pular",
    piano: "O piano tocando o exemplo",
    playing: "Tocando",
    slow: "Devagar",
    side: "Exibição lateral",
  },
  quiz: {
    answers: "Respostas",
    wrong: "Quase. Tente outra resposta.",
    hint: "A resposta destacada é a certa.",
  },
  findKey: {
    piano: "O piano. Toque a tecla que o passo indica.",
    marks: { next: "Esta tecla", correct: "Certo", mistake: "Esta não" },
    wrong: "Essa é outra tecla. Tente de novo.",
    hint: "A tecla destacada é a certa.",
    timeUp: "O tempo acabou.",
    secondsLeft: (seconds: number) => `${seconds} s`,
  },
  playNotes: {
    piano: "O piano. Toque a frase na ordem.",
    marks: { next: "Toque esta agora", correct: "Tocada", mistake: "Esta não" },
    wrong: "Essa é outra nota. Tente de novo.",
    hint: (note: string) => `A próxima nota é ${note}.`,
    hintChord: (...notes: string[]) => `Agora toque ${notes.slice(0, -1).join(", ")} e ${notes.at(-1)} juntos.`,
    expression: {
      "too-loud": "Tecla certa, mas forte demais. Toque suave.",
      "too-soft": "Tecla certa, mas suave demais. Toque forte.",
      "pedal-up": "Tecla certa. Mantenha o pedal pisado enquanto toca.",
      "pedal-down": "Tecla certa. Solte o pedal antes de tocar.",
    },
  },
  listen: {
    question: (n: number, count: number) => `Par ${formatNumber("pt", n)} de ${formatNumber("pt", count)}`,
    playAgain: "Ouvir de novo",
    group: "A segunda nota é mais aguda, mais grave ou igual?",
    answers: { higher: "Mais aguda", lower: "Mais grave", same: "Igual" },
    wrong: "Quase. Ouça de novo e tente outra resposta.",
    hint: "A resposta destacada é a certa.",
    roundAgain: (right: number, asked: number) =>
      `Você acertou ${formatNumber("pt", right)} de ${formatNumber("pt", asked)}. Vamos fazer mais uma rodada.`,
  },
  readNote: {
    staff: { treble: "Uma nota na pauta da clave de Sol", bass: "Uma nota na pauta da clave de Fá" },
    count: (n: number, total: number) => `Nota ${formatNumber("pt", n)} de ${formatNumber("pt", total)}`,
    answers: "Nomes das notas",
    letters: { C: "Dó", D: "Ré", E: "Mi", F: "Fá", G: "Sol", A: "Lá", B: "Si" },
    piano: "O piano. Toque a nota da pauta.",
    marks: { next: "Esta tecla", correct: "Certo", mistake: "Esta não" },
    wrongName: "Essa é outra nota. Olhe de novo.",
    wrongKey: "Essa é outra tecla. Tente de novo.",
    hintName: "O nome destacado é o certo.",
    hintKey: "A tecla destacada é a certa.",
    again: "Algumas ainda não saíram certas. Vamos passar por elas de novo.",
  },
  rhythmTap: {
    start: "Começar",
    listen: "Ouça: um compasso de contagem inicial.",
    tap: "Agora toque qualquer tecla a cada clique.",
    piano: "O painel de ritmo. Toque qualquer tecla na pulsação.",
    marks: { next: "Toque aqui", correct: "No tempo", mistake: "Fora do tempo" },
    short: (hits: number, beats: number) =>
      `Você tocou ${formatNumber("pt", hits)} de ${formatNumber("pt", beats)} tempos. Tente de novo.`,
    hint: "Toque no momento em que ouvir o clique. Os pontos piscam a cada tempo.",
    play: "Agora toque cada nota no clique dela.",
    phrasePiano: "As teclas. Toque a frase junto com os cliques.",
    shortNotes: (hits: number, notes: number) =>
      `${formatNumber("pt", hits)} de ${formatNumber("pt", notes)} notas vieram no tempo certo. Tente de novo.`,
    restSounded: "Uma tecla soou durante uma pausa. Levante o dedo e fique em silêncio ali.",
    phraseHint: "Toque cada nota no clique dela, e solte a tecla antes de uma pausa. Os pontos piscam a cada tempo.",
    pattern: {
      taps: (countIn: number, taps: number) =>
        `Contagem inicial de ${formatNumber("pt", countIn)} tempos. Depois toque ${formatNumber("pt", taps)} tempos.`,
      phrase: (countIn: number, ...parts: string[]) =>
        `Contagem inicial de ${formatNumber("pt", countIn)} tempos. Depois toque${parts.length > 0 ? `: ${parts.join(", ")}` : ""}.`,
      held: (note: string, beats: number) => `${note} por ${formatNumber("pt", beats)} tempos`,
      rest: (beats: number) => (beats === 1 ? "pausa" : `pausa de ${formatNumber("pt", beats)} tempos`),
    },
  },
  song: {
    play: "Tocar no player",
    goal: (percent: number) => `Toque com ${formatNumber("pt", percent)}% das notas certas.`,
    notYet: (percent: number) =>
      `A música espera você. Toque de novo quando quiser, e tente chegar a ${formatNumber("pt", percent)}%.`,
    played: (percent: number) => `Você tocou com ${formatNumber("pt", percent)}% das notas certas.`,
  },
  recap: {
    heading: "O que você aprendeu",
  },
  end: {
    heading: "Lição concluída",
    stars: (n: number) => `${formatNumber("pt", n)} de ${formatNumber("pt", 3)} estrelas`,
    again: "Tocar de novo",
    saving: "Salvando seu progresso…",
    saved: "Salvo neste dispositivo.",
    unsaved: "Este navegador não armazena nada, então este resultado dura até você fechar a aba.",
    failed: "Não foi possível salvar seu progresso.",
    retry: "Tentar de novo",
    xp: (number: string) => `+${number} XP`,
    level: (level: number, toNext: number) =>
      `Nível ${formatNumber("pt", level)}: faltam ${formatNumber("pt", toNext)} XP para o nível ${formatNumber("pt", level + 1)}`,
    skipOpened: (world: string) => `Todas as lições de “${world}” estão abertas agora.`,
    skipShort: (stars: number) =>
      `Este mundo se abre com ${formatNumber("pt", stars)} ${plural("pt", stars, { one: "estrela", many: "de estrelas", other: "estrelas" })}. Tente de novo quando quiser.`,
  },
  moment: {
    continue: "Continuar",
    level: {
      heading: "Você subiu de nível!",
      name: (level: number) => `Nível ${formatNumber("pt", level)}`,
      text: "Cada lição leva você mais longe. Continue assim!",
    },
    badge: { heading: "Nova medalha!" },
  },
};
