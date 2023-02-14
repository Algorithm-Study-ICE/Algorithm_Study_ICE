let input = require('fs').readFileSync('예제.txt').toString().split('\n');
const [N, d, k, c] = input.shift().split(" ").map(Number);

let sushi = input.map(Number);
let eated = Array(d+1).fill(0);

eated[c] = 1; // 보너스초밥
let count = 1;

for(let i = 0 ; i < k ; i++) {
    if(eated[sushi[i]] === 0) {
        count++;
    }
    eated[sushi[i]]++;
}

let max_sushi = count;

for(let start = 1; start < N ; start++) {
    let start_s = sushi[start-1]; // 연속 초밥 시작점
    let last_s = sushi[(start + k - 1) % N]; // 연속 초밥 마지막
    
    // start 이동
    eated[start_s]--;
    if(eated[start_s] === 0) {
        count--;
    }

    // end 이동
    if(eated[last_s] === 0) {
        count++;
    }
    eated[last_s]++;

    max_sushi = Math.max(max_sushi, count)
}

console.log(max_sushi);