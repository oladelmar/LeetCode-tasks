const merge = intervals => {
    if (!intervals.length) return intervals;

    intervals.sort((a, b) => a[0] - b[0])

    const resultArray = [intervals[0]]

    for (let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i]
        const lastInterval = resultArray[resultArray.length - 1]

        if (currentInterval[0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(currentInterval[1], lastInterval[1])
        } else {
            resultArray.push(currentInterval)
        }
    }

    return resultArray
};

module.exports = merge;
