// solution
const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
  const M = Math.max(...arr);
  const carr = Array(M + 1).fill(0);
  arr.map((s) => carr[s]++);
  let ans = N;
  for (let d = 2; d <= M; d++) {
    let cnt = 0;
    for (let i = d; i <= M; i += d) cnt += carr[i];
    if (cnt > 1 && d * cnt > ans) ans = d * cnt;
  }

  return ans;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
