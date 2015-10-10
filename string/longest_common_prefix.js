/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
    var prefix = ''
    for(var i = 0; i < strs[0].length; i++){
        for(var j = 1; j < strs.length; j++){
            if(strs[0][i] !== strs[j][i] || i >= strs[j].length) return prefix
        }
        prefix += strs[0][i]
    }
    return prefix
};