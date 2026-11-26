// One Word, One Username, One Reward
// Entri: username make.fun panji sendiri, satu kata, tanpa penjelasan.
// "panji913" — 8 karakter, satu kata, di bawah batas 30 karakter.
// Ditulis byte-persis tanpa newline akhir, supaya file entry.txt
// berisi tepat username itu dan tidak ada yang lain.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "panji913";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
