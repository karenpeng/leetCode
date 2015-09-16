//http://bangbingsyb.blogspot.com/2014/11/leetcode-generate-parentheses.html

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
        result.push(concatinate(list))
        return
    }
    
    if(l < n){
        list.push('(')
        helper(list, result, n, l+1, r)
        list.pop()
    }
    
    if(r < l){
        list.push(')')
        helper(list, result, n, l, r+1)
        list.pop()
    }
}

function concatinate(arr){
    var output = ''
    arr.forEach(function(e){
        output += e
    })
    return output
}