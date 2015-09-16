/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 0) return 0
    var min = Infinity
    var max = 0
    prices.forEach(function(e){
        max = Math.max(max, e - min)
        min = Math.min(min, e)
    })
    return max
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 0) return 0
    var f = []
    f[0] = 0
    var min = prices[0]
    for(var i = 1; i < prices.length; i++){
        min = Math.min(min, prices[i])
        f[i] = Math.max(f[i-1], prices[i] - min)
    }
    return f[prices.length-1]
};