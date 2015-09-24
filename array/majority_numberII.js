/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length === 0) return []
    var candidate1, candidate2
    var count1 = 0
    var count2 = 0
    
    for(var i = 0; i < nums.length; i++){
        //add
        if(nums[i] === candidate1) count1 ++
        else if(nums[i] === candidate2) count2 ++

        //change candidate
        else if(count1 === 0){
            candidate1 = nums[i]
            count1 = 1
        }
        else if(count2 === 0){
            candidate2 = nums[i]
            count2 = 1
        }

        //decrease
        else{
            count1 --
            count2 --
        }
    }
    
    var output = []
    count1 = 0
    count2 = 0
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === candidate1) count1 ++
        if(nums[i] === candidate2) count2 ++
    }
    if(count1 > nums.length/3) output.push(candidate1)
    //去重
    if(count2 > nums.length/3 && candidate1 !== candidate2) output.push(candidate2)
    return output
};