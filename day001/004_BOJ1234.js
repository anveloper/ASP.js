const _solution = (input) => {
  const inputs = input[0].split(" ").map((v) => +v);
  const N = inputs[0];
  const RGB = [inputs[1], inputs[2], inputs[3]];
  let ans = 0;

  const combination = (n, r) => {
    let result = 1;
    for (let i = 0; i < r; i++) result = result * (n - i);
    for (let i = 1; i <= r; i++) result = result / i;
    return result;
  };

  const DFS = (level, count, rgb) => {
    if (level >= N) {
      ans += count;
      return;
    }

    const isMod2 = (level + 1) % 2 === 0;
    const isMod3 = (level + 1) % 3 === 0;

    for (let i = 0; i < 3; i++) {
      if (rgb[i] >= level + 1) {
        let next = [...rgb];
        next[i] = next[i] - (level + 1);
        DFS(level + 1, count * 1, next);
      }
    }

    if (isMod2) {
      const modCount = Math.floor((level + 1) / 2);
      for (let i = 0; i < 3; i++) {
        if (rgb[(i + 1) % 3] >= modCount && rgb[(i + 2) % 3] >= modCount) {
          let next = [...rgb];
          next[(i + 1) % 3] = next[(i + 1) % 3] - modCount;
          next[(i + 2) % 3] = next[(i + 2) % 3] - modCount;

          const nextCount = combination(level + 1, modCount);

          DFS(level + 1, count * nextCount, next);
        }
      }
    }

    if (isMod3) {
      const modCount = Math.floor((level + 1) / 3);
      if (rgb[0] >= modCount && rgb[1] >= modCount && rgb[2] >= modCount) {
        let next = [...rgb];
        next[0] = next[0] - modCount;
        next[1] = next[1] - modCount;
        next[2] = next[2] - modCount;

        let nextCount = combination(level + 1, modCount);
        nextCount = nextCount * combination(level + 1 - modCount, modCount);

        DFS(level + 1, count * nextCount, next);
      }
    }
  };

  if (RGB[0] > 0) DFS(1, 1, [RGB[0] - 1, RGB[1], RGB[2]]);
  if (RGB[1] > 0) DFS(1, 1, [RGB[0], RGB[1] - 1, RGB[2]]);
  if (RGB[2] > 0) DFS(1, 1, [RGB[0], RGB[1], RGB[2] - 1]);

  return ans;
};
const solution = () => {
  const inputs = input[0].split(" ").map((v) => +v);
  const N = inputs[0];
  const [R, G, B] = [inputs[1], inputs[2], inputs[3]];
  const dp = [];
  const factorial = (x) => (x == 1 ? 1 : x * factorial(x - 1));
  const comb = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

  for (let i = 0; i < N + 1; i++) {
    dp[i] = [];
    for (let r = 0; r < R + 1; r++) {
      dp[i][r] = [];
      for (let g = 0; g < G + 1; g++) {
        dp[i][r][g] = [];
        for (let b = 0; b < B + 1; b++) {
          if (i == 0) {
            dp[i][r][g][b] = 1;
            continue;
          }
          dp[i][r][g][b] = 0;
          if (r - i >= 0) dp[i][r][g][b] += dp[i - 1][r - i][g][b] * 1;
          if (g - i >= 0) dp[i][r][g][b] += dp[i - 1][r][g - i][b] * 1;
          if (b - i >= 0) dp[i][r][g][b] += dp[i - 1][r][g][b - i] * 1;

          if (i % 2 == 0) {
            let divNum = i / 2;
            if (g - divNum >= 0 && b - divNum >= 0)
              dp[i][r][g][b] +=
                dp[i - 1][r][g - divNum][b - divNum] * comb(i, divNum);
            if (r - divNum >= 0 && b - divNum >= 0)
              dp[i][r][g][b] +=
                dp[i - 1][r - divNum][g][b - divNum] * comb(i, divNum);
            if (r - divNum >= 0 && g - divNum >= 0)
              dp[i][r][g][b] +=
                dp[i - 1][r - divNum][g - divNum][b] * comb(i, divNum);
          }

          if (i % 3 == 0) {
            let divNum = i / 3;
            if (r - divNum >= 0 && g - divNum >= 0 && b - divNum >= 0)
              dp[i][r][g][b] +=
                dp[i - 1][r - divNum][g - divNum][b - divNum] *
                comb(i, divNum) *
                comb(i - divNum, divNum);
          }
        }
      }
    }
  }

  return dp[N][R][G][B]; // best sol
};

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = require("fs").readFileSync("../input.txt").toString().split("\n");
console.log(solution(input));
