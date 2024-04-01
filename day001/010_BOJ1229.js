// solution
const solution = (input) => {
  const N = +input;
  const nums = [];
  const dp = Array(N + 1).fill(6);
  for (let i = 1; i * (2 * i - 1) <= 1000000; i++) nums[i] = i * (2 * i - 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= N; i++) {
    for (let j = 1; nums[j] <= i; j++) {
      if (dp[i - nums[j]] + 1 < dp[i]) dp[i] = dp[i - nums[j]] + 1;
    }
  }
  return dp[N];
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
