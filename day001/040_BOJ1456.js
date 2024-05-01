const solution = (input) => {
  const [l, r] = input[0].split(" ").map(Number);
  const max = parseInt(Math.sqrt(r));
  const arr = Array(max + 1).fill(0);
  const primes = [];
  let ans = 0;

  for (let i = 2; i <= max; i++) {
    if (arr[i]) continue;
    primes.push(i);

    for (let j = 0; j + i <= max; j += i) {
      arr[i + j] = 1;
    }
  }

  for (let i = 0; i < primes.length; i++) {
    let m = primes[i] * primes[i];
    while (m <= r) {
      if (m >= l) ans++;
      m *= primes[i];
    }
  }

  return ans;
};

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
