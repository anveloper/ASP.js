const solution = (input) => {
  const M = input[0];
  let cup = 1;
  for (let i = 1; i <= M; i++) {
    let x = input[i].split(" ")[0];
    let y = input[i].split(" ")[1];

    if (cup == x) cup = y;
    else if (cup == y) cup = x;
  }

  return cup;
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
