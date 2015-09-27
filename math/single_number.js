/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var haha = 0
    nums.forEach(function(n){
        haha ^= n
    })
    return haha
};