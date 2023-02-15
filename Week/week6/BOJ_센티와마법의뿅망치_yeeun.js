let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
const [N, H, T] = input[0].split(" ").map(Number);

const height = [];
for(let i = 0 ; i < N ; i++) {
    height.push(+input[i+1]);
}

const answer = [];
let cnt = 0;
// 가장 키 큰 거인 누군지 찾아
// 걔 키 줄여
// 제한 횟수도 줄여
// 줄어든 키 다시 넣기
// 키가 센티보다 다 작은지 확인하기
for(let j = 0 ; j < T ; j++) {
    let tallest = height.indexOf(Math.max(...height));
    if((height[tallest] / 2) < 1) {
        height[tallest] = 1;
        // height.indexOf(Math.max(...height));
    } else {
        height[tallest] = parseInt(height[tallest]/2);
    }
}

for(let n = 0 ; n < N; n++) {
    if(height[n] > H) {
        answer.push(true);
    } else {
        break;
    }
}

if(answer.length === N)  {
    console.log("YES");
} else {
    console.log("NO");
    console.log(Math.max(...height));
}
