/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var size = nums.length
    var output = []
    for(var i =0; i < size; i++){
        output[i] = 1
    }
    var left = 1, right = 1
    for(var i = 0; i < size - 1; i++){
        left *= nums[i]
        console.log(left)
        output[i+1] *= left
    }
    console.log(output)
    for(var i = size -1; i >= 1; i--){
        right *= nums[i]
        console.log(right)
        output[i-1] *= right
    }
    console.log(output)
    return output
};

productExceptSelf([1,2,3,4])