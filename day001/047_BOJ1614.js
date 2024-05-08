const solution = (input) => {
  let [a, b] = input.map(Number);
  let res = a - 1;
  if (a == 1) res += b * 8;
  else if (a == 2) {
    if (b % 2 == 0) res += parseInt(b / 2) * 8;
    else res += parseInt(b / 2) * 8 + 6;
  } else if (a == 3) res += parseInt(b * 4);
  else if (a == 4) {
    if (b % 2 == 0) res += parseInt((b / 2) * 8);
    else res += parseInt(b / 2) * 8 + 2;
  } else if (a == 5) res += b * 8;

  return res;
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
