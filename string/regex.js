console.log(test('annnts', 'annnts'))
console.log(test('annnts', 'a*ts'))
console.log(test('annnts', 'a*nts'))
console.log(test('annnts', 'an*nts'))
console.log(test('anbnnts', 'an*nts'))
console.log(test('anbnts', 'an*bnts'))
console.log(test('anbnts', 'an*nbnts'))
console.log(test('anbnts', 'an*bnts'))
console.log(test('anbnts', 'a*bnts'))

function test(s, r){
  var i = 0
  var j = 0
  while(i < s.length && j < r.length && s[i] === r[j] && r[j]!== '*'){
    i++
    j++
  } 
  if(i===s.length && j === r.length) {
    return true
  }else if (r[j] === '*'){
    return helper(s.substring(i, s.length), r.substring(j, r.length), s[i])
  }else{
    return false
  }
}

function helper(s, r, char){
  if(s === '') return false
  else return helper(s.substring(1, s.length), r, s[0]) || test(s, r.substring(1, r.length))
}
