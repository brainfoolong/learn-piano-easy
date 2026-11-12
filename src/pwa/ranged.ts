/**
 * A cached file cut to the byte range its request asks for.
 *
 * A browser asks for a video in ranges, and Safari plays a video only from a `206` answer that holds the
 * range it asked for. The service worker's cache holds whole files, so this cuts the answer from one.
 *
 * - **One range is cut, and anything else gets the whole file.** A media element asks for one range at
 *   a time, so a request with several, or with none, is answered as before.
 * - **A range past the file's end gets `416`,** with the file's size, as a server would answer it.
 */

/** The answer to `request` from the whole file in `response`. */
export async function ranged(request: Request, response: Response): Promise<Response> {
  const match = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get("range") ?? "");
  if (!match || response.status !== 200 || (match[1] === "" && match[2] === "")) return response;
  const body = await response.blob();
  const size = body.size;
  const [, from = "", to = ""] = match;
  // `bytes=-n` asks for the last n bytes, and `bytes=a-` for every byte from a on.
  const start = from === "" ? Math.max(0, size - Number(to)) : Number(from);
  const end = from === "" || to === "" ? size - 1 : Math.min(Number(to), size - 1);
  if (start >= size || start > end) {
    return new Response(null, { status: 416, headers: { "content-range": `bytes */${size}` } });
  }
  const headers = new Headers(response.headers);
  headers.set("content-range", `bytes ${start}-${end}/${size}`);
  headers.set("content-length", String(end - start + 1));
  return new Response(body.slice(start, end + 1, body.type), { status: 206, statusText: "Partial Content", headers });
}
