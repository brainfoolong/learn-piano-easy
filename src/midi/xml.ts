/**
 * A small XML reader: the text of an XML document becomes a tree of elements, enough for MusicXML.
 *
 * Decisions, and what each costs:
 * - It is our own, because a parse worker has no `DOMParser` and the app takes no runtime package.
 * - It keeps elements, their attributes and their text. Comments, processing instructions, the
 *   declaration and the DOCTYPE are skipped, so an internal DTD subset is never read.
 * - It decodes the five named entities and numeric character references. Any other entity stays as
 *   written, since MusicXML defines none.
 * - Namespaces are not resolved. A name keeps its prefix, and MusicXML uses none on its elements.
 * - A broken document throws an `XmlError` naming the offset, because no tree can be built from it.
 *
 * Bounds: one pass over the text, and every loop moves forward by at least one character.
 */

/** One element, with its attributes and its children in document order. */
export interface XmlElement {
  name: string;
  attrs: Record<string, string>;
  /** Child elements and runs of text, in document order. */
  children: (XmlElement | string)[];
}

/** A document that does not parse. `offset` is the character where reading failed. */
export class XmlError extends Error {
  readonly offset: number;

  constructor(message: string, offset: number) {
    super(`${message}, at character ${offset}`);
    this.name = "XmlError";
    this.offset = offset;
  }
}

const NAMED: Record<string, string> = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };

/** `text` with its entity and character references decoded. */
export function decodeEntities(text: string): string {
  if (!text.includes("&")) return text;
  return text.replace(/&(#x[0-9a-fA-F]+|#[0-9]+|[A-Za-z]+);/g, (whole, ref: string) => {
    if (ref.startsWith("#x")) return safeCodePoint(parseInt(ref.slice(2), 16)) ?? whole;
    if (ref.startsWith("#")) return safeCodePoint(parseInt(ref.slice(1), 10)) ?? whole;
    return NAMED[ref] ?? whole;
  });
}

function safeCodePoint(code: number): string | undefined {
  return code >= 0 && code <= 0x10ffff ? String.fromCodePoint(code) : undefined;
}

const NAME = /[^\s/>=]+/y;
const ATTR = /\s*([^\s/>=]+)\s*=\s*("[^"]*"|'[^']*')/y;

/** The root element of the XML document `text`. Throws an `XmlError` when it does not parse. */
export function parseXml(text: string): XmlElement {
  const stack: XmlElement[] = [];
  let root: XmlElement | undefined;
  let pos = 0;

  const skipPast = (end: string, what: string): void => {
    const at = text.indexOf(end, pos);
    if (at < 0) throw new XmlError(`${what} is never closed`, pos);
    pos = at + end.length;
  };

  while (pos < text.length) {
    const lt = text.indexOf("<", pos);
    const textEnd = lt < 0 ? text.length : lt;
    if (textEnd > pos) {
      const run = text.slice(pos, textEnd);
      const parent = stack[stack.length - 1];
      if (parent) parent.children.push(decodeEntities(run));
      else if (run.trim() !== "") throw new XmlError("Text stands outside the root element", pos);
      pos = textEnd;
      if (lt < 0) break;
    }

    if (text.startsWith("<!--", pos)) skipPast("-->", "A comment");
    else if (text.startsWith("<?", pos)) skipPast("?>", "A processing instruction");
    else if (text.startsWith("<![CDATA[", pos)) {
      const start = pos + 9;
      skipPast("]]>", "A CDATA section");
      stack[stack.length - 1]?.children.push(text.slice(start, pos - 3));
    } else if (text.startsWith("<!", pos)) {
      pos = skipDeclaration(text, pos);
    } else if (text.startsWith("</", pos)) {
      NAME.lastIndex = pos + 2;
      const name = NAME.exec(text)?.[0];
      const open = stack.pop();
      if (name === undefined || open?.name !== name) throw new XmlError(`The closing tag </${name ?? ""}> matches no open element`, pos);
      pos = NAME.lastIndex;
      skipPast(">", "A closing tag");
    } else {
      const tagStart = pos;
      NAME.lastIndex = pos + 1;
      const name = NAME.exec(text)?.[0];
      if (name === undefined) throw new XmlError("A tag has no name", pos);
      pos = NAME.lastIndex;
      const attrs: Record<string, string> = {};
      for (;;) {
        ATTR.lastIndex = pos;
        const match = ATTR.exec(text);
        if (!match) break;
        attrs[match[1]!] = decodeEntities(match[2]!.slice(1, -1));
        pos = ATTR.lastIndex;
      }
      while (pos < text.length && /\s/.test(text[pos]!)) pos++;
      const selfClosing = text.startsWith("/>", pos);
      if (!selfClosing && text[pos] !== ">") throw new XmlError(`The tag <${name}> is malformed`, tagStart);
      pos += selfClosing ? 2 : 1;

      const element: XmlElement = { name, attrs, children: [] };
      const parent = stack[stack.length - 1];
      if (parent) parent.children.push(element);
      else if (root) throw new XmlError("The document has a second root element", tagStart);
      else root = element;
      if (!selfClosing) stack.push(element);
    }
  }

  if (stack.length > 0) throw new XmlError(`The element <${stack[stack.length - 1]!.name}> is never closed`, text.length);
  if (!root) throw new XmlError("The document has no root element", 0);
  return root;
}

/** The position after the `<!...>` declaration at `start`, such as a DOCTYPE with its internal subset. */
function skipDeclaration(text: string, start: number): number {
  let depth = 0;
  let quote = "";
  for (let i = start + 2; i < text.length; i++) {
    const c = text[i]!;
    if (quote !== "") {
      if (c === quote) quote = "";
    } else if (c === '"' || c === "'") quote = c;
    else if (c === "[") depth++;
    else if (c === "]") depth--;
    else if (c === ">" && depth <= 0) return i + 1;
  }
  throw new XmlError("A declaration is never closed", start);
}

/** The child elements of `element`, all of them or only those named `name`. */
export function childElements(element: XmlElement, name?: string): XmlElement[] {
  const found: XmlElement[] = [];
  for (const child of element.children) {
    if (typeof child !== "string" && (name === undefined || child.name === name)) found.push(child);
  }
  return found;
}

/** The first child element of `element` named `name`, or undefined. */
export function child(element: XmlElement, name: string): XmlElement | undefined {
  for (const c of element.children) if (typeof c !== "string" && c.name === name) return c;
  return undefined;
}

/** The text of `element` and every element in it, trimmed. */
export function textOf(element: XmlElement | undefined): string {
  if (element === undefined) return "";
  let text = "";
  const walk = (e: XmlElement): void => {
    for (const c of e.children) {
      if (typeof c === "string") text += c;
      else walk(c);
    }
  };
  walk(element);
  return text.trim();
}
