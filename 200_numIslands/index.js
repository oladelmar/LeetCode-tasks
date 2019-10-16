function numIslands(grid) {
    let count = 0;
    const width = grid.length;
    if(width === 0) return count;
    const height = grid[0].length;

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            if (grid[row][col] === "1") {
                count++;
                sinkIsland(grid, row, col);
            }
        }
    }

    function sinkIsland(grid, row, col) {
        if (row < 0 || row >= width || col < 0 || col >= height || grid[row][col] === "0") {
            return;
        } 
        grid[row][col] = "0";

        sinkIsland(grid, row + 1, col);
        sinkIsland(grid, row, col + 1);
        sinkIsland(grid, row - 1, col);
        sinkIsland(grid, row, col - 1);
    }

    return count;
}

module.exports = numIslands;
