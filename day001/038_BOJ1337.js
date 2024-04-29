const solution = (input) => {
  const N = +input.shift();
  const arr = [...input].map((v) => +v).sort((a, b) => a - b);
  const temp = [];

  for (let i = 0; i < N; i++) {
    let cnt = 0;
    for (let j = arr[i]; j < arr[i] + 5; j++) {
      if (!arr.includes(j)) cnt += 1;
    }
    temp.push(cnt);
  }

  return Math.min(...temp);
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
