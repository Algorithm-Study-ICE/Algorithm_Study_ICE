// 뭔 짓을 해도 시간초과가 뜹니다...
// 호영이 코드 node.js로 바꿔도 시간초과고
// 그냥 시간초과...모르겠읍니다....
let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
const [N, H, T] = input[0].split(" ").map(Number);

const height = [];
for(let i = 0 ; i < N ; i++) {
    height.push(+input[i+1]);
}

let cnt = 0;
// 가장 키 큰 거인 누군지 찾아
// 걔 키 줄여
// 제한 횟수도 줄여
// 줄어든 키 다시 넣기
// 젤 큰 키가 센티보다 작은지 확인하기
while(true) {
    let tallest = Math.max(...height);
    let tallIndex = height.indexOf(tallest);

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
    height[tallIndex] = parseInt(height[tallIndex]/2);
    cnt ++;
}

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