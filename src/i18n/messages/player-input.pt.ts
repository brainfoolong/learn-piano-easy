/** The player's input texts in Brazilian Portuguese. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerInput as en } from "./player-input.en";

export const playerInput: Translation<typeof en> = {
  percent: (n: number) => `${formatNumber("pt", n)}%`,
  devices: {
    heading: "Dispositivos MIDI",
    connect: "Conectar dispositivos MIDI",
    input: "Entrada MIDI",
    output: "Saída MIDI",
    everyInput: "Todas as entradas",
    noOutput: "Sem saída",
    notConnected: (name: string) => `${name} (desconectado)`,
    unsupported: "Este navegador não consegue acessar dispositivos MIDI. O Chrome, o Edge e o Firefox conseguem.",
    off: "Conecte seus dispositivos MIDI para tocar com um teclado MIDI.",
    asking: "Aguardando a permissão do navegador…",
    denied: "O acesso MIDI foi recusado. Permita o acesso nas configurações do site no navegador e conecte de novo.",
    noInputs: "Nenhum dispositivo MIDI está conectado.",
    inputsFound: (n: number) => {
      const count = formatNumber("pt", n);
      return plural("pt", n, {
        one: `${count} entrada MIDI encontrada.`,
        many: `${count} entradas MIDI encontradas.`,
        other: `${count} entradas MIDI encontradas.`,
      });
    },
  },
  freePlay: {
    heading: "Tocar livremente",
    record: "Gravar",
    stop: "Parar",
    stopRecording: "Parar a gravação",
    save: "Salvar",
    saveTitle: "Salvar como arquivo MIDI",
    recording: (clock: string) => `Gravando ${clock}`,
    recorded: (n: number) => {
      const count = formatNumber("pt", n);
      return plural("pt", n, {
        one: `${count} nota gravada. Selecione “Salvar” para gerar um arquivo MIDI.`,
        many: `${count} notas gravadas. Selecione “Salvar” para gerar um arquivo MIDI.`,
        other: `${count} notas gravadas. Selecione “Salvar” para gerar um arquivo MIDI.`,
      });
    },
    hint: "Toque livremente, ou selecione “Gravar” para registrar o que você toca.",
  },
  history: {
    empty: "Ainda não há tentativas concluídas desta música. Toque até o fim com a pontuação ativada.",
    hands: { both: "As duas", right: "Direita", left: "Esquerda" },
    columns: {
      date: "Data",
      speed: "Velocidade",
      hands: "Mãos",
      accuracy: "Precisão",
      hits: "Acertos",
      perfect: "Perfeitas",
      misses: "Perdidas",
      mistakes: "Erros",
    },
  },
  keyBinding: {
    help: "Selecione a tecla de uma nota e depois pressione a tecla do computador que vai tocá-la. Esc fecha esta janela.",
    open: "Mudar teclas",
  },
  learnRange: {
    lowest: "Toque sua tecla mais grave…",
    highest: "Agora sua tecla mais aguda…",
    start: "Detectar pelo seu teclado",
    title: "Detectar a extensão pelo seu teclado",
  },
  pitchPractice: {
    heading: "Treino de ouvido",
    hear: "Ouvir",
    hearTitle: "Ouvir a nota",
    again: "Começar de novo",
    againTitle: "Começar uma nova rodada",
    empty: "Nenhuma nota para perguntar",
    emptyHint: "A tonalidade não tem notas entre as notas escolhidas no seu teclado.",
    done: "Rodada concluída",
    found: (n: number, count: number) => `${formatNumber("pt", n)} de ${formatNumber("pt", count)} notas encontradas.`,
    play: (note: string) => `Toque ${note}`,
    progress: (i: number, count: number) => `Nota ${formatNumber("pt", i)} de ${formatNumber("pt", count)}`,
    wrong: (note: string) => `Não é ${note}. Tente de novo.`,
    right: (note: string) => `Certo, é ${note}.`,
    results: "Resultados do treino de ouvido",
    mistakes: (n: number, count: number) => {
      const notes = `${formatNumber("pt", count)} ${plural("pt", count, { one: "nota", many: "notas", other: "notas" })}`;
      if (n === 0) return `Nenhum erro em ${notes}.`;
      return `${formatNumber("pt", n)} ${plural("pt", n, { one: "erro", many: "erros", other: "erros" })} em ${notes}.`;
    },
    columns: { note: "Nota", asked: "Perguntada", mistakes: "Erros", playedInstead: "Tocada no lugar" },
    firstTry: (n: number, count: number) => `${formatNumber("pt", n)} de ${formatNumber("pt", count)} encontradas na primeira tentativa.`,
  },
  scoring: {
    heading: "Pontuação",
    judgements: { perfect: "Perfeito", hit: "Acerto", mistake: "Erro", miss: "Perdida" },
    counts: (hits: number, perfect: number, misses: number, mistakes: number) =>
      `Acertos ${formatNumber("pt", hits)} · Perfeitas ${formatNumber("pt", perfect)} · Perdidas ${formatNumber("pt", misses)} · Erros ${formatNumber("pt", mistakes)}`,
    history: "Histórico",
    historyTitle: "Suas tentativas desta música",
    readError: "Não foi possível ler o histórico.",
    saved: "Tentativa salva no histórico.",
    saveError: "Não foi possível salvar esta tentativa.",
  },
  game: {
    levels: { easy: "Fácil", normal: "Normal", hard: "Difícil" },
    words: {
      perfect: "Perfeito",
      great: "Ótimo",
      good: "Bom",
      hold: "Segure",
      release: "Limpo",
      wrong: "Nota errada",
      miss: "Perdida",
      short: "Curta demais",
      long: "Longa demais",
      late: "Atrasada",
    },
    name: "Jogo",
    score: "Pontuação",
    combo: "combo",
    multiplier: "Multiplicador",
    held: (points: string) => `Segure ${points}`,
    burst: (multiplier: number) => `Combo ×${formatNumber("pt", multiplier)}!`,
    inARow: (combo: number) => `${formatNumber("pt", combo)} seguidas`,
    announce: (multiplier: number, combo: number) =>
      `Combo vezes ${formatNumber("pt", multiplier)}, ${formatNumber("pt", combo)} seguidas.`,
    result: "Resultado da tentativa",
    complete: "Tentativa concluída",
    bestCombo: (combo: number) => `Melhor combo ${formatNumber("pt", combo)}`,
    stats: {
      perfect: "Perfeito",
      great: "Ótimo",
      good: "Bom",
      wrong: "Erradas",
      miss: "Perdidas",
      late: "Atrasadas",
      short: "Curtas demais",
      long: "Longas demais",
    },
    helped: "Com “Esperar suas notas”",
    close: "Fechar",
    closeName: "Fechar o resultado da tentativa",
  },
  pdf: {
    noSong: "Abra uma música primeiro e depois salve as notas dela como PDF.",
    intro: (title: string) => `Salva as notas de ${title} que caem sobre um piano, com alguns segundos da música em cada página.`,
    secondsPerPage: "Segundos por página",
    background: "Usar cores de fundo",
    pages: (pages: number, seconds: number) =>
      `${formatNumber("pt", pages)} ${plural("pt", pages, { one: "página", many: "páginas", other: "páginas" })}, cada uma com ${formatNumber("pt", seconds)} segundos da música.`,
    save: "Salvar PDF",
    pageHeading: (title: string, from: string, to: string, page: number, count: number) =>
      `${title}   ${from} a ${to}   página ${formatNumber("pt", page)} de ${formatNumber("pt", count)}`,
  },
};
