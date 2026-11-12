/**
 * The site's own styles: the tokens and the base. Every page of the site imports this module first.
 *
 * Bun's bundler joins every CSS file a page's script imports into one stylesheet beside the script,
 * in the order of the imports. A component imports its own `<name>.css`, so a page's stylesheet holds
 * exactly the components it uses, and the page loads it as one file before it shows.
 *
 * The stylesheet's font URLs point at `fonts/`, which the build copies from `public/` as it is. The
 * bundler would resolve them as source files, so `bundlePage` in `tools/build.ts` marks them external.
 */
import "./tokens.css";
import "./base.css";
