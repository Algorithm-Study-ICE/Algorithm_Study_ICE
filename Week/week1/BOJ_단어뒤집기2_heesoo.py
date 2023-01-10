# 17413 단어뒤집기
# Flag, Stack
# 태그 : < > (알파벳,공백) -> flag 바꾸고 >나올때까지 append
# 단어 : 알파벳,숫자 -> stack 넣어서 빈칸 들어오면 pop -> result에 +
# 
s = input()
isTag = False
curr = 0
result = ''
temp = ''
for char in s:
    # < 나오면 tag 바꿔주고 이전에 단어 있었으면 거꾸로 넣어줌
    if char == '<':
        isTag = True
        result += temp[::-1]
        result += char
        temp = ''
        continue
    # > 나오면 tag flag 바꿔줌
    elif char == '>':
        isTag = False
        result += char
        continue
    # 태그 밖이고, 공백 나오면 거꾸로 넣어줌
    elif isTag == False and char == ' ':
        result += temp[::-1]
        result += ' '
        temp = ''
        continue
        
    # 태그 안에 있으면 고대로 출력
    if isTag :
        result += char
    else:
        temp += char
 
# 마지막에 단어 있는 경우 더해야지
print(result+temp[::-1])