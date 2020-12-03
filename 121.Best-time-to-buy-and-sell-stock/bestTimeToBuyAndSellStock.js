// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
const maxProfit = function(prices) {
    let max = 0
    for (let i = 0; i < prices.length; i++){
        let buy = prices[i] * (-1)
        for (let j = i + 1; j < prices.length; j++){
            if ((buy + prices[j]) > max){
                max = buy + prices[j]
            }
        }
    }
    return max
}

module.exports = maxProfit