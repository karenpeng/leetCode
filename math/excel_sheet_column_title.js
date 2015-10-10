/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = ''
    while(n > 0){
        n = n - 1
        var c = n % 26
        result = String.fromCharCode(c + 65) + result
        n = Math.floor(n/26)
    }
    return result
};