# Question - Reverse String 

s = "abcdef";
k = 2;
output = "bacdfe" 

# Problem Pattern

- Strings are immubtable; therefore, split the string into [ 'a' ] single characters
- s.split("") 

- The first loop runs i = i+(2*k) times, so that it can jump to the 2k character

- The second loop runs normally, however, we need to introduce two new variables
- n = k , mid = k/2, our second loop runs till mid because, abcd, we need to reverse
  a & b, therefore, mid runs till 0 and 1, only the first and second string are reversed

- Next, during swapping we will follow the same pattern as reverse stringI. s[ j ] = s[ n-1-j ]
  why we are reducing n by 1 because n = k = 2, which inlcudes 0, 1 & 2 index 1 index extra
- Therefore, s[ j ] = s[ n-1-j ], why -j because we have to reduce from back

- Finally, we need to also add s[ j+i ], s[ n-1-j+i ], we need to add i each time first time it is 
  0, second time if k=2 it is, 4, "abcdefgh", second time it will start from e; therefore, add (i)
  everywhere
 


# Complexity

1. Time Complexity
- The outer loop is jumping 2k times while inner is running k times, which is compartively
  less than 2k 
- Thefeore, Time Complexity is O(n)

2. Space Complexity
- Because we are creating an array splitting the string into an array
- O(n)