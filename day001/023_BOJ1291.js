const solution = (input) => {
  const x = +input;

  const factor = (x) => {
    for (var a = [], c = 0, i = 2; i <= Math.sqrt(x); i++) {
      while (!(x % i)) {
        x /= i;
        c++;
      }
      if (c) {
        a.push([i, c]);
        c = 0;
      }
    }
    if (x != 1) a.push([x, 1]);
    return a.length && !(a.length % 2);
  };
  const isImyeon = (x) => {
    return (
      (x >= 6 || x == 4) && (x + "").split("").reduce((a, b) => +a + +b) % 2
    );
  };
  const isImhyeon = (x) => {
    return x == 2 || x == 4 || factor(x);
  };
  return [3, 2, 1, 4][isImyeon(x) * 2 + isImhyeon(x)];
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
