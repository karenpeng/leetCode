/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n === 0) return []
    var list = []
    var result = []
    helper(list, result, n, 0, 0)
    return result
};

function helper(list, result, n, l, r){
    if(l === n && r === n){
        result.push(deepCopy(list))
        return
    }
    
    if(l < n){
        list.push('(')
        helper(list, result, n, l+1, r)
        list.pop()
    }
    
    if(r < n){
        list.push(')')
        helper(list, result, n, l, r+1)
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

console.log(generateParenthesis(3))