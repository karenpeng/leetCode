/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1) return nums.length
    var i = 1
    var j = 2
    while(j < nums.length){
        if(nums[i-1] !== nums[j]){
            nums[++i] = nums[j]
        }
        j++
    }
    return ++i
};