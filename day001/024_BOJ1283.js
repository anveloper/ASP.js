const solution = ([N, ...arr]) => {
  let ans = "";
  let hotkey = new Set();
  arr.forEach((str, index) => {
    let first = [];
    let not = [];
    for (let i in str) {
      i = Number(i);
      if (!hotkey.has(str[i])) {
        if (i === 0 || str[i - 1] === " ") {
          first.push(i);
          break;
        } else if (str[i] !== " ") not.push(i);
      }
    }
    if (first.length > 0) {
      const ind = first[0];
      ans += `${str.slice(0, ind)}[${str[ind]}]${str.slice(ind + 1)}\n`;
      hotkey.add(str[ind].toUpperCase());
      hotkey.add(str[ind].toLowerCase());
    } else if (not.length > 0) {
      const ind = not[0];
      ans += `${str.slice(0, ind)}[${str[ind]}]${str.slice(ind + 1)}\n`;
      hotkey.add(str[ind].toUpperCase());
      hotkey.add(str[ind].toLowerCase());
    } else {
      ans += str + "\n";
    }
  });
  return ans.trim();
};

const fs = require("fs");
const input = fs
  .readFileSync(true ? "../input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input)); // best sol
