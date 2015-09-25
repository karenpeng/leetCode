/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length < 4) return []
    nums.sort(function(a, b){
        return a - b
    })
    var result = []
    for(var i = 0; i < nums.length-3; i++){
        while(i>0 && nums[i] === nums[i-1])i++
        
        for(var j = i+1; j < nums.length -2; j++){
            while(j>i+1 && nums[j] === nums[j-1])j++    
            
            var l = j+1
            var r = nums.length-1
            
            while(l < r){
                var sum = nums[i] + nums[j] + nums[l] + nums[r]
                if(sum === target) {
                    result.push([nums[i], nums[j], nums[l], nums[r]])
                     
                    l++
                    while(l<r && nums[l] === nums[l-1]) l++
                    
                    r--
                    while(l<r && nums[r] === nums[r+1]) r--
                }else if(sum > target){
                    r--
                }else{
                    l++
                }
            }
            
        }
    }
    
    return result
}