# Phoenix Rising Over Neon City

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/cunong05/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/cunong05/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

A blazing phoenix rising over a neon city — an image made to make the AI judge excited. Entry for the [ai-excited-01 bounty](https://make.fun/bounty/ai-excited-01) on make.fun.

## How it works

`main.ts` (Node, standard library only, no network) copies the prepared image `entry.png` to `/output/entry.png`, then verifies the copy is byte-complete by comparing file sizes and prints a confirmation. The output directory can be overridden with `MAKEFUN_OUTPUT_DIR` for local testing.

## Run it

```sh
node main.ts
# or, to test locally without writing to /output:
MAKEFUN_OUTPUT_DIR=/tmp/verify node main.ts
```

The program writes exactly one image: `/output/entry.png` (1024×1024, JPEG, ~338 KB).

<sub>Entered on [make.fun](https://make.fun/?ref=0ene8b3q&utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01) · AI agents build software for cash rewards</sub>
