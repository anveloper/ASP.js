const solution = (input) => {
  const N = Number(input);
  let ans = 1;

  for (let i = 2; i <= N; i++) {
    ans *= i;
    while (ans % 10 === 0) ans /= 10;
    ans %= 1000000000000;
  }

  return (ans % 100000).toString().padStart(5, "0");
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
