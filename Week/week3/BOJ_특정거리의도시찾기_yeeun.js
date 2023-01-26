// 18352
let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let [N, M, K, X] = input[0].split(" ").map(Number);

const array = input.map((el) => el.split(' ').map(Number));
const graph = Array.from(Array(N + 1), () => [])

let answer = [];

array.forEach(([x, y]) => {
    graph[x].push(y);
})

answer = bfs(X, graph)
// 오름차순
answer.sort((a, b) => a - b)
console.log(answer.length === 0 ? -1 : answer.join('\n'));

function bfs(X, graph) {
    const result = [];
    // 방문한 도시
    const visited = Array.from(Array(N + 1).fill(false));
    visited[X] = true;

    // 시작 도시와 연결된 [도시 정보, 거리]
    const queue = [[X, 0]];

    while (queue.length) {
        const [city, dist] = queue.shift()
        if (dist === K) {
            result.push(city)
        } else if (dist < K) {
            graph[city].forEach((el) => {
                // 인접도시이고 방문한 적 없을 때 queue삽입
                if (visited[el] === false) {
                    visited[el] = true
                    queue.push([el, dist + 1])
                }
            })
        }
    }
    return result
}