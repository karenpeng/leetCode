/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
   if(n === 0) return 1
   else if(n < 0){
       return 1/myPow(x, -n)
   }else{
       var v = myPow(x, Math.floor(n/2))
       if(n % 2 !== 0) return v * v * x
       return v * v
   }
};