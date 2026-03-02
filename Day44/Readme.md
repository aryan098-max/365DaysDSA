# Approach 1
# Question - Group Anagram

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

# Problem Pattern

1. We are going to solve this problem using map, create a map of each word sort it and push it
   inside the map, do same for the coming str

2. Create a for loop and sort each str and check if it exists as a key or not. 
3. If the key alredy exists, it means it is an anagram of the existing key push it inside the
   key: 
   
   For example, 

    if(!map[sortedStr]){
        // assinging the string both as key and value, sorted value as key, and normal as value but an array
        // assinging the [str[i]] - assinging array, which has a key inside it
        map[sortedStr] = [str[i]];
    }

    else {
        // The key is now an array which has values inside it
        map[sortedStr].push(str[i]);
    }

4. Finally, while returning we only have to return values; therefore, using: Object.values(map), Similarly, 
   to Object.keys(), Object.values() also return a array of values. A array wraps the entire values of key

# Complexity

1. Time Complexity
- The loop is running for length of the string; therefore, n
- However, it is running for each string, which is being split("") and sort() and join()
- sort() - takes avg complexity of - O(m logm), therefore, 
- O(n * (m logm))

2. Space Complexity
- Each string being stored is length n and each string has length m
- O(n * m);

================================================================================================================
# Approach 2

# Problem Pattern




# Complexity

1. Time Complexity


2. Space Complexity
