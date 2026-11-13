/** The player's settings up to the notes, in Brazilian Portuguese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsPlay as en } from "./player-settings-play.en";

export const playerSettingsPlay: Translation<typeof en> = {
  // Site
  siteTheme: {
    label: "Tema do site",
    help: "As cores das páginas do site. O tema da cena define as cores do piano e das pistas.",
    options: { system: "Padrão do sistema", light: "Claro", dark: "Escuro" },
  },
  language: {
    label: "Idioma",
    help: "Com “Padrão do navegador”, o site abre no idioma do navegador, se esse idioma estiver disponível.",
    options: { auto: "Padrão do navegador" },
  },
  learnSounds: {
    label: "Sons de recompensa",
    help: "Os sons de Aprenda piano para um passo concluído, uma estrela, um novo nível e uma medalha. O piano sempre soa.",
  },
  learnDailyGoal: {
    label: "Meta diária",
    help: "O XP que um dia de Aprenda piano precisa para manter sua sequência.",
    options: { "10": "10 XP", "20": "20 XP", "30": "30 XP", "50": "50 XP" },
  },
  learnSetupDone: {
    label: "Primeira visita concluída",
    help: "Aprenda piano mostra uma breve configuração inicial na sua primeira visita, até ela ser concluída.",
  },
  expertControls: {
    label: "Ferramentas avançadas",
    help: "O botão Avançado da barra de controle mostra a velocidade, a transposição, o primeiro e o último compasso da repetição, o ajuste e o deslocamento lateral da exibição.",
  },
  // General
  theme: {
    label: "Tema da cena",
    help: "Define as cores do piano e das pistas. O tema do site, na barra superior, define o resto do player.",
    options: { dark: "Escuro", light: "Claro" },
  },
  yourData: {
    label: "Fazer backup ou restaurar seus dados",
    help: "Abre a página que salva suas configurações, seu progresso, suas músicas e suas pontuações em um arquivo, e os restaura.",
  },
  startWithLastSong: {
    label: "Reabrir a última música ao iniciar",
    help: "Abre a música que você tocou por último sempre que você abre o player.",
  },
  saveIndexedDb: {
    label: "Manter seus arquivos neste navegador",
    help: "As músicas que você abre do computador continuam na sua biblioteca depois que a página recarrega.",
  },
  disableHotkeys: {
    label: "Desativar os atalhos do teclado",
    help: "As teclas do computador deixam de reproduzir, avançar, voltar ou repetir a música.",
  },
  hotKeyBindings: {
    label: "Atalhos do teclado",
    help: "As teclas que reproduzem, avançam, voltam, repetem e aplicam zoom na música.",
  },
  leadIn: {
    label: "Tempo antes da primeira nota (s)",
    help: "Cada música começa esse tempo antes da primeira nota, e espera o mesmo tempo sempre que recomeça do fim.",
  },
  restartSongOnEnd: {
    label: "Recomeçar a música no fim",
    help: "A música toca de novo desde o início depois da última nota.",
  },
  playNotesOnScrollEnabled: {
    label: "Tocar as notas ao arrastar a linha do tempo",
    help: "Você ouve cada nota que atravessa ao arrastar pela música.",
  },
  fitZoomOnNewSong: {
    label: "Ajustar o zoom a cada nova música",
    help: "Uma música que você abre cabe inteira nas pistas à frente do piano.",
  },
  transposeOffset: {
    label: "Transpor (semitons)",
    help: "Move todas as notas da música para cima ou para baixo.",
  },
  reverseNoteDirection: {
    label: "Inverter a direção das notas",
    help: "As notas se afastam do piano em vez de virem até ele.",
  },
  renderOffset: {
    label: "Deslocamento da imagem (ms)",
    help: "Atrasa a imagem em relação ao som. Abaixo de 0, a imagem adianta.",
  },
  showBPM: {
    label: "Mostrar o andamento em BPM",
    help: "Mostra as batidas por minuto atuais da música sobre a cena, ao lado dos quadros por segundo.",
  },
  showFps: {
    label: "Mostrar os quadros por segundo",
    help: "Mostra quantas imagens por segundo a cena desenha. Um número baixo significa que a imagem está lenta.",
  },
  showNoteDebugInfo: {
    label: "Mostrar os detalhes de uma nota ao passar o mouse",
    help: "Apontar para uma nota mostra sua altura, seu momento, sua duração e sua intensidade.",
  },
  showMilliseconds: {
    label: "Mostrar milissegundos na linha do tempo",
    help: "O tempo na linha do tempo também mostra os milésimos de segundo.",
  },
  progressBarMeasures: {
    label: "Mostrar a linha do tempo em compassos",
    help: "A linha do tempo conta compassos em vez de minutos e segundos.",
  },
  progressBarMeasureLines: {
    label: "Mostrar barras de compasso na linha do tempo",
    help: "Desenha uma linha fina na linha do tempo onde cada compasso começa.",
  },
  showMarkersTimeline: {
    label: "Mostrar marcadores na linha do tempo",
    help: "Mostra na linha do tempo os marcadores da própria música, como a estrofe ou o refrão.",
  },
  // Loop
  enableLoop: {
    label: "Repetir um trecho",
    help: "Repete os compassos abaixo várias vezes, para você praticá-los.",
  },
  loopStart: {
    label: "Primeiro compasso da repetição",
    help: "A repetição começa no início deste compasso.",
  },
  loopEnd: {
    label: "Último compasso da repetição",
    help: "A repetição termina no fim deste compasso.",
  },
  loopDelay: {
    label: "Contagem inicial (tempos)",
    help: "Os tempos tocados antes de cada volta da repetição.",
  },
  enableLoopBeats: {
    label: "Som de clique na contagem inicial",
    help: "Você ouve um clique em cada tempo da contagem inicial.",
  },
  autoLoop: {
    label: "Começar cada volta na hora",
    help: "Desativado, a música para na contagem inicial depois de cada volta.",
  },
  muteLoop: {
    label: "Silenciar a música fora da repetição",
    help: "Só as notas dos compassos repetidos soam.",
  },
  loopTrainer: {
    label: "Repetição progressiva",
    help: "Começa devagar e soma 5% de velocidade a cada volta, até 100%.",
  },
  loopTrainerSpeed: {
    label: "Velocidade inicial da repetição progressiva (%)",
    help: "A velocidade da primeira volta da repetição progressiva.",
  },
  // Audio
  volumeMain: {
    label: "Volume",
    help: "O volume de tudo o que o app reproduz.",
  },
  masterGain: {
    label: "Volume da música",
    help: "O volume das notas da música.",
  },
  inputGain: {
    label: "Volume do que você toca",
    help: "O volume das notas que você toca no seu teclado.",
  },
  velocityStrength: {
    label: "Efeito da intensidade",
    help: "O quanto a intensidade de uma nota muda o volume dela.",
  },
  sustainEnabled: {
    label: "Pedal de sustentação",
    help: "As notas continuam soando enquanto a música ou você mantém o pedal pisado.",
  },
  enableReverb: {
    label: "Reverberação",
    help: "Acrescenta ao som o eco de um ambiente.",
  },
  reverbImpulseResponse: {
    label: "Ambiente da reverberação",
    help: "O ambiente que a reverberação imita. Um ambiente maior ecoa por mais tempo.",
    options: { room: "Sala", hall: "Sala de concerto", church: "Igreja" },
  },
  detune: {
    label: "Ajuste fino (cents)",
    help: "Afina todas as notas um pouco mais agudas ou mais graves. 100 cents são um semitom.",
  },
  adsrAttack: {
    label: "Ataque (s)",
    help: "Quanto tempo uma nota leva para chegar ao volume máximo.",
  },
  adsrDecay: {
    label: "Decaimento (s)",
    help: "Quanto tempo uma nota leva para cair até o nível de sustentação.",
  },
  adsrSustain: {
    label: "Nível de sustentação (%)",
    help: "O volume que uma nota segurada mantém.",
  },
  adsrReleaseKey: {
    label: "Liberação após a tecla (s)",
    help: "Quanto tempo uma nota leva para sumir depois que a tecla é solta.",
  },
  adsrReleasePedal: {
    label: "Liberação após o pedal (s)",
    help: "Quanto tempo uma nota segurada leva para sumir depois que o pedal é solto.",
  },
  enableMetronome: {
    label: "Metrônomo",
    help: "Dá um clique em cada tempo da música.",
  },
  metronomeMidiOutput: {
    label: "Saída do metrônomo",
    help: "Onde o metrônomo soa.",
    options: { both: "Alto-falantes e dispositivo MIDI", midi: "Dispositivo MIDI", speakers: "Alto-falantes" },
  },
  metronomeNoteNumber: {
    label: "Nota do metrônomo no dispositivo MIDI",
    help: "A nota que o metrônomo envia ao seu dispositivo MIDI a cada tempo.",
  },
  metronomeInstrument: {
    label: "Som do metrônomo no dispositivo MIDI",
    help: "Com a bateria, a nota escolhe o tambor.",
    options: { woodblock: "Bloco de madeira", drums: "Bateria", piano: "Piano" },
  },
  metronomeVolume: {
    label: "Volume do metrônomo",
    help: "O volume do clique do metrônomo.",
  },
  synchedMetronome: {
    label: "Manter o metrônomo no tempo da música",
    help: "Ativado, o metrônomo clica nos tempos da música e segue suas mudanças de andamento e de velocidade. Desativado, mantém uma pulsação fixa no andamento da música onde a reprodução começa. Mudanças posteriores de andamento e de velocidade não alteram essa pulsação. Ele começa e para junto com a reprodução. Fica em silêncio durante a contagem inicial de uma repetição e volta no primeiro tempo da repetição.",
  },
  enableEqualizer: {
    label: "Equalizador",
    help: "Deixa os sons graves, médios e agudos mais altos ou mais baixos.",
  },
  equalizerGain0: {
    label: "Graves, 60 Hz (dB)",
    help: "Aumenta ou diminui os sons mais graves.",
  },
  equalizerGain1: {
    label: "Médios graves, 250 Hz (dB)",
    help: "Aumenta ou diminui a parte média baixa e quente do som.",
  },
  equalizerGain2: {
    label: "Médios, 1 kHz (dB)",
    help: "Aumenta ou diminui a parte média do som.",
  },
  equalizerGain3: {
    label: "Médios agudos, 4 kHz (dB)",
    help: "Aumenta ou diminui a parte média alta e brilhante do som.",
  },
  equalizerGain4: {
    label: "Agudos, 12 kHz (dB)",
    help: "Aumenta ou diminui os sons mais agudos.",
  },
  scheduleAheadMs: {
    label: "Antecipação do áudio (ms)",
    help: "Valores maiores deixam o som mais estável. Valores menores reagem mais rápido.",
  },
  scheduleIntervalMs: {
    label: "Intervalo de agendamento do áudio (ms)",
    help: "Com que frequência as próximas notas entram na fila.",
  },
  // Backing track
  bgTrackFile: {
    label: "Escolher um arquivo de áudio",
    help: "Uma gravação para tocar junto, como uma banda de acompanhamento. Ela fica salva até a página recarregar.",
  },
  bgTrackEnable: {
    label: "Reproduzir a faixa de fundo",
    help: "A gravação escolhida toca junto com a música.",
  },
  bgTrackVolume: {
    label: "Volume (%)",
    help: "O volume da faixa de fundo.",
  },
  bgTrackSpeed: {
    label: "Velocidade (%)",
    help: "A velocidade da faixa em relação à música, para acompanhar uma gravação em outro andamento.",
  },
  bgTrackOffset: {
    label: "Deslocamento (segundos)",
    help: "O segundo da música em que o início da faixa soa. Abaixo de 0, o início da faixa é pulado.",
  },
  bgTrackLoop: {
    label: "Repetir a faixa de fundo",
    help: "A faixa recomeça do início quando termina.",
  },
  // View
  cameraPreset: {
    label: "Câmera",
    help: "Arraste a cena para olhar em volta, exceto na exibição plana. Clique duas vezes nela para voltar a esta câmera. A exibição plana se alinha com um teclado logo abaixo da tela.",
    options: {
      classic: "Clássica, de cima",
      player: "Do banco do piano",
      cinematic: "Cinematográfica, em movimento lento",
      flat: "Plana, as teclas ocupam a largura da tela",
    },
  },
  resetCamera: {
    label: "Voltar à câmera",
    help: "Traz a câmera de volta depois que você arrastou a cena.",
  },
  glowMode: {
    label: "Brilho",
    help: "No modo Automático, o brilho desliga em um dispositivo que economiza energia, ou quando a imagem fica lenta.",
    options: { auto: "Automático", on: "Ligado", off: "Desligado" },
  },
  glowStrength: {
    label: "Força do brilho",
    help: "O quanto as notas e as teclas brilham.",
  },
  zoomByMeasures: {
    label: "Zoom por compassos",
    help: "As pistas mostram um número de compassos em vez de um número de segundos.",
  },
  noteToHeightConst: {
    label: "Segundos mostrados à frente",
    help: "Quantos segundos das próximas notas as pistas mostram. Menos segundos deixam as notas mais longas e mais rápidas.",
  },
  measuresShownOnScreen: {
    label: "Compassos mostrados à frente",
    help: "Quantos compassos das próximas notas as pistas mostram quando o zoom é por compassos.",
  },
  // Keyboard
  keyboardFirstNote: {
    label: "Primeira tecla",
    help: "A tecla mais grave do seu teclado, como C2 ou 36.",
  },
  keyboardLastNote: {
    label: "Última tecla",
    help: "A tecla mais aguda do seu teclado, como C7 ou 96.",
  },
  foldOutsideNotes: {
    label: "Trazer as notas de fora para as suas teclas",
    help: "As notas que faltam no seu teclado mudam de oitava até caber nas suas teclas, e você as toca ali.",
  },
  // Input
  playMode: {
    label: "Modo",
    help: "“Tocar livremente e gravar” deixa a música de lado para você tocar e gravar. O treino de ouvido pede notas para você encontrar.",
    options: { player: "Tocar uma música", freePlay: "Tocar livremente e gravar", pitchPractice: "Treino de ouvido" },
  },
  pitchPracticeKey: {
    label: "Tonalidade do treino de ouvido",
    help: "O treino de ouvido pede só as notas desta tonalidade.",
    options: {
      chromatic: "Todas as teclas, brancas e pretas",
      C: "Dó maior",
      G: "Sol maior",
      D: "Ré maior",
      A: "Lá maior",
      E: "Mi maior",
      B: "Si maior",
      Gb: "Sol♭ maior",
      Db: "Ré♭ maior",
      Ab: "Lá♭ maior",
      Eb: "Mi♭ maior",
      Bb: "Si♭ maior",
      F: "Fá maior",
    },
  },
  pitchPracticeFirstNote: {
    label: "Nota mais grave do treino",
    help: "A nota mais grave que o treino de ouvido pede, dentro do seu teclado.",
  },
  pitchPracticeLastNote: {
    label: "Nota mais aguda do treino",
    help: "A nota mais aguda que o treino de ouvido pede, dentro do seu teclado.",
  },
  pitchPracticeCount: {
    label: "Notas por rodada do treino",
    help: "Quantas notas o treino de ouvido pede antes de mostrar seu resultado.",
  },
  saveMidiDevices: {
    label: "Lembrar os dispositivos MIDI escolhidos",
    help: "O player se conecta à mesma entrada e saída MIDI da próxima vez que você o abrir.",
  },
  keyBindings: {
    label: "Teclas do teclado do computador",
    help: "As teclas do computador que tocam notas. De Z a M tocam de Dó3 a Si3, e de Q a I tocam de Dó4 a Dó5.",
  },
  waitForNotes: {
    label: "Esperar suas notas",
    help: "A música para em cada uma das suas notas até você manter todas as teclas pressionadas. No modo jogo, uma nota que a música espera muito conta como atrasada.",
  },
  playHands: {
    label: "Suas mãos",
    help: "As mãos que recebem pontuação. Com “Esperar suas notas” ativado, o app toca a mão que você deixa de fora.",
    options: { both: "As duas mãos", right: "Mão direita", left: "Mão esquerda" },
  },
  playalongSilentNotes: {
    label: "Acender as próximas teclas no seu teclado MIDI",
    help: "Envia cada próxima nota em volume bem baixo para a saída MIDI, para um teclado com luzes nas teclas mostrá-la.",
  },
  playalongSilentNotesChannel: {
    label: "Canal MIDI das luzes das teclas",
    help: "O canal MIDI em que seu teclado escuta as luzes das teclas.",
  },
  enableScoreMode: {
    label: "Pontuar cada nota",
    help: "Avalia cada nota que você toca em relação à música, e salva sua precisão em cada música.",
  },
  scoreHitWindow: {
    label: "Janela de acerto (ms)",
    help: "Uma nota tocada tão perto do tempo certo, adiantada ou atrasada, é um acerto.",
  },
  scorePerfectWindow: {
    label: "Janela de perfeito (ms)",
    help: "Um acerto tão perto do tempo certo é perfeito.",
  },
  enableGameMode: {
    label: "Modo jogo",
    help: "Dá pontos por acertos precisos e notas mantidas, desconta cada deslize e multiplica um combo de acertos seguidos.",
  },
  gameDifficulty: {
    label: "Dificuldade do jogo",
    help: "O quanto o tempo é exigente, quanto uma nota vale e quanto um deslize custa.",
    options: { easy: "Fácil: algumas horas tocando", normal: "Normal: alguns meses", hard: "Difícil: cerca de um ano" },
  },
  // Piano
  clickablePiano: {
    label: "Tocar o piano na tela com o mouse ou o dedo",
    help: "As teclas na tela soam quando você clica nelas ou as toca com o dedo.",
  },
  highlightActivePianoKeys: {
    label: "Colorir as teclas pressionadas",
    help: "Pinta as teclas que você segura com as cores abaixo.",
  },
  inputNoteColorWhite: {
    label: "Cor das suas teclas brancas",
    help: "A cor de uma tecla branca que você segura.",
  },
  inputNoteColorBlack: {
    label: "Cor das suas teclas pretas",
    help: "A cor de uma tecla preta que você segura.",
  },
  pianoWhiteKeyColor: {
    label: "Cor das teclas brancas",
    help: "A cor das teclas brancas do piano.",
  },
  pianoBlackKeyColor: {
    label: "Cor das teclas pretas",
    help: "A cor das teclas pretas do piano.",
  },
  pianoVelvetColor: {
    label: "Cor do feltro",
    help: "A faixa de feltro atrás das teclas.",
  },
  pianoBackgroundColor: {
    label: "Cor de fundo",
    help: "A cor atrás do piano e das pistas.",
  },
  pianoPosition: {
    label: "Posição vertical do piano (%)",
    help: "Move o piano para cima ou para baixo na tela.",
  },
  whiteKeyHeight: {
    label: "Comprimento das teclas brancas (%)",
    help: "O comprimento com que as teclas brancas são desenhadas.",
  },
  enableKeyFlare: {
    label: "Clarão nas teclas pressionadas",
    help: "Uma luz forte brilha sobre cada tecla que soa.",
  },
  pianoLineEnabled: {
    label: "Linha de onda sobre as teclas",
    help: "Uma linha que ondula sobre cada tecla que soa.",
  },
  pianoLineSpeed: {
    label: "Velocidade da onda",
    help: "A velocidade com que as ondas da linha se movem.",
  },
  pianoLineResolution: {
    label: "Ondas por oitava",
    help: "Quantas ondas cabem em uma oitava. Mais ondas deixam a linha mais fina.",
  },
  pianoLineAmplitude: {
    label: "Altura da onda",
    help: "Em larguras de tecla, sobre uma tecla que soa com força total.",
  },
  pianoLineColor: {
    label: "Cor da linha de onda",
    help: "A cor da linha de onda.",
  },
  pianoLineOpacity: {
    label: "Opacidade da linha de onda",
    help: "O quanto a linha de onda aparece. Valores menores deixam a linha mais fraca.",
  },
  pianoLineYOffset: {
    label: "Posição da linha de onda sobre as teclas",
    help: "Em larguras de tecla acima das teclas.",
  },
};
