// solution
const solution = (input) => {
  const N = +input[0];
  const arr = input[1].split("");
  const matrix = Array.from({ length: N }, () => new Array(N).fill(""));
  let k = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      if (arr[k] === "+") matrix[i][j] = 1;
      else if (arr[k] === "-") matrix[i][j] = -1;
      else matrix[i][j] = 0;
      k++;
    }
  }
  const ans = [];
  const check = (idx) => {
    let sum = 0;
    for (let i = idx; i >= 0; i--) {
      sum += ans[i];
      const sign = matrix[i][idx];
      if (
        (sum > 0 && sign !== 1) ||
        (sum < 0 && sign !== -1) ||
        (sum === 0 && sign !== 0)
      ) {
        return false;
      }
    }
    return true;
  };

  const recur = (idx) => {
    if (idx === N) return true;
    const sign = matrix[idx][idx];
    for (let i = 1; i <= 10; i++) {
      ans.push(i * sign);
      if (check(idx) && recur(idx + 1)) return true;
      ans.pop();
    }
    return false;
  };
  recur(0);
  return ans.join(" ");
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input)); // best sol
