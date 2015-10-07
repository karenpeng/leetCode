/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var list = []
    var result = []
    helper(0, list, result, k, n)
    return result
};

function helper(begin, list, result, k, target){
    if(list.length === k && target === 0){
        result.push(deepCopy(list))
        return
    }
    
    if(target <= 0) return
    
    for(var i = begin; i < 9; i++){
        list.push(i+1)
        helper(i + 1, list, result, k, target - (i+1))
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