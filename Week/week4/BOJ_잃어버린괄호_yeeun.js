const input = require("fs").readFileSync("예제.txt").toString().trim();
// - 기준으로 문자열 나누기
// 문자열 숫자로 변환
// - 기준으로 나눈 숫자들끼리 더해주기
// (ex) 10+55-50+40 => [(10+55=65), (50+40=90)]
const arr = input.split("-").map((e) => e.split("+").map(Number))
  .map((num) => num.reduce((acc, cur) => acc + cur));

// (+)괄호에서 (-)괄호 빼줌 
let sum = arr[0];
for (let i = 1; i < arr.length; i++) {
  sum -= arr[i];
}

console.log(sum);
