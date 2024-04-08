// solution
const solution = (input) => {
  const [N, ...arr] = input.map((e) => e.split(" ").map(Number));
  let tmp = 0,
    ans = Infinity;
  arr.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < N; i++) {
    tmp += arr[i][0];
    ans = Math.min(ans, arr[i][1] - tmp);
  }
  return ans >= 0 ? ans : -1;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input)); // best sol
