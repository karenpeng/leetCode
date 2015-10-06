/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length === 0) return 0
    
    var start = 0
    var end = nums.length -1
    
    while(start + 1 < end){
        var mid = Math.floor((start + end)/2)
        if(nums[mid] === target) return mid
        else if(nums[mid] > target) end = mid - 1
        else start = mid
    }
    
    if(target <= nums[start]) return start
    else if(target > nums[end]) return end + 1
    else if(target > nums[start]) return start + 1
    else return end
};