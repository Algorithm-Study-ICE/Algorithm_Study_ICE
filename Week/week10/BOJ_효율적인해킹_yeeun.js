let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
let [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({length : N + 1}, () => []);

// 인접리스트
for(let i = 1; i < M ; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    graph[b].push(a);
}

let maxComputer = 0; // 해킹할 수 있는 컴퓨터의 최대 수

function DFS(start) {
    let count = 0; // 해킹 가능한 컴퓨터 수
    const queue = [start];

    const visited = Array.from({length : N + 1}, () => false);
    visited[start] = true;

    while(queue.length) {
        let cur = queue.shift();
        for(let i = 0 ; i < graph[cur].length ; i++) {
            let value = graph[cur][i];

            if (!visited[value]) {
                count++;
                queue.push(value);
                visited[value] = true;
            }
        }
    }

    if(maxComputer < count) {
        maxComputer = count;
        answer = [start]; // 초기화
    } else if (maxComputer === count) {
        answer.push(start);
    }
};

for (let i = 1 ; i <= N ; i++) {
    DFS(i);
}

console.log(answer.join(" "));