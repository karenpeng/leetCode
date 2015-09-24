/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1
    var output = []
    for(var i = digits.length -1; i>=0; i--){
        var s = (digits[i] + carry) % 10
        carry = Math.floor((digits[i] + carry) / 10)
        output = [s].concat(output)
    }
    while(carry !== 0){
        var s = carry % 10
        carry = Math.floor(carry / 10)
        output = [s].concat(output)
    }
    return output
};