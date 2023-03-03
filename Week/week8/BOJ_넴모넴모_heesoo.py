import sys

n, m = map(int, sys.stdin.readlines().split())
grid = [[0]*m for _ in range(n)]
result = 0

def nemo(cnt) :
  # 격자판이 문제 없이 채워지 경우
  if cnt == n*m:
    result += 1
    return
  
  ny = cnt/m
  nx = cnt%m
  
  grid[ny][nx] = 1
  # 2*2 모두 1이면
  if ny > 0 and nx > 0 andgrid[ny-1][nx-1]*grid[ny-1][nx]*grid[ny][nx-1] == 1:
    # 다음칸에 1 배치해보기
    
    # 1 배치한 그 상태로 재귀
    nemo(cnt+1)
    
  grid[ny][nx] = 0
  nemo(cnt+1)
    
    
nemo(0)
print(result)
    
  
  
