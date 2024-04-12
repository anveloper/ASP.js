const solution = (input) => {
  const cur = new Date(input[0].split(" ").join("-"));
  const day = new Date(input[1].split(" ").join("-"));

  const [cy, cm, cd] = [cur.getFullYear(), cur.getMonth(), cur.getDate()];
  const [dy, dm, dd] = [day.getFullYear(), day.getMonth(), day.getDate()];

  let isGG = false;
  if (dy - cy === 1000) {
    if (cm === dm && cd <= dd) isGG = true;
    else if (cm < dm) isGG = true;
  } else if (dy - cy > 1000) {
    isGG = true;
  }

  const diff = day - cur;
  const days = diff / (1000 * 60 * 60 * 24);

  return isGG ? "gg" : "D-" + Math.ceil(days);
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
