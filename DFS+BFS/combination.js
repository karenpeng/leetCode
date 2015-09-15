/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n === 0) return []
    var list = []
    var result = []
    helper(0, list, result, n, k)
    return result
};

function helper(begin, list, result, n, total){
    if(list.length === total){
        result.push(deepCopy(list))
        return
    }
    for(var i = begin; i < n; i++){
        list.push(i + 1)
        helper(i + 1, list, result, n, total)
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