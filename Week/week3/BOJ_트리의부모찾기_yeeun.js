let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let N = Number(input.shift());
const nodeArr = input.map((el) => el.split(' ').map(Number));

const visited = new Array(N + 1).fill(false);
const answer = new Array(N + 1).fill(null);

const tree = {};

// 인접노드 추가
for (const [a, b] of nodeArr) {
  if (!tree[a]) tree[a] = []; 
  if (!tree[b]) tree[b] = [];
  tree[a].push(b);
  tree[b].push(a);
}

findParent();
console.log(answer.filter((el) => el !== null).join('\n'));

function findParent() {
  const queue = [];
  queue.push(1); // 루트 노드 1 push
  visited[1] = true; // 노드 1 방문

  // queue가 빌 때 까지 탐색
  while (queue.length) {
    const node = queue.shift();
    tree[node].forEach((child) => {
      // 방문한 경우
      if (visited[child]) {
        return;
      // 방문하지 않은 경우
      // 방문 표시, 큐에 push,부모 노드 저장
      } else {
        visited[child] = true;
        answer[child] = node;
        queue.push(child);
      }
    });
  }
}
