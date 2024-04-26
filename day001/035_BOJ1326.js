const solution = (input) => {
  let [n, stones, location] = input;
  n = +n;
  stones = stones.split(" ").map(Number);
  const [st, ed] = location.split(" ").map(Number);

  const queue = [st];
  const visited = Array(n + 1).fill(0);
  while (queue.length) {
    const cur = queue.shift();
    for (let i = cur + stones[cur - 1]; i <= n; i += stones[cur - 1]) {
      if (i === ed) {
        return visited[cur - 1] + 1;
      }
      if (visited[i - 1]) continue;
      queue.push(i);
      visited[i - 1] = visited[cur - 1] + 1;
    }

    for (let i = cur - stones[cur - 1]; i >= 1; i -= stones[cur - 1]) {
      if (i === ed) {
        return visited[cur - 1] + 1;
      }
      if (visited[i - 1]) continue;
      queue.push(i);
      visited[i - 1] = visited[cur - 1] + 1;
    }
  }

  return -1;
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
