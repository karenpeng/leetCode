/**
 * @param {character[][]} grid
 * @return {number}
 */

//flood fill :D
var numIslands = function(grid) {
    if(grid.length === 0) return 0
    if(grid[0].length === 0) return 0
    var counter = 0
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                helper(i, j, grid)
                counter ++
            }
        }
    }
    return counter
};

function helper(row, column, grid){
    if(row === -1 || row === grid.length || column === -1 || column === grid[0].length) return
    
    //don't forget this if statement
    //only do something when it's one
    if(grid[row][column] === '1'){
        grid[row][column] = '0'
        helper(row + 1, column, grid)
        helper(row - 1, column, grid)
        helper(row, column + 1, grid)
        helper(row, column - 1, grid)
    }
}