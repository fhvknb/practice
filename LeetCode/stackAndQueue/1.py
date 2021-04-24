"""
   1. 匹配 (){}[]
 """


def isValid(s: str) -> bool:
    dic = {'{': '}', '[': ']', '(': ')', '?': '?'}
    stack = ['?']
    for c in s:
        if c in dic:
            stack.append(c)
        elif dic[stack.pop()] != c:
            return False
    return len(stack) == 1


teststr = '(){}[]'
# print(isValid(teststr))


"""
    2. 柱状图最大面积

 """


def getMaxArea(heights: []):
    l = len(heights)
    i = 0
    j = 1
    maxArea = 0
    while(i < l):
        print('i->' + str(i))
        minHeight = heights[i]
        while(j < l):
            print('j->' + str(j))
            minHeight = min(minHeight, heights[j])
            area = (j - i + 1) * minHeight
            maxArea = max(maxArea,  area)
            j += 1
        i += 1
        j = i + 1

    return maxArea


print(getMaxArea([2, 1, 5, 6, 2, 3]))
