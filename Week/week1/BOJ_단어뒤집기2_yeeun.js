//백준 제출용 : fs 모듈 이용함
let input = require('fs').readFileSync('예제.txt').toString().trim();

const tags = input.match(/<[a-z ]+>/g) ?? [];
const words = input.split(/<[a-z ]+>/);

const reversedWords = words
  .map(word => word
    .split(' ')
    .map(v => [...v].reverse().join(''))
    .join(' ')
  );

const answer = tags.map((tag, i) => reversedWords[i] + tag).join('') + reversedWords[reversedWords.length - 1];
console.log(answer);