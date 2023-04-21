const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = args.toString();
    if(cache.has(key)){
      console.log(`key:"${key}" from memo, value: ${cache.get(key)}`);
      return cache.get(key);
    }
    else{
      cache.set(key, fn(...args));
      return cache.get(key);
    }
  }
}

// create a function
const sum = (a, b) => {
  return a + b;
}

// Pass function into memoize's function
const memoizeSum = memoize(sum);

console.log(memoizeSum(2, 3));  // 5
console.log(memoizeSum(2, 3));  // log1 : key:"2,3" from memo, value: 5
                                // log2 : 5

console.log(memoizeSum(3, 2));  // 5
console.log(memoizeSum(3, 2));  // log1 : key:"3,2" from memo, value: 5
                                // log2 : 5