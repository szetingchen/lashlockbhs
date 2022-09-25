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



const drawmandel = (iterations, border) =>{
  var paused = true
  const color = 'black'
  const offsetx = 500
  const offsety = (border-600)/2
  let xmath = 0
  let ymath = 100
  for(let y =0; y<=600+offsety; y++){
    for(let x=0; x<=530+offsetx; x++){
      if((x<=530+offsetx||y<=600+offsety)&&x-offsetx>=0&&y-offsety>=0){
        xmath=-2+(4/border)*x
        ymath=2-(4/border)*y

        let pixelinset = isPixelInSet([0,0], [xmath, ymath], iterations)
      
        if(pixelinset===0){
          drawLine(x-offsetx, y-offsety, x+1-offsetx, y-offsety, "black")
        }
        else if(pixelinset>0){
          drawLine(x-offsetx, y-offsety, x+1-offsetx, y-offsety, rgb(6*pixelinset, 40*pixelinset, 200*pixelinset))
        }
      }
    }
  }
  var pause = flase
}
drawmandel(50, 6000)
//console.log("iterations: "+isPixelInSet([1,1], 50)) 
//console.log(isPixelInSet([0,0], [5,0], 50))
var e = 1
var e1 = false
const drawFrame = (time) => {
  clear();
  

  drawmandel(50, 600*10*time)
  while(paused = true){
  }
}
    
animate(drawFrame);
