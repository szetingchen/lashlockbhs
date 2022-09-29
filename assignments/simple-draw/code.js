const z_sqr = (x,y) =>{
  return [x**2 - y**2, 2*x*y];
  //calculates the square of a complex number, "z^2"
  //z starts as 0,0 not a complex number
  //after 1 recersion it starts being inputed complex numbers

}
const f = (z, c) =>{
  return [z_sqr(z[0], z[1])[0] + c[0], z_sqr(z[0], z[1])[1] + c[1]]
  //equation, only looks long because normal and imaginary numbers need to be- 
  //- combined seperatly


}
const isPixelInSet = (c, iterations) =>{
  //takes in a constant z
  let z=[0,0]
  let i=0 
  //defines "i" outside for loop so it can be used in the entire funciton
  for(i; i<iterations; i++){
    z=f(z, c);
    
    if(z[0]===Infinity||z[1]===Infinity||z[0]===-Infinity||z[1]===-Infinity){
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
  const thiscenterx=-centerx
  const thiscentery=centery
  const color = 'black';
  let offsetx=-((thiscenterx/(width/borderx))*zoom);
  let offsety=((thiscentery/(height/bordery))*zoom);
  let xmath;
  let ymath;
  drawLine(borderx/2, 0, borderx/2, bordery, 'black')
  drawLine(0, bordery/2, borderx, bordery/2, 'black')
  for(let y=-offsety; y<=bordery-offsety; y++){
    for(let x=-offsetx; x<=borderx-offsetx; x++){
      xmath=(-2-(offsetx/borderx))/zoom+((4/zoom)/borderx)*x
      ymath=(2+(offsety/bordery))/zoom-((4/zoom)/bordery)*y
      let pixelinset = isPixelInSet([xmath, ymath], iterations)

      if(pixelinset===0){
        drawLine(x+offsetx, y+offsety, x+1+offsetx, y+offsety, color)
        count++
      }
      else if(pixelinset>0){
        drawLine(x+offsetx, y+offsety, x+1+offsetx, y+offsety, 'hsl(' + (pixelinset*2) + ', 100%, 50%)')
        count++
      }
    }
  }
  console.log(count)
}

const x = 0 //center of zoomx
const y = 0 //center of zoomy
const maxiterations = 10000 //maximum iterations that computer can check for infinty
const zoom = 1 //1 = no zoom


drawmandel(maxiterations, height, height, x, y, zoom)


