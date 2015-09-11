/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start = 0
    var end = nums.length -1
    while(start + 1 < end){
        var mid = Math.floor((start + end)/2)
        if(target === nums[mid]) return mid
        if(nums[mid] > nums[end]){
            //sorted - unsorted
            if(target >= nums[start] && target < nums[mid]){
                end = mid - 1
            }else{
                start = mid + 1
            }
        }else{
            //unsorted - sorted
            if(target > nums[mid] && target <= nums[end]){
                start = mid + 1
            }else{
                end = mid - 1
            }
        }
    }
    if(target === nums[start]) return start
    if(target === nums[end]) return end
    return -1
};