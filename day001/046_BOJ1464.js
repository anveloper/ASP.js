const solution = (input) => {
  let s = input[0].split("");
  let s1 = s[0];

  for (i = 1; i < s.length; i++) {
    if (s1[i - 1] < s[i]) {
      s1 = s[i] + s1;
      continue;
    }
    s1 = s1 + s[i];
  }

  return s1.split("").reverse().join("");
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
