# 3085 사탕게임

# 인접한 사탕 색 다르면 -> 교환
# 모두 같은색으로 이뤄진 가장 긴 연속 부분 -> 먹음 (약간 캔디크러쉬)

# 사탕 최대 되려면
# 1. for 문으로 개수 내림차순 돌리기
# 2. 각 줄에 몇 개씩 있는지 검사 -> 사탕 바꿀수있는지 검사 -> 출력 
# 모든 경우 다 검사

n = int(input())
arr = []
temp = []
for i in range(n):
    inputarr = list(input())
    arr.append(inputarr)
    temp.append(inputarr)
    
maxCandy = 1


# 한 행 검사
def checkRow(r,c):
    global maxCandy, temp
    # 연속된게 있는지 왼쪽->오른쪽 검사
    rowCnt = 1
    for i in range(n-1):
        if temp[r][i] == temp[r][i+1]:
            rowCnt += 1
            maxCandy = max(maxCandy, rowCnt)
        # 연속 x
        else:
            rowCnt = 1
            
# 열 검사
def checkCol(r,c):
    global maxCandy, temp
    # 연속된게 있는지 위 -> 아래 검사
    colCnt = 1
    for i in range(n-1):
        if temp[i][c] == temp[i+1][c]:
            colCnt += 1
            maxCandy = max(maxCandy, colCnt)
        # 연속 x
        else:
            colCnt = 1
            
for i in range(n-1):
    for j in range(n-1):
        checkRow(i,j)
        checkCol(i,j)
print(maxCandy)

for i in range(n-1):
    for j in range(n-1):
        # 내 오른쪽이랑 다르면
        if arr[i][j] != arr[i][j+1]:
            # 서로 바꿔보고
            temp[i][j], temp[i][j+1] = arr[i][j+1], arr[i][j]
            # 바꾼 상태에서 연속된게 최대 몇개인지 검사 해당 가로 세로만 검사하면되는거아닌가?
            checkRow(i,j) # 내가 속한 행 검사
            checkCol(i,j) # 내가 속한 열 검사
            checkCol(i,j+1) # 오른쪽 열 검사
            # 원상 복구
            temp = arr
            
        # 내 밑이랑 다르면
        if arr[i][j] != arr[i+1][j]:
             # 서로 바꿔보고
            temp[i][j], temp[i+1][j] = arr[i+1][j], arr[i][j]
            # 바꾼 상태에서 연속된게 최대 몇개인지 검사
            checkCol(i,j) # 내가 속한 열 검사
            checkRow(i,j) # 내가 속한 행 검사
            checkCol(i+1,j) # 아래 열 검사
            # 원상 복구
            temp = arr
    
print(maxCandy)