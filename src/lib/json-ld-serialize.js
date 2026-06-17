/**
 * Serialize structured data for embedding inside a <script type="application/ld+json"> tag.
 * Safety transforms so React's text-encoding of children never corrupts the payload,
 * and so no </script> breakout is possible. JSON.parse interprets \uXXXX back to the
 * original char, so consumers (Googlebot, etc.) read correct structured data.
 */
const LINE_SEP = String.fromCharCode(0x2028);
const PARA_SEP = String.fromCharCode(0x2029);

export function serializeJsonLd(data) {
  return JSON.stringify(data)
    .replace(/&/g, "\\u0026")
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .split(LINE_SEP)
    .join("\\u2028")
    .split(PARA_SEP)
    .join("\\u2029");
}
