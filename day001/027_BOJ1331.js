const solution = (input) => {
  const set = new Set();
  for (let i = 0; i < input.length; i++) {
    if (set.has(input[i])) break;

    set.add(input[i]);
    let [x1, y1] = input[i].split("");
    let [x2, y2] = input[i == 0 ? input.length - 1 : i - 1].split("");

    x1 = x1.charCodeAt() - 65;
    x2 = x2.charCodeAt() - 65;
    y1 = +y1;
    y2 = +y2;

    let [d1, d2] = [Math.abs(x1 - x2), Math.abs(y1 - y2)].sort();
    if (d1 != 1 || d2 != 2) break;
  }
  return set.size == 36 ? "Valid" : "Invalid";
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
