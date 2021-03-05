""" 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。


等价于 fib
"""


def climb(n):
    f1 = 1
    f2 = 2
    if n < 3:
        if n == 1:
            return f1
        elif n == 2:
            return f2
    for i in range(n + 1):
        if i > 2:
            f3 = f1 + f2
            f1 = f2
            f2 = f3
    return f3


print(climb(2))
