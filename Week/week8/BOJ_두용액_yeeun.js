let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
const N = Number(input[0]);
const solution = input[1].split(" ").map(Number).sort((a,b) => a-b);

let left = 0;
let right = N-1;
let min = 2000000000;
let answer = "";

while(left < right) {
    let sum = solution[left] + solution[right];
    
    if(min > Math.abs(sum)) {
        min = Math.abs(sum);
        answer = [solution[left], solution[right]];
    }

    if(sum === 0) {
        break;
    } else if(sum > 0) {
        right--;
    } else {
        left++;
    }
}

console.log(answer.join(" "));