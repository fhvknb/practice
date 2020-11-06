
# method 1
def fib(n):
    if n == 1 or n == 2:
        return 1
    else:
        return fib(n -1) + fib(n-2)

# method 2

def fib2(n):
    if n < 1:
        return 0
    memory = [0] * (n+1)
    # print(memory)
    return helper(memory, n)

def helper(memo, n):
    if n == 1 or n == 2:
        return 1
    if memo[n] != 0:
        return memo[n]
    else:
        memo[n] = helper(memo, n-1) + helper(memo, n -2)

        return memo[n]

# method 3

def fib3(n):
    cur = 1
    pre = 1
    for i in range(n+1):
        if i >= 3:
            sum = cur + pre
            pre = cur
            cur = sum
    return cur

print(fib3(1))