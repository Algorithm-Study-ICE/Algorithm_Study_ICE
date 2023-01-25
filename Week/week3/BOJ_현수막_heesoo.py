# # 현수막 14716

# # 현수막에서 글자인 부분은 1, 글자 아닌 부분은 0으로 바꾸는 필터
# # 글자 : 1이 상하좌우대각선으로 인접해서 서로 연결되어있으면 한개의 글자
# # -> dfs
# # 필터 적용해서 만든 값이 입력으로 주어졌을때, 글자의 개수가 몇개인지

import sys
sys.setrecursionlimit(100000)

def dfs(y,x):
    visited[y][x] == True
    
    # 상하좌우대각선 검사
    for dy,dx in dyx:
        ny,nx = y+dy, x+dx
        if 0 <= ny < m and 0 <= nx < n:
            # '1'인 곳을 계속해서 탐색
            if grid[ny][nx] == 1 and not visited[ny][nx]:
                visited[ny][nx] = True
                dfs(ny,nx)
        
        
m, n = map(int, input().split())

grid = [list(map(int, input().split())) for _ in range(m)]
visited = [[False]*n for i in range(m)]

# 상하좌우대각선
dyx = [(-1,0),(1,0),(0,-1),(0,1),(-1,-1),(1,-1),(-1,1),(1,1)]
cnt = 0
        
# 시작점
for i in range(m):
    for j in range(n):
        # 글자고, 방문하지 않은 곳이라면 -> 시작점
        if grid[i][j] == 1 and not visited[i][j]:
            dfs(i,j)
            cnt+=1

print(cnt) 

