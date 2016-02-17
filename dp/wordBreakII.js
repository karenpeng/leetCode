/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    var f = []
    var result = []
    for(var i = 0; i < s.length; i++){
        f[i] = true
    }
    helper(s, wordDict, 0, [], result, f)
    return result
};

function helper(s, wordDict, begin, list, result, f){
    if(begin === s.length){
        result.push(list.join(' '))
    }
    for(var i = begin; i < s.length; i++){
        if(!f[begin]) continue
        var prefix = s.substring(begin, i + 1)
        if(!wordDict.has(prefix)) continue
        list.push(prefix)
        var cache = result.length
        helper(s, wordDict, i + 1, list, result, f)
        if(result.length === cache) f[i + 1] = false
        list.pop()
    }
}
