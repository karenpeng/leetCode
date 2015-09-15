/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var list = []
    var result = []
    helper(list, result, n)
    var output = []
    result.forEach(function(arr){
      output.push(binaryToDecimal(arr))  
    })
    return output
};

function helper(list, result, n){
    if(list.length === n){
        result.push(deepCopy(list))
        return
    }
    for(var i = 0; i <= 1; i++){
        list.push(i)
        helper(list, result, n)
        list.pop()
    }
}

function binaryToDecimal(arr){
    var output = 0
    for(var i = 0; i < arr.length; i++){
        output += (Math.pow(2, arr.length - i - 1) * arr[i])
    }
    return output
}

function deepCopy(arr){
    var _arr = []
    arr.forEach(function(e){
        _arr.push(e)
    })
    return _arr
}

console.log(grayCode(3))