/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0) return true
    var stack = []
    
    for(var i = s.length - 1; i >= 0; i--){
        if(s[i] === '(' && stack[stack.length-1] === ')') stack.pop()
        else if(s[i] === '[' && stack[stack.length-1] === ']') stack.pop()
        else if(s[i] === '{' && stack[stack.length-1] === '}') stack.pop()
        else stack.push(s[i])
    }
    
    return stack.length === 0
};