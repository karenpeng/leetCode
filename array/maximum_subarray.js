/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //不要忘记给max也赋值！！！！！
    var max = nums[0]
    var pre = nums[0]
    for(var i = 1; i < nums.length; i++){
        var cur = Math.max(nums[i], nums[i] + pre)
        max = Math.max(max, cur)
        pre = cur
    }
    return max
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0
    var sum = 0
    var max = -Infinity
    for(var i = 0; i < nums.length; i++){
        sum += nums[i]
        max = Math.max(max, sum)
        if(sum < 0) sum = 0
    }
    return max
};
