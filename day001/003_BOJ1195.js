const solution = () => {
  const [l, s] = input.sort((a, b) => b.length - a.length);

  const isPossible = (a, b) => !(a === "2" && b === "2");

  const padded = "0".repeat(s.length - 1) + l + "0".repeat(s.length - 1);
  let mx = l.length + s.length;

  outer: for (let i = 0; i <= padded.length - s.length; i += 1) {
    let tmp = 0;
    for (let j = 0; j < s.length && padded[i + j]; j += 1) {
      if (padded[i + j] === "0") continue;
      if (!isPossible(padded[i + j], s[j])) continue outer;
      tmp += 1;
    }
    mx = Math.min(mx, l.length + s.length - tmp);
    if (mx === l.length) break;
  }
  return mx;
};
const input = require("fs")
  .readFileSync("./data.in")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
