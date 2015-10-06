/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if(n === 0) return 0
    var list = []
    var result = []
    helper(n, list, result)
    return result.length
};

function helper(n, list, result){
    if(list.length === n){
        result.push(deepCopy(list))
        return
    }
    for(var i = 0; i < n; i++){
        if(!valid(list, i)) continue
        list.push(i)
        helper(n, list, result)
        list.pop()
    }
}

function valid(list, index){
    for(var i = 0; i < list.length; i++){
        if(list[i] === index) return false
        if(list[i] - i === index - list.length) return false
        if(list[i] + i === index + list.length) return false
    }
    return true
}

function deepCopy(arr){
    var out = []
    arr.forEach(function(a){
      out.push(a)  
    })
    return out
}