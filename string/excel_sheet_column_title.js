/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var output = ''
    while(n > 0){
        n = n - 1
        var c = n % 26
        n = Math.floor(n / 26)
        output = String.fromCharCode(c + 65) + output
    }
    
    return output
};