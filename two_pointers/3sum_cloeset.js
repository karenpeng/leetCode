/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length < 3) return null
    nums.sort(function(a, b){
        return a - b
    })
    var endDiff = Infinity
    for(var i = 0; i < nums.length - 2; i++){
        var l = i + 1
        var r = nums.length - 1
        while(l < r){
            var sum = nums[i] + nums[l] + nums[r]
            diff = sum - target
            
            //be careful is abs!!!!
            if(Math.abs(diff) < Math.abs(endDiff)) endDiff = diff

            if(diff === 0) return target
            else if(diff > 0){
                r--
            }else{
                l++
            }
        }
    }
    return target + endDiff
};
threeSumClosest([1,1,1,0], 100)