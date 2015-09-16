/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var hash = {}
    for(var i = 0; i < nums.length; i++){
        if(hash[nums[i]] === undefined) hash[nums[i]] = i
        else if(Math.abs(hash[nums[i]] - i) <= k) return true
        else hash[nums[i]] = i
    }
    return false
};