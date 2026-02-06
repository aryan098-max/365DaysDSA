# Sum of n array using recursion

- input =  [5,3,0,2,1 ]
- output = 11

# Problem Pattern
- Here, solving the pattern from arr[ 0 ] to arr[ n-1 ]
- Recursively calling from front to last
- i>=arr.length is the base case
- When i reaches to 5, the base case is reached

# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(n)

===================================================

# Sum of n array using recursion

- input =  [5,3,0,2,1 ]
- output = 11

# Problem Pattern
- Here, solving the pattern from arr[ n-1 ] to arr[ 0 ]
- arr[ 0 ] is the base case
- when it reaches to arr[ 0 ], the base case is reached

# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(n)

===================================================

# Odd Sum Array

- input = [ 5,4,3,2,1 ]
- output = 9

# Problem Pattern
- Adding a base case inside the isOdd condition for - first element 
  first element can either be odd or even
- arr[ 0 ] is the base case
- when it reaches to arr[ 0 ], the base case is reached
- if arr [ 0 ] is odd arr[ n ] is returned or 0 is returned

# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(n)

