''' code template '''


def bs(target, arr):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
