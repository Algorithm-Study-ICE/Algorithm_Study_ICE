let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
const [N, L, R] = input.shift().trim().split(" ").map(Number);
const A = [];

for(let n = 0 ; i < N ; n++) {
    A.push(input[n].split(" ").map(Number));
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let cnt = 0;
let flag = true;

while (flag) {
    flag = false;

    let visited = Array.from(Array(N), () => Array(N).fill(false));
    for(let i = 0 ; i < N ; i++) {
        for(let j = 0 ; j < N ; j++) {
            if (!visited[i][j]) continue;
            const isMigrated = BFS(x, y);

            if(isMigrated && !keepMigration) {
                keepMigration = true;
            }
        }
    }

    if(keepMigration) {
        days++;
    } else {
        break;
    }
}

console.log(A);