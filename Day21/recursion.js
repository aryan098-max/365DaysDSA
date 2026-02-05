/**
 * Real Life Example of Recursion
 1. Queue of People 
 2. Comment Threads
 3. Organisational Hierarchies

 Recursion: A function calling itself is called recursion. We need a base case to stop the recursion
 In other words, a function calling itself to solve the smaller version of the problem is called recursion

 Two Parts of Recursion

 1. Base Case - stop condition (when to stop calling itself)
 2. Recursive Case - Part where function calls itself

 - Note: Base Case is usally written at top. Infite recursion lead to stack overflow

 - StackOverflow - Infinite Recursion - Maximum call stack size exceeded
 
 */

 function recursion(n){
    if(n === 0){
        return;
    }

    console.log(n);
    // n = n - 1;
    recursion(n-1);

 }
 let n = 5;
 recursion(n);