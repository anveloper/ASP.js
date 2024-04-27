const solution = (input) => {
  const [h, m, s] = input[0].split(":").map(Number);
  let [sh, sm, ss] = input[1].split(":").map(Number);
  let [rh, rm, rs] = [];

  if (ss >= s) rs = ss - s;
  else {
    rs = 60 + ss - s;
    sm -= 1;
  }

  if (sm >= m) rm = sm - m;
  else {
    rm = 60 + sm - m;
    sh -= 1;
  }

  if (sh >= h) rh = sh - h;
  else rh = 24 + sh - h;

  return [rh, rm, rs]
    .map((value) => (String(value).length === 1 ? "0" + String(value) : value))
    .join(":");
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
