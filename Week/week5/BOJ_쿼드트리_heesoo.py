# 1992 쿼드트리
# 모두 0이면 압축 : 0
# 모두 1이면 압축 : 1
import sys

n = int(sys.stdin.readline())

arr = [list(map(int, input())) for _ in range(n)]
result = []
# 재귀 돌려서 정사각형 4개 확인하기
def check(cy, cx, size):
    # i, j 기준으로 정사각형 4개 나눠서 다 0, 1인지 검사
    # 정사각형 for문 2개로 탐색하다가 틀린거 나오면 4분의1로 나눠서 다시 검사
    first = arr[cy][cx]
    for i in range(cy, cy+size):
        for j in range(cx, cx+size):
            # 다른 값 나오면
            if arr[i][j] == first:
                continue
            
            result.append('(')
            check(cy,cx,size//2)
            check(cy,cx+size//2, size//2)
            check(cy+size//2,cx, size//2)
            check(cy+size//2, cx+size//2, size//2)
            result.append(')')
            return
    result.append(str(first))
    return

check(0,0,n)
print(''.join(result))