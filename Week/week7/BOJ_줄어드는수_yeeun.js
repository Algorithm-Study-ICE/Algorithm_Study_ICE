let N = require('fs').readFileSync('예제.txt').toString().trim();

const nums = [9,8,7,6,5,4,3,2,1,0];
const lowers = [];

function dfs(sum, index) {
    // sum이 나온적이 없다면 arr에 저장
    if(!lowers.includes(sum)) {
        lowers.push(sum);
    }
    if(index >= 10) {
        return;
    }
    dfs(sum * 10 + nums[index], index + 1); // 현재 수 선택하는 경우
    dfs(sum, index + 1); // 선택 안하는 경우
}

dfs(0, 0);

// 10개의 숫자를 선택하냐 vs 마냐 총 1024개의 경우의 수
if(N >= 1024) {
    console.log(-1);
} else {
    console.log(lowers.sort((a,b) => a-b)[N-1]);
}