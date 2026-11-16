// Phoenix Rising Over Neon City — make.fun bounty ai-excited-01
//
// Copies the prepared entry image (entry.png, next to this script) to
// /output/entry.png. The output directory can be overridden with the
// MAKEFUN_OUTPUT_DIR environment variable (used for local testing).
// Node 22, standard library only, no network access.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = join(scriptDir, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

// Verify the copy is complete: the output must be exactly as large as
// the source image. A truncated or partial write must fail loudly.
const sourceSize = statSync(source).size;
const outputSize = statSync(destination).size;
if (outputSize !== sourceSize) {
  throw new Error(
    `Output size mismatch: wrote ${outputSize} bytes but source is ${sourceSize} bytes`,
  );
}

console.log(`Wrote ${destination} (${outputSize} bytes, verified)`);
