

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




const declareAr = (pixSizeFactor) => {
  const array = []
  for (let y = 0; y < height / pixSizeFactor; y++) {
    array.push([])
    for (let x = 0; x < width / pixSizeFactor; x++) {
      array[y].push([0])
    }
  }
  return array
}


const randomPopulate = (percent, screen) => {
  for (let y = 0; y < screen.length; y++) {
    for (let x = 0; x < screen[0].length; x++) {
      if (Math.random() <= percent) {
        screen[y][x] = 1
      }
    }
  }
}


const screenAr = declareAr(10)

randomPopulate(0.5, screenAr)