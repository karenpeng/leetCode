/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//http://bangbingsyb.blogspot.com/2014/11/leetcode-surrounded-regions.html?showComment=1444440363124
var solve = function(board) {
    fill(board, 'O', 'Y')
    //console.log(board)
    replace(board, 'O', 'X')
    //console.log(board)
    fill(board, 'Y', 'O')

    //console.log(board)
}

function dfs(board, i, j, before, after){
    if(i<0 || i>=board.length || j<0 || j>=board[0].length||board[i][j] !== before) return
    board[i][j] = after
    //string is immutable !!!!!
    //console.log(board[i][j], after)
    dfs(board, i - 1, j, before, after)
    dfs(board, i + 1, j, before, after)
    dfs(board, i, j - 1, before, after)
    dfs(board, i, j + 1, before, after)
}

function fill(board, before, after){
    var m = board.length
    var n = board[0].length
    for(var i=0; i<m; i++) {
        if(board[i][0] === before) dfs(board, i, 0, before, after);
        if(board[i][n-1] === before) dfs(board, i, n-1, before, after);
    }
    
    for(var j=1; j<n-1; j++) {
        if(board[0][j] === before) dfs(board, 0, j, before, after);
        if(board[m-1][j] === before) dfs(board, m-1, j, before, after);
    }
}

function replace(board, before, after){
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[0].length; j++){
            if(board[i][j] === before){
                board[i][j] = after
            }
        }
    }
}

//my first attempt
var solve = function(board) {
    if(board.length === 0) return
    for(var i = 0; i <board.length; i++){
        for(var j = 0; j <board[0].length; j++){
            if(board[i][j] === "O"){
                dfs(board, i, j)
            }
        }
    }
};

function dfs(board, i, j){
    if(board[i][j] !== "O"||i<1 || i>=board.length-1 || j<1 || j>=board[0].length-1) return
    board[i][j] = "X"
    dfs(board, i - 1, j)
    dfs(board, i + 1, j)
    dfs(board, i, j - 1)
    dfs(board, i, j + 1)
}


solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]])