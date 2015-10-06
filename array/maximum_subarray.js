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