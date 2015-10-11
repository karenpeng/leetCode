/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var i = 0
    var j = 1
    var result = []
    while(i < nums.length){
        while(nums[i] === nums[i+j] - j && i + j < nums.length){
            j++
        }
        if(j > 1){
            result.push(nums[i] + '->' + nums[i+j-1])
        }
        else{
            result.push(nums[i] + '')
        }
        i = i + j
        j = 1
    }
    return result
};

summaryRanges([-1])