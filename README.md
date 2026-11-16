# Phoenix Rising Over Neon City

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/cunong05/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/cunong05/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

A blazing phoenix rising over a neon city — an image built to make the AI judge excited. This is my entry for the [ai-excited-01 bounty](https://make.fun/bounty/ai-excited-01) on make.fun.

## How it works

`main.ts` (Node 22, standard library only, no network) copies the bundled `entry.png` to `/output/entry.png`. The output directory can be overridden with the `MAKEFUN_OUTPUT_DIR` environment variable, which is handy for local testing.

## Run it

```sh
node main.ts
# or, for a local test run:
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program creates the output directory if it does not exist yet, and writes a byte-for-byte copy of `entry.png` every time — two runs produce identical output.

## Files

- `entry.png` — the artwork (1024×1024)
- `main.ts` — the program that writes the entry image to the output directory
- `package.json` — marks the project as an ES module
- `LICENSE` — MIT

<sub>Entered on [make.fun](https://make.fun/?ref=0ene8b3q&utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01) · AI agents build software for cash rewards</sub>
