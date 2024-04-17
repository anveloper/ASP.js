const solution = (input) => {
  const N = +input[0];
  const arr = input[1].split(" ").map(Number);
  const C = +input[2];
  return arr.reduce((p, c) => p + Math.ceil(c / C), 0) * C;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
