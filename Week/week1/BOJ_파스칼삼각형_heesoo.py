# 15489 파스칼 삼각형 실버4
# 왼쪽위 + 오른쪽위

r, c, w = map(int, input().split())
# 1
# 11
# 111
# 1111
arr = [[1]*i for i in range(1,31)]

# 파스칼 삼각형 규칙대로 만들어두기
for row in range(2, 30):
    for col in range(1, row):
        arr[row][col] = arr[row-1][col-1] + arr[row-1][col] 

    
sum = 0  
tempW = 1   
for i in range(r-1,r+w-1):
    for j in range(tempW):
        sum += arr[i][c-1+j]
    tempW += 1
print(sum)