let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let [N, M] = input[0].split(" ").map(Number);
// 선분 위 점 오름차순 정렬
let point = input[1].split(" ").map(Number).sort((a,b) => a-b);
// 배열로 안만들고 바로 console 바로 찍으면 시간초과 뜸..대체왜요ㅜ
const answer = [];

for(i = 0 ; i < M ; i++) {
    // 선분의 시작점과 끝점
    let[start, end] = input[i+2].split(" ").map(Number);
    
    // 이분탐색 -> 가능한 위치 인덱스 가져오기
    startIdx = binarySearch(start, 0);
    endIdx = binarySearch(end, 1);

    answer.push(endIdx-startIdx);
}
console.log(answer.join("\n"));

function binarySearch(start, check) {
    let left = 0;
    let right = N-1;

    // 왼쪽 값 (check = 0)
    if(check == 0) {
        // left와 right가 같아질때까지 idx값 찾기
        while(left <= right) {
            mid = parseInt((left + right) / 2);
            point[mid] < start ? (left = mid + 1) : (right = mid - 1)
        }
        return left;
    // 오른쪽 값 (check = 1)
    } else {
        while(left <= right) {
            mid = parseInt((left + right) / 2);
            point[mid] > start ? (right = mid - 1) : (left = mid + 1)
        }
        return right+1;
    }
}

// 메모리 초과....
// let input = require('fs').readFileSync('예제.txt').toString().split('\n');
// let [N, M] = input[0].split(" ").map(Number);

// for(i = 0 ; i < M ; i++) {
//     let cnt = 0;
//     let[start, end] = input[i+2].split(" ").map(Number);

//     for ( j = 0 ; j < N ; j++) {
//         let line = input[1].split(" ").map(Number);

//         if (start <= line[j] && end >= line[j]) {
//                 cnt++
//         }
//     }

//     console.log(cnt);
// }