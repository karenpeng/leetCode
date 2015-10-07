/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1
    var i = digits.length-1
    var result = []
    while(i >= 0){
        var c = (carry + digits[i]) % 10
        result.push(c)
        carry = Math.floor((carry + digits[i]) / 10)
        i--
    }
    if(carry !== 0) result.push(carry)
    return result.reverse()
};