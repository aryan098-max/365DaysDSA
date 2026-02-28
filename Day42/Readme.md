# 1st Approach
# Question - Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

# Problem Pattern

1. Use all the built in functions
    - .split("")
    - .sort()
    - .join("")
    - ====
2. Make sure to use: return

# Complexity

1. Time Complexity
= O(n) + O(n log n) + O(n)
= O(n log n)

2. Space Complexity
= O(1) - Constant

=================================================================================================
# 2nd Approach

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

# Problem Pattern

1. First create a map for mapping all the letters from the str
2. Afterwards, reduce the count of the letters within the map
3. Use two loops for this entire process

- There are few conditions for breaking the loop
4. First Condition, if (!map[t[i]]), if the letter doesn't exist, how can we reduce it break return false
5. In the first condition || another condition that map[t[i]] < 0, if it is -1 that means a paticular letter
   is more - s = "aa", t ="aaa"
6. Other wise, --map[t[i]], keep reducing the count


# Complexity

1. Time Complexity
= O(n) + O(n) = 2O(n) = O(n)
= This is far better than O(n) < O(n logn)

2. Space Complexity
= O(1)
