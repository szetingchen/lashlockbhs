

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


const pixSizeFactor = 60
const timeTillUpdate = 0.5;

const declareAr = (pixSizeFactor) => {
  const array = []
  for (let y = 0; y < Math.floor(height / pixSizeFactor)+2; y++) {
    array.push([])
    for (let x = 0; x < Math.floor(width / pixSizeFactor)+2; x++) {
      array[y].push(0)
    }
  }
  return array
}

const randomPopulate = (percent, screenAr) => {
  for (let y = 1; y < screenAr.length-1; y++) {
    for (let x = 1; x < screenAr[0].length-1; x++) {
      if (Math.random() <= percent) {
        screenAr[y][x] = 1
      }
    }
  }
}

const display = (screenAr, color) => {
  const widthPix = pixSizeFactor;
  const heightPix = pixSizeFactor;
  for (let y = 1; y < screenAr.length-1; y++) {
    for (let x = 1; x < screenAr[0].length-1; x++) {
      if (screenAr[y][x] === 1) {
        drawFilledRect((x-1) * pixSizeFactor, (y-1) * pixSizeFactor, widthPix, heightPix, color)
      }
    }
  }
}


//if the sum of all nine fields in a given neighbourhood is three, 
//the inner field state for the next generation will be life; if the all-field sum is four, 
//the inner field retains its current state; and every other sum sets the inner field to death.


const declareNextGen = (screenAr) => {
  const tempScreenAr = JSON.parse(JSON.stringify(screenAr));
  for (let y = 1; y < screenAr.length-1; y++) {
    for (let x = 1; x < screenAr[0].length-1; x++) {
      let sum = 0
      for(let yOffset = -1; yOffset<=1; yOffset++){
        for(let xOffset = -1; xOffset<=1; xOffset++){
          sum+=screenAr[y-yOffset][x-xOffset]
        }
      }
      if(sum===3){
        tempScreenAr[y][x]=1
      }
      else if(sum!=4){
        tempScreenAr[y][x]=0
      }
    }
  }
  return tempScreenAr;
}

let screenAr = declareAr(pixSizeFactor) //will be redeclared when mutator functions are ran
randomPopulate(0.1, screenAr) //mutator

const calcTimeBasedGen = (screenAr, time, timeTilUpdate) =>{
  const targetGen = time/timeTilUpdate
  for(let gen = 0; gen < targetGen; gen++){
    screenAr = declareNextGen(screenAr)
  }
}

const drawFrame = (time) => {
  clear();
  if(time%timeTillUpdate){
    calcTimeBasedGen(screenAr, time, timeTillUpdate)
  }
  display(screenAr)
}
animate(drawFrame)