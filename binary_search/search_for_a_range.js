/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var start = 0
    var end = nums.length - 1
    //search for left bounce
    while(start + 1 < end){
        var mid = Math.floor((start + end)/2)
        if(nums[mid] === target) end = mid
        else if(nums[mid] > target) end = mid - 1
        else start = mid
    }
    var leftBounce = -1
    if(nums[start] === target ) leftBounce = start
    else if(nums[end] === target) leftBounce = end
    else return [-1, -1]
    
    //search for right bounce
    start = 0
    end = nums.length - 1
    while(start + 1 < end){
        mid = Math.floor((start + end) / 2)
        if(nums[mid] === target) start = mid
        else if(nums[mid] > target) end = mid
        else start = mid + 1
    }
    var rightBounce = -1
    
    if(nums[end] === target) rightBounce = end
    else if(nums[start] === target) rightBounce = start
    
    return [leftBounce, rightBounce]
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0) return [-1, -1]
    return helper(0, nums.length-1, nums, target)
};

function helper(_start, _end, arr, target){
  var start = _start
  var end = _end
  var leftBound, rightBound
  //search for left bound
  //first element that is equal to target
  while(start + 1 < end){
    var mid = Math.floor((start + end) / 2)
    if(target === arr[mid]){
      end = mid
    }else if(target > arr[mid]){
      start = mid
    }else{
      end = mid - 1
    }
  }
  console.log(start, end)
  if(target === arr[start]) leftBound = start
  else if(target === arr[end])leftBound = end
  else return [-1, -1]

  //search for right bound
  //last element that is equal to target
  start = leftBound
  end = _end
  while(start + 1 < end){
    mid = Math.floor((start + end) / 2)
    if(target === arr[mid]){
      start = mid
    }else if(target < arr[mid]){
      end = mid
    }else{
      start = mid + 1
    }
  }
  if(target === arr[end]) rightBound = end
  else if(target === arr[start]) rightBound = start
  
  return [leftBound, rightBound]
}