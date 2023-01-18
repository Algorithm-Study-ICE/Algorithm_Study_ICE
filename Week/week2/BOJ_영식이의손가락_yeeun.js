let input = require('fs').readFileSync('예제.txt').toString().split('\n');

let [finger, limit] = input.map(Number);

// 최대 개수 = 다친 손가락 앞 손가락까지
max = finger - 1

// 1, 5번 손가락 -> 전환점
// 1번 손가락 loop : 1 2 3 4 5 4 3 2
//                  1 2 3 4 5 4 3 2 1 2 3 4 5 4 3 2 
// 5번 손가락 loop : 1 2 3 4 5 4 3 2 1 2 3 4
//                  1 2 3 4 5 4 3 2 1 2 3 4 5 4 3 2 1 2 3 4 
if (finger == 1 || finger == 5) {
    max += 8 * limit;


// 2번 손가락 loop(1) : 1 2 3 4 5 4 3 (7)
//                     1 2 3 4 5 4 3 2 1 (9)
//                     1 2 3 4 5 4 3 2 1 2 3 4 5 4 3 (15) 

// 3번 손가락 loop(2) : 1 2 3 4 5 4 (6)
//                     1 2 3 4 5 4 3 2 1 2 (10)
//                     1 2 3 4 5 4 3 2 1 2 3 4 5 4 (14)

// 4번 손가락 loop(3) : 1 2 3 4 5 (5)
//                     1 2 3 4 5 4 3 2 1 2 3 (11)
//                     1 2 3 4 5 4 3 2 1 2 3 4 5 (13) 
} else {
    if (limit % 2 == 0) {
        max += 4 * limit;
    } else {
        max += (4 * limit) + (2 * (3-finger));     
    }
}

console.log(max);