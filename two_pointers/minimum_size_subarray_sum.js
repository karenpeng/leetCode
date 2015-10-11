/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var i = 0
    var j = 0
    var sum = 0
    var result = Infinity
    while(j < nums.length){
        
        while(sum < s && j < nums.length){
            sum += nums[j]
            j++
        }
        
        while(sum >= s){
            result = Math.min(result, j - i)
            sum -= nums[i]
            i++
        }
    }
    return result === Infinity? 0 : result
};