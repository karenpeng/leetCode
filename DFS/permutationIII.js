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
    nums.forEach(function(d, i){
        visited[i] = false
    })
    helper(list, result, nums, visited)
    return result
};

function helper(list, result, nums, visited){
    if(list.length === nums.length){
        result.push(deepCopy(list))
        return
    }
    for(var i = 0; i < nums.length; i++){
        if(visited[i]) continue
        list.push(nums[i])
        visited[i] = true
        helper(list, result, nums, visited)
        list.pop()
        visited[i] = false
        //below won't work
        // if(i > 1){
        //     while(nums[i-1] === nums[i]) i++
        // }
        //omg why is this so important?
        //注意是往前看
        if(i < nums.length - 1){
            while(nums[i] === nums[i+1]) i++
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