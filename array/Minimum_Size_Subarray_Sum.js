/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums.length === 0) return 0
    var i = 0
    var tmp = []
    var l = Infinity
    var sum = 0
    while(i < nums.length){
        while(i < nums.length && sum < s){
            sum += nums[i]
            tmp.push(i)
            i++
        }
        while(tmp.length > 0 && sum >= s){
            l = Math.min(l, tmp.length)
            var index = tmp.shift()
            sum -= nums[index]
        }
    }
    return l === Infinity ? 0 : l
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums.length === 0) return 0
    var start = 0
    var end = 0
    var l = Infinity
    var sum = 0
    while(end < nums.length){
        while(end < nums.length && sum < s){
            sum += nums[end]
            end++
        }
        while(sum >= s){
            l = Math.min(l, end - start)
            sum -= nums[start]
            start++
        }
    }
    return l === Infinity ? 0 : l
};
