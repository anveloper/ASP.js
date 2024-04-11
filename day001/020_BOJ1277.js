const solution = (input) => {
  const [N, W] = input[0].split(" ").map(Number);
  const M = +input[1];
  const plantArr = input.slice(2, N + 2).map((v) => v.split(" ").map(Number));
  const connections = input.slice(N + 2).map((v) => v.split(" ").map(Number));

  const plants = Array.from({ length: N + 1 }, () => []);
  const connected = Array.from({ length: N + 1 }, () =>
    Array(N + 1).fill(false)
  );
  const distance = new Array(N + 1).fill(Infinity);
  const visited = new Array(N + 1).fill(false);
  let ans = 0;

  for (let i = 1; i <= N; i++) {
    plants[i] = plantArr[i - 1];
  }

  for (const [x, y] of connections) {
    connected[x][y] = true;
    connected[y][x] = true;
  }

  function getDistance(cur, next) {
    if (connected[cur][next]) return 0;
    const src = plants[cur];
    const dest = plants[next];
    return Math.sqrt(
      Math.pow(src[0] - dest[0], 2) + Math.pow(src[1] - dest[1], 2)
    );
  }

  distance[1] = 0;
  for (let i = 2; i < N + 1; i++) {
    if (connected[1][i]) distance[i] = 0;
  }

  for (let i = 0; i < N; i++) {
    let minDistance = Infinity;
    let cur = 0;
    for (let j = 1; j < N + 1; j++) {
      if (!visited[j] && minDistance >= distance[j]) {
        minDistance = distance[j];
        cur = j;
      }
    }
    if (cur === N) break;
    visited[cur] = true;
    for (let j = 1; j < N + 1; j++) {
      if (j === cur) continue;
      distance[j] = Math.min(distance[j], distance[cur] + getDistance(cur, j));
    }
  }

  ans = Math.floor(distance[N] * 1000);

  return ans;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
