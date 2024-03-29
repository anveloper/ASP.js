const solution = (input) => {
  const L = +input.shift();
  const pieces = new Array(L * L).fill(0).map(() => new Array(3).fill(0));
  const visited = new Array(6).fill(0);
  const cntPieces = new Array(6).fill(0);
  cntPieces[0] = -1;
  const seq = new Array(5).fill(0);
  const graph = new Array(L).fill(0).map(() => new Array(L).fill(0));
  let idx = 0,
    flag = 0,
    ans = "";
  try {
    for (let i = 1; i <= 5; i++) {
      const [r, c] = input.shift().split(" ").map(Number);
      let k = -1;
      for (let j = 0; j < r; j++) {
        const rI = input.shift().trim();
        const rC = rI.split("");
        for (let l = 0; l < c; l++) {
          if (rC[l] === "#") {
            if (k === -1) k = l;
            pieces[idx][0] = i;
            pieces[idx][1] = j;
            pieces[idx][2] = l - k;
            cntPieces[i] = idx;
            idx++;
          }
        }
      }
    }
  } catch (err) {
    return "gg";
  }

  if (pieces[pieces.length - 1][0] === 0) return "gg";

  const permutation = (node) => {
    if (flag === 1) return;

    if (node === 5) {
      let idx = 0;
      for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
          if (graph[i][j] === 0) {
            if (!check(i, j, seq[idx++])) {
              for (let row of graph) {
                row.fill(0);
              }
              return;
            }
          }
        }
      }

      flag = 1;
      for (let i = 0; i < L; i++) {
        ans += graph[i].join("") + "\n";
      }
      return;
    }

    for (let i = 1; i <= 5; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        seq[node] = i;
        permutation(node + 1);
        visited[i] = 0;
      }
    }
  };

  const check = (r, c, n) => {
    for (let j = cntPieces[n - 1] + 1; j <= cntPieces[n]; j++) {
      const dr = pieces[j][1];
      const dc = pieces[j][2];

      const nr = r + dr;
      const nc = c + dc;

      if (nr >= 0 && nr < L && nc >= 0 && nc < L && graph[nr][nc] === 0) {
        graph[nr][nc] = n;
      } else {
        return false;
      }
    }
    return true;
  };

  permutation(0);

  return flag === 0 ? "gg" : ans;
};

const fs = require("fs");
const input = fs
  .readFileSync(false ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
