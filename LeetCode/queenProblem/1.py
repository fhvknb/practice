
def solve_queen(n):
    cols = set()
    xy_sub = set()
    xy_sum = set()
    result = []

    def dfs(n, row, cur_state):
        # print(cur_state)
        # print(cols)
        # print(xy_sum)
        if row >= n:
            result.append(cur_state)
            return

        
        for col in range(n):
            if col in cols or row - col in xy_sub or row + col in xy_sum:
                continue

            cols.add(col)
            xy_sub.add(row - col)
            xy_sum.add(row + col)

            dfs(n, row + 1, cur_state + [col])

            cols.remove(col)
            xy_sub.remove(row - col)
            xy_sum.remove(row + col)

    def generate_result():

        print(result)
        # print(len(result))

        return [['.'*i + 'Q' + '.'*(n - i - 1) for i in sol] for sol in result]

    dfs(n, 0, [])
    return generate_result()


print(solve_queen(4))

# arr = [1, 3, 4]
# arr.remove(3)
# print(arr)
# print(['.'*4, 'Q'])
