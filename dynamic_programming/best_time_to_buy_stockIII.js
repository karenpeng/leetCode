/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0
    var l = []
    var r = []
    
    var min = prices[0]
    l[0] = 0
    for(var i = 1; i < prices.length; i++){
        min = Math.min(min, prices[i])
        l[i] = Math.max(l[i-1], prices[i] - min)
    }
    
    var max = prices[prices.length-1]
    r[prices.length-1] = 0
    for(var j = prices.length -2; j >= 0; j--){
        max = Math.max(max, prices[j])
        r[j] = Math.max(r[j+1], max - prices[j])
    }
    
    var res = 0
    for(var i = 0; i < prices.length; i++){
        res = Math.max(res, l[i] + r[i])
    }
    return res
};