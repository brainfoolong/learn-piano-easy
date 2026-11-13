/** *Key signatures* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { KeySignaturesTexts } from "./key-signatures.en";

export const keySignaturesZh: Translation<KeySignaturesTexts> = {
  title: "调号",
  steps: {
    "signs-at-the-start": {
      text: "在 G 大调里，每个 F 都要弹成升 F。乐谱不会每个都标出来，而是在每一行的开头写一次升号。",
    },
    "every-octave": {
      text: "这些记号叫作调号。F 线上有一个升号，表示每个 F 都是升 F，不管高低。B 线上有一个降号，表示每个 B 都是降 B。",
    },
    "one-sharp": {
      text: "调号在 F 线上有一个升号。这段音乐是什么调？",
      answers: ["G 大调", "F 大调", "C 大调"],
    },
    "one-flat": {
      text: "调号在 B 线上有一个降号。这段音乐是什么调？",
      answers: ["C 大调", "F 大调", "G 大调"],
    },
    "no-signs": {
      text: "调号里没有升号，也没有降号。这段音乐是什么调？",
      answers: ["F 大调", "G 大调", "C 大调"],
    },
    "letter-stays": {
      text: "说出每个音的字母名。调号会改变你要按的琴键，但音的字母名不变。",
    },
    "f-in-g-major": {
      text: "调号有一个升号。谱表上是一个 F。你要弹哪个琴键？",
      answers: ["升 F，黑键", "F，白键"],
    },
    "phrase-in-g": {
      text: "这是一个 G 大调的乐句。右手拇指从中央 C 上面的第二个 D 开始。注意听最上面的升 F。",
    },
    "play-in-g": {
      text: "轮到你了。调号有一个升号，所以每个 F 都是升 F。",
    },
    "b-in-f-major": {
      text: "调号有一个降号。谱表上是一个 B。你要弹哪个琴键？",
      answers: ["B，白键", "降 B，黑键"],
    },
    "play-in-f": {
      text: "现在是一个 F 大调的乐句。把右手拇指放在中央 C 上面的 F 上。调号有一个降号，所以每个 B 都是降 B。",
    },
    recap: {
      text: "做得好！现在你会读调号了。接下来是一首 C 大调的歌，没有升号，也没有降号。",
      points: [
        "调号写在每一行的开头。",
        "调号里的升号或降号对这个字母的每个音都有效，在每个八度里都一样。",
        "F 上有一个升号是 G 大调，B 上有一个降号是 F 大调。",
        "没有升号也没有降号是 C 大调。",
      ],
    },
  },
};
