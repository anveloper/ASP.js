const solution = (input) => {
  const inputs = input[0].split(" ").map((v) => +v);
  const N = inputs[0];
  const RGB = [inputs[1], inputs[2], inputs[3]];
  let ans = 0;

  const combination = (n, r) => {
    let result = 1;
    for (let i = 0; i < r; i++) result = result * (n - i);
    for (let i = 1; i <= r; i++) result = result / i;
    return result;
  };

  const DFS = (level, count, rgb) => {
    if (level >= N) {
      ans += count;
      return;
    }

    const isMod2 = (level + 1) % 2 === 0;
    const isMod3 = (level + 1) % 3 === 0;

    for (let i = 0; i < 3; i++) {
      if (rgb[i] >= level + 1) {
        let next = [...rgb];
        next[i] = next[i] - (level + 1);
        DFS(level + 1, count * 1, next);
      }
    }

    if (isMod2) {
      const modCount = Math.floor((level + 1) / 2);
      for (let i = 0; i < 3; i++) {
        if (rgb[(i + 1) % 3] >= modCount && rgb[(i + 2) % 3] >= modCount) {
          let next = [...rgb];
          next[(i + 1) % 3] = next[(i + 1) % 3] - modCount;
          next[(i + 2) % 3] = next[(i + 2) % 3] - modCount;

          const nextCount = combination(level + 1, modCount);

          DFS(level + 1, count * nextCount, next);
        }
      }
    }

    if (isMod3) {
      const modCount = Math.floor((level + 1) / 3);
      if (rgb[0] >= modCount && rgb[1] >= modCount && rgb[2] >= modCount) {
        let next = [...rgb];
        next[0] = next[0] - modCount;
        next[1] = next[1] - modCount;
        next[2] = next[2] - modCount;

        let nextCount = combination(level + 1, modCount);
        nextCount = nextCount * combination(level + 1 - modCount, modCount);

        DFS(level + 1, count * nextCount, next);
      }
    }
  };

  if (RGB[0] > 0) DFS(1, 1, [RGB[0] - 1, RGB[1], RGB[2]]);
  if (RGB[1] > 0) DFS(1, 1, [RGB[0], RGB[1] - 1, RGB[2]]);
  if (RGB[2] > 0) DFS(1, 1, [RGB[0], RGB[1], RGB[2] - 1]);

  return ans;
};
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
console.log(solution(input));

// dp로
