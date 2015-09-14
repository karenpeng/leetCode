//http://bangbingsyb.blogspot.com/2014/11/leetcode-unique-binary-search-trees-i-ii.html

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    //f(n) = f(0) * f(n) + f(1) * f(n-1) + ... + f(n-1) * f(0)
    var f = []
    f[0] = 1
    
    //outer loop fulfills f[1] to f[n]
    for(var i = 1; i <= n; i++){
        //inner loop fulfills each f[i]
        for(var j = 0; j < i; j++){
            if(f[i] === undefined) f[i] = 0
            f[i] += f[i-1-j] * f[j]
        }
    }
    return f[n]
};