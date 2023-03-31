// return int number
function findOutlier(inputString){
  const nums = inputString.trim().split(/\s+/).map(val => val * 1)
  let cnt = 0;
  for(let i = 0; i < 3; i++){
    nums[i] % 2 ? cnt-- : cnt++;
  }
  let find = cnt < 0 ? 0 : 1;  // find odd -> mark 1, find even -> mark 0
  let place = 0;
  for(const n of nums){
    place++;
    if((n & 1) === find) break
  }
  return place;
}

const inputString1 = "      10     9 8       6 4       2       ";
console.log(findOutlier(inputString1));

const inputString2 = "7 9 1 6 3 5";
console.log(findOutlier(inputString2));

const inputString3 = "999999999 1000000000 1000000000    1000000000";
console.log(findOutlier(inputString3));