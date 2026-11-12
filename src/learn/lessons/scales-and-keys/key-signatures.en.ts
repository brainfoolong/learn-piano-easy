/** *Key signatures* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const keySignaturesEn = {
  title: "Key signatures",
  steps: {
    "signs-at-the-start": {
      text: "In G major, every F is played as F♯. Music does not mark each one. It puts a sharp once, at the start of every line.",
    },
    "every-octave": {
      text: "These signs are called the key signature. A sharp on the F line means every F is F♯, high or low. A flat on the B line means every B is B♭.",
    },
    "one-sharp": {
      text: "The key signature shows one sharp, on the F line. Which key is the music in?",
      answers: ["G major", "F major", "C major"],
    },
    "one-flat": {
      text: "The key signature shows one flat, on the B line. Which key is the music in?",
      answers: ["C major", "F major", "G major"],
    },
    "no-signs": {
      text: "The key signature shows no sharps and no flats. Which key is the music in?",
      answers: ["F major", "G major", "C major"],
    },
    "letter-stays": {
      text: "Name each note by its letter. A key signature changes which key you press, but the note keeps its letter.",
    },
    "f-in-g-major": {
      text: "The key signature has one sharp. The staff shows an F. Which key do you play?",
      answers: ["F♯, the black key", "F, the white key"],
    },
    "phrase-in-g": {
      text: "Here is a phrase in G major. Your right thumb starts on the second D above middle C. Listen for the F♯ at the top.",
    },
    "play-in-g": {
      text: "Your turn. The key signature has one sharp, so every F is F♯.",
    },
    "b-in-f-major": {
      text: "The key signature has one flat. The staff shows a B. Which key do you play?",
      answers: ["B, the white key", "B♭, the black key"],
    },
    "play-in-f": {
      text: "Now a phrase in F major. Put your right thumb on the F above middle C. The key signature has one flat, so every B is B♭.",
    },
    recap: {
      text: "Well done. You can read a key signature now. Next comes a song in C major, with no sharps or flats.",
      points: [
        "The key signature stands at the start of every line.",
        "Its sharps or flats hold for every note of that letter, in every octave.",
        "One sharp on F means G major, and one flat on B means F major.",
        "No sharps and no flats means C major.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type KeySignaturesTexts = typeof keySignaturesEn;
