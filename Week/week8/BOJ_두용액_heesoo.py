# 2470 두 용액
# 산성 = 양수, 알칼리성 = 음수
# 혼합 용액 = sum(각 용액)
# 목표 : 0에 가장 가까운 용액 만들기
import sys

# 완전탐색하면 시간초과 날듯 
# -> 투포인터 or 이분탐색
# 이분탐색 : mid 사용해서 탐색 범위 절반으로 좁혀나가기
# 투포인터 : left, right 한칸씩 이동하면서

# 정렬한다음 양쪽에서 검사하기
# 합이 -면 -쪽 옮기기, +면 +쪽 옮기기

n = int(sys.stdin.readline())
feature = list(map(int, sys.stdin.readline().split(' ')))
feature.sort()

start = 0
end = n-1
currSum = 2000000000
currAns = [0,0]

while True:
    # 포인터 같아지면 끝
    if start >= end:
       break
    # 현재 인덱스에서의 합 저장
    temp = feature[start]+feature[end]
    
    if abs(temp) < currSum:
        currSum = abs(temp)
        currAns[0] = feature[start]
        currAns[1] = feature[end]  
                
    if temp < 0:
        start += 1
    elif temp > 0:
        end -= 1
    else:
        currAns[0] = feature[start]
        currAns[1] = feature[end]
        break

# 0에 가장 가까운 용액을 만들어내는 두 용액의 특성값 출력, 오름차순

print(currAns[0], currAns[1])
