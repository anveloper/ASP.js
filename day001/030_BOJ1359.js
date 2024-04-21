const solution = (input) => {
  const [N, M, K] = input[0].split(" ").map(Number);
  const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };

  const comb = (n, m) => {
    if (n < m) return 0;
    return factorial(n) / (factorial(m) * factorial(n - m));
  };
  let tmp = 0;

  for (let i = K; i <= M; i++) {
    tmp += comb(M, i) * comb(N - M, M - i);
  }

  return tmp / comb(N, M);
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
