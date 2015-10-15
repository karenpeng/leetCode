/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(beginWord.length === 0 || endWord.length === 0 || wordList.size === 0) return 0
    var hash = {}
    var queue = []
    //begins from 1
    var level = 1
    queue.push(beginWord)
    hash[beginWord] = true
    
    while(queue.length > 0){
        var size = queue.length
        level ++
        for(var k = 0; k < size; k++){
            var w = queue.shift()

            for(var i = 0; i < w.length; i++){
                for(var j = 97; j <= 122; j++){

                    var myChar = String.fromCharCode(j)
                    if( myChar === w[i]) continue
                    var newWord = makeWord(w, i, char)
                
                    if(newWord === endWord) return level
                    if(!hash.hasOwnProperty(newWord) && wordList.has(newWord)){
                        hash[newWord] = true
                        queue.push(newWord)
                    }
                }
            }
        }
    }
    return 0
};

function makeWord(w, i, myChar){
    return w.substring(0, i) + myChar + w.substring(i+1, w.length)
}