# Question - Split a String into Balanced String

- A balanced string is a string which has equal number of R and L
- In this Question, we have to return equal number of balanced String from a string. It's substring also have equal number of R and L
- We find out equal number of balanced string

# Problem Pattern 

1. Introduce three variables 'R', 'L' and count 
2. Use a single loop and multiple if conditions to keep the count of R and L
3. Once they are equal increase the count varibable & reset the value of R and L to 0
4. The main trick to solve this problem is resetting R and L back to 0, if they have 
   equal value. In this way, we can further check the values.

# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(1)

======================================================================================

# Question - Split a String into Balanced String

- Whenever you encounter balance question use the logic of ++ temp and --temp

- A balanced string is a string which has equal number of R and L
- In this Question, we have to return equal number of balanced String from a string. It's substring also have equal number of R and L
- We find out equal number of balanced string

# Problem Pattern 

- Hint
- If R is found increase temp and if L is found decrease temp, and check temp === 0
  and increase the count

1. Introduce three variables temp variable and count 
2. Use a single loop and multiple if conditions to keep increase the decrease temp 
   as both R and L are found
3. If they are able to cancel out each other and temp is zero; temp === 0, increase 
   the value of count
4. The main trick to solve this problem is that temp cancel out each other.

# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(1)