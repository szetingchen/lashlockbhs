
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


//madnelstart
function rgb(red, green, blue) {
    return (red & 0xF0 ? '#' : '#0') + (red << 16 | green << 8 | blue).toString(16)
}
const z_sqr = (x,y) =>{
  return [x**2 - y**2, 2*x*y];
}
const f = (z, c) =>{
  return [z_sqr(z[0], z[1])[0] + c[0], z_sqr(z[0], z[1])[1] + c[1]]
}
const isPixelInSet = (z, c, iterations) =>{
  let i=0
  for(i; i<iterations; i++){
    z=f(z, c);
    
    if(z[0]===Infinity||z[1]===Infinity||z[0]===-Infinity||z[1]===-Infinity){
    //console.log("z: "+z)
    return i
    }
  }
  if(z[0]>2||z[1]>2){
    return i
  }
  return 0
}


const drawmandel = (iterations, borderx, bordery, centerx, centery, zoom) =>{
  let count =0;
  const color = 'black';
  let offsetx=(centerx/(width/borderx))*zoom;
  let offsety=(centery/(height/bordery))*zoom;
  let xmath;
  let ymath;
  drawLine(borderx/2, 0, borderx/2, bordery, 'black')
  drawLine(0, bordery/2, borderx, bordery/2, 'black')
  for(let y=-offsety; y<=bordery-offsety; y++){
    for(let x=-offsetx; x<=borderx-offsetx; x++){
      xmath=(-2-(offsetx/borderx))/zoom+((4/zoom)/borderx)*x
      ymath=(2+(offsety/bordery))/zoom-((4/zoom)/bordery)*y
      let pixelinset = isPixelInSet([0,0], [xmath, ymath], iterations)

      if(pixelinset===0){
        drawLine(x+offsetx, y+offsety, x+1+offsetx, y+offsety, color)
        count++
      }
      else if(pixelinset>0){
        drawLine(x+offsetx, y+offsety, x+1+offsetx, y+offsety, 'hsl(' + 2+(pixelinset*2) + ', 100%, 50%)')
        count++
      }
    }
  }
  console.log(count)
}
  

//mandelend

//zoom on sea horse vally
const x = -60.2022
const y = 0
//const x = 0
//const y = 0
drawmandel(1000, 600, 600, x, y, 1000000)


