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
       console.log(max, min)
    }
    return max
};

console.log(maxProfit([1,2]))

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 0) return 0
    var min = prices[0]
    var max = 0
    for(var i = 1; i < prices.length; i++){
        var result = prices[i] - min;
        max = Math.max(max, result);
        min = Math.min(min, prices[i]);
    }
    return max;
};
