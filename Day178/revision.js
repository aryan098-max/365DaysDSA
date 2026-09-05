// # 509. Fibonacci Number

var fib = function(n) {

    // base case, covers 0 and 1 case
    if(n<=1) return n;

    return fib(n-1) + fib(n-2);
    
};