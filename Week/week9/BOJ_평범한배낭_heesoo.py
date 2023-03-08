# 12865 평범한 배낭
# 가치의 최댓값
"""
max = 7
6 13
4 8
3 6
5 12

1. 6 -> 현재 0, 6 < 7 -> 담을수있음
2. 4 -> 현재 6, 6+4 > 7 -> 6을 담을지 4 담을지 선택해야함
=>
0 - 물건 i를 담지 않는다 -> 물건 i-1 담아서 용량 w인 경우 최대 가치
1 - 물건 i를 담는다 -> 물건 i-1까지 담아서 용량 w-wi인 경우 최대 가치 + 물건 i의 가치

dp[1][2] : 현재 1번째 물건을 넣을때 무게 2인 배낭이 가지는 최대 가치
"""
import sys

n, k = map(int, input().split())
arr = [[0,0]]
for i in range(n):
    weight, value = map(int, input().split())
    arr.append([weight, value])
# 
dp = [[0]*(k+1) for _ in range(n+1)]

for i in range(1, n+1): # 몇번째 "물건"
    w = arr[i][0] # 현재 물건의 무게
    v = arr[i][1] # 현재 물건의 가치
    for j in range(1, k+1): # max 무게
        if w > j: # 현재 담으려는 물건이 max무게를 넘으면 못담지!
            dp[i][j] = dp[i-1][j]
        else: # 현재 물건이 들어갈 수 있으면 담아야지
            dp[i][j] = max(dp[i-1][j-w]+v, dp[i-1][j])

print(dp[n][k])


