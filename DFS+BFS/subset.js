/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums === null || nums.length === 0) return []
    nums.sort(function(a, b){
        return a - b
    })
    var result = []
    var list = []
    helper(0, list, result, nums)
    return result
};

function helper(begin, list, result, nums){
    result.push(deepCopy(list))
    
    for(var i = begin; i < nums.length; i++){
        list.push(nums[i])
        helper(i + 1, list, result, nums)
        list.pop()
    }
}

function deepCopy(arr){
    var _arr = []
    arr.forEach(function(e){
        _arr.push(e)
    })
    return _arr
}