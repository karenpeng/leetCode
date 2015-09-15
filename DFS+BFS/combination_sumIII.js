/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var list = []
    var result = []
    helper(0, list, result, n, k)
    return result
};

function helper(begin, list, result, target, k){
    if(list.length === k && target === 0){
        result.push(deepCopy(list))
        return
    }
    for(var i = begin; i < 9; i++){
        list.push(i + 1)
        helper(i + 1, list, result, target - i - 1, k)
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