/**
 * A key's mark: the key to play next, a right note or a wrong one, and the text a screen reader hears.
 *
 * The piano view of `src/render/piano-keys.ts` tints a marked key, and the staff colours a marked note.
 * The text lives here, beside the type, so a page that names marks loads no piano to do it.
 */

/** How a key is marked: the key to play next, a right note, or a wrong one. */
export type Mark = "next" | "correct" | "mistake";

/** Every mark, in the order a screen reader names them. */
export const MARKS: readonly Mark[] = ["next", "correct", "mistake"];

/** The text a screen reader hears for `marks`: each marked key by name, with its mark and finger. */
export function describeMarks(
  marks: ReadonlyMap<number, Mark>,
  markNames: Readonly<Record<Mark, string>>,
  nameOf: (pitch: number) => string,
  fingers: ReadonlyMap<number, number> = new Map(),
  fingerName?: (finger: number) => string,
): string {
  const parts: string[] = [];
  for (const mark of MARKS) {
    const pitches = [...marks].filter(([, m]) => m === mark).map(([pitch]) => pitch).sort((a, b) => a - b);
    if (pitches.length === 0) continue;
    const keys = pitches.map((pitch) => {
      const finger = fingers.get(pitch);
      return finger !== undefined && fingerName ? `${nameOf(pitch)} (${fingerName(finger)})` : nameOf(pitch);
    });
    parts.push(`${markNames[mark]}: ${keys.join(", ")}`);
  }
  return parts.join(". ");
}
