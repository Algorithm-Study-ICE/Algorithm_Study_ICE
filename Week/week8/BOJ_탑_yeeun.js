let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");

const N = input[0];
const tops = input[1].split(" ").map(Number);
const stack = []; // 현재 탑보다 큰 탑 저장
const answer = [];

for(let i = 0 ; i < N ; i++) {
    // 현재 탑보다 작은 탑 지우기
    // while문을 다 돌면 stack에 현재 탑보다 작은 탑은 삭제됨 (현재 탑과 가까운 탑중)
    while(stack.length && tops[stack[stack.length-1]] < tops[i]) {
        stack.pop();
    }
    if(stack.length === 0) {
    // 스택에 현재 탑보다 큰 탑이 없기때문에 0 push
        answer.push(0);
    } else {
    // 현재 탑보다 크고 가장 가까이 있는 탑 push
        answer.push(stack[stack.length-1] + 1);
    }
    stack.push(i); 
}

console.log(answer.join(" "));