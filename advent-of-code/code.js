// Write your code here. To run a function on a given test file you need to
// create a file in your github repo in the advent-of-code branch and in the
// advent-of-code directory. Then you can use a function `run` to run a
// particular function on the contents of the file, which will be passed to your
// function as a string.
//
// For example, if I've created a file 'day_01.test' to contain the test data
// from day 1, and a function, day01Part1, I can run the function with this
// call:
//
//   run('day_01.test', day01Part1)
//
// Which will load the file and pass them to your function and then print the
// return value in the REPL.


const day01Part1 = (str) =>{
  const numbers = str.split('\n');
  let currelfnum = 0
  let max = 0
  for(let i = 0; i<numbers.length; i++){
    if(numbers[i]!=""){
      currelfnum+=numbers[i]
    }
    else{
      if(currelfnum > max){
        max = currelfnum
      }
      currelfnum = 0
    }
  }
}

run('day_01.sample', day01Part1)