# Approach 1
# Question Stone and Jewels

- Find how many jewels are there within the stones
Jewels - "aA"
Stones - "aAAbbbb"
Output = [2]

# Probelm Pattern - Brute Force Appraoch Different Way

- One way
1. Introduce a global variable count for keeping the count of jewels within the stones
2. Use two loops compare the values of jewels with the stones increase the value of count

- Second Way
1. Use includes method, check whether jewels.includes(stones[i]);

- Third Way
1. Stones in the outer loop
2. Jewels in the inner loop
3. break as soon as jewels is found within the stone
4. We can use break because each jewels is unique, they are not repeating


# Complexity


1. Time Complexity
- O(n^2) - Quadratic


2. Space Complexity
- O(1) - Constant

=================================================================================

# Approach 2
# Question Stone and Jewels

Q. Find how many jewels are there within the stones?
Jewels - "aA"
Stones - "aAAbbbb"
Output = [ 2 ]

# Probelm Pattern

- We are going to use an optimized solution for this for reducing the time complexity to O(n)s 
- Use two methods set.add and set.has

1. Use Set, create a set and add all the jewels inside the set using a loop
2. Afterwards, use another loop to check whether stones are inside the jewels 
   or not using the .has method of the set which takes O(1)

# Complexity


1. Time Complexity
- O(n) - Quadratic


2. Space Complexity
- Even though we are using set to store for the extra space it is O(1) because we 
  are storing finite number of strings
- Even if there are 52 letters 26 small and 26 capital, it is O(1) because it is finite
- O(1) - Constant

=================================================================================