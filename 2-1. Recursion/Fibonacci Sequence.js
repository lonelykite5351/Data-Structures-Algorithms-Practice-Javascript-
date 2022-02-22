// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciRecursive(n) {
  //code here;
}
fibonacciRecursive(3)

function fibonacciIterative(n){
  //code here;
  if(n === 0) {
    return 0
  }
  if(n === 1) {
    return 1
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