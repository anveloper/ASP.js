const solution = (input) => {
  const cnt = input
    .join("")
    .split(" ")
    .join("")
    .split("")
    .reduce((acc, cur, idx) => {
      if (acc[cur]) acc[cur]++;
      else acc[cur] = 1;

      return acc;
    }, {});

  const maxValue = Object.keys(cnt).reduce((a, b) => (cnt[a] > cnt[b] ? a : b));

  const arr = [];
  for (let V in cnt) {
    if (cnt[V] === cnt[maxValue]) arr.push(V);
  }
  return arr.sort().join("");
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
