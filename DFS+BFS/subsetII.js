/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if(nums === null || nums.length === 0) return []
    nums.sort(function(a, b){
        return a - b
    })
    var list = []
    var result = []
    helper(0, list, result, nums)
    return result
};

function helper(begin, list, result, nums){
    result.push(deepCopy(list))
    
    for(var i = begin; i < nums.length; i++){
        list.push(nums[i])
        helper(i + 1, list, result, nums)
        list.pop()
        if(i < nums.length -1){
            while(nums[i+1] === nums[i]) i++
        }
    }
}

function deepCopy(arr){
    var _arr = []
    arr.forEach(function(e){
        _arr.push(e)
    })
    return _arr
}