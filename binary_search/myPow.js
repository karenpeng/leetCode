/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n >= 0) return helper(x, n)
    else return 1/helper(x, -n)
}

function helper(x, n){
    if(n === 0) return 1
    var v = helper(x, Math.floor(n/2))
    if(n % 2 === 0) return v * v
    else return v * v * x
}
