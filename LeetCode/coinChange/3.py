def coin_change(coins: [int], amount: int):
    def dp(n):
        if n == 0:
            return 0
        if n < 0:
            return -1

        res = float("INF")
        for coin in coins:
            subProblem = dp(n - coin)
            if subProblem == -1:
                continue
            res = min(res, 1 + subProblem)

        return res if res != float('INF') else -1

    return dp(amount)


def coin_change2(coins: [int], amount: int):
    memo = dict()

    def dp(n):
        if n in memo:
            return memo[n]
        if n == 0:
            return 0
        if n < 0:
            return -1
        res = float('INF')
        for coin in coins:
            subProblem = dp(n - coin)
            if subProblem == -1:
                continue
            res = min(res, 1 + subProblem)
        memo[n] = res if res != float("INF") else -1
        return memo[n]

    return dp(amount)


def coin_change3(coins, amount):
    res = [amount + 1] * (amount + 1)
    res[0] = 0
    for i in range(len(res)):
        for coin in coins:
            if i - coin < 0:
                continue
            res[i] = min(res[i], 1 + res[i - coin])

    return -1 if res[amount] == (amount + 1) else res[amount]

# print(coin_change([2, 3], 5))

# print(coin_change2([2, 3], 5))


print(coin_change3([2, 3], 5))
