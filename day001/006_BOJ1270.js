const solution = (input) => {
  const ans = [];

  input.shift();
  input.map((value) => {
    const arr = value.split(" ");
    const len = arr.shift();

    let cnt = 0;
    let check = 0;
    for (ele of arr) {
      if (cnt === 0) check = ele;
      cnt += check == ele ? 1 : -1;
    }

    let m = 0;
    for (ele of arr) {
      if (ele === check) m += 1;
    }

    ans.push(m > len / 2 ? check : "SYJKGW");
  });

  return ans.join("\n");
};

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());
// const input = require("fs").readFileSync("../input.txt").toString().split("\n");
console.log(solution(input));
