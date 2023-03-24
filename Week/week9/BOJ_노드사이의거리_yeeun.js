let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
let [N, M] = input[0].split(" ").map(Number);

// graph를 노드 개수 +1 만큼 생성
const graph = [];
for (let i = 0; i < N + 1; i++) {
    graph.push([]);
}

// 두 노드 번호와 간선의 정보를 입력 받고, 그래프에 추가할 때 (노드번호, 간선의길이)의 형태로 추가
for( i = 0 ; i < N-1 ; i++ ) {
    const [x, y, distance] = input[i+1].split(" ").map(Number);
    graph[x].push([y, distance]);
    graph[y].push([x, distance]);
}

function bfs(x, y){
    const queue = [[x, 0]];
    const visited = Array(N+1).fill(0);
    visited[x] = 1;
    
    while(queue.length) {
        const [node, distance] = queue.shift();
        // 찾는 노드랑 번호 일치하면 거리 리턴
        for(const [x, d] of graph[node]) {
            if(x === y) return d + distance;
            if(visited[x]) continue;
            visited[x] = 1;
            queue.push([x, d + distance]);
        }
    }
};

const answer = [];
for (let i = N; i < input.length ; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    answer.push(bfs(x, y));
}

console.log(answer.join("\n"));