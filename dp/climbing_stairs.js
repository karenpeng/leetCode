/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   if(n === 0 || n === 1) return n
   var pre0 = 1
   var pre1 = 1
   for(var i = 2; i <= n; i++){
       var cur = pre0 + pre1
       pre0 = pre1
       pre1 = cur
   }
   return pre1
};