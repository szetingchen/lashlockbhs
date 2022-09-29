const z_sqr = (x,y) =>{
  return [x**2 - y**2, 2*x*y];
}
const f = (z, c) =>{
  return [z_sqr(z[0], z[1])[0] + c[0], z_sqr(z[0], z[1])[1] + c[1]]
}
const isPixelInSet = (c, iterations) =>{
  let z=[0,0]
  let i=0 
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
  const color = 'black';
  let offsetx=-((centerx/(width/borderx))*zoom);
  let offsety=((centery/(height/bordery))*zoom);
  let xmath;
  let ymath;
  drawLine(borderx/2, 0, borderx/2, bordery, 'black')
  drawLine(0, bordery/2, borderx, bordery/2, 'black')
  for(let y=-offsety; y<=bordery-offsety; y++){
    for(let x=-offsetx; x<=borderx-offsetx; x++){
      xmath=(-2-(offsetx/borderx))/zoom+((4/zoom)/borderx)*x
      ymath=(2+(offsety/bordery))/zoom-((4/zoom)/bordery)*y
      let pixelinset = isPixelInSet([xmath, ymath], iterations)

      pixelinset===0 ? drawLine(x+offsetx, y+offsety, x+1+offsetx, y+offsety, color) : drawLine(x+offsetx, y+offsety, x+1+offsetx, y+offsety, 'hsl(' + (pixelinset*2) + ', 100%, 50%)')
      
    }
  }
}

const x = 0 //center of zoomx
const y = 0 //center of zoomy
const maxiterations = 10000 //maximum iterations that computer can check for infinty
const zoom = 1 //1 = no zoom


drawmandel(maxiterations, height, height, x, y, zoom)


