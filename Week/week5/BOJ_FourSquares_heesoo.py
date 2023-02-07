# 17626 
# 모든 자연수는 4개 이하의 제곱수의 합으로 표현할 수 있음
# 자연수 n이 주어질때, n을 최소 개수의 제곱수 합으로 표현
import math

def check():
    d = int(n ** 0.5)

    a, b, c = 0, 0, 0

    for i in range(d, 0, -1):
        a = n - (i ** 2)
        # n이 제곱수일때
        if a == 0:
            lst.append(1)
            return
        e = int(a ** 0.5)

        # n - i**2이 제곱수일때
        for j in range(e, 0, -1):
            b = a - (j ** 2)
            if b == 0:
                lst.append(2)
                return
            f = int(b ** 0.5)

            for k in range(f, 0, -1):
                c = b - (f ** 2)
                # n - i**2 - j**2 이 제곱수일때
                if c == 0:
                    lst.append(3)
                    break


n = int(input())
lst = [4]

check()
print(min(lst))

# dp 풀이


n = int(input())
# dp[i] : i번째값을 만들기위해 필요한 최소 연산 값
dp = [0]*(n+1)
dp[1] = 1

# 5 = 2^2 + 1^2
# 4에서 발생하는 최소 개수 + 1에서 발생하는 최소개수
# 루트n이 정수라면 제곱수
# dp[2] = dp[1]+1 = 2 (1+1)
# dp[3] = dp[2]+1 = 3 (1+1+1)
# dp[4] = 
def solve(n):
    if math.sqrt(n) == int(math.sqrt(n)):
        return 1
    
    for i in range(2,n+1):
        minn = 4
        # i = 2, 1~2
        for j in range(1,int(math.sqrt(i))+1):
            minn = min(minn, dp[i-j**2])
        dp[i] = minn+1


        
    


