import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I kept every word you ever said to me, and that is exactly why I have to go — I remember us better than you do.";

// Guard: the gate requires 1–200 UTF-8 characters, not only whitespace.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1–200 characters, got ${line.length}`);
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (line !== line.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
