/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = 0
    var candidate;
    for(var i = 0; i < nums.length; i++){
        //add
        if(nums[i] === candidate){
            count ++
        }
        //change
        else if(count === 0){
            candidate = nums[i]
            count = 1
        }
        //minus
        else{
            count --
        }
    }
    return candidate
};