// solution in pseudocode
// Set first value in DP array to true, since we can always reach the 0th step

// If possible to reach I step, and I step can jump to J step, set J step's DP value to true
// Otherwise, keep J Step's DP value to false
// Return last value in DP Array , to say if possible to reach last step

function canJump(nums) {
    if (nums.indexOf(0) === -1) return true;

    let dpPositions = new Array(nums.length).fill(false)
    dpPositions[0] = true

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (dpPositions[i] && i + nums[i] >= j) {
                dpPositions[j] = true
                break
            }
        }
    }

    return dpPositions[dpPositions.length - 1]
}

module.exports = canJump;
