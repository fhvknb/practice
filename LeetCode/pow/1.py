#  暴力解
def pow1(x, n):
    result = 1
    if abs(n) > 0:
        for i in range(n):
            result * x

    return result if n > 0 else 1/result


# print(pow(2, 4))


def pow2(x, n):

    def fastPow(x, n):
        if n == 0:
            return 1
        sub = fastPow(x, n // 2)
        return x * sub * sub if n % 2 == 1 else sub * sub

    return fastPow(x, n) if n > 0 else 1 / fastPow(x, -n)

print('--------')
print(pow2(2, 6))
# print(5//2)
