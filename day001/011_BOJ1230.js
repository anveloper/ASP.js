// solution
const solution = (input) => {
  const [a, b] = [input[0].split(""), input[1].split("")];
  const [al, bl, INF] = [a.length, b.length, 1_000];
  if (al > bl) return -1;
  const dp = Array(al + 1).map(
    (e) => (e = Array(bl + 1).map((e) => (e = Array(2).fill(0))))
  );
  for (let i = 0; i <= bl; i++) {
    dp[0][i][0] = i == 0 ? 0 : INF;
    dp[0][i][1] = i == 0 ? INF : 1;
  }
  console.log(dp);
  for (let i = 0; i < al; i++) {
    for (let j = 0; j <= i; j++) {
      dp[i + 1][j][0] = dp[i + 1][j][1] = INF;
    }
    for (let j = i; j < bl; j++) {
      if (a[i] == b[i])
        dp[i + 1][j + 1][0] = Math.min(dp[i][j][0], dp[i][j][1]);
      else dp[i + 1][j + 1][0] = INF;
      dp[i + 1][j + 1][1] = Math.min(dp[i + 1][j][0], dp[i + 1][j][1]);
    }
  }
  const res = Math.min(dp[al][bl][0], dp[al][bl][1]);
  return res >= INF ? -1 : res;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
