const solution = ([_, ...rest]) => {
  const bridge = rest.map((b) => b.split(" ").map(Number));
  bridge.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));

  let ans = 0;
  for (let i = 0; i < bridge.length; i++) {
    let [a, b, c] = bridge[i];
    let left = a,
      right = a;

    for (let j = i - 1; j >= 0; j--) {
      let [x, y, z] = bridge[j];
      if (left !== a && right !== a) break;
      if (left === a) {
        if (y <= b && z > b) left = a - x;
      }
      if (right === a) {
        if (y < c && z >= c) right = a - x;
      }
    }
    ans += left + right;
  }
  return ans;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
