/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var min = Infinity
  nums.forEach(function(e){
      min = Math.min(min, e)
  })
  return min
};