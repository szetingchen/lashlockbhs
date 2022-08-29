// This is an example of a function definition. This function is called by the
// underlying animation framework thanks to the call to animate below. This
// function is responsible for drawing one frame of the animation. You can
// change the code in here using the same functions you had in the simple
// drawing exercise to draw shapes. The argument to this function, time, is the
// number of milliseconds (one millionth of a second) since the program started.
const drawFrame = (time) => {
  clear();
  drawFilledCircle((time *2) % width, height / 2, 2, 'blue');
  drawFallingTriangle(width / 3, time*2);
  drawCube(20, 10, 10)

};


const drawTriangle = (x1, y1, x2, y2, x3, y3, color, width = 1) => {
  drawLine(x1, y1, x2, y2, color, width);
  drawLine(x2, y2, x3, y3, color, width);
  drawLine(x3, y3, x1, y1, color, width);
};


function drawCube(size, x, y){
    drawRect(x, y, size, size, 'black')
    drawRect(x+size/3, y+size/3, size, size, 'black')
    drawLine(x, y, x+size/3, y+size/3, 'black')
    drawLine(x+size, y, x+size*4/3, y+size/3, 'black')
    drawLine(x+size, y+size, x+size*4/3, y+size+size/3, 'black')
    drawLine(x, y+size, x, y+size+size/3, 'black')
    }

const drawFallingTriangle = (x, time) => {
  // Figure out the x values relative to the passed in x
  let x1 = (time / 20) % height;
  let x2 = x;
  let x3 = x + 50;

  // Figure out the y values as a function of time.
  let y1 = (time / 20) % height;
  let y2 = y1 + 23;
  let y3 = y1 - 45;

  // Actually draw the triangle.
  drawTriangle(x1, y1, x2, y2, x3, y3, 'pink', 5);
};

// Leave this code here or the animation won't run. Also don't change the name
// of drawFrame either here or where it is defined. (Or, if you must, change it
// the same way in both places.)
animate(drawFrame);
