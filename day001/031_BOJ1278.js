const solution = (input) => {
  const N = +input[0];
  const ans = [];

  ans.push((1 << N) - 1);
  ans.push("\n");

  const recur = (n) => {
    if (n === 0) return;
    recur(n - 1);
    ans.push(n);
    ans.push("\n");
    recur(n - 1);
  };
  recur(N);

  ans.push(N);
  return ans.join("");
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
