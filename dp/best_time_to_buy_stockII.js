/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var sum = 0
    for(var i = 0; i < prices.length-1; i++){
        if(prices[i+1] > prices[i]) {
            sum += prices[i+1] - prices[i]
        }
    }
    return sum
};