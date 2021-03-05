nums = [0, 1, 0, 3, 12]

def move_zero(arr):
    j = 0

    for i in range(len(arr)):
        if arr[i]:
            if i > j:
                arr[j] = arr[i]
                arr[i] = 0
            j += 1

    

move_zero(nums)
print(nums)