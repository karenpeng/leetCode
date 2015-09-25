/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var sum = 0
    for(var i = 0; i < s.length; i++){
        sum += (s.charCodeAt(i)-64) * Math.pow(26, (s.length-1-i))
    }
    return sum
};