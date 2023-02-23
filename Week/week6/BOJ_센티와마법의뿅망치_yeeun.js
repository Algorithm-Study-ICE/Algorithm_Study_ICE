// 20230216 : 뭔 짓을 해도 시간초과가 뜹니다...
//            호영이 코드 node.js로 바꿔도 시간초과고
//            그냥 시간초과...모르겠읍니다....
// 20230219 : Math.max로 시간초과가 뜨는것 같다는 피드백으로 조금 수정했는데
//           이제는 그냥 "틀렸습니다"가 뜹니다. 하지만 전 맞았습니다.ㅜ

let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
const [N, H, T] = input[0].split(" ").map(Number);

let cnt = 0;
// 키 순으로 정렬해
// 키 젤 큰 애를 센티보다 작게 줄여
// 그 다음으로 큰 애랑 센티 비교
// 반복
class Heap {
    constructor() {
        this.heap = [];
    }
    /**
    * @param {number} newValue
    */
    push(newValue) {
        const heap = this.heap;
        heap.push(newValue);
        let index = heap.length - 1, parent = Math.floor((index - 1) / 2);
        while(index > 0 && heap[parent] < heap[index]) {
            [heap[parent], heap[index]] = [heap[index], heap[parent]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    /**
* @return {number}
    */
    pop() {
        const heap = this.heap;
        if(heap.length <= 1) return heap.pop();
        const ret = heap[0];
        heap[0] = heap.pop();
        let here = 0;
        while(1) {
            let left = here * 2 + 1, right = here * 2 + 2;
            // 리프에 도달
            if(left >= heap.length) break;
            // heap[here]가 내려갈 위치를 찾는다.
            let next = here;
            if (heap[next] < heap[left]) next = left;
            if (right < heap.length && heap[next] < heap[right]) next = right;
            if (next === here) break;
            [heap[here], heap[next]] = [heap[next], heap[here]];
            here = next;
        }
        return ret;
    }
}

let heap = new Heap();

for(let i = 0 ; i < N ; i++) {
    heap.push(+input[i+1]);
}

while(true) {
    let tallest = heap.pop();

    if(tallest < H) {
        console.log("YES");
        console.log(cnt);
        break; 
    }

    if(cnt === T || tallest == 1) {
        console.log("NO");
        console.log(tallest);
        break;
    }

    heap.push(parseInt(tallest / 2));
    cnt++;
}

// 가장 키 큰 거인 누군지 찾아
// 걔 키 줄여
// 제한 횟수도 줄여
// 줄어든 키 다시 넣기
// 젤 큰 키가 센티보다 작은지 확인하기

// 시간초과ㅜ
// while(tallest > H) {
//     if(cnt === T || tallest === 1) {
//         console.log("YES");
//         console.log(cnt);
//         break;
//     } 
//     tallIndex = height.indexOf(tallest);
//     height[tallIndex] = parseInt(height[tallIndex]/2);
//     tallest = Math.max(...height);
//     cnt++;
// }

// if(Math.max(...height) >= H)  {
//     console.log("NO");
//     console.log(Math.max(...height));
// }