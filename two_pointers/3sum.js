/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return []
    nums.sort(function(a, b){
        return a - b
    })
    var result = []
    for(var i = 0; i < nums.length-2; i++){
        while(i>0 && nums[i] === nums[i-1]) i++
        var j = i+1
        var k = nums.length-1
        while(j<k){
            var sum = nums[i] + nums[j] + nums[k]
            if(sum === 0){
                result.push([nums[i], nums[j], nums[k]])
                k--
                j++
                while(nums[k+1]===nums[k])k--
                while(nums[j-1]===nums[j])j++
            }
            else if(sum >0){
                k--
            }else{
                j++
            }
        }
    }
    return result
};