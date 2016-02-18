/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var f = []
    var max = 0
    for(var i = 0; i < nums.length; i++){
        f[i] = 1
        for(var j = 0; j < i; j++){
            if(nums[i] > nums[j]) {
                f[i] = Math.max(f[i], f[j] + 1)
            }
        }
        max = Math.max(max, f[i])
    }
    return max
};
