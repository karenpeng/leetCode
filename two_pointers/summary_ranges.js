/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length === 0 ) return []
    var i = 0
    var j = 1
    var temp = []
    
    while(i < nums.length){
        while(i+j < nums.length && nums[i+j] - nums[i] === j) {
            j++
        }
        if(j>1) temp.push(nums[i] + '->' + nums[i+j-1])
        else temp.push(nums[i] + '')
        i = i + j
        j = 1
    }
    return temp
};