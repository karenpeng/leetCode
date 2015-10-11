/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {

    //don't forget this!!!
    if(s1.length + s2.length !== s3.length) return false
        
    var f = []
    f[0] = []
    f[0][0] = true
    for(var i = 1; i < s1.length + 1; i ++){
        f[i] = []
        f[i][0] = f[i-1][0] && s1[i-1] === s3[i-1]
    }
    for(var j = 1; j < s2.length + 1; j++){
        f[0][j] = f[0][j-1] && s2[j-1] === s3[j-1]
    }
    for(var i = 1; i < s1.length + 1; i++){
        for(var j = 1; j < s2.length + 1; j++){
            //这句值钱~
            f[i][j] = (f[i-1][j] && s1[i-1] === s3[i-1+j] )|| (f[i][j-1] && s2[j-1] === s3[i-1+j])
        }
    }
    return f[s1.length][s2.length]
};