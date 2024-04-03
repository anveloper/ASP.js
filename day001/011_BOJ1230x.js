// solution 외않되
const solution = ([a, b]) => {
  const na = a.replace(" ", "").length;
  const nb = b.replace(" ", "").length;
  const INF = 1_000;

  if (na > nb) return -1;

  const dp = Array.from(Array(na + 1), () =>
    Array.from(Array(nb + 1), () => [0, 0])
  );

  dp[0][0] = [0, INF];

  for (let i = 1; i <= nb; i++) dp[0][i] = [INF, 1];

  for (let i = 0; i < na; i++) {
    for (let j = 0; j <= i; j++) dp[i + 1][j] = [INF, INF];

    for (let j = i; j < nb; j++)
      dp[i + 1][j + 1] = [
        a[i] === b[j] ? Math.min(dp[i][j][0], dp[i][j][1]) : INF,
        Math.min(dp[i + 1][j][0] + 1, dp[i + 1][j][1]),
      ];
  }

  const result = Math.min(dp[na][nb][0], dp[na][nb][1]);
  return result >= INF ? -1 : result;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
