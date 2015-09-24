/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var i = a.length-1
    var j = b.length-1
    var carry = 0
    var output = ''
    while(i >= 0 && j >= 0){
        var s = (parseInt(a[i]) + parseInt(b[j]) + carry) % 2
        carry = Math.floor((parseInt(a[i]) + parseInt(b[j]) + carry) / 2)
        output = s + output
        i--
        j--
    }
    while(i >=0){
        var s = (parseInt(a[i]) + carry) % 2
        carry = Math.floor((parseInt(a[i]) + carry) / 2)
        output = s + output
        i--
    }
    
    while(j >=0){
        var s = (parseInt(b[j]) + carry) % 2
        carry = Math.floor((parseInt(b[j]) + carry) / 2)
        output = s + output
        j--
    }
    
    while(carry !== 0){
        var s = carry % 2
        carry = Math.floor(carry / 2)
        output = s + output
    }
    
    return output
};