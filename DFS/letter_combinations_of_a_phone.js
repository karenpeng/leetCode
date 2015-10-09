/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    var dic = 
    [
      '',
      '',
      'abc',
      'def',
      'ghi',
      'jkl',
      'mno',
      'pqrs',
      'tuv',
      'wxyz'
    ]
    var list = []
    var result = []
    helper(0, list, result, digits, dic)
    return result
};

function helper(begin, list, result, digits, dic){
    if(list.length === digits.length){
        result.push(myConcat(list))
        return
    }
    //从零开始啊！！！
    for(var i = 0; i < dic[digits[begin]].length; i++){
        list.push(dic[digits[begin]][i])
        helper(begin + 1, list, result, digits, dic)
        list.pop()
    }
}

function myConcat(arr){
    var out = ''
    arr.forEach(function(e){
        out += e
    })
    return out
}