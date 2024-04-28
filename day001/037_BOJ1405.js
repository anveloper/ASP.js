const solution = (input) => {
  const [N, ...rest] = input[0].split(" ").map(Number);
  const dirPercentage = rest.map((dir) => Number(dir) * 0.01);

  const visited = [];
  for (let i = 0; i < 30; i++) {
    visited.push(new Array(30).fill(false));
  }

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let res = 0;
  let num = N;

  const dfs = (x, y, chance) => {
    if (num === 0) {
      res += chance;
      return;
    }
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (!visited[nx][ny]) {
        num -= 1;
        dfs(nx, ny, chance * dirPercentage[i]);
        num += 1;
        visited[nx][ny] = false;
      }
    }
  };

  dfs(15, 15, 1.0);

  return res.toPrecision(10);
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
