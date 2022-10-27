// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.


const drawTik = (board, spacingIn) => {
  const spacing = height < width ? height / 3 : width / 3
  if (spacingIn) {
    return spacing;
  }
  drawLine(width / 2 - spacing * 1.5, 0 + spacing, width / 2 + spacing * 1.5, 0 + spacing)
  drawLine(width / 2 - spacing * 1.5, 0 + spacing * 2, width / 2 + spacing * 1.5, 0 + spacing * 2)
  drawLine(width / 2 - spacing / 2, 0, width / 2 - spacing / 2, height)
  drawLine(width / 2 + spacing / 2, 0, width / 2 + spacing / 2, height)
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      drawText(board[y][x], ((spacing * x) + width / 2 - spacing * 1.5) + spacing / 4, ((spacing * y) + spacing) - spacing / 4, 'black', Math.min(width, height) * 0.25)
    }
  }
}

const canKeepPlaying = (board) => {

}
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]
drawTik(board)
let turn = "x"
registerOnclick((x, y) => {
  const offset = 0
  const box_x = Math.floor((((width / 2 - drawTik(board, "e") / 2))-x)/drawTik(board, "e"))*-1
  const box_y = Math.floor(y / drawTik(board, "e"))
  console.log(box_x + ", " + box_y)
  if (board[box_y][box_x] === "") {
    if (turn === "x") {
      board[box_y][box_x] = "X"
      turn = "o"
    }
    else {

      board[box_y][box_x] = "O"
      turn = "x"
    }
  }
  clear();
  drawTik(board)
});


