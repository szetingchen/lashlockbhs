var e = 1
const drawFrame = (time) => {
    clear();
    if(time<234){
        drawCube(234 - time, 10, 10) * e
    }
    else{
        drawCube(234 - time, 10, 10) * e
    }
 


};
function drawCube(size, x, y){
    drawRect(x, y, size, size, 'black')
    drawRect(x+size/3, y+size/3, size, size, 'black')
    drawLine(x, y, x+size/3, y+size/3, 'black')
    drawLine(x+size, y, x+size*4/3, y+size/3, 'black')
    drawLine(x+size, y+size, x+size*4/3, y+size+size/3, 'black')
    drawLine(x, y+size, x+size/3, y+size+size/3, 'black')
    }

animate(drawFrame);
