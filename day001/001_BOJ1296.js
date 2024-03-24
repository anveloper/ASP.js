// solution
const solution = (Teamname) => {
  const percent = [];

  for (i = 0; i < Teamname.length; i++) {
    let name = Teamname[i] + input[0];

    let L = name.length - name.replaceAll("L", "").length;
    let O = name.length - name.replaceAll("O", "").length;
    let V = name.length - name.replaceAll("V", "").length;
    let E = name.length - name.replaceAll("E", "").length;

    percent[i] =
      ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;
  }
  const ans = Teamname[percent.indexOf(Math.max(...percent))];
  console.log(ans);
  return ans;
};

// node 실행
const isStudy = true;
const inputFile = isStudy ? "../input.txt" : "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(inputFile).toString().trim().split("\n");

solution(input.slice(2).sort());
