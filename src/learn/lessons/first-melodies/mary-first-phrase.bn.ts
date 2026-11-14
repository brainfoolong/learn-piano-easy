/** *Mary's first phrase* in Bengali. */
import type { Translation } from "../../../i18n/translation";
import type { MaryFirstPhraseTexts } from "./mary-first-phrase.en";

export const maryFirstPhraseBn: Translation<MaryFirstPhraseTexts> = {
  title: "Mary গানের প্রথম সুরের অংশ",
  steps: {
    "phrase-demo": {
      text: "Mary Had a Little Lamb গানের প্রথম অর্ধেক শুনুন। এটি পাশের চাবিতে যাওয়া, একই নোট আবার বাজানো আর একবার চাবি বাদ দিয়ে যাওয়া দিয়ে তৈরি, যা আপনি আগেই জানেন।",
    },
    "first-note-quiz": {
      text: "সুরটি কোন নোট দিয়ে শুরু হয়?",
    },
    "the-fingers": {
      text: "ডান হাত C পজিশনে রাখুন, বুড়ো আঙুল মধ্য C-তে। সুরটিতে চারটি আঙুল লাগে: 1 নম্বর C-তে, 2 নম্বর D-তে, 3 নম্বর E-তে আর 5 নম্বর G-তে।",
    },
    "g-finger-quiz": {
      text: "G বাজায় কোন আঙুল?",
      answers: ["2 নম্বর আঙুল", "3 নম্বর আঙুল", "5 নম্বর আঙুল"],
    },
    "bars-one-two": {
      text: "শুরুটা বাজান: E, D, C, D, তারপর E তিনবার। আঙুল চলে 3, 2, 1, 2, তারপর 3, 3, 3।",
    },
    "bars-three-four": {
      text: "এবার পরের অংশ: D তিনবার, তারপর E, তারপর G দুবার। আঙুল চলে 2, 2, 2, তারপর 3, 5, 5।",
    },
    "whole-phrase": {
      text: "এবার না থেমে পুরো সুরের অংশটি বাজান: E D C D E E E, D D D, E G G।",
    },
    recap: {
      text: "খুব ভালো হয়েছে। আপনি একটি সত্যিকারের গানের প্রথম অর্ধেক বাজালেন।",
      points: [
        "পাশের চাবিতে যাওয়া, একই নোট আবার বাজানো আর একবার চাবি বাদ দিয়ে যাওয়া দিয়ে এই সুর তৈরি।",
        "সুর শেখা হয় ছোট ছোট টুকরো করে, তারপর সেগুলো জোড়া দিয়ে।",
        "আঙুলের নম্বর বলে দেয় হাত কোথায় যাবে।",
      ],
    },
  },
};
