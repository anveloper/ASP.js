const solution = (input) => {
  const str = input[0].split("").map(Number);

  for (let i = 1; i < str.length; i++) {
    const front = str.slice(0, i).reduce((acc, cur) => acc * cur, 1),
      back = str.slice(i).reduce((acc, cur) => acc * cur, 1);
    if (front === back) return "YES";
  }
  return "NO";
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
