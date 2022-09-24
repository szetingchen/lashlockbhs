/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 * 
 *
 */


const notreallycurved =(num, base, rside)=>{
  for(let linesD = 0; linesD!=num; linesD++){
    drawLine(rside/num*linesD, base, 0, base/num*linesD, "black", 0.5)
  }

}
const lineOfCircles = (r) =>{
  const d = r*2
  const num = Math.floor(width/d)
  const offset = (width-num*d)/2
  for (let i = 0; num>i; i++){
    drawFilledCircle(offset + r + d*i, height/2, r, 'black')
  }
}
const lineOfCirclesColor = (r, color1, color2) =>{
  const d = r*2
  const num = Math.floor(width/d)
  const offset = (width-num*d)/2
  for (let i = 0; num>i; i++){
    if(i%2===0){
      drawFilledCircle(offset + r + d*i, height/2, r, color1)
    }
    else{
      drawFilledCircle(offset + r + d*i, height/2, r, color2)
    }
  }
}
const concentricCircles = (num, color1, color2) =>{
  const inc = width/num/2
  for (let i = 0; num>i; i++){
    if(i%2===0){
      drawFilledCircle(width/2, height/2, width/2-inc*i, color1)
    }
    else{
      drawFilledCircle(width/2, height/2, width/2-inc*i, color2)
    }
  }
}
const checkerBoard = (num, color1, color2) =>{
  const size = width/num
  let color11 = color1;
  let color22 = color2; 
  let y = 50;
  for (let a = 0; num>a; a++){
    for (let i = 0; num>i; i++){
      if(i%2===0){
        drawFilledRect(size*i, y, size, size, color11)
      }
      else{
        drawFilledRect(size*i, y, size, size, color22)
      }
    }
    y+=size
    let temp = color11;
    color11 = color22; 
    color22 = temp 
  }
}
const fillWithCircles = (r, color) =>{
  const d = r*2
  const numx = Math.floor(width/d)
  const numy = Math.floor(height/d)
  const offsetx = (width-(numx*d))/2
  const offsety = (height-(numy*d))/2
  let y = r;
  for (let a = 0; numy>a; a++){
    for (let i = 0; numx>i; i++){
      drawCircle(offsetx + r + d*i, offsety + y, r, color)
    }
    y+=d
  }
}
const fillWithCirclesRandomlyFilled = (r, prob, color) =>{
  const d = r*2
  const numx = Math.floor(width/d)
  const numy = Math.floor(height/d)
  const offsetx = (width-(numx*d))/2
  const offsety = (height-(numy*d))/2
  let numfilled = 0;
  let y = r;
  for (let a = 0; numy>a; a++){
    for (let i = 0; numx>i; i++){
      if (Math.random()<=prob){
        drawFilledCircle(offsetx + r + d*i, offsety + y, r, color)
        numfilled++
      }
      else{ 
        drawCircle(offsetx + r + d*i, offsety + y, r, color)
        
      }
    }
    y+=d
  }
  console.log("num circles:"+numx*numy)
  console.log("num filled:"+numfilled)
}

const squareOfCircles = (r, color) =>{
  const d = r*2
  const num = Math.floor(width/d)
  const offset = (width-num*d)/2
  
  for (let i = 0; i<num; i++){
    drawCircle(offset + r + d*i, 0, r, color)
  }
}



//notreallycurved(220, 530, 500)
//lineOfCircles(23)
//lineOfCirclesColor(12, 'pink', 'teal')
//concentricCircles(11, 'teal', 'pink')
//checkerBoard(5, 'black', 'red')
//fillWithCircles(30, 'blue')
//fillWithCirclesRandomlyFilled(30, 0.50, 'blue')
squareOfCircles(10, 'blue')
//mandelBrotThing()