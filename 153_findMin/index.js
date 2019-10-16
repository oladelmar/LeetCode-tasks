function findMin(nums) {

    let numsLength = nums.length
    let left = 0
    let right = numsLength - 1

    if (numsLength === 1) return nums[0]

    if (nums[left] < nums[right]) return nums[left]

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        const leftVal = nums[left]
        const midVal = nums[mid]
        const leftOfMid = nums[mid - 1]
        const rightOfMid = nums[mid + 1]

        if (midVal > rightOfMid) return rightOfMid
        if (leftOfMid > midVal) return midVal
        leftVal < midVal ? left = mid : right = mid
    }
}
