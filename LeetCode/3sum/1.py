""" 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。
nums = [-1, 0, 1, 2, -1, -4]，
"""

nums = [-1, 0, 1, 2, -1, -4]


def calcSum(nums):
    nums = sorted(nums)
    l = len(nums)
    # p, i, j = 0, 1, l - 1
    result = []

    for p in range(l):
        if nums[p] > 0:
            break
        if p > 0 and nums[p] == nums[p - 1]:
            continue
        i, j = p + 1, l - 1
        while(i < j):
            
            if nums[i] + nums[j] + nums[p] == 0:
                result.append([nums[i], nums[p], nums[j]])
                while(i < j and nums[i] == nums[i+1]):
                    i += 1
                while(i < j and nums[j] == nums[j -1]):
                    j -= 1
                i += 1
                j -= 1
            elif nums[i] + nums[j] + nums[p] < 0:
                i += 1
            elif nums[i] + nums[j] + nums[p] > 0:
                j -= 1
                
    print(nums)
    return result


r = calcSum(nums)
print(r)
