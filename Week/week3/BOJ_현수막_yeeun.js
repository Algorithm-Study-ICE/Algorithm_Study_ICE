let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let [M, N] = input[0].split(' ').map(Number);
let words = input.slice(1).map(c => c.split(" ").map(Number));

let cnt = 0;
let dict = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
let visited = [];

for (let i = 0; i < M; i++) {
    visited.push(input[i+1].split(' ').fill(false));
}

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        // 1이고 방문하지 않은 경우
        if (words[i][j] == 1 && !visited[i][j]) {
            cnt++;
            dfs(j,i);
        }
    }
}

console.log(cnt);

function dfs(x,y) {
    for (let i = 0; i < dict.length; i++) {
        let x1 = x + dict[i][0];
        let y1 = y + dict[i][1];
        
        // 범위를 넘어가는 경우
        if (x1 < 0 || x1 > N-1 || y1 < 0 || y1 > M-1) continue;
        // 1이고 방문하지 않은 경우
        if (words[y1][x1] == 1 && !visited[y1][x1]) {
            visited[y1][x1] = true;
            dfs(x1, y1);
        }
    }
}
