// 투포인터 : 배열의 시작과 끝점을 움직이면서 원하는 값을 도출
function solution(queue1, queue2) { 
    const queue = [...queue1, ...queue2];
    let sumQ1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sumQ2 = queue2.reduce((acc, cur) => acc + cur, 0); 
    const goalSum = (sumQ1 + sumQ2) / 2;
        
    let cnt = 0;
    // queue1 시작점
    let startPointer = 0;
    // queue2 시작점
    let endPointer = queue1.length;
    
    if(goalSum * 2 % 2 != 0) return -1;

    while(cnt <= queue.length * 2) {
        // Q1의 합이 최종합 보다 작은 경우 Q1에 Q2의 원소를 더해줌
        if(sumQ1 < goalSum) {
            sumQ1 += queue[endPointer];
            endPointer++;
        // Q1의 합이 최종합 보다 큰 경우 Q2에 Q1의 원소를 더해줌
        } else if (sumQ1 > goalSum) {
            sumQ1 -= queue[startPointer];
            startPointer++;
        } else if(sumQ1 === goalSum) {
            return cnt;
        }
        cnt++
    }
    return -1;
}