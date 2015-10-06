/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length === 0) return null
    var candidate
    var count = 0
    
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === candidate) count++
        else if(count === 0) candidate = nums[i]
        else count --
    }
    
    return candidate
    
};