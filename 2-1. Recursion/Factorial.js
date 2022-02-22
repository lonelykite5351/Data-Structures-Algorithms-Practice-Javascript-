// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  return answer;
}

function findFactorialIterative(number) {
  //code here
  let answer = 1
  while(number !== 1) {
    answer *= number
    number--
  }
  return answer;
}

console.log(findFactorialIterative(1))
console.log(findFactorialIterative(2))
console.log(findFactorialIterative(3))
console.log(findFactorialIterative(4))
console.log(findFactorialIterative(5))