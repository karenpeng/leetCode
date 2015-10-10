/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    var f = []
    f[0] = []
    f[0][0] = 1
    for(var i = 1; i < s.length + 1; i++){
        f[i] = []
        f[i][0] = 1
    }
    for(var j = 1; j < t.length + 1; j++){
        f[0][j] = 0
    }
    
    for(var i = 1; i < s.length + 1; i++){
        for(var j = 1; j < t.length + 1; j++){
            if(s[i-1] === t[j-1]){
                          //use it      //don't use it
                f[i][j] = f[i-1][j-1] + f[i-1][j]
            }else{       //can't use it anyway
                f[i][j] = f[i-1][j]
            }
        }
    }
    return f[s.length][t.length]   
};