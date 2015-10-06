/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var hash = {}
    while(true){
        var c = 0
        while(n > 0){
            c += Math.pow(n % 10, 2)
            n = Math.floor(n/10)
        }
        if(c === 1) return true
        if(hash.hasOwnProperty(c)) return false
        hash[c] = true
        n = c
    }
};