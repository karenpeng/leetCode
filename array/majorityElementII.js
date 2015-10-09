/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var candidate1
    var candidate2
    var count1 = 0
    var count2 = 0
    for(var i = 0; i < nums.length; i++){
        if(candidate1 === nums[i]) count1 ++
        else if(candidate2 === nums[i]) count2++
        else if(count1 === 0) {
            candidate1 = nums[i]
            count1 = 1
        }
        else if(count2 === 0) {
            candidate2 = nums[i]
            count2 = 1
        }
        else{
            count1 --
            count2 --
        }
    }
    
    count1 = 0
    count2 = 0
    for(var i = 0; i < nums.length; i++){
        if(candidate1 === nums[i]) count1++
        if(candidate2 === nums[i]) count2++
    }
    
    var result = []
    if(count1 > nums.length/3) result.push(candidate1)
    if(count2 > nums.length/3 && candidate2 !== candidate1) result.push(candidate2)
    return result
};