
arr = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4]


def removeDuplicates(nums):
    l = len(arr)
    pre = 0
    cur = 0

    while(cur < l):
        if nums[pre] == nums[cur]:
            cur += 1
        else:
            pre += 1
            nums[pre] = nums[cur]
            cur += 1
    
    return pre + 1
        

res_len = removeDuplicates(arr)

print(res_len)
print(arr)
