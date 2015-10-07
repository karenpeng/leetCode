/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max = 0
    var min = Infinity
    for(var i = 0; i < prices.length; i++){
       max = Math.max(max, prices[i] - min)
       min = Math.min(min, prices[i])
    }
    return max
};