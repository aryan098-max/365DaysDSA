# Question - Reverse String 
- For every k characters reverse 2k characters
- This means that if there are "abcdefg" total there are 7 letters
- For every 4 characters we have to reverse 2 characters, k = 2 & 2k =4

- str = "abcd"
- Output = "bacd"

# Problem Pattern

- First and foremost we need to change the string in to array using array.split()
- array.split() changes the string into array of characters

- Now, first we will runn a loop which will jump from 0 to k, x = x + 2*k,
  We need to add to match the value
- if 2 = k, 2k = 4, Therefore, first the value is x = 4, -> x = 8, x = 16

- For, the second loop, we need to introduce a variable mid = k/2. The mid is
  half of k in this reverseString question because only the first 2 characters are
  being reversed,m therefore, divide k/2.
- The second loop run till mid and it will revese the string
  


# Complexity

1. Time Complexity



2. Space Complexity