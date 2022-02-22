// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here

  // if(number === 1) {
  //   return 1
  // }
  // return number * findFactorialRecursive(number - 1);
  
  // Shorthand
  return number === 1 ? 1 : number * findFactorialRecursive(number - 1);
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

console.log(findFactorialRecursive(1))
console.log(findFactorialRecursive(2))
console.log(findFactorialRecursive(3))
console.log(findFactorialRecursive(4))
console.log(findFactorialRecursive(5))