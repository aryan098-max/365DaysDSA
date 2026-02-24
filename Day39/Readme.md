# Question - Palindrome Check

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
5. Now, To reverse the string we need to split it firstintroduce reversedStr variable,reversedStr = fiteredStr.split("")
6. Now, use reverse string I method to reverse the string and later - reversedStr.join() for comparison


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