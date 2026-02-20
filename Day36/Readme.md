# 1st Approach
# Question - Find Most Frequest Vowel and Consonant

s = "successes"

- Here the maximum consonant count is 4, s = 4, highest frequency
- And maximum vowel count is 2, e = 2, highest frequency

maxConsonant = 4
maxVowel = 2

Output = maxVowel + maxConsonant = 6

# Problem Pattern

## Note: Whenever, we have to solve the count question of string we have to use map an obj

1. First create a map obj and store count of different characters in that obj
2. Use a loop for checking the key exists inside the obj or not and increase the count if key already exists

3. Introduce 3 variables, vowels, maxVowel, maxConsonant, Use loop for checking the count of the variable
4. Use vowels variable for checking s[ i ] has that value or not,
5. If vowels exists increase the count of that variable else increase the count of the consonant

# Complexity

1. Time Complexity
-  O(n) -

2. Space Complexity
- O(1) - because the size is fixed (26 small letters)

=====================================================================================================

# 2nd Approach
# Question - Find the Most Frequest Vowel and Consonant

s = "successes"

- Here the maximum consonant count is 4, s = 4, highest frequency
- And maximum vowel count is 2, e = 2, highest frequency

maxConsonant = 4
maxVowel = 2

Output = maxVowel + maxConsonant = 6

# Problem Pattern
## Note: Whenever, we have to solve the count question of string we have to use map an obj

1. First create a map obj and store count of different characters in that obj
2. if key already exists, use a loop for checking the key exists inside the obj or not and increase the count 

3. Introduce 3 variables, vowels, maxVowel, maxConsonant, Use loop for checking the count of the variable.
4. A set is created for checking whether the vowel exists or not. 
   const vowelsSet = new Set([ "a", "e", "i", "o", "u"])

5. We can make the time complexity of second loop as O(1) by using Object.keys(map), which returns an
   array. The maximum length it can reach is 26. Therefore, we can say the second loop will give O(1)

6. If vowels exists increase the count of that variable else increase the count of the consonant

# Complexity

# Note: Here, vowels.includes(map[mapKeys[i]]) only takes O(1) because vowels is finite set of values
  "a", "e", "i", "o", "u"

1. Time Complexity
-  Set data structure is used to check whether vowels exists or not. Therefore, it is O(1)
-  Set takes O(1)
-  O(n) 

2. Space Complexity
- map only takes 26 characters; therefore, it is O(1)
- O(1) - because the size is fixed (26 small letters)

=====================================================================================================
