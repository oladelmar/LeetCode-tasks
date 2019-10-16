const threeSum = nums => {
    
    nums.sort((a, b) => a - b)
    let result = []
    const numsLength = nums.length

    for (let i = 0; i < numsLength; i++) {
        const target = 0 - nums[i]
        let left = i + 1
        let right = numsLength - 1

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        while (left < right) {
            if (nums[left] + nums[right] === target) {
                result.push([nums[i], nums[left], nums[right]])
                left++
                while(nums[left] === nums[left-1]) {
                    left++
                }
            } else {
                nums[left] + nums[right] < target ? left++ : right--
            }
        }
    }
    return result
};

module.exports = threeSum;
