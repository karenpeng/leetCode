/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums.length === 0) return []
    nums.sort(function(a, b){
        return a - b
    })
    var list = []
    var result = []
    var visited = []
    // nums.forEach(function(x, index){
    //     visited[index] = false
    // })
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