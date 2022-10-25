// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.


const drawTik = () => {
  const spacing = width/10
  drawLine(0, height*2/3, width, height*2/3)
  drawLine(0, height*2/3/2, width, height*2/3/2)
  drawLine(width*2/3, 0, width*2/3, height)
}

drawTik()

registerOnclick((x, y) => { 
  
  const offset = 0
  const box_x = 0
  const box_y = 0
  drawText('qwiyweiuyweifywef', x, y, 'black', Math.min(width, height) * 0.3);
});


