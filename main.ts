// Phoenix Rising Over Neon City — entry builder for make.fun bounty ai-excited-01.
//
// The artwork already exists next to this file as entry.png. This program
// does one small, deterministic job: copy that image to the output
// directory the judge harness expects, so the judged file is exactly the
// artwork in this repo — no regeneration, no edits, no network.
//
// Output location:
//   - default: /output/entry.png
//   - override for local testing: MAKEFUN_OUTPUT_DIR=<dir>
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Requirements: Node.js 22+, standard library only.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  console.error(`entry.png not found next to main.ts (looked in ${here})`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

console.log(`Wrote ${target}`);
