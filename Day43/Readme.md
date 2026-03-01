# Question - Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

# Problem Pattern

1. This question is solved using two map approach introduce two map variable mapStoT & mapTtoS = {}
2. A mapping is done from both s and t strings; therefore we are using two maps.
3. We are creating map from both sides because, this way we can check whether a single 
   character is mapped to single character or not.

4. Later, we will run a loop till s.length to create mapping for both StoT & TtoS. 
5. Now, for checking the condition we are going to first check whether, if(!mapStoT[s[i]] && !mapTtoS[t[i]]) 
   exist or not.
6. When to stop the condition, stopping the condition is tricky, we are going to stop the condition
   if two same char are mapping to different condition. 

   For example,

   s = "bar"
   t = "foo"

   In this case, StoT = {b:f, a:o, r:o} & TtoS={f:b, o:a, o:rX} o:r X condition fails because two same char diff
   mapping, therefore, condition first condition fails.

   To write the code for the second condition is quite complicated we are again to check on both sides.
   The condition has failed for !mapTtoS[t[i]] because mapping for o already exists.

7. if(TtoS[t[i]] !== s[i]) - what does it mean? why compare with s[i] because TtoS[t[i]] is equal to:
   
   Let's suppose that i=2

   TtoS[t[2]] means f=0, o=1, o=2 - o is already mapped to a, TtoS={f:b, o:a, o:rX}, thefrefore, 
   TtoS[t[2]] becomes TtoS[t[o]] = a, 
   a !== s[i], (i = 2 s[2] = r)
   a !== r (true)
   return false; 

   Therefore, they are not isomorphic

8. So, what we are doing here is on the second check is to check whether the same char is being mapped 
   to diff char or not, if yes return false

# Complexity

1. Time Complexity
- O(n) - Linear

2. Space Complexity
- O(1) - Constant
   
