/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var f = []
    f[0] = nums[0]
    
    //in case there's only one element in the array
    var max = nums[0]
    
    for(var i = 1; i < nums.length; i++){
        f[i] = Math.max(f[i-1] + nums[i], nums[i])
        max = Math.max(max, f[i])
    }
    return max
};