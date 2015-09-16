/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash = {}
    for(var i = 0; i < nums.length; i++){
        if(hash[nums[i]] === undefined) hash[nums[i]]=0
        else return true
    }
    return false
};