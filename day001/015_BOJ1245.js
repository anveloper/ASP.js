// solution
const solution = ([input, ...lines]) => {
  const [N, M] = input.split(" ").map(Number);
  const map = lines.map((line) => line.split(" ").map(Number));
  const top = Array.from(Array(N), () => Array.from(Array(M), () => false));
  const dr = [-1, -1, -1, 0, 0, 1, 1, 1],
    dc = [-1, 0, 1, -1, 1, -1, 0, 1];
  let ans = 0;

  const bfs = (r, c) => {
    // 43704KB, 3276ms
    const visit = Array.from(Array(N), () => Array.from(Array(M), () => false));
    visit[r][c] = true;
    const queue = [[r, c]],
      list = [];
    while (queue.length != 0) {
      const cur = queue.shift();
      for (let dir = 0; dir < 8; dir++) {
        const nr = cur[0] + dr[dir],
          nc = cur[1] + dc[dir];
        if (nr < 0 || nr >= N || nc < 0 || nc >= M || visit[nr][nc]) continue;
        if (map[nr][nc] > map[r][c]) return;
        if (map[nr][nc] == map[cur[0]][cur[1]]) {
          queue.push([nr, nc]);
          list.push([nr, nc]);
        }
        visit[nr][nc] = true;
      }
    }
    list.map(([r, c]) => (top[r][c] = true));
    ans++;
  };

  const visit = Array.from(Array(N), () => Array.from(Array(M), () => false));
  const dfs = (r, c, flag) => {
    // 11992KB, 192ms
    visit[r][c] = true;
    for (let dir = 0; dir < 8; dir++) {
      const nr = r + dr[dir],
        nc = c + dc[dir];
      if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;
      if (map[nr][nc] > map[r][c]) flag = false;
      if (map[nr][nc] == map[r][c] && !visit[nr][nc])
        flag = dfs(nr, nc, flag) && flag;
    }
    return flag;
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visit[i][j]) continue;
      ans += dfs(i, j, true);
    }
  }

  return ans;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input)); // best sol
