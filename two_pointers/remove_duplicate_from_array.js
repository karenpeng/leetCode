/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0
    var i = 0
    var j = 0
    while(j < nums.length){
        if(nums[j] === nums[i]){
            j++
        }else{
            nums[++i] = nums[j]
        }
    }
    return i+1
};