/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   if(target < nums[0]) return 0
   var start = 0
   var end = nums.length-1
   
   while(start + 1 < end){
       var mid = Math.floor((start+end)/2)
       if(nums[mid] === target) return mid
       else if(nums[mid] > target) end = mid - 1
       else start = mid
   }
   
   if(nums[start] > target) return start -1
   if(nums[end] < target) return end + 1
   if(nums[start] < target && nums[end] >= target) return end
   if(nums[start] === target) return start
};