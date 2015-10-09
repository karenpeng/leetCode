/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // f[i][j] word1's first i letters match word2's first j letters, min edit times
    // f[i][j] = word1[i] === word2[j] ? f[i-1][j-1] : min (f[i-1][j-1], f[i-1][j], f[i][j-1]) + 1
    // f[0][0]
    // f[i][0] i
    // f[0][j] j
    
    var f = []
    f[0] = []
    f[0][0] = 0
    for(var i = 1; i < word1.length + 1; i++){
        f[i] = []
        f[i][0] = i
    }
    for(var j = 1; j < word2.length + 1; j++){
        f[0][j] = j
    }
    
    for(var i = 1; i < word1.length + 1; i++){
        for(var j = 1; j < word2.length + 1; j++){
            //not zero index!!!
            if(word1[i-1] === word2[j-1]){
                f[i][j] = f[i-1][j-1]
            }else{
                f[i][j] = Math.min(f[i-1][j-1], f[i][j-1], f[i-1][j]) + 1
            }
        }
    }
    return f[word1.length][word2.length]
};