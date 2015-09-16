/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]
    
    var f = []
    
    //1. rob the first house
    f[0] = nums[0]
    f[1] = Math.max(nums[0], nums[1])
    for(var i = 2; i < nums.length -1; i++){
        f[i] = Math.max(nums[i] + f[i-2], f[i-1])
    }
    var max = Math.max(f[nums.length-2])
    
    //2. don't rob the first house
    f = []
    f[0] = 0
    f[1] = nums[1]
    for(var i = 2; i < nums.length; i++){
        f[i] = Math.max(nums[i] + f[i-2], f[i-1])
    }
    
    max = Math.max(max, f[nums.length-1])
    return max
};