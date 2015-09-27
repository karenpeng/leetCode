/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    var bit = []
    
    for(var i = 0; i < 32; i++){
        bit[i] = 0
    }
    
    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < 32; j++){
            console.log(j, nums[i] >>j & 1)
            bit[j] += (nums[i] >>j & 1)
        }
    }
    
    //左右颠倒的
    //console.log(bit)
    
    var target = 0
    for(var i = 0; i < 32; i++){
        target += (bit[i] % 3 << i)
    }
    return target
    
};


singleNumber([1])