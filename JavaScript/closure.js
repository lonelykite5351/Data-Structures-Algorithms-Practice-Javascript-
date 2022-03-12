function dogHouse() {
  let count = 0
  function countDog() {
    count++
    console.log(count + ' dogs');
  }
  return countDog
}

function catHouse() {
  let count = 0
  return function countCat() {
    count++
    console.log(count + ' cats');
  }
}

const dog = dogHouse()
dog() // 1 dogs
dog() // 2 dogs
dog() // 3 dogs
dog() // 4 dogs
dog() // 5 dogs

const cat = catHouse()
cat() // 1 cats
cat() // 2 cats
cat() // 3 cats
cat() // 4 cats
cat() // 5 cats