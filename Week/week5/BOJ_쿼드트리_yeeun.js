// BOJ 1992
let input = require('fs').readFileSync('예제.txt').toString().split("\n");

const N = +input.shift()
const videos = input.map(v => v.split("").map(Number));
const quadTree = [];

function makeQuadTree(n, x, y) {
    let total = 0;

    for(let i = 0; i < n ; i++) {
        for(let j = 0 ; j < n ; j++) {
            // 모두 0이면 total = 0, 모두 1이면 total = n*n
            total += videos[y+j][x+i];
        }
    }
    // 모두 같은 색이면 answer에 추가
    if (total === 0) quadTree.push(0);
    else if (total === n * n) quadTree.push(1);
    // 같은 색이 아닌 경우 화면 분할하여 함수 호출
    else{
        n /= 2;
        quadTree.push("(");
        // 왼쪽 위
        makeQuadTree(n, x, y);
        // 오른쪽 위
        makeQuadTree(n, x + n, y);
        // 왼쪽 아래
        makeQuadTree(n, x, y+n);
        // 오른쪽 아래
        makeQuadTree(n, x+n, y+n);
        quadTree.push(")");
    }
}

makeQuadTree(N, 0, 0);
console.log(quadTree.join(""));