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

- Find how many jewels are there within the stones
Jewels - "aA"
Stones - "aAAbbbb"
Output = [2]

# Probelm Pattern


# Complexity


1. Time Complexity
- O(n^2) - Quadratic


2. Space Complexity
- O(1) - Constant

=================================================================================