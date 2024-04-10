const solution = (input) => {
  const [N, R] = input[0].split(" ").map(Number);
  const weights = input[1].split(" ").map(Number);

  const adj = Array.from({ length: N + 1 }, () => []);
  for (let i = 2; i < input.length; i++) {
    const [u, v] = input[i].split(" ").map(Number);
    adj[u].push(v);
    adj[v].push(u);
  }

  const dp = Array.from({ length: N + 1 }, () => Array(2).fill(-1));

  const dfs = (cur, idx) => {
    if (dp[cur][idx] !== -1) {
      return dp[cur][idx];
    }

    let resSpecial = weights[cur - 1];
    let resNormal = weights[cur - 1] - weights[idx - 1];

    for (const next of adj[cur]) {
      if (next === idx) continue;
      resSpecial += dfs(next, cur);
      resNormal += dfs(next, idx);
    }

    dp[cur][0] = cur === R ? resSpecial : Math.min(resSpecial, resNormal);
    dp[cur][1] = resSpecial;

    return dp[cur][idx];
  };

  return dfs(R, R);
};

const fs = require("fs");
const input = fs
  .readFileSync(false ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
