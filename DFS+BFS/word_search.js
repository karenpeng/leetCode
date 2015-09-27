/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(board.length == 0 || board[0].length === 0) return 0
    var visited = []
    for(var i =0; i < board.length; i++){
        for(var j = 0; j < board[0].length; j++){
            if(visited[i] === undefined) visited[i] = []
            visited[i][j] = false
        }
    } 
    for(var i =0; i < board.length; i++){
        for(var j = 0; j < board[0].length; j++){
            if (helper(i, j, board, word, 0, visited)) return true
        }
    }
    return false
};

function helper(row, column, board, word, index, visited){
    if(index === word.length) return true
    
    if(row === -1 || row === board.length || column === -1 || column === board[0].length) return false
    if(visited[row][column]) return false
    if(board[row][column] !== word[index]) return false
    
    visited[row][column] = true
    if(helper(row+1, column, board, word, index+1, visited)) return true
    if(helper(row-1, column, board, word, index+1, visited)) return true
    if(helper(row, column+1, board, word, index+1, visited)) return true
    if(helper(row, column-1, board, word, index+1, visited)) return true
    
    visited[row][column] = false
    return false
}