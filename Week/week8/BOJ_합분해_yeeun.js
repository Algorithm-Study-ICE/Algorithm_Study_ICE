let [N, K] = require('fs').readFileSync('예제.txt').toString().trim().split(" ").map(Number);
const dp = new Array(K+1);

// 0부터 N까지의 정수 K개를 더해 합이 N이 되도록
// 숫자 하나 고정(m)
// K-1 개 더해 합이 N-m이 되도록

for(let i = 1; i <= K ; i++) {
    dp[i] = new Array(N+1);
    if(i === 1) {
        dp[i].fill(1);
    } else {
        dp[i].fill(0);
    }
}

// DP[N][N] = DP[N-1][0] + DP[K-1][1] + ... + DP[K-1][N]
for(let i = 2 ; i <= K ; i++) {
    for(let j = 0 ; j <= N ; j++) {
        for(let m = 0 ; m <= j ; m++) {
            dp[i][j] += dp[i-1][j-m];
       }
       dp[i][j] = dp[i][j] % 1000000000;
    }
}

console.log(dp);
console.log(dp[K][N]);