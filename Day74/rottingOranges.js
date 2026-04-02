/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length; // Fixed to ensure it gets column count correctly

    let queue = [];

    // 1. Initial Scan: Find all rotten oranges
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 2) {
                queue.push([row, col, 0]); // this third value is level
            }
        }
    }

    let maxMinutes = 0;

    // 2. BFS: Spread the rot
    while (queue.length) {
        let [row, col, level] = queue.shift();

        // UP: Decrease row
        if (row > 0 && grid[row - 1][col] === 1) {
            grid[row - 1][col] = 2;
            queue.push([row - 1, col, level + 1]);
        }

        // DOWN: Increase row
        if (row < rows - 1 && grid[row + 1][col] === 1) {
            grid[row + 1][col] = 2;
            queue.push([row + 1, col, level + 1]);
        }

        // LEFT: Decrease col
        if (col > 0 && grid[row][col - 1] === 1) {
            grid[row][col - 1] = 2;
            queue.push([row, col - 1, level + 1]);
        }

        // RIGHT: Increase col
        if (col < cols - 1 && grid[row][col + 1] === 1) {
            grid[row][col + 1] = 2;
            queue.push([row, col + 1, level + 1]);
        }

        maxMinutes = Math.max(level,maxMinutes);
    }

    // 3. Final Check: Any fresh left?
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                return -1;
            }
        }
    }

    return maxMinutes;
};
