/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length < 3) return []
    nums.sort(function(a, b){
        return a - b
    })
    var result = 0
    var gap = Infinity
     
    for(var i = 0; i < nums.length-2; i++){
        var l = i+1
        var r = nums.length-1
        while(l < r){
            var curSum = nums[l] + nums[r]
            var tarSum = target - nums[i]
            if(curSum === tarSum){
                return target
            }else if(curSum > tarSum){
                if((curSum - tarSum) < gap) {
                    result = curSum + nums[i]
                    gap = (curSum - tarSum)
                }
                r--
            }else{
                if((tarSum - curSum) < gap){
                    result = curSum + nums[i]
                    gap = tarSum - curSum
                }
                l++
            }
        }
    }
    return result
};