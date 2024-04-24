const solution = (input) => {
  const [N, Q] = input[0].split(" ").map((v) => +v);
  const arr = [];
  for (let i = 1; i < N + 1; i++) {
    time = +input[i];
    for (let j = 0; j < time; j++) {
      arr.push(i);
    }
  }
  const sb = [];
  for (let i = N + 1; i < N + 1 + Q; i++) {
    sb.push(arr[input[i]]);
  }
  return sb.join("\n");
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
