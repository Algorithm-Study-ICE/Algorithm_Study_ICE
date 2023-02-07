// BOJ 17626
// DP
let input = +require('fs').readFileSync('예제.txt').toString().trim();

const dp = new Array(input + 1).fill(0);
dp[1] = 1;

// 제곱수인지 확인
function checkSquare(n) {
    return parseInt(Math.sqrt(n))**2 === n;
}

for (let i = 2 ; i < input+1 ; i++) {
    // 입력값이 제곱수일 경우 
    if(checkSquare(input)) {
        dp[input] = 1;
        break;
    } 

    if(checkSquare(i)) {
        dp[i] = 1;
    } else {
// dp[12] = dp[11]+dp[1]
        dp[i] = dp[i-1] + 1;
// dp[i-j**2]+1 = dp[8] + 1(=dp[4]), dp[3] + 1(dp[9])
        for(let j = 2 ; j * j <= i ; j++) {
            dp[i] = Math.min(dp[i], dp[i-j**2]+1);
        }
    }
}

console.log(dp[input]);