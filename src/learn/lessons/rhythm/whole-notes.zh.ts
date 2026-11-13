/** *Whole notes* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { WholeNotesTexts } from "./whole-notes.en";

export const wholeNotesZh: Translation<WholeNotesTexts> = {
  title: "全音符",
  steps: {
    "halves-then-whole-demo": {
      text: "看一看，听一听。先是两个二分音符。然后是一个音，长度和它们两个加起来一样。",
    },
    "what-a-whole-note-is": {
      text: "一个全音符持续四拍。在第一拍弹下去，再按住它走完另外三拍。每个全音符数“1、2、3、4”。",
    },
    "whole-beats-quiz": {
      text: "一个全音符持续几拍？",
      answers: ["两拍", "三拍", "四拍"],
    },
    "four-beats-three-ways-demo": {
      text: "听一听用三种方式填满的四拍。先是一个全音符，再是两个二分音符，最后是四个四分音符。每一组用的时间都一样。",
    },
    "same-as-whole-quiz": {
      text: "什么和一个全音符一样长？",
      answers: ["一个二分音符", "两个二分音符", "两个四分音符"],
    },
    "quarters-in-whole-quiz": {
      text: "几个四分音符和一个全音符一样长？",
      answers: ["两个", "四个", "八个"],
    },
    "play-and-hold": {
      text: "把右手放在 C 手位上。弹 C、E 和 G，每个琴键都按住，同时数“1、2、3、4”。这一步会等你弹出每个音，所以不用着急。",
    },
    "count-to-four": {
      text: "每响一声滴答，就弹一下任意一个琴键。边弹边数“1、2、3、4”，数两遍。每个“1、2、3、4”就是一个全音符的长度。",
    },
    recap: {
      text: "做得好！你已经认识全音符了。",
      points: ["一个全音符持续四拍。", "弹下去之后，再按住它走完后面三拍。", "一个全音符的长度，等于两个二分音符，也等于四个四分音符。"],
    },
  },
};
