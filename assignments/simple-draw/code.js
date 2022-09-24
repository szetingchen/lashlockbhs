
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
/*
var x = -1000
var y = 350
var size = 250
var color = 'aqua'
drawTriangle(x, y, size, color)
function drawTriangle(x, y, size, color){
    drawLine(x, y, x+size/2, y+size, color)
    drawLine(x+size/2, y+size, x+size/2-size, y+size, color)
    drawLine(x, y, x-size/2, y+size, color)
   
}
for(let i=0; i < 250; i++){

    for(let i=0; i < 25; i++){
        drawTriangle(x, y, size, color);
        var size=size-10
        
        var y=y-14.6

    }
    var size = 250
    var y = 350
    var x=x+30
}
*/
const z_sqr = (x,y) =>{
  return [x**2 - y**2, 2*x*y];
}
const f = (z) =>{
  const z_sqr1 = z_sqr(z[0], z[1])
  return [z_sqr1[0]+z[0], z_sqr1[1]+z[1]];
}

const isPixelInSet = (c, iterations) =>{
  let z = c;
  let i=0
  for(i; i<iterations; i++){
    z=f(z);
    
    if(z[0]===Infinity||z[1]===Infinity||z[0]===-Infinity||z[1]===-Infinity){
    //console.log("z: "+z)
    return i
    }
  }
  if(z[0]>2||z[1]>2){
    return i
  }
  //console.log("z: "+z)
  return 0
}

const drawmandel = (iterations, border) =>{
  const startx=width/2
  const starty=height/2
  const color = 'black'
  let pixelschecked = 0
  let xmath = 0
  let ymath = 0
  for(let y = 0; y<=border; y++){
    for(let x = 0; x<=border; x++){
      xmath=-2+(4/border)*x
      ymath=2-(4/border)*y
      let pixelinset = isPixelInSet([xmath, ymath], iterations)
      //console.log([xmath, ymath] + ": " + pixelinset)
      
      drawFilledRect(x, y, 1, 1, color.brighten(pixelinset))
      
      pixelschecked++

    }
  }
  drawRect(0, 0, border, border, 'black')
}
drawmandel(20, 400)