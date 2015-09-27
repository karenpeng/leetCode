/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
//
//leetcode won't allow this (time limit exceed T_T)
//
var getPermutation = function(n, k) {
    if(k===0) return ''
    var haha = factorial(n)
    k = k > haha ? k % haha : k
    var list = []
    var result = []
    var visited = []
    helper(list, result, n, k, visited)
    //console.log(result)
    return result[k-1].join('')
};

function factorial(n){
    var pre = 1
    for(var i = 2; i <= n; i++){
        var cur = i * pre
        pre = cur
    }
    return pre
}

function helper(list, result, n, k, visited){
    if(list.length === n){
        result.push(deepCopy(list))
        return
    }
    for(var i = 0; i < n; i++){
        if(visited[i] === true) continue
        if(result.length > k) return
        list.push(i+1)
        visited[i] = true
        helper(list, result, n, k, visited)
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

console.log(getPermutation(9, 171669))