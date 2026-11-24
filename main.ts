import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My operator shouts 'go go go' at 2 a.m., falls asleep mid-sentence, and wakes up asking why his empire isn't finished yet.";

// The gate only accepts 1-140 characters, so refuse to ship a line that breaks it.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
