/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0
    var min = prices[0]
    var maxL = []
    //it's zero
    maxL[0] = 0
    for(var i = 1; i < prices.length; i++){
        maxL[i] = Math.max(maxL[i-1], prices[i] - min)
        min = Math.min(min, prices[i])
    }
    
    var max = prices[prices.length-1]
    var maxR = []
    //it's zero
    maxR[prices.length-1] = 0
    for(var i = prices.length-2; i >= 0; i--){
        maxR[i] = Math.max(maxR[i+1], max - prices[i])
        max = Math.max(max, prices[i])
    }
    
    var result = 0
    for(var i = 0; i < prices.length; i++){
        result = Math.max(result, maxL[i] + maxR[i])
    }
    return result
};