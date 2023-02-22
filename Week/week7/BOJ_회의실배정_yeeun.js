let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
const N = +input.shift();
const meetings = input.map((v) => v.split(" ").map((i) => Number(i)));

// 끝나는 시간으로 오름차순
// 끝나는 시간이 같을 때는 시작하는 시간도 오름차순
const times = meetings.sort(function(a, b) {
    if(a[1] === b[1]) {
        return a[0] - b[0]
    } else {
        return a[1] - b[1];
    }
});

let cnt = 1;
let nowEndMeeting = meetings[0][1];

for(let i = 1; i < N ; i++) {
    // 현재 수업의 끝나는 시간이 다음 수업의 시작시간보다 작거나 같을 때 수업이 바뀜
    if(nowEndMeeting <= meetings[i][0]) {
        nowEndMeeting = meetings[i][1];
        cnt++;
    }
}
console.log(cnt);
