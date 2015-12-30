/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var tmp = []
    for(var i = 0; i < board.length; i++){
        tmp[i] = []
        for(var j = 0; j < board[0].length; j++){
            tmp[i][j] = 0
            var nbs = countNbs(board, i, j)
            if(board[i][j] === 1){
                if(nbs === 2 || nbs === 3) tmp[i][j] = 1
            }else{
                if(nbs === 3) tmp[i][j] = 1
            }
        }
        board = tmp
        console.log(board)
    } 
};

function countNbs(board, x, y){
    return (cellAt(x-1, y-1, board) +
            cellAt(x-1, y, board) +
            cellAt(x-1, y+1, board) +
            cellAt(x, y-1, board) +
            cellAt(x, y+1, board) +
            cellAt(x+1, y-1, board) +
            cellAt(x+1, y, board) +
            cellAt(x+1, y+1, board) )
}

function cellAt(x, y, board){
    if(board[x] === undefined || board[x][y] === undefined) return 0
    return board[x][y]
}

gameOfLife([[1]])