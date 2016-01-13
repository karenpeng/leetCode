//Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

//For example, given the array [2,3,1,2,4,3] and s = 7,
//the subarray [4,3] has the minimal length under the problem constraint. 


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