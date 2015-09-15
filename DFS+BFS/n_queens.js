/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
   if(n === 0) return 0
    var list = []
    var result = []
    helper(list, result, n)
    var output = []
    result.forEach(function(arr){
        output.push(draw(arr))
    })
    return output
};

function helper(list, result, n){
    if(list.length === n){
        result.push(deepCopy(list))
        return
    }
    
    for(var i = 0; i < n; i++){
        if(!valid(list, i+1)) continue
        list.push(i + 1)
        helper(list, result, n)
        list.pop()
    }
}

function valid(list, k){
    for(var i = 0; i < list.length; i++){
        if( list[i] === k) return false
        if( list[i] - (i + 1) === k - (list.length + 1)) return false
        if( list[i] + (i + 1) === k + (list.length + 1)) return false
    }
    return true
}

function draw(arr){
    var output = []
    arr.forEach(function(num){
        output.push(numToStr(num, arr.length))
    })
    return output
}

function numToStr(num, length){
    var output = ''
    for(var i = 0; i < length; i++){
        if(i === num -1){
            output += 'Q'
        }else{
            output += '.'
        }
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

