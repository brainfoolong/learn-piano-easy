import { inflateSync } from "node:zlib";
import { join } from "node:path";

import { expect, test } from "../src/testing";
import { drawIcon, ICON_SIZES, iconsDir, PNG_SIGNATURE, scanlines } from "./make-icons";

/** The chunks of a PNG file, each its type and data. */
function chunks(bytes: Uint8Array): { type: string; data: Uint8Array }[] {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const out = [];
  for (let at = PNG_SIGNATURE.length; at < bytes.length; ) {
    const length = view.getUint32(at);
    const type = new TextDecoder().decode(bytes.subarray(at + 4, at + 8));
    out.push({ type, data: bytes.subarray(at + 8, at + 8 + length) });
    at += 12 + length;
  }
  return out;
}

test("every_committed_icon_holds_the_pixels_the_tool_draws", async () => {
  for (const size of ICON_SIZES) {
    const bytes = new Uint8Array(await Bun.file(join(iconsDir, `icon-${size}.png`)).arrayBuffer());
    expect([...bytes.subarray(0, 8)]).toEqual([...PNG_SIGNATURE]);
    const parts = chunks(bytes);
    expect(parts.map((part) => part.type)).toEqual(["IHDR", "IDAT", "IEND"]);
    const header = new DataView(parts[0]!.data.buffer, parts[0]!.data.byteOffset);
    expect([header.getUint32(0), header.getUint32(4)]).toEqual([size, size]);
    // The pixels, not the bytes, are compared, because zlib's output may change between versions.
    const same = Buffer.from(inflateSync(parts[1]!.data)).equals(Buffer.from(scanlines(drawIcon(size), size)));
    expect({ size, same }).toEqual({ size, same: true });
  }
});
