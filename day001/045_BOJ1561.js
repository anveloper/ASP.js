const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const nums = input[1].split(" ").map(Number);

  const check = (mid) => {
    let cnt = 0;

    for (let i = 0; i < M; i++) {
      cnt += Math.ceil(mid / nums[i]);
    }

    return cnt >= N;
  };

  let left = 0;
  let right = Math.max(...nums) * N;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (check(mid)) right = mid - 1;
    else left = mid + 1;
  }
  let rest = N;
  const empty = [];
  for (let i = 0; i < M; i++) {
    rest -= Math.ceil((left - 1) / nums[i]);
    if ((left - 1) % nums[i] === 0) empty.push(i + 1);
  }

  return empty[rest - 1];
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
