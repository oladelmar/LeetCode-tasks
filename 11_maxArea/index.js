function maxArea(height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left)
        maxArea = Math.max(currentArea, maxArea)
        height[left] > height[right] ? right-- : left++
    }

    return maxArea
}

module.exports = maxArea;
