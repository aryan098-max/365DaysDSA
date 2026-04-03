# Question - First Bad Version: Leet Code 278

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.


# Approach

1. In this question we need to find from where does the bad version starts and the only tricky
   thing in this code is that we need to be careful while moving the right

2. We have to return a function whihc is using a api - isBadVersion()


# Pattern

1. A similar kind of pattern as binary search alogirthm with a little list

2. We need to narrow down the bad version till left, right and middle becomes 
   the same element

3. Now, the thing is that if middle is the bad version let's suppse that we can't 
   return it immediately, we need to narrow down left, middle and right to the same 
   position

4. The only way to understand the code is to dry run the code with a sample.

5. Let's suppose that we have a 1 to 10, let's suppose that 3 is the bad version (first bad)
   we need to move right till middle?

   Because what if let's suppose that middle is the first bad version (imagining a another)
   condition, we must narrow down all the pointer to the first bad version


# Complexity

1. Time Complexity
- O(log n)

2. Space Complexity
- O(1)