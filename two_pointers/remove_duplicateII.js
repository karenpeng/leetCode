/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1) return nums.length
    var i = 1
    var j = 2
    while(j < nums.length){
        //和 remove duplicateI的区别就是这个nums[i-1]!!!
        if(nums[i-1]===nums[j]){
            j++
        }else{
            nums[i+1] = nums[j]
            i++
            j++
        }
    }
    return i + 1
};