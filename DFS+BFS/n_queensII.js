/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if(n === 0) return 0
    var list = []
    var result = []
    helper(list, result, n)
    return result.length
};

function helper(list, result, n){
    if(list.length === n){
        result.push(deepCopy(list))
        return
    }
    
    for(var i = 0; i < n; i++){
        if(!valid(list, i+1)) continue
        list.push(i + 1)
        helper(list, result, n)
        list.pop()
    }
}

function valid(list, k){
    for(var i = 0; i < list.length; i++){
        if( list[i] === k) return false
        if( list[i] - (i + 1) === k - (list.length + 1)) return false
        if( list[i] + (i + 1) === k + (list.length + 1)) return false
    }
    return true
}

function deepCopy(arr){
    var _arr = []
    arr.forEach(function(e){
        _arr.push(e)
    })
    return _arr
}