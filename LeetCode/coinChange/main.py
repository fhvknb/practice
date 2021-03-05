def coin_change(coins:[int], amount:int):
    def dp(n):
        if n == 0: return 0
        if n < 0: return -1
        res = float('INF')
        for coin in coins:
            subProblem = dp(n - coin)
            if subProblem == -1: continue
            res = min(res, 1 + subProblem)
        
        return res if res != float("INF") else -1

    return dp(amount)


def coin_change2(coins:[int], amount:int):
    memo = dict()
    def dp(n):
        if n in memo: return memo[n]
        if n == 0: return 0
        if n < 0: return -1
        res = float('INF')
        for coin in coins:
            subProblem = dp(n - coin)
            if subProblem == -1: continue
            res = min(res, 1 + subProblem)
        memo[n] = res if res != float("INF") else -1
        return memo[n]

    return dp(amount)



def coin_change3(coins, amount):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for i in range(len(dp)):
        for coin in coins:
            if i < coin: continue
            dp[i] = min(dp[i], 1 + dp[i - coin])
    
    print(dp)
    return  -1 if (dp[amount] == (amount + 1)) else dp[amount]

# print(coin_change([1, 2, 5], 11)) 

print(coin_change3([1,2,4,8, 16, 32, 64, 128, 256], 5))


