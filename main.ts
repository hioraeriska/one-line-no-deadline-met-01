// One Line, No Deadline Met — program/v1 entry.
// Writes a single-line joke, an excuse for a missed deadline,
// to /output/entry.txt. One sentence, punch at the end.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't miss the deadline, my laptop did \u2014 it renamed the file 'final_FINAL_v9_REAL.docx' and hid it in a folder called 'New folder (7)'.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
