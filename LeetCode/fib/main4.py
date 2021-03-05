# 动态规划解


# def fib(n):
#     if n == 0:
#         return 0
#     if n == 1 or n == 2:
#         return 1

#     pre = 1
#     cur = 1
#     for i in range(n+1):
#         if i > 2:
#             sum = pre + cur
#             pre = cur
#             cur = sum
#     return cur


def fib(n):
    if n == 0:
        return 0
    if n == 1 or n == 2:
        return 1

    for i in range(n + 1):
        if i > 2:
            sum = pre + cur
            pre = cur
            cur = sum
    return cur


print(fib(3))
