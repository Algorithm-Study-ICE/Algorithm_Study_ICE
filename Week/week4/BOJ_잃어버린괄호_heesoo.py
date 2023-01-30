# 1541 잃어버린 괄호
# 주어진 식에서 괄호를 쳐서 결과를 최소로 만드는

# 연산자 - 단위로 끊어주기
n = input().split('-')

arr = []
for i in n: # 여기서 i는 ['55','50+40']
    sum = 0
    # 연산자 + 단위로 끊어주기
    tmp = i.split('+')
    for j in tmp:
        sum += int(j)   
    arr.append(sum) # ['55','90']
    
# 최소로 만드려면 - 앞에서 괄호를 쳐야함 맨 앞에거에서 다 빼주기
first = arr[0] # 55

for i in arr[1:]:
    first -= i
    
print(first)