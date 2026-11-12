/** What the build provides beside our code: the constants it writes in, and the files it bundles. */

/** True in a development build, which carries live reload and registers no service worker. */
declare const __DEV__: boolean;

/** A stylesheet. A page's script imports it for its effect, and a test imports it as text. */
declare module "*.css" {
  const text: string;
  export default text;
}
