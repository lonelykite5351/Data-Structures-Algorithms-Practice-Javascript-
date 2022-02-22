// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciRecursive(n) {
  //code here;
  if(n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(4));
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(6));
console.log(fibonacciRecursive(7));
console.log(fibonacciRecursive(8));
console.log(fibonacciRecursive(9));
console.log(fibonacciRecursive(10));

// ---------------------------------------------------------------
function fibonacciIterative(n){
  //code here;
  if(n < 2) {
    return n
  }

  let previousNumber2 = 0
  let previousNumber1 = 1
  let answer = previousNumber2 + previousNumber1
  for(let i = 2; i < n; i++) {
    previousNumber2 = previousNumber1
    previousNumber1 = answer
    answer = previousNumber2 + previousNumber1
  }
  return answer
}
console.log(fibonacciIterative(0));
console.log(fibonacciIterative(1));
console.log(fibonacciIterative(2));
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(4));
console.log(fibonacciIterative(5));
console.log(fibonacciIterative(6));
console.log(fibonacciIterative(7));
console.log(fibonacciIterative(8));
console.log(fibonacciIterative(9));
console.log(fibonacciIterative(10));