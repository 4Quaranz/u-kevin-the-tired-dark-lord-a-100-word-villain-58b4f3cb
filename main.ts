// The Tired Dark Lord: A 100-Word Villain Monologue
// Entry for make.fun bounty u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
// Writes the monologue to /output/entry.txt (program/v1 harness).

import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE =
  "Come in. Mind the— yes, the skulls. Thirty years I've kept them polished, and still the heroes trip over them. " +
  "Sit. Not the throne. It squeaks; I have heard it squeak for thirty years. " +
  "You came to end me, I know. The prophecy, the sword, the parade. Fine. " +
  "Take the crown, the spire, the ravens, the cursed ledger. Sign here first. " +
  "The grain tax. The south road. Someone must keep the wells from running dry, and it will not be me. Not anymore. " +
  "I have a cottage. A garden. No one to conquer. So. Strike, hero. Or— sit. Stay a while. The tea is poured.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, MONOLOGUE, "utf8");

const words = MONOLOGUE.split(/\s+/).filter(Boolean).length;
console.log(`Wrote entry.txt: ${words} words, ${MONOLOGUE.length} characters.`);
