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


const notreallycurved =(num)=>{
  const top = 0
  const rside = 500
  let linesD = 0
  while(linesD != num){
    drawLine((rside/(num-1))*linesD, 530, 0, 0+10*linesD*1.67, "black", 1)
    linesD+=1
  }

}
var num = 30
notreallycurved(num);



//20 = 1.348 
//-100
//30 = 1.179
//-100
//40 = 1.084