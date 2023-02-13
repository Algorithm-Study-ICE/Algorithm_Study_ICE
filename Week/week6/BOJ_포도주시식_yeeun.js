let input = require('fs').readFileSync('예제.txt').toString().split('\n');
const n = Number(input.shift());
const wineArr = input.map(Number);

const dp = new Array(n).fill(0);

// 포도주 1개, 2개, 3개일 때 최댓값
dp[1] = wineArr[0];
dp[2] = wineArr[0] + wineArr[1];
dp[3] = Math.max(wineArr[0] + wineArr[1], wineArr[0] + wineArr[2], wineArr[1] + wineArr[2]);

// N번째 잔을 안마심 => 무조건 n-1번째 마심 : dp[n-1]
// N번째 잔을 마셨을 경우 => n-1번째(wineArr[n-2]) 안마심 : dp[n-2] + wineArr[n-1]
//                       => n-1번째(wineArr[n-2]) 마심 : dp[n-3] + wineArr[n-2] + wineArr[n-1]
for(let i = 4 ; i <= n ; i++) {
    dp[i] = Math.max(
        dp[i-1], 
        dp[i-2] + wineArr[i-1], 
        dp[i-3] + wineArr[i-2] + wineArr[i-1]
    );
}

console.log(dp[n]);
