# 18352 특정거리의 도시 찾기
from collections import deque

n, m, k, x = map(int, input().split())

graph = [[] for _ in range(n+1)]
dist = [-1]*(n+1)
q = deque()

for i in range(m):
    a,b = map(int, input().split())
    # 단방향 리스트로 구현
    graph[a].append(b)
# [[],[2,3],[3,4],[],[]]
# [-1, 0,   1,    1, -1]
def bfs():
    while q:
        # 노드 꺼내서
        curr = q.popleft() 
        # 그 노드랑 연결된 노드 추가
        for next in graph[curr]:
            # 방문하지 않은 도시면
            if dist[next] == -1:
                q.append(next) 
                # 거리 갱신
                dist[next] = dist[curr]+1

# 첫번째 노드 넣고
q.append(x)
dist[x] = 0
bfs()

result = []
for i in range(1,n+1):
    if dist[i] == k:
        result.append(i)

result.sort()
if len(result) == 0:
    print(-1)
else:
    for i in result:
        print(i)
        