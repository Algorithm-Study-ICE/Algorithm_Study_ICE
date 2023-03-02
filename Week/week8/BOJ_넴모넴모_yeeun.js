// 14712
let [N, M] = require('fs').readFileSync('예제.txt').toString().trim().split(" ").map(Number);

let answer = 0;
const map = Array.from(new Array(N+1), () => new Array(M+1).fill(0));

function dfs(cnt) {
    // 전체 격자수만큼 cnt가 채워진 경우
    if(cnt === N * M) {
        answer++;
        return;
    }

    const x = parseInt(cnt / M) + 1;
    const y = (cnt % M) + 1;

    // 넴모가 터지는 경우 => 놓지 않음.
    dfs(cnt + 1)
    // 넴모가 안터지는 경우 => 놓음.
    if (map[x - 1][y] === 0 || map[x][y - 1] === 0 || map[x - 1][y - 1] === 0) {
        map[x][y] = 1;
        dfs(cnt + 1);
        // 놓은 넴모를 다시 빈칸으로 돌림
        map[x][y] = 0;
    }
}

dfs(0)
console.log(answer);