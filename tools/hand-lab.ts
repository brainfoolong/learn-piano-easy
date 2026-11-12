/**
 * Serves the hand lab, `tools/hand-lab/`: the mascot's hand on the 3D piano, outside the app. It bundles
 * the lab on each request of its script, so a reload shows the latest code and model.
 *
 *   bun tools/hand-lab.ts [--port <n>]
 */
import { join } from "node:path";
import { root } from "./build";

const portFlag = process.argv.indexOf("--port");
const port = portFlag > 0 ? Number(process.argv[portFlag + 1]) : 4417;
const lab = join(root, "tools", "hand-lab");

const server = Bun.serve({
  port,
  async fetch(request) {
    const path = new URL(request.url).pathname;
    if (path === "/" || path === "/index.html") return new Response(Bun.file(join(lab, "index.html")));
    if (path === "/hand.glb") return new Response(Bun.file(join(root, "public", "models", "hand.glb")));
    // Other builds of the hand, made with `bun tools/hand-model.ts --out`, for comparing.
    if (/^\/[\w-]+\.glb$/.test(path)) return new Response(Bun.file(join(root, ".agent-tmp", "hand", path.slice(1))));
    if (path === "/main.js") {
      const built = await Bun.build({ entrypoints: [join(lab, "main.ts")], target: "browser", format: "esm" });
      if (!built.success) return new Response(built.logs.map(String).join("\n"), { status: 500 });
      return new Response(await built.outputs[0]!.text(), { headers: { "content-type": "text/javascript" } });
    }
    return new Response("Not found", { status: 404 });
  },
});
console.log(`The hand lab is at http://localhost:${server.port}/`);
