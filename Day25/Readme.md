# Question PowerOfTwo

- Input - 32
- Output - boolean (true)

# Problem Pattern

- Two base cases:
    1. One for success: if(n === 1) ture
    2. One for failure: if(n < 1 || (n%2 !== 0) return false

- Keep dividing the n until the base case 1 reaches 
- False is returned if - n is less than zero and it is odd
- Never forget to add return to the recursive call

# Complexity

# Time Complexity
- O(n) - Linear

# Space Complexity
- O(n) - Linear