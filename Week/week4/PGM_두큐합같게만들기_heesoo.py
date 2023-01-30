# 프로그래머스 두 큐 합 같게 만들기

# queue1 = [3, 2, 7, 2]
# queue2 = [4, 6, 5, 1]

# 큐 안 쓴 풀이
def solution(queue1, queue2):
    queue = queue1+queue2
    total = sum(queue)
    half = total//2
    answer = 0
    
    sum1 = sum(queue1)
    sum2 = sum(queue2)
    
    # 시작 위치
    curr1, curr2 = 0,0
    
    while True:
        # 큰쪽에서 빼와야함 -> 어차피 큰쪽에서 빼오는 과정에서 최소 반복횟수도 고려됨
        # queue1 합이 클 때
        if sum1 > half:
            temp = queue1[curr1]
            sum1 -= temp
            sum2 += temp
            
            curr1 += 1
            queue2.append(temp)
            answer +=1
        # queue2 합이 클 때
        elif sum2 > half:
            temp = queue2[curr2]
            sum1 += temp
            sum2 -= temp
            
            curr2 += 1
            queue1.append(temp)
            answer +=1
        
        # 같은 경우 멈추기
        elif sum1 == sum2:
            break

        # 안되는 경우 : 합이 홀 수 일때
        if total % 2 == 1:
            answer = -1
            break
        
        # 최대 반복 횟수 넘겼을때 : queue1 <-> queue2 반대로 바뀌고, 다시 제자리로오는 횟수
        """len(queue)*3 해도되는데 이유 이해 못함"""
        if answer >= len(queue)*2:
            answer = -1
            break
    return answer