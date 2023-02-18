// 20230216 : 뭔 짓을 해도 시간초과가 뜹니다...
//            호영이 코드 node.js로 바꿔도 시간초과고
//            그냥 시간초과...모르겠읍니다....
// 20230219 : Math.max로 시간초과가 뜨는것 같다는 피드백으로 조금 수정했는데
//           이제는 그냥 "틀렸습니다"가 뜹니다. 하지만 전 맞았습니다.ㅜ

let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
const [N, H, T] = input[0].split(" ").map(Number);

const height = [];
for(let i = 0 ; i < N ; i++) {
    height.push(+input[i+1]);
}
height.sort((a, b) => b-a);

let cnt = 0;
// 키 순으로 정렬해
// 키 젤 큰 애를 센티보다 작게 줄여
// 그 다음으로 큰 애랑 센티 비교
// 반복
let tallIndex = 0;

while(true) {
    let tallest = height[tallIndex];

    if(tallest < H || tallIndex === height.length) {
        console.log("YES");
        console.log(cnt);
        break; 
    }

    if(cnt === T || tallest == 1) {
        tallest = Math.max(...height);
        console.log("NO");
        console.log(tallest);
        break;
    }

    height[tallIndex] = parseInt(height[tallIndex] / 2);
    cnt++;

    if (height[tallIndex] < H) tallIndex++;
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