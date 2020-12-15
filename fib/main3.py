
# method 1
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)


# method 2
def fib2(n):
    if n == 0:
        return 0
    else:
        memo = [0] * (n + 1)

        return helper(memo, n)


def helper(memo, n):
    if n == 0:
        return 0
    elif n == 1 or n == 2:
        return 1
    elif memo[n]:
        return memo[n]
    else:
        memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
        return memo[n]


# method 3
def fib3(n):
    dp = [0] * (n + 1)
    dp[1] = dp[2] = 1

    for i in range(n+1):
        if i > 2:
            dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

def fib4(n):
    if n == 0:
        return 0
    if n == 1 or n == 2:
        return 1
    
    cur = 1
    pre = 1
   
    for i in range(n + 1):
        if i > 2:
             sum = pre + cur
             pre = cur
             cur = sum

    return cur


# print(fib(10))
# print(fib2(100))
# 3542 2484 8179 2619 1507 5
# 3 2 8 2 1 5
# print(fib3(5000))
print(fib3(100))
