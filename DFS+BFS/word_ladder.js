/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordDict) {
    var hash = {}
    var queue = []
    var count = 1
    queue.push(beginWord)

    //dont forget to put it into the hash
    hash[beginWord] = true

    
    while(queue.length > 0){
        var size = queue.length
        for(var i = 0; i < size; i++){
            var word = queue.shift()
            for(var j = 0; j < word.length; j++){
                for(var k = 97; k <= 122; k++){
                    if(String.fromCharCode(k) === word[j]) continue
                    var newWord = replace(word, j, String.fromCharCode(k))
                    //console.log(newWord)
                    if(newWord === endWord) {
                       count ++
                       return count
                    }
                    if(hash[newWord] === undefined && wordDict.has(newWord)){
                        hash[newWord] = true
                        queue.push(newWord)
                    }
                }
            }
        }
        count ++
    }
    return 0
};

function replace(word, i, char){
    return word.substring(0, i) + char + word.substring(i+1, word.length)
}

console.log(ladderLength("hit", "cog", new Set(["hot","cog","dot","dog","hit","lot","log"])))