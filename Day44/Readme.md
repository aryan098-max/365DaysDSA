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
# Approach 2: Hashed Key Approach

# Problem Pattern

1. We are going to reduce the Time Complexity in this approach by using a different appraoch than sorting
   .sort() takes an avg of O(n logn);

2. To remove this Time Complexity we are going to use Hashed Key Approach

3. Run a loop for the entire array, Introduce two variabes: let word = strs[i], current word & 
   let freqArr = Array(26).fill(0) = [0,0,0,0,.......26]

4. Now, run a loop for the each word and introduce a variable let index: inside that loop to get the index 
   of each word and increase the count : [freqArr]++;

   let index = word[j].charCodeAt() - 'a'.charCodeAt() // this gives the  e = 101 - a = 97 = 4
   freqArr[index]++, [0,0,0,0,1,....]  - the position at 4th index is increased (0,1,2,3,4);s

5. Now, Use another loop for creating the key, introduce a string variable, let key ="", run this loop for k 0 to 25
   a total of 26 times and append the count at each char freqArr[k]:

   // Here, we are getting back character and appending it with count of each char: key = {a1b0c0d0e1}
   key = key + String.fromCharCode(k+97) + freqArr[k];

6. Finally, create the map for each word using the key: map[key] = [word], anagrams will have same key, 
   anagrams will be assinged to same key.

# Complexity

1. Time Complexity
- Time Complexity is reduced because we are using hashed key instead of sorting
- Thrid k loop is O(1) because 26 letters only
- O(n * k)

2. Space Complexity
- Each word O(n) and each char O(k)
- O(n * k)
