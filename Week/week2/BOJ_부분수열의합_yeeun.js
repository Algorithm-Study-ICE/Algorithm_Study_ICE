let input = require('fs').readFileSync('예제.txt').toString().split('\n');

let [N, S] = input[0].split(" ").map(Number);
let num = input[1].split(" ").map(Number);
let answer = 0;

function dfs(i, sum) {
    if(i === N) { // 끝까지 돌았을 때
        // 부분수열 원소들의 합이 S가 되는 경우, 경우의 수 증가
        if(sum == S) {
            answer++;
        }
        return;
    } else {
        // 지금꺼 더하기
        dfs(i+1, sum + num[i]);
        // 지금꺼 넘어가기
        dfs(i+1, sum);
    }
}

dfs(0, 0);
// 부분수열의 길기아 0인 경우 부분집합의 경우를 제외시킴
if(S == 0) {
    answer--;
}
console.log(answer);

