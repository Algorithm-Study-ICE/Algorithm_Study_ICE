# 2493 탑
# 각 탑에서 발사한 레이저 신호를 어느 탑에서 수신하는지
import sys
n = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split(' ')))

# 스택에 넣다가 본인보다 같거나 큰 탑 들어오면 없애기
# 6 9 5 7 4 []
# 9 4 6 3 7 8 -> [0, 1, 1, 3, 1, 1]
# 8: 7 < 8 -> [8]
# 7: 3 < 7 -> [8,7]
# 3: 6 > 3 -> 3 저장 -> 7 > 6 -> [8,7] 유지
# 6: 4 < 6 -> [8,7,6]
# 4: 9 > 4 -> 4 저장 -> 6 < 9 -> 6저장 -> 7 < 9 -> 7 저장

idx = n-1
result = [0]*n
stack = []
        
for idx in range(n-1,0,-1):
    curr = arr[idx]
    next = arr[idx-1]
    # 왼쪽탑이 현재보다 같거나 크면
    if arr[idx-1] >= arr[idx]:
        # 왼쪽탑 번호 저장하고
        result[idx] = idx
        # 왼쪽탑이 스택에 있는것들보다도 큰지 검사
        while len(stack) > 0:
            stack_idx = stack[-1]
            if arr[stack_idx] <= next:
                result[stack_idx] = idx
                stack.pop()
            else:
               break 
    # 왼쪽탑이 현재보다 작으면
    else:
        # 스택에 현재탑 추가
        stack.append(idx)
        idx -= 1

for i in result:
    print(i,end=' ')