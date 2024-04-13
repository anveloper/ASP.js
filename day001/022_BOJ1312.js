const solution = (input) => {
  let [A, B, N, i = 0] = input[0].split(" ").map(Number);
  while (i++ < N) A = (A % B) * 10;
  return Math.floor(A / B);
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
