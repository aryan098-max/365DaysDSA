# Question - Rotting Oranges: Leet Code 994

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.


Example 1:

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.


# Approach 

1. It is a 2D array question and we have to BFS algorithm
2. You have to first traverse the entire 2D array and push all the row and col which are rotten
3. Next, you have to shift the queue and make all the adjacent sides rotten
4. Finally, find maxMinutes by assigning the level to the maxMinutes, which you increase each time
   you go to the next level to damage each orange
5. Once, again at last check if any of the position still has unrotten oranges if yes, return -1


# Pattern

1. Introduce 2 variables, row and col and assing the length of the row and col to the variables

    For example, 

        let row = grid.length (so, it returns the length of the 2D array)
        let col = grid[0].length (the length of the each 1D array in 2D array)

2. Introduce, let queue = [], and let maxMinutes = 0;

3. Now, travesere the entire 2D array and search for the position which has the rotten oranges

    For example, 

            for(let i=0; i<row; i++){
                for(let j=0; j<col; j++){
                    if(grid[row][col] === 2){
                        queue.push([row,col,0]) // this third value is level
                    }
                }
            }

4. Now, after noting down all the poisitons, which as rotten oranges make their 4 directions rotten on each 
   minute count. Start shifting the elements from the start of the queue.

   For example, 
    
        while(queue.length){
            // FIFO of the queue
            let [row, col, level] = queue.shift();

            // Now, check for all directions and make it rotten and push that position (row, col) into the stack
            // for all 4 direction
        }

5. Update the maxMinutes inside the while loop on each level, maxMinutes = Math.max(level, maxMinutes);

6. Now, again traverse the entire 2D array and search for the unrotten oranges if so return -1


# Complexity

1. Time Complexity
- O(m*n)

2. Space Complexity
- O(m*n)