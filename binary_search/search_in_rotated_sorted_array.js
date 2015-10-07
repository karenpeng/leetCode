/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0) return -1
    var start = 0
    var end = nums.length -1
    while(start + 1 < end){
        var mid = Math.floor((start + end)/2)
        if(nums[mid] === target) return mid
        if(nums[mid] > nums[end]){
            //sorted-unsorted
            if(target < nums[mid] && target >= nums[start]){
                end = mid - 1
            }else{
                start = mid + 1
            }
        }else{
            if(target <= nums[end] && target >nums[mid]){
                start = mid + 1
            }else{
                end = mid - 1
            }
        }
    }
    if(nums[start] === target) return start
    if(nums[end] === target) return end
    return -1
};