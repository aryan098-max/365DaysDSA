# Question - Guess Number Higher or Lower: Leet Code 374

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked (the number I picked stays the same throughout the game).

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

 

Example 1:

Input: n = 10, pick = 6
Output: 6


# Pattern

1. The problem is solved using Binary Search Alogrithm

2. We have to first run the loop: while(let <= right) and we have to find the middle

3. After finding the middle we have to pass this to a given api - guessNumber(middle)

4. It returns 0, 1, -1 based on the described condition in the problem statement

5. It will follow the same pattern as binary search alog moving left and right on the 
   basis of reposnse returned by the guessNumber() api (function)



# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(1)