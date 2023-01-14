let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split(' ');

let [r, c, w] = input.map(i => Number(i));
let pascal = [[1], [1, 1]];

// r+w-1번째 수까지 파스칼 삼각형 그리기
for (let i = 2; i < r + w - 1; i++) {
    let line = [1];
    for (let j = 1; j < i; j++) {
      line[j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }
    line.push(1);
    pascal.push(line);
}

let sum = 0;

// r,c,w에 해당하는 합 더하기
for (let i = 0; i < w; i++) {
    for (let j = 0; j < i + 1; j++) {
        sum += pascal[r - 1 + i][c - 1 + j];
    }
}

console.log(sum);