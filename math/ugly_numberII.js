/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var result = [1]
  var i2 = 0, i3 = 0, i5 = 0
  while(result.length < n){
      m2 = result[i2] * 2
      m3 = result[i3] * 3
      m5 = result[i5] * 5
      var mn = Math.min(m2, m3, m5)
      if(mn === m2) i2 ++
      if(mn === m3) i3 ++
      if(mn === m5) i5 ++
      result.push(mn)
  }
  return result[result.length-1]
};