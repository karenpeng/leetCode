/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 0 || n === 1) return 1
    var pre1 = 1
    var pre2 = 1
    for(var i = 2; i <= n; i++){
        var cur = pre1 + pre2
        pre1 = pre2
        pre2 = cur
    }
    return cur
};