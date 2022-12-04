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


const day01Part1 = (str) => {
  const numbers = str.split('\n');
  let currelfnum = 0;
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != "") {
      currelfnum += parseInt(numbers[i]);
    }
    else {
      if (currelfnum > max) {
        max = currelfnum;
      }
      currelfnum = 0;
    }
  }
  return max;
}

const day02Part1 = (str) => {
  const games = str.split("\n");
  let score = 0;
  const them = ["A", "B", "C"]
  const us = ["X", "Y", "Z"]
  for (let i = 0; i < games.length; i++) {
    let thereplay = games[i].substring(0, 1)
    let ourplay = games[i].substring(2, 3)
    if (us[them.findIndex(thereplay) - 1] === ourplay) {
      score += 6 + us.findIndex(ourplay)
    }
    else if (them.findIndex(thereplay) === us.findIndex(ourplay)) {
      score += 3 + us.findIndex(ourplay)
    }
    else {
      score += us.findIndex(ourplay)
    }

  }
  return score;
  //opponite       you
  //A = rock = 1, X  
  //B = paper = 2, Y
  //C = scissors = 3, Z


  // 1-3 = -2 rock vs scissors, loss
  // 3-1 = 2 scissors vs rock, win

  //1-2 = -1
  //2-1 = 1

  //index of there play -1 corresponds to our play in our play array
  //them = [A, B, C]

  //us = [X, Y, Z]
  //if(us[them.indexOf(play)-1]===play)

}

run('day_01.test', day01Part1)