//Implement a function that reverses a string using iteration...and then recursion!
function reverseString_Iteration(str) {
  let newString = ''
  for(let i = str.length - 1; i >= 0; i--){
    newString += str[i]
  }
  return newString
}

console.log(reverseString_Iteration('yoyo mastery'))
//should return: 'yretsam oyoy'

function reverseString_Recursion(str) {
  
}