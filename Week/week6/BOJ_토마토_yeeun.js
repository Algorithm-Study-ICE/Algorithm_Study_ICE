let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

const [M, N] = input[0].split(" ").map(Number);
const box = [];
const queue = [];

for(let i = 1 ; i <= N ; i++) {
    box.push(input[i].split(" ").map(Number));

    for(let j = 0 ; j < box[i-1].length ; j++) {
        if(box[i-1][j] === 1) {
            queue.push([i-1, j]);
        }
    }
}

let day = 0;
let prevIdx = 0;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

while(true) {
    let ripeTomatos = queue.length; // 전날 익은 토마토의 개수
    let changed = 0; // 토마토가 전날 대비 익은게 있는지
    for (i = prevIdx ; i < ripeTomatos ; i++) {
        const [x, y] = queue[i];
        for(let i = 0 ; i < 4 ; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
            // 토마토 1이거나 -1이면 방문 안함
            if (box[nx][ny] === 1 && box[nx][ny] === -1) continue;
            // 0인 경우 토마토 익히고 큐에 넣기
            if (box[nx][ny] === 0) {
                box[nx][ny] = 1;
                queue.push([nx, ny]);
                changed++;
            }
        }
    }
    if(!changed) break; // 전날과 동일하면 종료
    day++;
    prevIdx = ripeTomatos; // queue[ripeTomatos-1]까지 조회를 했으니깐 ripeTomatos부터 다시 조회
}

for(let i = 0 ; i < N; i++) {
    if(box[i].includes(0)) {
        day = -1;
    }
}

console.log(day);