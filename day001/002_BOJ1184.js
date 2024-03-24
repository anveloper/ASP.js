const solution = (input) => {
  const N = +input[0];
  const data = [];
  for (let i = 1; i <= N; i++) {
    data.push(
      input[i]
        .trim()
        .split(" ")
        .map((el) => +el)
    );
  }

  let sum = new Array(N + 1);
  for (let i = 0; i <= N; i++) {
    sum[i] = new Array(N + 1).fill(0);
  }

  let cnt = new Map();
  let result = 0;

  const firstFunc = (x, y) => {
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        let tmp = sum[x][y] - sum[x][j] - sum[i][y] + sum[i][j];
        if (cnt.has(tmp)) cnt.set(tmp, cnt.get(tmp) + 1);
        else cnt.set(tmp, 1);
      }
    }
    for (let i = x + 1; i <= N; i++) {
      for (let j = y + 1; j <= N; j++) {
        let tmp = sum[i][j] - sum[i][y] - sum[x][j] + sum[x][y];
        if (cnt.has(tmp)) result += cnt.get(tmp);
      }
    }
    cnt.clear();
  };

  const secondFunc = (x, y) => {
    for (let i = x + 1; i <= N; i++) {
      for (let j = 0; j < y; j++) {
        let tmp = sum[i][y] - sum[i][j] - sum[x][y] + sum[x][j];
        if (cnt.has(tmp)) cnt.set(tmp, cnt.get(tmp) + 1);
        else cnt.set(tmp, 1);
      }
    }
    for (let i = 0; i < x; i++) {
      for (let j = y + 1; j <= N; j++) {
        let tmp = sum[x][j] - sum[x][y] - sum[i][j] + sum[i][y];
        if (cnt.has(tmp)) result += cnt.get(tmp);
      }
    }
    cnt.clear();
  };

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      sum[i][j] =
        data[i - 1][j - 1] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
    }
  }

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < N; j++) {
      firstFunc(i, j);
      secondFunc(i, j);
    }
  }
  return result;
};

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

console.log(solution(input));
