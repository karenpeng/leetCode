/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]
    
    var f = []
    //rob the first house
    f[0] = nums[0]
    f[1] = nums[0]
    for(var i = 2; i < nums.length-1; i++){
        f[i] = Math.max(f[i-1], f[i-2]+nums[i])
    }
    var out1 = f[nums.length-2]
    
    f = []
    //not rob the first house
    f[0] = 0
    f[1] = nums[1]
    for(var i = 2; i < nums.length; i++){
       f[i] = Math.max(f[i-1], f[i-2]+nums[i]) 
    }
    var out2 = f[nums.length-1]
    
    return Math.max(out1, out2)
};