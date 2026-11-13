/** The player's settings from the notes to the offline files, in Brazilian Portuguese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: Translation<typeof en> = {
  // Notes
  showHitKeys: {
    label: "Iluminar as notas que soam",
    help: "Uma nota brilha na sua própria cor enquanto soa.",
  },
  noteWidth: {
    label: "Largura da nota (% da tecla)",
    help: "A largura de cada nota que cai, medida em relação à sua tecla.",
  },
  roundedNotes: {
    label: "Notas arredondadas",
    help: "Deixa os cantos das notas que caem arredondados.",
  },
  noteBorderRadius: {
    label: "Raio dos cantos (%)",
    help: "O quanto os cantos de uma nota são arredondados.",
  },
  minNoteHeight: {
    label: "Comprimento mínimo da nota",
    help: "Em larguras de tecla, para que uma nota muito curta continue visível.",
  },
  strokeNotes: {
    label: "Brilho na borda",
    help: "Uma borda de luz na própria cor de cada nota.",
  },
  strokeNotesWidth: {
    label: "Força do brilho na borda",
    help: "O quanto brilha a borda de luz em volta de cada nota.",
  },
  noteEndedShrink: {
    label: "Notas tocadas afundam na tecla",
    help: "Uma nota afunda na sua tecla enquanto soa. Sem esta opção, ela segue além das teclas.",
  },
  playedNoteFalloffSpeed: {
    label: "Até onde as notas tocadas passam das teclas",
    help: "Em larguras de tecla, quando as notas tocadas não afundam.",
  },
  showSustainedNotes: {
    label: "Mostrar quanto tempo o pedal segura uma nota",
    help: "Uma cauda fina sai de cada nota que o pedal segura.",
  },
  sustainedNotesOpacity: {
    label: "Brilho da cauda do pedal (%)",
    help: "O quanto as caudas do pedal aparecem atrás das notas.",
  },

  // Lanes
  bgCol1: {
    label: "Cor da pista",
    help: "A cor das pistas acima das teclas brancas.",
  },
  bgCol5: {
    label: "Cor da pista das teclas pretas",
    help: "A cor das pistas acima das teclas pretas.",
  },
  bgCol3: {
    label: "Cor do separador de oitavas",
    help: "A cor da linha entre cada Si e o Dó seguinte.",
  },
  drawMeasureLines: {
    label: "Barras de compasso",
    help: "Uma linha através das pistas no início de cada compasso.",
  },
  measureLineThickness: {
    label: "Espessura da barra de compasso",
    help: "A espessura da linha de cada compasso.",
  },
  measureLineColor: {
    label: "Cor da barra de compasso",
    help: "A cor da linha de cada compasso.",
  },
  enableDrawBeatLines: {
    label: "Linhas dos tempos",
    help: "Uma linha mais fraca através das pistas em cada tempo.",
  },
  beatLineThickness: {
    label: "Espessura das linhas dos tempos",
    help: "A espessura da linha em cada tempo.",
  },
  beatLineColor: {
    label: "Cor das linhas dos tempos",
    help: "A cor da linha em cada tempo.",
  },
  enableDrawMeasureNumbers: {
    label: "Números dos compassos",
    help: "O número de cada compasso, ao lado da sua linha.",
  },
  measureNumbersColor: {
    label: "Cor dos números dos compassos",
    help: "A cor dos números dos compassos.",
  },
  highlightInputLanes: {
    label: "Iluminar as pistas das teclas pressionadas",
    help: "A pista acima de uma tecla fica mais clara enquanto você a mantém pressionada.",
  },
  inputLaneOpacity: {
    label: "Força da luz na pista",
    help: "O quanto uma pista clareia enquanto você mantém a tecla dela pressionada.",
  },
  showMarkersSong: {
    label: "Marcadores",
    help: "Uma linha com seu texto onde a música nomeia uma parte, como uma estrofe.",
  },
  showSustainPeriods: {
    label: "Trechos com pedal",
    help: "Uma faixa através das pistas enquanto a música segura o pedal de sustentação.",
  },
  showSustainOnOffs: {
    label: "Pisar e soltar o pedal",
    help: "Uma linha marcada com “Ped.” onde se pisa no pedal, e com “✱” onde ele é solto.",
  },
  showSustainChannels: {
    label: "Canais do pedal",
    help: "Mostra o canal MIDI de cada trecho com pedal.",
  },

  // Particles
  showParticles: {
    label: "Partículas",
    help: "Efeitos sobem de cada tecla que soa. Eles pesam na placa de vídeo, por isso começam desativados.",
  },
  particlesFlames: {
    label: "Chamas",
    help: "Cada tecla arde com a sua nota, na cor da nota. É o efeito que mais pesa na placa de vídeo.",
  },
  particlesSparks: {
    label: "Faíscas",
    help: "Pequenas faíscas brilhantes sobem voando de cada tecla.",
  },
  particlesEmbers: {
    label: "Brasas",
    help: "Brasas acesas sobem devagar de cada tecla.",
  },
  particlesStars: {
    label: "Estrelas",
    help: "Pequenas estrelas e pontos giram, sobem de cada tecla e voltam a cair.",
  },
  particlesCustom: {
    label: "Suas próprias partículas",
    help: "Partículas feitas com as opções abaixo.",
  },
  particlesTexture: {
    label: "Forma",
    help: "A imagem que cada uma das suas próprias partículas mostra.",
    options: { circle: "Brilho", spark: "Faísca", smoke: "Fumaça", star: "Estrela", ring: "Anel" },
  },
  particlesBlending: {
    label: "Mesclagem",
    help: "Somar luz clareia o que está atrás, como o fogo. Cobrir esconde, como a fumaça.",
    options: { additive: "Somar luz", normal: "Cobrir" },
  },
  particleOverrideColor: {
    label: "Cor própria",
    help: "Sem esta opção, cada partícula fica com a cor da sua tecla.",
  },
  particleColor: {
    label: "Cor",
    help: "A cor das suas partículas, quando elas têm cor própria.",
  },
  particlesOpacity: {
    label: "Opacidade",
    help: "O quanto cada partícula parece sólida. Valores menores deixam ver mais através dela.",
  },
  particleSize: {
    label: "Tamanho",
    help: "Em larguras de tecla.",
  },
  particleAmount: {
    label: "Quantidade",
    help: "Partículas por tecla a cada quadro, a 60 quadros por segundo.",
  },
  particleLife: {
    label: "Duração (s)",
    help: "Quanto tempo cada partícula dura antes de sumir.",
  },
  particleSpeed: {
    label: "Velocidade do movimento",
    help: "Acelera ou desacelera todo o movimento das partículas.",
  },
  particleFadeOut: {
    label: "Esmaecer",
    help: "A parte final da sua duração em que uma partícula vai sumindo.",
  },
  particlesShrink: {
    label: "Encolher",
    help: "A parte do seu tamanho que uma partícula perde. Abaixo de 0, ela cresce.",
  },
  particleSpeedX: {
    label: "Velocidade lateral",
    help: "A maior velocidade para os lados, em larguras de tecla por segundo.",
  },
  particleSpeedY: {
    label: "Velocidade de subida",
    help: "A maior velocidade de subida, em larguras de tecla por segundo.",
  },
  particlesFriction: {
    label: "Atrito",
    help: "O quanto as partículas perdem velocidade enquanto voam.",
  },
  particleRising: {
    label: "Gravidade",
    help: "Acima de 0, as partículas voltam a cair. Abaixo de 0, sobem mais rápido.",
  },
  particlesRotation: {
    label: "Ângulo (°)",
    help: "O quanto cada partícula está girada quando começa.",
  },
  particlesRotationRandom: {
    label: "Ângulo aleatório (°)",
    help: "Cada partícula começa girada por um valor aleatório de até este ângulo.",
  },
  particlesRotationSpeed: {
    label: "Giro (° por segundo)",
    help: "A rapidez com que cada partícula gira enquanto voa.",
  },
  particleNoiseResX: {
    label: "Detalhe do desvio lateral",
    help: "Valores maiores deixam o desvio lateral das partículas de teclas vizinhas mais diferente.",
  },
  particleNoiseStrengthX: {
    label: "Desvio lateral",
    help: "O quanto as partículas se desviam ao acaso para os lados.",
  },
  particleNoiseResY: {
    label: "Detalhe do desvio na subida",
    help: "Valores maiores fazem o desvio na subida de teclas vizinhas variar mais.",
  },
  particleNoiseStrengthY: {
    label: "Desvio na subida",
    help: "O quanto as partículas se desviam ao acaso para cima e para baixo enquanto sobem.",
  },
  particleNoiseStrengthSize: {
    label: "Variação de tamanho",
    help: "O quanto cada partícula cresce e encolhe ao acaso.",
  },
  turbulenceXAmplitude: {
    label: "Balanço lateral",
    help: "O quanto as partículas balançam de um lado para o outro.",
  },
  turbulenceXFrequency: {
    label: "Taxa do balanço lateral",
    help: "Balanços por segundo.",
  },
  turbulenceYAmplitude: {
    label: "Balanço na subida",
    help: "O quanto as partículas balançam para cima e para baixo enquanto sobem.",
  },
  turbulenceYFrequency: {
    label: "Taxa do balanço na subida",
    help: "Balanços por segundo.",
  },
  particleYOffset: {
    label: "Posição inicial",
    help: "Em larguras de tecla acima da tecla.",
  },
  particleDistributionX: {
    label: "Início na largura da tecla",
    help: "Onde, na largura da sua tecla, cada partícula começa.",
    options: { across: "Em toda a largura", centre: "No centro" },
  },
  particleDistributionXSpread: {
    label: "Espalhamento inicial (%)",
    help: "A parte da largura da tecla em que as partículas começam.",
  },
  particleDistributionY: {
    label: "Início ao longo da tecla",
    help: "Onde, ao longo da sua tecla, cada partícula começa.",
    options: { hitLine: "Na linha de acerto", key: "Em qualquer ponto ao longo do topo" },
  },
  particleDistributionZ: {
    label: "Camada",
    help: "Se as teclas escondem as partículas ou se as partículas cobrem o piano.",
    options: { behind: "Escondidas pelas teclas", front: "Na frente do piano" },
  },

  // Labels
  pitchNotationSystem: {
    label: "Nomes das notas",
    help: "Como os nomes nas notas e nas teclas são escritos. Dó é sempre C.",
    options: { auto: "Como no meu idioma", letters: "Letras: C D E", solfege: "Solfejo: Dó Ré Mi" },
  },
  noteLabel: {
    label: "Rótulos das notas",
    help: "Os textos em cada nota: escolha quantos quiser, ou nenhum. Selecione uma nota e pressione uma tecla de 1 a 5 para definir o dedo dela.",
    options: { name: "Nome da nota", keyBinding: "Tecla do computador", fingering: "Dedo" },
  },
  noteLabelColor: {
    label: "Cor dos rótulos das notas",
    help: "A cor do texto em cada nota.",
  },
  showKeyNamesOnPianoWhite: {
    label: "Nomes nas teclas brancas",
    help: "Cada tecla branca mostra o nome da sua nota.",
  },
  showKeyNamesOnPianoBlack: {
    label: "Nomes nas teclas pretas",
    help: "Cada tecla preta mostra o nome da sua nota.",
  },
  showPianoKeyNameFlats: {
    label: "Teclas pretas com bemóis",
    help: "Ré♭ no lugar de Dó♯, só nas teclas. As notas seguem a tonalidade da música.",
  },
  octaveLabel: {
    label: "Oitava nos nomes das teclas",
    help: "Acrescenta o número da oitava aos nomes nas teclas, como Dó4.",
    options: { none: "Nenhuma", all: "Em todas as teclas", onlyC: "Só no Dó" },
  },
  showKeyBindingsOnPiano: {
    label: "Teclas do computador no piano",
    help: "Cada tecla mostra a tecla do computador que a toca.",
  },
  showChords: {
    label: "Nomes dos acordes",
    help: "Nomeia cada acorde que as notas formam, incluindo as que o pedal segura.",
  },
  chordLabelStyle: {
    label: "Estilo do nome do acorde",
    help: "Como cada nome de acorde é desenhado.",
    options: { bar: "Barra sobre as teclas do acorde", ribbon: "Faixa através das pistas" },
  },
  chordLabelPlacement: {
    label: "Posição do nome do acorde",
    help: "O topo é a ponta do acorde mais longe do piano.",
    options: {
      above: "Acima do acorde",
      top: "No topo",
      middle: "No meio",
      bottom: "Na base",
      below: "Abaixo do acorde",
    },
  },
  showChordRomanNumerals: {
    label: "Números romanos",
    help: "O grau de cada acorde na tonalidade da música, como V7.",
  },
  chordBlocks: {
    label: "Blocos nas notas",
    help: "Um bloco acima de cada nota de um acorde nomeado diz o que a nota é.",
    options: { none: "Nenhum", tone: "Nota do acorde", degree: "Grau da escala" },
  },
  chordToneNotation: {
    label: "Notação dos blocos",
    help: "Se os blocos de notas usam sinais curtos ou palavras inteiras.",
    options: { simple: "Simples: R ♭3 5", full: "Completa: Fundamental ♭3.ª 5.ª" },
  },
  chordMarkRoot: {
    label: "Marcar a fundamental",
    help: "A fundamental de cada acorde leva um bloco dourado.",
  },

  // Lyrics
  lyricsEnabled: {
    label: "Letra",
    help: "Mostra a letra de uma música, quando ela tem, uma linha por vez.",
  },
  lyricsBackground: {
    label: "Cor de fundo",
    help: "A cor da faixa atrás da letra.",
  },
  lyricsFontColor: {
    label: "Cor do texto",
    help: "A cor das palavras que ainda vão ser cantadas.",
  },
  lyricsFontColorPlayed: {
    label: "Cor do texto cantado",
    help: "A cor das palavras já cantadas.",
  },
  lyricsFontColorActive: {
    label: "Cor da sílaba cantada agora",
    help: "A sílaba que está sendo cantada se destaca nesta cor.",
  },
  lyricsFontSize: {
    label: "Tamanho do texto (px)",
    help: "O tamanho em que a letra é escrita.",
  },
  lyricsY: {
    label: "Posição vertical (% a partir do topo)",
    help: "Onde fica o meio da linha da letra na cena. 0 é a borda de cima.",
  },
  lyricsCursorEnabled: {
    label: "Cursor",
    help: "Um ponto sobre a sílaba cantada agora.",
  },
  lyricsBouncingCursor: {
    label: "Cursor saltitante",
    help: "O ponto pula de cada sílaba para a seguinte.",
  },

  // Coding
  enableColorCodingNote: {
    label: "Colorir as notas pela altura",
    help: "Cada uma das 12 alturas tem sua própria cor.",
  },
  enableColorCodingNotePiano: {
    label: "Colorir as teclas pela altura",
    help: "Cada tecla se ilumina na cor da sua altura enquanto soa.",
  },
  colorCodeNote0: { label: "Dó", help: "A cor de cada Dó." },
  colorCodeNote1: { label: "Dó♯ ou Ré♭", help: "A cor de cada Dó♯ ou Ré♭." },
  colorCodeNote2: { label: "Ré", help: "A cor de cada Ré." },
  colorCodeNote3: { label: "Ré♯ ou Mi♭", help: "A cor de cada Ré♯ ou Mi♭." },
  colorCodeNote4: { label: "Mi", help: "A cor de cada Mi." },
  colorCodeNote5: { label: "Fá", help: "A cor de cada Fá." },
  colorCodeNote6: { label: "Fá♯ ou Sol♭", help: "A cor de cada Fá♯ ou Sol♭." },
  colorCodeNote7: { label: "Sol", help: "A cor de cada Sol." },
  colorCodeNote8: { label: "Sol♯ ou Lá♭", help: "A cor de cada Sol♯ ou Lá♭." },
  colorCodeNote9: { label: "Lá", help: "A cor de cada Lá." },
  colorCodeNote10: { label: "Lá♯ ou Si♭", help: "A cor de cada Lá♯ ou Si♭." },
  colorCodeNote11: { label: "Si", help: "A cor de cada Si." },
  enableColorCodingFinger: {
    label: "Colorir as notas pelo dedo",
    help: "Uma nota que nenhuma mão toca mantém sua outra cor.",
  },
  enableColorCodingFingerPiano: {
    label: "Colorir as teclas pelo dedo",
    help: "Cada tecla se ilumina na cor do dedo que a toca.",
  },
  colorCodeFinger1Right: { label: "Mão direita, dedo 1", help: "A cor das notas que o polegar direito toca." },
  colorCodeFinger2Right: { label: "Mão direita, dedo 2", help: "A cor das notas que o indicador direito toca." },
  colorCodeFinger3Right: { label: "Mão direita, dedo 3", help: "A cor das notas que o médio direito toca." },
  colorCodeFinger4Right: { label: "Mão direita, dedo 4", help: "A cor das notas que o anelar direito toca." },
  colorCodeFinger5Right: { label: "Mão direita, dedo 5", help: "A cor das notas que o mínimo direito toca." },
  colorCodeFingerDefaultRight: {
    label: "Mão direita, sem dedo",
    help: "A cor das notas da mão direita sem dedo definido.",
  },
  colorCodeFinger1Left: { label: "Mão esquerda, dedo 1", help: "A cor das notas que o polegar esquerdo toca." },
  colorCodeFinger2Left: { label: "Mão esquerda, dedo 2", help: "A cor das notas que o indicador esquerdo toca." },
  colorCodeFinger3Left: { label: "Mão esquerda, dedo 3", help: "A cor das notas que o médio esquerdo toca." },
  colorCodeFinger4Left: { label: "Mão esquerda, dedo 4", help: "A cor das notas que o anelar esquerdo toca." },
  colorCodeFinger5Left: { label: "Mão esquerda, dedo 5", help: "A cor das notas que o mínimo esquerdo toca." },
  colorCodeFingerDefaultLeft: {
    label: "Mão esquerda, sem dedo",
    help: "A cor das notas da mão esquerda sem dedo definido.",
  },

  // Sheet
  enableSheet: {
    label: "Mostrar a partitura",
    help: "A música em partitura, sobre a parte de cima da cena.",
  },
  enableFullSheet: {
    label: "Só a partitura",
    help: "A partitura ocupa a tela no lugar da cena.",
  },
  sheetMeasureScroll: {
    label: "Rolar a partitura com a música",
    help: "Sem esta opção, os compassos ficam em linhas, e a linha que está tocando fica à vista.",
  },
  sheetMeasureNumbers: {
    label: "Números dos compassos",
    help: "Onde a partitura mostra o número de cada compasso.",
    options: { off: "Nenhum", lineStart: "No início de cada linha", every: "Em todos os compassos" },
  },
  enableGrandStaff: {
    label: "Unir duas pautas com uma chave",
    help: "A chave da pauta dupla, no início de cada linha.",
  },
  sheetAutoClef: {
    label: "Escolher cada clave pelas notas",
    help: "Sem esta opção, a primeira pauta leva clave de Sol e as outras, clave de Fá.",
  },
  overrideTimeSignature: {
    label: "Fórmula de compasso",
    help: "A fórmula de compasso em que a partitura é escrita. Escolha uma quando a da música estiver errada.",
    options: {
      auto: "Da música",
      "2/4": "2/4",
      "3/4": "3/4",
      "4/4": "4/4",
      "5/4": "5/4",
      "2/2": "2/2",
      "6/8": "6/8",
      "9/8": "9/8",
      "12/8": "12/8",
    },
  },
  sheetMinNoteDenom: {
    label: "Figura mais curta",
    help: "A nota mais curta que a partitura escreve. Tercinas dessa figura ainda cabem.",
    options: { "4": "Semínima", "8": "Colcheia", "16": "Semicolcheia", "32": "Fusa", "64": "Semifusa" },
  },
  hideRestsBelow: {
    label: "Esconder pausas mais curtas que",
    help: "Deixa de fora as pausas curtas, para a partitura ficar mais fácil de ler.",
    options: { none: "Não esconder", "4": "Uma semínima", "8": "Uma colcheia", "16": "Uma semicolcheia", "32": "Uma fusa" },
  },
  renderSheetCursor: {
    label: "Cursor",
    help: "Uma linha marca o ponto da música.",
  },
  sheetColorActiveNotes: {
    label: "Colorir as notas que soam",
    help: "As notas na partitura mudam de cor enquanto soam.",
  },
  sheetColorByTrack: {
    label: "Notas que soam na cor da sua faixa",
    help: "Sem esta opção, elas ficam com a cor abaixo.",
  },
  sheetActiveNotesColor: {
    label: "Cor das notas que soam",
    help: "A cor de uma nota na partitura enquanto ela soa.",
  },
  sheetHighlightActiveNotes: {
    label: "Brilho atrás das notas que soam",
    help: "Uma luz suave aparece atrás de cada nota na partitura enquanto ela soa.",
  },
  sheetActiveHighlightColor: {
    label: "Cor do brilho",
    help: "A cor da luz atrás das notas que soam.",
  },
  sheetActiveGrowEffect: {
    label: "Notas que soam crescem",
    help: "Uma nota na partitura fica maior enquanto soa.",
  },
  sheetRenderInputNotes: {
    label: "Desenhar as notas que você toca",
    help: "Cada tecla pressionada aparece como uma nota no cursor.",
  },
  sheetShowHoverInfo: {
    label: "Nomear as notas sob o ponteiro",
    help: "Aponte para uma nota ou um acorde na partitura para ver os nomes das suas notas.",
  },
  sheetBgColor: {
    label: "Cor do papel",
    help: "A cor atrás da partitura. Em papel escuro, a tinta fica clara.",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "Salvar as notas em PDF",
    help: "Abre uma janela para salvar as notas que caem da música aberta como páginas, no comprimento que você escolher.",
  },
  exportPdfBackground: {
    label: "Usar as cores de fundo",
    help: "As páginas ficam com as cores das pistas e das teclas. Sem esta opção, são impressas em papel branco.",
  },

  // Offline
  offlineCache: {
    label: "Arquivos sem conexão",
    help: "Mostra o tamanho do app, das músicas e dos sons do piano, e salva ou remove cada um.",
  },
  autoCacheSongs: {
    label: "Manter as músicas salvas",
    help: "Salva agora todas as músicas de exemplo, e de novo após cada atualização.",
  },
  autoCacheSounds: {
    label: "Manter os sons do piano salvos",
    help: "Salva agora todos os conjuntos de sons, e de novo após cada atualização.",
  },
};
