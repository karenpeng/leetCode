/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    var dic = [
       ' ',
       ' ',
       'abc',
       'edf',
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

function helper(begin, list, result, s, dic){
    
  if(list.length === s.length){
      result.push(arrToStr(list))
      return
  }
    
  for(var j = 0; j < dic[s[begin]].length; j++){
      list.push(dic[s[begin]][j])
      helper(begin + 1, list, result, s, dic)
      list.pop()
  }
   
}

function arrToStr(arr){
    var output = ''
    arr.forEach(function(s){
        output += s
    })
    return output
}