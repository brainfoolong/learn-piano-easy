/** *Tempo and the metronome* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TempoAndTheMetronomeTexts } from "./tempo-and-the-metronome.en";

export const tempoAndTheMetronomeZh: Translation<TempoAndTheMetronomeTexts> = {
  title: "速度与节拍器",
  steps: {
    "slow-demo": {
      text: "看一看，听一听。这段旋律从中央 C 往上走到 G，再往下走回来，速度很慢。",
    },
    "fast-demo": {
      text: "现在再听一遍同一段旋律。音还是那些音，但节拍变快了。",
    },
    "what-tempo-is": {
      text: "速度就是节拍有多快。它用每分钟的拍数来衡量，写作 BPM。60 BPM 时每秒一拍，120 BPM 时每秒两拍。",
    },
    "faster-tempo-quiz": {
      text: "哪个速度更快？",
      answers: ["每分钟 60 拍", "每分钟 120 拍"],
    },
    "slow-first": {
      text: "节拍器能按你选的任何速度滴答打拍子。练一首新曲子时，先慢慢练。等觉得容易了，再把节拍器调快一点。",
    },
    "slow-first-quiz": {
      text: "一首新曲子感觉很难。你该怎么练？",
      answers: ["先慢慢练，再快一点", "一开始就用原速"],
    },
    "slow-tap": {
      text: "节拍器以 60 BPM 滴答作响。点击“开始”，每响一声，就弹一下任意一个琴键。",
    },
    "faster-tap": {
      text: "节拍器以 104 BPM 滴答作响。点击“开始”，每响一声，就弹一下任意一个琴键，只弹一下。",
    },
    recap: {
      text: "做得好！你已经能用两种速度保持节拍了。接下来是《欢乐颂》，先慢慢来。",
      points: ["速度就是节拍有多快，用每分钟的拍数来计算。", "节拍器按你选的速度打出节拍。", "先慢慢练，再快一点。"],
    },
  },
};
