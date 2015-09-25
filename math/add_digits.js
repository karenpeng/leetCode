/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    while(num > 9){
        var c = 0
        while(num > 0){
            c += num % 10
            num = Math.floor(num/10)
        }
        num = c
    }
    return num
};