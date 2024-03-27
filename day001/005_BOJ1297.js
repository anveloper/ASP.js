const solution = (input) => {
  const [D, H, W] = input[0].split(" ").map((v) => +v);
  const q = Math.sqrt(D ** 2 / (H ** 2 + W ** 2));
  return `${Math.floor(q * H)} ${Math.floor(q * W)}`;
};

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = require("fs").readFileSync("../input.txt").toString().split("\n");
console.log(solution(input));
