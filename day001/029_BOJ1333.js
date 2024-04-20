const solution = (input) => {
  const [N, L, D] = input[0].split(" ").map(Number);

  const arr = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < L; j++) {
      arr.push(true);
    }

    if (i != N - 1) {
      for (let j = 0; j < 5; j++) {
        arr.push(false);
      }
    }
  }

  let ans = 0;
  while (ans < arr.length) {
    if (!arr[ans]) break;
    ans += D;
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
