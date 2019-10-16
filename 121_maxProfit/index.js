var maxProfit = function(prices) {
    let cheapestPrice = prices[0]
    let maxProfit = 0
    let pricesLength = prices.length

    for (let i = 1; i < pricesLength; i++) {
        let currentPrice = prices[i]
        if (currentPrice < cheapestPrice) {
            cheapestPrice = currentPrice
        } else {
            maxProfit = Math.max(maxProfit, currentPrice - cheapestPrice)
        }
    }

    return maxProfit
};

module.exports = maxProfit;
