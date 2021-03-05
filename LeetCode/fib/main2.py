
# method 1
def fib(n):
    if n == 0:
        return 0
    elif n == 1 or n == 2:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)

# method 2


def fib2(n):
    if n == 0:
        return 0
    memorey = [0] * (n + 1)
    # print(memorey)
    return helper(memorey, n)


def helper(memo, n):

    if(memo[n] != 0):
        return memo[n]
    elif n == 1 or n == 2:
        return 1
    else:
        memo[n] = helper(memo, n - 1) + helper(memo, n-2)
        return memo[n]

# method 3


def fib3(n):
    pre = 0
    cur = 0
    if n == 0: return 0
    for i in range(n):
        if i == 0:
            cur = 1
        elif i == 1:
            cur = 1
        elif i > 1:
            temp = pre
            pre = cur
            cur = temp + cur

    return cur + pre
result = ''
for i in range(8):
    result += (str(fib3(i)) + ' ')
print(result)
# print(fib3(7))

