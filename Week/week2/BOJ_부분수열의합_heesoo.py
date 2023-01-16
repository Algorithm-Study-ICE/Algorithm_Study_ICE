# 1182 부분수열의합 실버2

# 크기가 양수인 부분수열중
# 원소 다 더한값이 s가 되는 경우의수
# -7 -3 -2 5 8
n, s = map(int, input().split())
arr = list(map(int, input().split()))
depth = 0
result = 0
# 0번째 선택 -> 1번째~n번째까지 돌아보면서
# 1번째 선택해서 더했을때 0번째+1번째 == S 인지 검사 -> 맞으면 +=1
# 2번째부터 다시 선택 0+1+2 == S 인지 검사
# ...
# 1번째 선택 -> 2번째~n번째까지 돌아보면서
# 1+2 -> 1+2+3 -> 1+2+3+4
# 1+3 -> 1+3+4
# 1+4  

def getSum(sum, idx):
    global result, s,n
    if idx >= n:
        return
    
    sum += arr[idx] # +[0] -> [0]+[1] -> [0]+[1]+[2]
    
    if sum == s:
        result += 1
    
    # 현재 원소 포함하는 경우 -> 전체 합에서 현재 원소 더해서 검사해주기
    getSum(sum, idx+1)
    # 현재 원소 포함 안하는 경우 -> 전체 합에서 현재 원소 빼줘야함
    getSum(sum-arr[idx], idx+1)    #[0] + [1]

getSum(0,0)
print(result)


#----------왜 되는지 모르겠는 코드,,;
def getSum(start, depth, sum):
    global result, s, n
    print('start:',start, 'depth:', depth, 'sum',sum)
    if sum == s and depth > 0:
        result += 1
    for i in range(start,n): # 0,1,2,3,4
        # 다음꺼(i+1) 선택, 현재꺼 선택했으니까 depth+1, 현재꺼 더하기(sum+arr[i])
        getSum(i+1,depth+1, sum+arr[i])
        
# 첫번째 원소부터 시작
getSum(0, depth, 0) # 시작점, 개수, 현재합
print(result)
