const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const [boxes, books] = [
    input[1].split(" ").map(Number),
    input[2].split(" ").map(Number),
  ];
  for (let j = 0; j < M; j++) {
    const book = books[j];
    for (let i = 0; i < N; i++) {
      if (book <= boxes[i]) {
        boxes[i] -= book;
        break;
      }
    }
  }
  return boxes.reduce((acc, cur) => (acc += cur), 0);
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
