# 9012 괄호
# () -> 기본 VPS
# 조건 1 : ( 개수 = ) 개수
# 조건 2 : () 순서 -> stack

# 스택에 ( 넣고 ) 들어오면 pop
total = int(input())

for _ in range(total):
    stack = []
    strs = list(input())
    stack.append(strs[0])
    
    if strs.count('(') != strs.count(')'):
        print('NO')
        continue
    
    for i in range(1, len(strs)):
        
        if strs[i] == '(':
            stack.append(strs[i])
        else :
            if len(stack) == 0:
                continue
            stack.pop()
    
    if len(stack) == 0:
        print('YES')
    else:
        print('NO')