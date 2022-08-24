
/*
var x = 0
var y = 0
var size = 250
for(let i=0; i < 25; i++){
    drawTriangle(x, y, size, 'red');
    var size=size-10
    var x=x+10
    var y=y+15
}

 
function drawTriangle(x, y, size, color) {
    if(x <= 0){
        var x = size
    }
    else if(x >= 0){
        var x = size + x
    }
    if(y == 0){
 
    }
    var px = x
    var py = y
    var px1 = x
    var py1 = y
    for(let i=0; i < size; i++){
        var px = px - 1
        var py = py + 2
        drawRect(px, py, 1, 1, color);
    }
    for(let i=0; i < size; i++){
        var px1 = px1 + 1
        var py1 = py1 + 2
        drawRect(px1, py1, 1, 1, color);
    }
    for(let i=0; i < size/3*2; i++){
        drawRect(px1, py1, 1, 1, color);
        var px1 = px1 -3
    }
 
}
*/

var x = 125
var y = 350
var size = 250
var color = 'black'
drawTriangle(x, y, size, color)
function drawTriangle(x, y, size, color){
    drawLine(x, y, x+size/2, y+size, color)
    drawLine(x+size/2, y+size, x+size/2-size, y+size, color)
    drawLine(x, y, x-size/2, y+size, color)
   
}
for(let i=0; i < 25; i++){

    for(let i=0; i < 25; i++){
        drawTriangle(x, y, size, 'red');
        var size=size-10
        
        var y=y-14.6

    }
    var size = 250
    var y = 350
    var x=x+10
}