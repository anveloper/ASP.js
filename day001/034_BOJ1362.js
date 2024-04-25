const solution = (input) => {
  input = input.map((i) => i.split(" "));
  const sb = [];
  let SN = 0;
  while (++SN) {
    let [o, w] = input.shift().map(Number);
    if (o == 0 && w == 0) {
      break;
    }
    let isRip = false;
    while (true) {
      const [cmd, n] = input.shift();
      if (cmd === "#") break;
      else if (cmd === "E") {
        w -= +n;
        if (w <= 0) isRip = true;
      } else {
        w += +n;
      }
    }

    if (isRip) sb.push(`${SN} RIP`);
    else if (o / 2 < w && w < o * 2) sb.push(`${SN} :-)`);
    else sb.push(`${SN} :-(`);
  }
  return sb.join("\n");
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
