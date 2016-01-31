var stock1 = function(prices) {
    if(prices.length <= 1) return 0
    var max = 0
    var min = Infinity
    for(var i = 0; i < prices.length; i++){
        min = Math.min(min, prices[i])
        var profit = prices[i] - min
        max = Math.max(max, profit)
    }
    return max
};

stock1([1,2])

var stockIII = function(prices){
    var l = []
    l[0] = 0
    
    var r = []
    r[prices.length-1] = 0
    
    var min = prices[0]
    for(var i = 1; i < prices.length; i++){
        min = Math.min(min, prices[i])
        var profit = prices[i] - min
        l[i] = Math.max(l[i-1], profit)
    }
    
    var max = prices[prices.length - 1]
    for(var i = prices.length - 2; i >= 0; i--){
        max = Math.max(max, prices[i])
        var profit = max - prices[i]
        r[i] = Math.max(r[i+1], profit)
    }
    
    var result = 0
    for(var i = 0; i < prices.length; i++){
        result = Math.max(result, l[i] + r[i])
    }
    return result
}

var maxSubArrayI = function(nums){
    var sum = 0
    var max = -Infinity
    nums.forEach(function(n, index){
        sum += n
        max = Math.max(max, sum)
        if(sum < 0) sum = 0
    })
    return max
}

var maxSubArrayII = function(nums) {
    var sum = 0
    var max = -Infinity

    var l = []
    var r = []
    nums.forEach(function(n, index){
        sum += n
        max = Math.max(max, sum)
        l[index] = max
        if(sum < 0) sum = 0
    })

    sum = 0
    max = -Infinity
    var result = -Infinity
    for(var i = nums.length - 1; i >= 0; i--){
      sum += nums[i]
      max = Math.max(max, sum)
      r[i] = max
      if(sum < 0) sum = 0
      
      if(i >= 1){
        result = Math.max(result, l[i-1] + r[i])    
      }
    }

    // max = -Infinity
    // for(var i = 0; i < nums.length - 1; i++){
    //   max = Math.max(max, l[i] + r[i+1])
    // }

    // return max
    return result
};

console.log(maxSubArrayII([2,-1,3,-4,4,5,-5,6]))//=>
