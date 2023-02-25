# 2225 합분해
# 0~n까지 정수 k개 더해서 그 합이 n이 되는 경우의 수
"""
n=1
dp[2][1] = 01 10
dp[3][1] = 001 010 100

n=2
dp[2][2] = 02 11 20
dp[3][2] = 002 020 200 011 101 110

k/n 0 1 2 3 4 5
1   1 1 1 1 1 1
2   1 2 3 4 5
3   1 3 6 10 15
4   1 4 10
dp[2][4] = 04 13 22 31 40 = dp[1][4] + dp[1][3] + dp[1][2] + dp[1][1] + dp[1][0]

맨 뒷자리 고정시키고 앞에 들어오는 경우의 수
( )0
( )1
( )2
( )3
( )4

dp[k][n] = dp[k-1][0] + .. dp[k-1][n]
         = dp[k][n-1] +    dp[k-1][n] 
"""
import sys

n, k = map(int, sys.stdin.readline().split(' '))
result = 0

# dp[k][n] = k번으로 n만드는 경우의 수

dp = [[0]*(n+1) for _ in range(k+1)]

# 0만들기위해선 방법 1개 밖에 (0/0+0/0+0+0..)
for i in range(1,k+1):
    dp[i][0] = 1 

# 1번만 더해서 n만드는 방법은 1개 밖에
for i in range(n+1):
    dp[1][i] = 1
    
for k in range(2,k+1):
    for n in range(1,n+1):
        dp[k][n] = dp[k][n-1] + dp[k-1][n]   

    

print(dp[k][n]%1000000000)

