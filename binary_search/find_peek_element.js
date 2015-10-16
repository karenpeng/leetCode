/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  var start = 0
  var end = nums.length -1
  while(start + 1 < end){
      var mid = Math.floor((start + end)/2)
      if(nums[mid -1] > nums[mid]) end = mid
      else if(nums[mid + 1] > nums[mid]) start = mid
      else return mid
  }
  return nums[start] > nums[end] ? start : end
};