a = int(input())

l = []
for i in range(a): # 입력받기
    k = list(map(int , input().split()))
    l.append(k)


l.sort(key=lambda x : (x[1], x[0])) # 종료시간기준 정렬
time = 0
cnt = 0

for i in range(a):
    if time <= l[i][0]:
        time = l[i][1]
        cnt += 1

print(cnt)