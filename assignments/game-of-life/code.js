

//if the sum of all nine fields in a given neighbourhood is three, 
//the inner field state for the next generation will be life; if the all-field sum is four, 
//the inner field retains its current state; and every other sum sets the inner field to death.



//idea
//create 2d array that stores data for all cells, size of array based off how many cells 
//can be fit on screen
//size of cells will be changeable

//convert 2d array pos to screen pos: (width/sizeOfCell*arX), (height/sizeOfCell*arY)

//need to get all neighbors of a certain cell, maybe func?

//change state to 0 if dead or 1 if alive

//animate each state

//speed var?

const createAr = (pixSize) =>{
  const array = []
  for(let y = 0; y<height/pixSize; y++){
    array.push([])
    for(let x = 0; x<width/pixSize; x++){
      array[y].push([])
    }
  }
  return array
}


const pixSize = 1
const screenAR = createAr(pixSize)
console.log(screenAR[0].length)