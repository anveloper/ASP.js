// solution
const solution = (input) => {
  const N = +input[0],
    list = input[1].split(" ").map((e) => +e);

  let res = 0;
  const getNumber = (arr) => {
    let a = 0;
    for (let i = 0; i < N; i++) {
      if (arr.includes(arr[i] + 50)) a++;
    }
    return a;
  };

  const getAcc = (arr) => {
    const res = [list[arr[0]]];
    for (let i = 1; i < N; i++) {
      res[i] = res[i - 1] + list[arr[i]];
    }
    return res;
  };

  const recur = (arr = []) => {
    if (arr.length === N) {
      return (res = Math.max(res, getNumber(getAcc(arr))));
    }
    for (let i = 0; i < N; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      recur(arr);
      arr.pop();
    }
  };
  recur();
  return res;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
