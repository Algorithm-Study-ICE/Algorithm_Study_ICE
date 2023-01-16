# 20291 파일정리
# 확장자의 이름과 그 확장자 파일의 개수를 한줄에 하나씩 출력
# 확장자 사전순 출력

n = int(input())

# 딕셔너리 활용
files = {}
for i in range(n):
    file = input()
    
    # 확장자 찾기
    idx = file.index('.')
    name = file[idx+1:]
    
    # 확장자 이미 있는 경우
    if name in files:
        files[name] += 1
    # 없는 경우 추가
    else:
        files[name] = 1
        
# key값으로 정렬
files = sorted(files.items())

for file in files:
    print(file[0], file[1])
