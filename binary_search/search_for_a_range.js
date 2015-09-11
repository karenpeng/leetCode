/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var start = 0
  var end = nums.length-1
  var leftBound, rightBound
  
  //find left bounce
  while(start + 1 < end){
      var mid = Math.floor((start + end) / 2)
      if(nums[mid]=== target) end = mid
      else if(nums[mid] > target) end = mid
      else start = mid + 1
  }
  if(nums[start] === target) leftBound = start
  else if(nums[end] === target) leftBound = end
  else return [-1, -1]
  
  //find right bounce
 start = leftBound
 end = nums.length - 1
 
 while(start + 1 < end){
     var mid = Math.floor((start + end)/2)
     if(nums[mid] === target) start = mid
     else if (nums[mid] > target) end = mid - 1
     else start = mid
 }
 if(nums[end] === target) rightBound = end
 else if( nums[start] === target) rightBound = start
 
 return [leftBound, rightBound]
};