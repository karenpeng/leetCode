/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var hash = {}
    while(true){
        var temp = 0
        while(n > 0){
           var c = n % 10
           temp += c * c
           n = Math.floor(n / 10)
        }
        if(temp === 1) return true
        if(hash.hasOwnProperty(temp)) return false
        
        n = temp
        hash[n] = true
    }
};