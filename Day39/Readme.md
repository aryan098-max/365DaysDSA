# Question - Palindrome Check

# Since, strings are immutable each time we are making changes we need to assign it backtoiself which creates
#  a new variable which points to that string

- Statement - The string spell the same from the backward and forward
            - Convert all uppercase into lowercase
            - Return true if string is empty

- Input = "A mam"
- Output = "mama"

# Problem Pattern

1. First, s = s.lowerCase();
2. First, we need to remove all the non-alphanumeric characters only (alphabet and numbers allowed)
3. We will introduce a varibale; filteredString and run a loop to remove all the spaces comma using regex

For example,

Input = "race a car" becomes filteredString = "raceacar" using loop, s.match() builtin function and regex
- for(let i=0; i<s.length; i++){

    if(s[i].match(/[a-z0-9]/i)){
        filteredStr = filteredStr + s[i];
    }
}

4. Concatenate each string during filtering
5. Now, To reverse the string we need to introduce a variable reversedStr = filteredStr.split("")
6. Now, after splitting the string we have two strings filteredStr and reversedStr both of them contain the same
   string

7. We will now SWAP EACH CHAR OF REVERSEDSTR WITH ITSELF till will reach halflen - reversedString[n-1-j]

    - Why swapping withitself after swapping each char will be same as filteredstr
    Explain this:
    n = length of str
    why -1 ? because we are starting from the last index
    why -j ? because we want to keep moving from the last index

    # Note: The last loop is not going to use second pointer because reversedString[n-1-j] logic
    - Dry run this to understand the logic

8. Now, we will rejoin reversedStr.join("") to convert it back into string
9. Finally, we can check whether filterdStr === reversedStr (returns true or false depending on the condition)


# Alternative in the first apporach on the later half

1. Introduce two variables i and j and run until while(i<=j) keep checking for each char
2. If (s[i] !== s[j]) return false
3. Otherwise, keep decreasing i and j 
4. Finally, return true


# Time Complexity

1. Time Complexity
- O(n) - Linear

2. Space Complexity
- Using extra space to create an array, filteredString, reversedString
- O(n) + O(n) + O(n) = 3O(n) = O(n)

===================================================================================================================

# 2nd Approach - Reversing Logic
- However, we can also use another technique for reversing the string using one sinle loop, which is 
  concaenating from backward

For example,

Input = "race a car" becomes filteredString = "raceacar" using loop, s.match() builtin function and regex
- for(let i=0; i<s.length; i++){

    if(s[i].match(/[a-z0-9]/i)){
        filteredStr = filteredStr + s[i];

        // s[i] is concatenated first therefore, the string is reversed
        reversedStr = s[i] + reversedStr;
    }
}

# Complexity

1. Time Complexity
- O(n) - Linear

2. Space Complexity
- Using extra space for reversedString, filteredString
- O(n) + O(n) = 2n = n - Constant

===================================================================================================================

# 3rd Approach - Two pointer appraoch, No extra space - O(1)



# Problem Pattern

- First move either i or j if non-alphanumeric character is encountered. Keep moving till alphanumeric char is encountered

For example, 
    input = #aba#
    Now, intially, i will reach a, second time j will reach a as well because first conition fails

- Now, if i reaches a and j also reaches a and i === j, i++, j++ 
- If, input = abaa, b and a are not equal therefore, false is returned
- Finally, true is returned

1. Don't use extra space
2. Use while loop while(i<j)
3. Total 4 conditions
    - First if for if(!s[i].match(regex)) i++
    - Second for j, j--
    - Third for i === j
    - Fourth false

4. To move when space and , comma are encountered use the logic of if(!s[i]) - when s[i] 
   is not equal to alphanumeric move ahead for i and move backward for j


# Complexity

1. Time Complexity
- O(n) - Linear

2. Space Complexity
- No, extra space two pointer approach
- O(1) - Constant