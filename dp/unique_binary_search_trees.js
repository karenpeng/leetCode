/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    //f(n) = f(n)*f(0) + f(n-1)*f(1) + ... + f(0)*f(n-1)
    var f = []
    f[0] = 1
    for(var i = 1; i <= n; i++){
        for(var j = 0; j < i; j++){
            if(f[i] === undefined) f[i] = 0
            f[i] += f[j] * f[i - 1 - j]
        }
    }
    return f[n]
};