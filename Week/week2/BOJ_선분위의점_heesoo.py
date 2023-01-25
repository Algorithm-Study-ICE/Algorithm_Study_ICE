# 선분위의 점 11663
# 각각의 선분마다 점이 몇개 있는지 출력
import sys

n, m = map(int, sys.stdin.readline().split())

# 정렬
point = sorted(list(map(int, sys.stdin.readline().split())))


"""
    for문 돌리면 -> 시간초과 -> 이진탐색으로 변경
    원하는 좌표가 mid 값과 일치할때까지 반복하는 알고리즘
    
    1. 선분에서 최소값 좌표, 최대값 좌표 구하고
    2. 그 좌표 사이에 있는 점 개수 구하기
"""

for _ in range(m):
    # 선분의 시작, 끝
    # 좌표도 혹시 모르니 정렬
    start, end = sorted(map(int, sys.stdin.readline().split()))
    
    # 선분의 최소 최대 인덱스
    leftIdx = 0
    rightIdx = n-1
    
    # 왼쪽과 오른쪽 인덱스가 같아질때까지 (선분의 시작점보다 작은 점들 제외)
    while leftIdx <= rightIdx :
        # 중간 인덱스 값
        mid = (leftIdx + rightIdx)//2
        
        # 중간 인덱스가 선분 start보다 작으면
        if point[mid] < start:
            leftIdx = mid + 1
        else:
            rightIdx = mid - 1
    
    startIdx = leftIdx
    
    
    leftIdx = 0
    rightIdx = n-1
    
    # (선분의 끝점보다 큰 점들 제외)
    while leftIdx <= rightIdx : 
        mid = (leftIdx + rightIdx)//2
        
        if point[mid] > end:
            rightIdx = mid - 1
        else:
            leftIdx = mid + 1
        
    endIdx = rightIdx + 1
    
    
    print(endIdx - startIdx)     

