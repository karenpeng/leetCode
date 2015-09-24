/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {}
    for(var i = 0; i < nums.length; i++){
      if(hash.hasOwnProperty(nums[i])) return [hash[nums[i]], i + 1]
      if(!hash.hasOwnProperty(target - nums[i])){
          hash[target - nums[i]] = i + 1
      }
    }
    return []
};