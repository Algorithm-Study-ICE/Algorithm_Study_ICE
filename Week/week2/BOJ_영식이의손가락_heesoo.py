# 1614 영식이의 손가락
# finger번째 손가락으로 limit만큼만 셀 수 있다

finger = int(input())
limit = int(input())

total, cnt = 0,0

# -----------------수식 풀이-----------------------
# 최대 요청이 10만 -> 수식으로 접근
# 다친 손가락 == 1 : 12345432 12345432 
# 다친 손가락 == 5 : 1234 54321234 54321234
#**
# 다친 손가락 == 2,3,4 : 
# (2) 1 234543 21 234543 21    | 6,2 4*limit + 2 -> 4*limit + 4-(finger-1)*2
# (3) 12 3454 3212 3454 3212   | 4   4*limit
# (4) 123 45 432123 45 432123  | 2,6 4*limit - 2 -> 4*limit + 4-(finger-1)*2

# 홀수면
# 1번 -> 6 4*limit + (4-n -1) 3번 -> 8+6(14) 5번 -> 16+6(22)
# 4*limit + 1
# 짝수면
# 2번 -> 8 4번 -> 16번


# 3번 -> 1번 돌리기 +  5번-> 2번 돌리기
# 2번 -> 1번 돌리기 , 4번 -> 2번 돌리기 , 6번 -> 3번 돌리기


if limit == 0:
    print(finger-1)
else:
    if finger == 1:
        print(8*limit)
    elif finger == 5:
        print(4 + 8*limit)    
    else:
        total += finger-1
        # 짝수면
        if limit % 2 == 0:
            total += 4*limit
        # 홀수면
        else:
            total += 4*limit + 4-(finger-1)*2
        print(total)
    
    
# -----------------시간초과 풀이--------------------

asc = [1,2,3,4,5,4,3,2]
def count():
    global total, cnt
    
    for i in asc:
        # 최대로 세면
        if cnt > limit:
            break
        # 다친 손가락인지 검사
        if i == finger:
            # 다친 손가락으로 세기
            cnt += 1
        # print(i)
        total += 1    
    return cnt

# 다친 손가락으로 최대로 셀때까지 반복
while True:
    cnt = count()
    if cnt > limit:
        break

if limit == 0:
    print(0) 
else:
    print(total-1)
    