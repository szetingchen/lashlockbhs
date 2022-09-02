var e = 1
var e1 = false
const drawFrame = (time) => {
  clear();
  if((time/2) - 500 === 500){
    drawCube(10, (time/2) - 500, 10)
  }
  drawCube(10, -(time/2) % 500, 10)
}
function drawCube(size, x, y){
    drawRect(x, y, size, size, 'black')
    drawRect(x+size/3, y+size/3, size, size, 'black')
    drawLine(x, y, x+size/3, y+size/3, 'black')
    drawLine(x+size, y, x+size*4/3, y+size/3, 'black')
    drawLine(x+size, y+size, x+size*4/3, y+size+size/3, 'black')
    drawLine(x, y+size, x+size/3, y+size+size/3, 'black')
    }

animate(drawFrame);
