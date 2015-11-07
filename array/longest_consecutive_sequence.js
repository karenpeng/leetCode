/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    nums.sort(function(a, b){
        return a - b
    })
    var inCrease = 1
    var deCrease = 1
    var max = 1
    for(var i = 1; i< nums.length; i++){
        if(nums[i-1] === nums[i] + 1){
            inCrease ++
            deCrease = 1
            max = Math.max(max, inCrease)
        }else if(nums[i-1] === nums[i] - 1) {
            deCrease ++
            inCrease = 1
            max = Math.max(max, deCrease)
        }else if(nums[i-1] !== nums[i]){
            //remember to reset it
            inCrease = 1
            deCrease = 1
        }
    }
    return max
};