/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if(s.length === 0) return []
    var list = []
    var result = []
    helper(0, list, result, s)
    return result
};

function helper(begin, list, result, s){
    if(begin >= s.length) {
        result.push(deepCopy(list))
        return
    }
    for(var i = begin; i < s.length; i++){
        var prefix = s.substring(begin, i + 1)
        if(!isPalindrome(prefix)) continue
        list.push(prefix)
        helper(i + 1, list, result, s)
        list.pop()
    }
}

function isPalindrome(s){
    var i = 0
    var j = s.length -1
    while(i < j){
        if(s[i] !== s[j]) return false
        i ++
        j --
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

