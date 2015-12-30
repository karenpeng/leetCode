/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length === 0) return 0
  var max = 1
  var hash = {}
  var i = 0, j = 0;
  var len = s.length
  
  while(len - 1 - i >= max){    
    if(!hash.hasOwnProperty(s[j]) || hash[s[j]] < i){
       hash[s[j]] = j
       max = Math.max(max, j - i + 1)
    }
    else{
      i = hash[s[j]] + 1
      hash[s[j]] = j
      max = Math.max(max, j - i + 1)
    }
    j++  
  }
  return max
};