/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    var count = 0
    var copy = x
    while(copy > 9){
        copy = Math.floor(copy/10)
        count ++
    }
    
    while(x > 0){
        var l = Math.floor(x / Math.pow(10, count))
        var r = x % 10
        if(l !== r) return false
        
        x %= Math.pow(10, count)
        x = Math.floor(x / 10)
        
        count -= 2
        
    }
    return true
    
};