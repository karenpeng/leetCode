/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1) return nums.length
    var i = 0
    var j = 0
    var count = 0
    while(j < nums.length){
        if(nums[i] === nums[j]){
            count++
            if(count <= 2){
                i++
            }
        }else if(nums[i] !== nums[j] && count > 1){
            nums[++i] = nums[j]
            count = 0
        }
        j++
    }
};