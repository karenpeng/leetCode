/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums === null || nums.length === 0) return []
    var list = []
    var result = []
    var visited = []
    nums.forEach(function(x, index){
        visited[index] = false
    })
    helper(nums, list, result, visited)
    return result
};

function helper(nums, list, result, visited){
    if(list.length === nums.length){
        result.push(deepCopy(list))
        return
    }
    for(var i = 0; i < nums.length; i++){
        if(visited[i]) continue
        list.push(nums[i])
        visited[i] = true
        helper(nums, list, result, visited)
        list.pop()
        visited[i] = false
    }
}

function deepCopy(arr){
    var _arr = []
    arr.forEach(function(e){
        _arr.push(e)
    })
    return _arr
}