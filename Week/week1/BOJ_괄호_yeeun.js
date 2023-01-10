let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const caseCount = Number(input[0]);

for (let i = 1; i <= caseCount; i++) {
  const cases = input[i];
  const stack =  [];
  let result = 'YES';

  for (let j = 0; j < cases.length; j++) {
    if (cases[j] === '(') {
      stack.push(1);
    } else if(cases[j] === ')'){
        if(stack.length === 0) {
            result = 'NO';
            break;
        } else {
            stack.pop();
        }
    }
  }

  if (stack.length !== 0) {
    result = 'NO';
  }

  console.log(result);
}
// /dev/stdin
