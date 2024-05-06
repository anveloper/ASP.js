const solution = (input) => {
  let N = Number(input[0]),
    sec = 1,
    cnt = 0;
  while (N) {
    N -= sec++;
    cnt++;
    if (sec > N) sec = 1;
  }
  return cnt;
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
