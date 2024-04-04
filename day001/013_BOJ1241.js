// solution
const solution = (input) => {
  const MAX_SIZE = 1_000_000;
  const cnt = new Array(MAX_SIZE + 1).fill(0);
  const hit = new Array(MAX_SIZE + 1).fill(0);
  let ans = "";

  for (let i = 1; i < input.length; i += 1) {
    cnt[input[i]] += 1;
  }

  for (let i = 1; i <= MAX_SIZE; i += 1) {
    if (cnt[i] === 0) continue;

    hit[i] += cnt[i] - 1;

    for (let j = i * 2; j <= MAX_SIZE; j += i) {
      hit[j] += cnt[i];
    }
  }

  for (let i = 1; i < input.length; i += 1) {
    ans += hit[input[i]] + "\n";
  }

  return ans;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(input));
