// [] - 0
// [1 2] - 1 or 2
// [1 2 3] - 1+3 or 2
// [1 2 3 4] - 1 + 3 or   2 + 4 or  1 + 4
// [1 2 3 4 5] - 1 + 3 + 5  or   2 + 4   or   1 + 4 or   2 + 5
// [1 2 3 4 5 6] -  1 + 3 + 5  or    2 + 4 + 6  or   1 + 4 + 6  or  1 + 3 + 6  or    2 + 5   

function rob(nums) {
    
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
        maxLootAtNth.push(Math.max(nums[i] + maxLootAtNth[i-2], maxLootAtNth[i-1]))
    }
    return maxLootAtNth.pop()
}
