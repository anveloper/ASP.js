const solution = (input) => {
  const [N, ...arr] = input.map(Number);
  const recur = (prev2, prev, cnt) => {
    if (cnt === ballTotal) return 1;

    let res = dp[prev2][prev][balls[1]][balls[2]][balls[3]][balls[4]][balls[5]];
    if (res !== -1) return res;

    res = 0;
    for (let i = 1; i <= N; i++) {
      if (prev2 !== i && prev !== i && balls[i] > 0) {
        balls[i]--;
        res += recur(prev, i, cnt + 1);
        balls[i]++;
      }
    }
    dp[prev2][prev][balls[1]][balls[2]][balls[3]][balls[4]][balls[5]] = res;

    return res;
  };

  let balls = new Array(6)
    .fill()
    .map((_, i) => (i >= 1 && i <= N ? arr[i - 1] : 0));
  let dp = new Array(6)
    .fill()
    .map(() =>
      new Array(6)
        .fill()
        .map(() =>
          new Array(11)
            .fill()
            .map(() =>
              new Array(11)
                .fill()
                .map(() =>
                  new Array(11)
                    .fill()
                    .map(() =>
                      new Array(11).fill().map(() => new Array(11).fill(-1))
                    )
                )
            )
        )
    );
  let ballTotal = balls.reduce((a, b) => a + b, 0);

  return recur(0, 0, 0);
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
