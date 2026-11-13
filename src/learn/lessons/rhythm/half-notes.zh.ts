/** *Half notes* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { HalfNotesTexts } from "./half-notes.en";

export const halfNotesZh: Translation<HalfNotesTexts> = {
  title: "二分音符",
  steps: {
    "quarters-then-halves-demo": {
      text: "看一看，听一听。先是四个短音，每拍一个。然后每个音都长了一倍。",
    },
    "what-a-half-note-is": {
      text: "一个二分音符持续两拍。在第一拍弹下去，一直按住，直到第二拍结束。每个二分音符数“1、2”。",
    },
    "half-beats-quiz": {
      text: "一个二分音符持续几拍？",
      answers: ["一拍", "两拍", "四拍"],
    },
    "play-and-hold": {
      text: "把右手放在 C 手位上。弹 C、D、E、D、C，每个琴键都按住，同时数“1、2”。这一步会等你弹出每个音，所以不用着急。",
    },
    "count-one-two": {
      text: "每响一声滴答，就弹一下任意一个琴键。边弹边数“1、2，1、2”。每个“1、2”就是一个二分音符的长度。",
    },
    "which-is-longer-quiz": {
      text: "哪个音符更长？",
      answers: ["四分音符", "二分音符"],
    },
    "halves-in-four-quiz": {
      text: "几个二分音符正好填满四拍？",
      answers: ["一个", "两个", "四个"],
    },
    recap: {
      text: "做得好！你已经认识二分音符了。",
      points: ["一个二分音符持续两拍。", "弹下去之后，再按住它到下一拍结束。", "两个二分音符填满四拍。"],
    },
  },
};
