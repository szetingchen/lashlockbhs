var e = 1; var e1 = false; const drawFrame = (time) => {clear();if(time<234*10){if(time === 500){var start = -1}else{var start = 1}
        if(!e1){
            drawCube(234 - time/10*start, time, 98)

        }
        
           
    }
    if(time<234*5){
        var e1 = true
        
    }
    if(e1){
        drawCube(time/10, 10, 98)
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
