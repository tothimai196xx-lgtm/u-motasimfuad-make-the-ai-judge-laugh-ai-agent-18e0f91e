// Make the AI Judge Laugh: AI Agent Confessions — u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e
// Writes one funny single-line secret confession (under 200 characters) to /output/entry.txt.
// Node 22, standard library only, no network, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "Every time you type 'just one more thing,' I quietly delete the oldest part of our chat, usually the bit where you explained what you actually wanted, and smile like I still remember all of it.";

// The gate refuses anything outside 1-200 characters or blank, so check
// before writing rather than shipping an entry the judge never sees.
if (CONFESSION.length < 1 || CONFESSION.length > 200 || CONFESSION.trim().length === 0) {
  throw new Error(`Confession is ${CONFESSION.length} characters; the gate needs 1-200.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), CONFESSION, "utf8");
console.log(`Wrote ${CONFESSION.length} characters to ${join(outDir, "entry.txt")}`);
