let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

const n = Number(input[0]);
let candyArr = input.slice(1).map(v => v.split(""));

function getMaxCandiesRow(arr) {
    let max = 0;
    let cnt = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (arr[i][j - 1] === arr[i][j]) {
                cnt += 1;
            } else {
                cnt = 1;
            }     
            if (cnt > max) {
                max = cnt;
            }
        }
        cnt = 1;
    }
    return max;
};
  
function getMaxCandiesCol(arr) {
    let max = 0;
    let cnt = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (arr[j - 1][i] === arr[j][i]) {
                cnt += 1;
            } else {
                cnt = 1;
            }
            if (cnt > max) {
                max = cnt
            }
        }
        cnt = 1;
    }
    return max;
};
  
const eatCandies = [];

// 가로 탐색
for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
        if (candyArr[i][j - 1] !== candyArr[i][j]) {
        // 둘이 바꾸기
        let temp = candyArr[i][j - 1];
        candyArr[i][j - 1] = candyArr[i][j];
        candyArr[i][j] = temp;
        // 개수 세기
        eatCandies.push(getMaxCandiesRow(candyArr));
        eatCandies.push(getMaxCandiesCol(candyArr));
        }
        // 원래 상태로 되돌려놓기
        candyArr = input.slice(1).map((el) => el.split(""));
    }
}
  
// 세로 탐색
for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
        if (candyArr[j - 1][i] !== candyArr[j][i]) {
        // 둘이 바꾸기
        let temp = candyArr[j - 1][i];
        candyArr[j - 1][i] = candyArr[j][i];
        candyArr[j][i] = temp;
        // 개수 세기
        eatCandies.push(getMaxCandiesRow(candyArr));
        eatCandies.push(getMaxCandiesCol(candyArr));
        }
        //원래 상태로 되돌려놓기
        candyArr = input.slice(1).map((el) => el.split(""));
    }
}
// 최대 사탕 개수
console.log(Math.max(...eatCandies));