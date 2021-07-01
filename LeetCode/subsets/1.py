nums = [1, 2, 3]


def getSubsets(nums):
    ans = []
    l = len(nums)

    def dfs(ans, nums, list, idx):
        if idx == l:
            ans.append(list)
            return

        dfs(ans, nums, list.copy(), idx + 1)
        list.append(nums[idx])
        dfs(ans, nums, list.copy(), idx + 1)

        # list.pop()

    if l == 0:
        return []
    else:
        dfs(ans, nums, list(), 0)
        return ans


''' for loop '''
def getSubsets2(nums):
    results = [[]]
    for num in nums:
        newSets = []
        for res in results:
            sub = res + [num]
            newSets.append(sub)
        results.extend(newSets)
    return results

print(getSubsets(nums))
# print(getSubsets2(nums))
