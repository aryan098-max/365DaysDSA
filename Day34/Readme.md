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
- O()

2. Space Compexity
- O(n) - Extra array to store indices

=============================================================================
# 2nd Approach
# Question - Find Words Containing

- words = ["leet", "code"], x="e"
- Output = [ 0,1 ]

# Problem Pattern

- Introduce a result varibale globally to push the indices

- The real confusion is how to further run a loop within a word, we can do that
  by storing the first word inside a another variable, let word = word[i]

- The inner loop checks wether x is there or not and pushes the (i) into result
  and immediately break out of the loop

# Complexity

1. Time Complexiy
- O(n) * O(n) = O(n^2) - Quadratic

2. Space Compexity
- O(n) - Extra array to store indices