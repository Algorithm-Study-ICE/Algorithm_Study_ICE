# 11725 트리의 부모찾기
# 각 노드의 부모 구하기


"""
1. 인접행렬
graph = [[0]*(n+1) for _ in range(n+1)]
공간복잡도 : 10만*10만=100억 
-> 메모리 초과

2. 인접리스트
공간복잡도 : O(정점개수+간선개수)

"""

import sys
# 파이썬 기본 재귀 깊이 제한이 1000이기 때문에 재귀로 풀 때는 필수로 입력해야함
sys.setrecursionlimit(10**6)
n = int(sys.stdin.readline())

graph = [[] for i in range(n+1)]
parents = [0]*(n+1)

for i in range(n-1):
    n1, n2 = map(int, sys.stdin.readline().split())
    # 인접 리스트에 추가
    graph[n1].append(n2)
    graph[n2].append(n1)

def dfs(start):
    # start번 노드와 연결된 모든 노드 검사
    for i in graph[start]:
        # 연결된 노드가 방문이 안된곳이면
        if parents[i] == 0:
            # 해당 노드의 부모값을 기록해주고
            parents[i] = start
            # 그 노드로 다시 dfs 탐색
            dfs(i)

# 1번 노드부터 시작
dfs(1)

for x in range(2, n+1):
    print(parents[x])
   
    
"""
BFS 구현도 해보기
"""
    