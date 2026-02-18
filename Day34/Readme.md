# 1st Approach
# Question - Find Words Containing

- words = ["leet", "code"], x="e"
- Output = [ 0,1 ]

# Problem Pattern

- Introduce a result varibale globally to push the indices
- Run the loop, use .includes(x), which scans the entire array
  and return either true or false
- Finally, push the current index to the result array, result.push(i)

# Complexity

1. Time Complexiy
- m - no. of words
- n - max length of each word
- O(n+m)

2. Space Compexity
- O(1) - we are not copying int

=============================================================================
# 2nd Approach
# Question - Find Words Containing

- words = ["leet", "code"], x="e"
- Output = [ 0,1 ]

# Problem Pattern

- Introduce a result varibale globally to push the indices

- The real confusion is how to further run a loop within a word, we can do that
  by storing the first word inside a another variable, let word = word[ i ]

- The inner loop checks wether x is there or not and pushes the (i) into result
  and immediately break out of the loop

# Complexity

1. Time Complexiy
- O(n) * O(n) = O(n^2) - Quadratic

2. Space Compexity
- It is not using in between the logic; therefore, it is O(1)
- O(1), O(m)
=============================================================================
# 3rd Approach
# Question - Find Words Containing

- words = ["leet", "code"], x="e"
- Output = [ 0,1 ]

# Problem Pattern

- Introduce a result varibale globally to push the indices

- Unlike, 2nd Approach, here we are going to use 2D array trick, words[i][j]
  which means go to the first word and go through each words of the first word

- The inner loops must only run for each word within in the array; therefore, j < words[ i ].length
  It iterates through the first word within in the array, depending the value of i
- The inner loop checks wether x is there or not using 2D trick words[i][j] and pushes the (i) into result
  and immediately break out of the loop

# Complexity

1. Time Complexiy
- m - no. of words
- n - max length of each word
- O(n+m)

2. Space Compexity
- It is not using in between the logic; therefore, it is O(1)
- O(1), O(m)