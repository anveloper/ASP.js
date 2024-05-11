const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const K = +input[1];

  const dp = Array.from(Array(N + 1), () => Array(M + 1).fill(BigInt(0)));
  const horizontal = Array.from(Array(N), () => Array(M + 1).fill(0));
  const vertical = Array.from(Array(N + 1), () => Array(M).fill(0));

  for (let i = 2; i < 2 + K; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    if (y1 === y2) {
      horizontal[Math.min(x1, x2)][y1] = 1;
    } else {
      vertical[x1][Math.min(y1, y2)] = 1;
    }
  }

  for (let i = 1; i <= N; i++) {
    if (horizontal[i - 1][0] === 1) break;
    dp[i][0] = BigInt(1);
  }

  for (let i = 1; i <= M; i++) {
    if (vertical[0][i - 1] === 1) break;
    dp[0][i] = BigInt(1);
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

      if (horizontal[i - 1][j] === 1) {
        dp[i][j] -= dp[i - 1][j];
      }

      if (vertical[i][j - 1] === 1) {
        dp[i][j] -= dp[i][j - 1];
      }
    }
  }

  return dp[N][M].toString();
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
