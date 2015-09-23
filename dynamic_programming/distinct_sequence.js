/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    if(s.length === 0) return 0
    if(t.length === 0) return 1
    
    //f[i][j] => s的前j个字符串能挑出多少种t的前i个字符串
    var f = []
    f[0] = []
    f[0][0] = 1
    for(var i = 1; i < t.length + 1; i++){
        f[i] = []
        f[i][0] = 0
    }
    for(var i = 1; i < s.length + 1; i++){
        f[0][i] = 1
    }
    
    for(var i = 1; i < t.length + 1; i++){
        for(var j = 1; j < s.length + 1; j++){
            if(t[i-1] === s[j-1]){
                 //t ----a
                 //s ---------a
                 
                           //不要s的a     //要s的a
                f[i][j] = f[i][j-1] + f[i-1][j-1]
            }else{
                 //t ----a
                 //s ---------b
                           //一定得不要s的b             
                f[i][j] = f[i][j-1]
            }
        }
    }
    
    return f[t.length][s.length]
};