/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
    var comPrefix = ''
    for(var i = 0; i < strs[0].length; i++){
        for(var j = 1; j < strs.length; j++){
            if(i >= strs[j].length || strs[j][i] !== strs[0][i])
            return comPrefix
        }
        comPrefix += strs[0][i]
    }
    return comPrefix
    
};