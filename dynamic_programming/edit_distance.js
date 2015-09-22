/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if(word1.length === 0) return word2.length
    if(word2.length === 0) return word1.length
    
    var long = word1.length > word2.length ? word1 : word2
    var short = word1.length > word2.length ? word2 : word1
    var f = []
    f[0] = []
    f[0][0] = 0

    //f[i][j] => long的前i个字符串配上short的前j个字符串的最少编辑次数
    
    for(var i = 1; i < long.length +1; i++) f[0][i] = i
    for(var i = 1; i < short.length +1; i++) {
        f[i] = []
        f[i][0] = i
    }
    
    for(var i = 1; i < short.length + 1; i++){
        for(var j = 1; j < long.length + 1; j++){
            if(short[i-1] === long[j-1]){
                f[i][j] = Math.min(f[i-1][j-1], f[i-1][j]+1, f[i][j-1]+1)
            }else{
                f[i][j] = Math.min(f[i-1][j-1], f[i-1][j], f[i][j-1]) + 1
            }
            
        }
    }
    
    return f[short.length][long.length]
};