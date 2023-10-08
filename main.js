var summation = function (num) {
  
  let sum = 0

  for (let i = 1; i <= num; i++) {
    
    sum += i
    
  }

  return sum

}



console.log(summation(7))



// params: number
// return: number    // the sum of all integers from 1 to num
// e.g. summation(7)
// results in 28

// return a reduce function that adds the previous with the current
// declare a variable sum and assign it to 0
// initialize a for loop starting at 1, while i is less than or equal to num
// begin loop
// add and reassign i to sum
// end loop
// return sum

