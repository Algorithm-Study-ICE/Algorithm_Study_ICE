# 18222 투에모스 문자열
# x의 k번째에 무슨 문자가 오는지

# 이해 안돼서 수열 정의보고 구현함..
# 추후 이해하고 다시 커밋하겠슴다.. !
"""
0 1 = 2^0
01 2 = 2^1
0110 4 = 2^2 -> 0
01101001 8 = 2^3 -> 1
0110100110010110 16 = 2^4 -> 0
01101001100101101001011001101001 2^5 -> 1 

* 마지막 글자가 010101 반복
* 홀수승 : 1 (반전된 상태) / 짝수승 : 0 (정상 상태)

t(0) = 0
t(2n) = t(n)
t(2n+1) = 1 - t(n)
"""
import sys
sys.setrecursionlimit(1000000)

k = int(sys.stdin.readline()) # k <= 10^18

def tue_morse(n):
    if n == 0: return 0
    elif n == 1: return 1
    elif n % 2:
        return 1 - tue_morse(n//2)
    else:
        return tue_morse(n//2)
print(tue_morse(k-1))




# 투에-모스 문자열 (18222번)
"""
  문제: https://www.acmicpc.net/problem/18222
  분할정복, 재귀
  투에-모스 문자열의 규칙성은 다음과 같다.
  투에-모스 문자열의 길이는 2^n이다. (n >= 0)
  k를 입력받았을 때, k <= 2^n 를 만족하는 2^n을 찾아서
  절반씩 분할정복하면서 재귀 호출을 하면 된다. 이 때, k가 투에-모스 문자열의 길의의 절반보다 크면
  0과 1이 반전된 상태이다. 이를 표시하기 위해 매개 변수로 s를 사용하였고 양수라면 정상, 음수라면 반전 상태이다.
  k가 1일 때, 정상 상태이면 0을, 반전 상태이면 1을 출력하면 된다.
"""
import sys
input = sys.stdin.readline


def recur(k: int, n: int, s: int) -> None:
    global ans
    if k <= 1:
        if s > 0:
            ans = 0
        else:
            ans = 1
        return
    if k > n // 2:
        recur(k - n // 2, n // 2, s * -1)
    else:
        recur(k, n // 2, s)


ans = 0
K = int(input().rstrip())
N = 1
while N < K:
    N *= 2

recur(K, N, 1)

print(ans)

