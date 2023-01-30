# 5212 지구온난화
import sys
import copy
# 50년후 인접한 3칸or4칸에 바다가 있는 땅은 모두 잠김
# input = sys.stdin.readline()
r, c = map(int, sys.stdin.readline().split())

grid = []
for _ in range(r):
    temp = list(sys.stdin.readline())
    grid.append(temp)
result = copy.deepcopy(grid)

# 상하좌우
dyx = [(-1,0),(1,0),(0,-1),(0,1)]

for cy in range(r):
    for cx in range(c):
        cnt = 0
        # 현재 육지인 곳만 검사
        if grid[cy][cx] == 'X':
            # 상하좌우 탐색하며
            for dy,dx in dyx:
                ny,nx = cy+dy, cx+dx
                # 범위 밖도 바다
                if ny < 0 or ny >= r or nx < 0 or nx >= c:
                    cnt += 1
                elif grid[ny][nx] == '.':
                    # 바다인 곳 개수 세기
                    cnt += 1
            # 인접 3,4칸 바다면 -> 바다 만들기
            if cnt >= 3:
                result[cy][cx] = '.'
                
# 출력
startRow = 11
startCol = 11
endRow = -1
endCol = -1

for i in range(r):
    for j in range(c):
        if result[i][j] == 'X':
            startRow = min(startRow, i)
            endRow = max(endRow, i)
            
            startCol = min(startCol, j)
            endCol = max(endCol, j)

for i in range(startRow, endRow+1):
    for j in range(startCol, endCol+1):
        print(result[i][j], end='')
    print()

# # 육지 있는 첫번째 행 찾기
# for i in range(r):
#     if 'X' in result[i]:
#         startRow = i
#         startCol = result[i].index('X') # 처음 X가 발견된 col 찾기
#         endCol = result[i][::-1].index('X') # 마지막으로 X가 발견된 col 찾기
#         break
    
# # 육지 있는 마지막 행 찾기
# for i in range(r-1,0,-1):
#     if 'X' in result[i]:
#         endRow = i
#         startCol = min(result[i].index('X'), startCol)
#         endCol = max(result[i][::-1].index('X'), endCol)
#         break

# for i in range(startRow, endRow+1):
#     for j in range(startCol, endCol+1):
#         print(result[i][j], end='')
#     print()
        