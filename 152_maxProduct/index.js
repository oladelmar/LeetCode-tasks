function maxProduct(nums) {
    let dpMaxProducts = [nums[0]]
    let dpMinProducts = [nums[0]]
    let max = nums[0]
    
    let numsLength = nums.length

    for (let i = 1; i < numsLength; i++) {
        let num = nums[i]
        let currentProduct = num * dpMaxProducts[i-1]
        dpMaxProducts.push(Math.max(num, num * dpMinProducts[i-1], currentProduct))
        dpMinProducts.push(Math.min(num, num * dpMinProducts[i-1], currentProduct))
        if (dpMaxProducts[i] > max) {
            max = dpMaxProducts[i]
        }
    }

    return max
}

module.exports = maxProduct;
