// solution
const solution = ([input]) => {
  let [N, K, M, ans = 0, cnt = N] = input.split(" ").map(Number);

  while (++ans <= N) {
    const idx = cnt > K ? K : ((K - 1) % cnt) + 1;
    if (cnt == 1 || M === idx) break;
    else if (M > idx) M -= idx;
    else M += cnt - idx;
    cnt--;
  }
  return ans;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input)); // best sol
