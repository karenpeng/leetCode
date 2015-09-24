/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return []
    var result = []
    nums.sort(function(a, b){
        return a - b
    })
    for(var i = 0; i <nums.length -2; i++){
        if(i >0 && nums[i] === nums[i-1]) continue
        var l = i+1
        var r = nums.length-1
        while(l < r){
            var curSum = nums[l] + nums[r]
            var curTarget = - nums[i]
            if(curSum === curTarget){
                result.push([nums[i], nums[l], nums[r]])
                l++
                r--
                while(l < r && nums[l] === nums[l-1]) l ++
                while(r > l && nums[r] === nums[r+1]) r --
            }else if(curSum < curTarget) l++
            else r--
        }
    }
    return result
};