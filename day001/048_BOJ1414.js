const solution = (input) => {
  const N = +input[0];
  const map = input.slice(1).map((elem) =>
    elem.split("").map((ee) => {
      if (ee == "0") return 0;

      if (ee.charCodeAt(0) >= 97) {
        return ee.charCodeAt(0) - "A".charCodeAt(0) - 31;
      }

      return ee.charCodeAt(0) - "A".charCodeAt(0) + 27;
    })
  );

  const nodes = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 0) continue;
      nodes.push([i, j, map[i][j]]);
    }
  }

  nodes.sort((a, b) => a[2] - b[2]);

  const parents = Array.from(Array(N), (_, k) => k);

  const find = (a) => {
    if (a === parents[a]) return a;
    return (parents[a] = find(parents[a]));
  };

  const union = (a, b) => {
    a = find(a);
    b = find(b);

    if (a === b) return;
    parents[Math.max(a, b)] = Math.min(a, b);
  };

  let ans = 0;
  let cnt = 0;
  for (const [s, e, w] of nodes) {
    if (find(s) === find(e)) continue;
    union(s, e);
    cnt++;
    ans += w;
  }

  for (const parent of parents) {
    find(parent);
  }
  return cnt !== N - 1 ? -1 : map.flat().reduce((pv, cv) => pv + cv, 0) - ans;
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
