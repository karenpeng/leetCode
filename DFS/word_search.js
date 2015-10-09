/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var visited = []
    for(var i = 0; i < board.length; i++){
        visited[i] = []
        for(var j = 0; j < board[0].length; j++){
            //don't forget visited!!!
            visited[i][j] = false
        }
    }
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[0].length; j++){
            if(dfs(board, i, j, word, 0, visited)) return true
        }
    }
    return false
};

function dfs(board, i, j, word, index, visited){
    if(index === word.length) return true
    if(i<0||i>=board.length||j<0||j>=board[0].length) return false
    if(board[i][j] !== word[index]) return false
    if(visited[i][j]) return false
    
    visited[i][j] = true
    
    if(dfs(board, i+1, j, word, index+1, visited)) return true
    if(dfs(board, i-1, j, word, index+1, visited)) return true
    if(dfs(board, i, j+1, word, index+1, visited)) return true
    if(dfs(board, i, j-1, word, index+1, visited)) return true
    
    visited[i][j] = false
    
    return false
}