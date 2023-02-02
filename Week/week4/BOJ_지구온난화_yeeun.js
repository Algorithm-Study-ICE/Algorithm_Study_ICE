// BOJ 5212
const input = require("fs").readFileSync("예제.txt").toString().split("\n");
const [R, C] = input.shift().split(' ').map(Number);
let map = input.map(l => l.split(''));

// 상하좌우
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const removeSea = [];
// 2면 이상이 땅인 땅만 남겨두기
for (i = 0 ; i < R; i++) {
    for(j = 0 ; j < C ; j++) {

        let cnt = 0;
        for (k = 0 ; k < 4; k++) {
            const ny = i + dy[k];
            const nx = j + dx[k];           
             // 영역을 벗어난 경우
             if(ny < 0 || ny >= R || nx < 0 || nx >= C) {
                cnt++;
                continue;  
            }      
            // 주변이 바다인 경우
            if(map[ny][nx] === '.') cnt++;
        }
        if(cnt >= 3) removeSea.push([i, j]);
    }
}

// 인접한 땅들 바다로 바뀜
for(let i = 0; i < removeSea.length; i++){
    const [y, x] = removeSea[i];
    map[y][x] = '.';
}

// 땅 위치
let min_y = R;
let max_y = 0;
for(let y = 0; y < R; y++){
    for(let x = 0; x < C; x++){
        if(map[y][x] === 'X'){
            min_y = Math.min(min_y, y);
            max_y = Math.max(max_y, y);
        }
    }
}

let min_x = C;
let max_x = 0;
for(let x = 0; x < C; x++){
    for(let y = 0; y < R; y++){
        if(map[y][x] === 'X'){
            min_x = Math.min(min_x, x);
            max_x = Math.max(max_x, x);
        }
    }
}

for(let y = 0; y < R; y++){
    map[y] = map[y].slice(min_x, max_x+1);
}
map = map.slice(min_y, max_y+1);

let answer = '';
for(let i = 0; i < map.length; i++) {
    answer += map[i].join('') + '\n';
}

console.log(answer.trim());