let input = require('fs').readFileSync('예제.txt').toString().split('\n');

let fileObj = {};
let answer = [];

// 확장자 별 개수
for (i = 0 ; i < Number(input[0]); i++) {
    let extension = input[i+1].trim().split(".")[1];
    fileObj[extension] ? fileObj[extension]++ : fileObj[extension] = 1;
}

// 알파벳 오름차순
const extensionArr = Object.keys(fileObj).sort();

for( let extension of extensionArr ) {
    answer.push(`${extension} ${fileObj[extension]}`);
}
console.log(answer.join('\n'));