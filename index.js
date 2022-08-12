function hasTargetSum(array, target) {
  // we dont need to run our checks for the last number
  // all the other numbers will have already been tested with it.
  for (let i = 0; i < array.length-1; i++) {

    // as long as we dont have to worry about negative numbers this is a good optimization
    //if (array[i] <= target) {  The learn test uses negative numbers so we cant use this optimization

      // c=i+1 is optimization so we dont do every check twice
      for (let c = i+1; c < array.length; c++) {

        // same optimization as the first if statement
        //if (array[c] <= target) {

          if (array[i] + array[c] == target){
            return true;
          }
        //}
      }
    //}
  }
  
  // once we have tested all the numbers we know that there is no combo of 2 numbers that works
  return false
}

/* 
  Write the Big O time complexity of your function here
  
  we have a nested loop thing so n^2
  
  best case is hasTargetSum([1,2],3), where our very first check sum is true
    o(1) 
  
  worst case is going through entire array 
  hasTargetSum([1,2,3,4,5], 100)
  1+2, 1+3, 1+4, 1+5
       2+3, 2+4, 2+5
            3+4, 3+5
                 4+5
  not quite o(n^2) because of the c = i+1 optimization
*/

/* 
  Pseudocode is hard because my brain just thinks in code already.

  for num i in array
    for num c in array
      if (i+c=target)
        return true
  return false
*/

/*
  for every element of the array
    go through the array and add self with other options
      if sum == target, return true
  
  if you go through everything, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
