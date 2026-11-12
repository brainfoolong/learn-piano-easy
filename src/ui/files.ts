/**
 * Files the learner saves and opens: a download made in the page, and the browser's file picker.
 *
 * Both work offline and from `file:`, since neither needs a server. A download names its file, and the
 * browser decides where it goes.
 */
import { el } from "./dom";

/** Saves `content` as a file named `name` through the browser's download. */
export function saveFile(content: BlobPart, name: string, type: string): void {
  const url = URL.createObjectURL(new Blob([content], { type }));
  el("a", { attrs: { href: url, download: name } }).click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

/** Opens the browser's file picker for one file of `accept`, and calls `onPick` with the file chosen. */
export function pickFile(accept: string, onPick: (file: File) => void): void {
  const input = el("input", { attrs: { type: "file", accept } });
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (file !== undefined) onPick(file);
  });
  input.click();
}
