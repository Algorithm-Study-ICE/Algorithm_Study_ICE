// BOJ 5639
let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n").map(Number);

function postOrder(start, end) {
    if (start > end) return; // 종료

    //루트보다 큰 숫자들 중 가장 앞 숫자가 오른쪽 서브트리의 루트
    let mid = end+1;
    for (let i = start + 1; i <= end; i++) {
        if (input[i] > input[start]) {
            mid = i;
            break;
        }
    }
    // 왼쪽 서브트리
    postOrder(start+1, mid-1);
    // 오른쪽 서브트리
    postOrder(mid, end);
    console.log(input[start]);
}

postOrder(0, input.length - 1);