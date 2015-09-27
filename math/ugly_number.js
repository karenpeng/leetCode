/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num === 1) return true
    while(num > 1){
        if(num % 2 === 0) num /= 2
        else if(num % 3 === 0) num /= 3
        else num /= 5
    }
    return num === 1
};