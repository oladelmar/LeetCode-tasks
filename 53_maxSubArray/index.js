// [-2,1,-3,4,-1,2,1,-5,4]

function maxSubArray(nums) {
    let dpArray = [nums[0]]
    let max = nums[0]

    let numsLength = nums.length

    for (let i = 1; i < numsLength; i++) {
        // dpArray[i] = Math.max(nums[i], nums[i] + dpArray[i-1])
        // max = Math.max(max, dpArray[i])

        // THIS ONE IS FASTER
        let num = nums[i]
        let currentMax = Math.max(num, num + dpArray[i - 1])
        dpArray.push(currentMax)
        if (max < currentMax) {
            max = currentMax
        }
    }

    return max
}


// OPTIMIZED memory a little bit, but lost in time!!!

// function maxSubArray(nums) {
//     let max = nums[0]

//     let numsLength = nums.length

//     for (let i = 1; i < numsLength; i++) {
        
//         let num = nums[i]
//         nums[i] = Math.max(num, num + nums[i - 1])
//         if (max < nums[i]) {
//             max = nums[i]
//         }
//     }

//     return max
// }

module.exports = maxSubArray;
