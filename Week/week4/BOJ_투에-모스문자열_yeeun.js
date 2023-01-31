// BOJ_18222
let input = require('fs').readFileSync('예제.txt').toString().trim();
let pattern = [0, 1, 1, 0];
let answer = 0;
// 0 (1)
// 0 1 (2)
// 0 1 1 0 (4)
// 0 1 1 0 1 0 0 1 (8)
// 0 1 1 0 1 0 0 1 1 0 0 1 0 1 1 0 (16)
// 0 1 1 0 1 0 0 1 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 0 1 1 0 1 0 0 1 (32)

// 입력이 14인 경우
// X(16) : 0 1 1 0 1 0 0 1 1 0 0 1 0 1 1 0  =>  14 - 8 = 6
// X(8) : 1 0 0 1 0 1 1 0 => 6 - 4 = 2
// X(4) : 0 1 1 0 => x[2-1] = 1

findNum(BigInt(input), false);
console.log(answer);

function findNum(index, boolean) {
    if (index <= 4) {
        if(boolean) {
            if(pattern[index-BigInt(1)] === 1) {
                answer = 0;
            } else {
                answer = 1;
            }
//  0 1 1 0 의 범위인 경우 바로 출력
        } else {
            answer = pattern[index-BigInt(1)];
        }
// Pattern의 범위를 벗어난 경우
    } else {
        let reverse = false; // 반전 여부
        let n = BigInt(2);
//  2의 제곱승
        while (!reverse) {
            if (index <= n) { // 2^n 한게 입력값보다 클 때 반전
                reverse = true;
            } else {
                n *= BigInt(2);
            }
        }

        n /= BigInt(2); 
        index -= BigInt(n) 
        // boolean = false -> 0110
        // boolean = true -> 1001
        findNum(index, !boolean);
    }
}