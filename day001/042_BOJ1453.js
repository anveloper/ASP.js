const solution = (input) => {
  input.shift();
  const arr = input[0].split(" ");
  return arr.length - new Set(arr).size;
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
