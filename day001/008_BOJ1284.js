// solution
const solution = (input) => {
  let ans = "";
  while (input.length > 0) {
    const nums = input.shift().split("");
    if (nums.length === 1 && +nums[0] === 0) break;
    let l = 1;
    nums.map((num) => {
      if (num === "1") l += 3;
      else if (num === "0") l += 5;
      else l += 4;
    });
    ans += l + "\n";
  }

  return ans;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
