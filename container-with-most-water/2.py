"""
给你 n 个非负整数 a1，a2，...，an，
每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

输入：[1,8,6,2,5,4,8,3,7]
输出：49
 """

# (x - y) * minHeight
def getMaxArea(nums):
    maxArea = 0
    l = len(nums)
    for i in range(l):
        for j in range(l):
            if(j > i):
                minHeight = min(nums[i], nums[j])
                maxArea = max(maxArea, (j - 1) * minHeight)

    return maxArea

print(getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
