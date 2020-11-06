
arr = [1, 1, 1, 1, 2]


def removeDuplicates(nums):
    l = len(nums)
    pre = 0
    cur = 0
    while(cur < l):
        if arr[pre] == arr[cur]:
           cur += 1
        else: 
            pre += 1
            arr[pre] = arr[cur]
            cur += 1
    return pre + 1
        

res_len = removeDuplicates(arr)

print(res_len)
print(arr)
