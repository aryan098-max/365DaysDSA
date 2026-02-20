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
2. Use a loop for checking the key exists inside the obj or not and increase the count
   if key already exists

3. Introduce 3 variables, vowels, maxVowel, maxConsonant, Use loop for checking the count of
   the variable
4. Use vowels variable for checking s[ i ] has that value or not,
5. If vowels exists increase the count of that variable else increase the count of the consonant

# Complexity

1. Time Complexity
-  O(n) - I am using set tp check whether a value exists or not

2. Space Complexity
- O(1) - because the size is fixed (26 small letters)