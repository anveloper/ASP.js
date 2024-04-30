const solution = (input) => {
  const N = input[0];

  const arr = [];
  const recur = (n) => {
    arr.push(n);
    if (n.length > N.length) return;

    recur(n + "4");
    recur(n + "7");
  };

  recur("4");
  recur("7");

  const sorted = arr.map(Number).sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    if (+N >= sorted[i]) {
      return sorted[i];
    }
  }
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
