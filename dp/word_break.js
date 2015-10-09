/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    var f = []
    f[0] = true
    for(var i = 1; i < s.length + 1; i++){
        f[i] = false
    }
    
    for(var i = 1; i < s.length + 1; i++){
        //注意j是从0开始的！！！
        for(var j = 0; j < i; j++){
            if(f[j] && wordDict.has(s.substring(i, j))) f[i] = true
        }
    }
    
    return f[s.length]
};