// BOJ 12865
let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
let knapsack  = [];

for(let i = 1 ; i <= N ; i++) {
    knapsack.push(input[i].split(" ").map(Number));
}

const weight = [];
const value = [];
for (let n = 0; n < N; n++) {
    weight.push(knapsack[n][0]);
    value.push(knapsack[n][1]);
}

const dp = [];
for (let i = 0; i <= N; i++) {
  dp.push(Array(K + 1).fill(0));
}

for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= K; j++) {
        if (j < weight[i-1]) { // 물건의 무게가 k보다 클 때
            dp[i][j] = dp[i - 1][j];
        } else {
            dp[i][j] = Math.max(
                dp[i - 1][j], // 현재 물건을 포함하지 않는 경우
                dp[i - 1][j - weight[i-1]] + value[i-1]); // 현재 물건을 포함하는 경우
        }
    }
}
// console.log(dp);
console.log(dp[N][K]);



