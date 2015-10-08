/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var start = 0
    var end = nums.length -1
    nums.sort(function(a, b){
        return a - b
    })
    while(start + 1 < end){
        var mid = Math.floor((start + end)/2)
        if(numOfLessThan(mid, nums) >= mid){
            end = mid -1
        }else{
            start = mid
        }
    }
    // console.log(nums[start], nums[end])
    if(numOfLessThan(end, nums) >= end) return nums[start]
    return nums[end]
    
};

function numOfLessThan(index, nums){
    var out = 0
    for(var i = 0; i < nums.length; i++){
        if(nums[i] < index) out ++
    }
    return out
}