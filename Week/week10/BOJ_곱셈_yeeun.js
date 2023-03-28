// BOJ 1629
let input = require('fs').readFileSync('예제.txt').toString().trim().split(" ");

const [a, b, c] = input.map(BigInt);

function mult(a, b) {
    if(b == BigInt(1)) return a % c;
    const val = mult(a, BigInt(parseInt(b/BigInt(2)))) // 지수를 절반으로 계속 나눠줌

    if(b % BigInt(2) == 0) { // b가 짝수
        return (val * val) % c;
    } else { // b가 홀수
        return (val * val * a ) % c;
    }
}

console.log(parseInt(mult(a,b)));

// 지수법칙 : a^(n+m) = a^n * a^m
// 모듈러 성질 : (a*b)%c = (a%c * b%c)%c 