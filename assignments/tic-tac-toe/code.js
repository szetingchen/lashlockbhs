// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.


const spacing = height < width ? height / 3 : width / 3
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const drawBoard = (board) => {
  drawLine(width / 2 - spacing * 1.5, 0 + spacing, width / 2 + spacing * 1.5, 0 + spacing);
  drawLine(width / 2 - spacing * 1.5, 0 + spacing * 2, width / 2 + spacing * 1.5, 0 + spacing * 2);
  drawLine(width / 2 - spacing / 2, 0, width / 2 - spacing / 2, height);
  drawLine(width / 2 + spacing / 2, 0, width / 2 + spacing / 2, height);
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      drawText(board[y][x], ((spacing * x) + width / 2 - spacing * 1.5) + spacing / 4, ((spacing * y) + spacing) - spacing / 4, 'black', Math.min(width, height) * 0.25);
    }
  }
}
const canKeepPlaying = (board) => winner(board) == null && !boardFull(board);
const boardFull = (board) =>{
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      if (board[y][x] === "") {
        return false;
      }
    }
  }
  return true;
}
const winner = (board) =>{
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && (board[0][i] === "O" || board[0][i] === "X")) {
      return board[0][i];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && (board[i][0] === "O" || board[i][0] === "X")) {
      return board[i][0];
    }
  }
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && (board[0][0] === "O" || board[0][0] === "X")) {
    return board[0][0];
  }
  if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && (board[0][2] === "O" || board[0][2] === "X")) {
    return board[0][2];
  }
}
drawBoard(board);
let turn = "X";
let gameOver = false;
registerOnclick((x, y) => {
  if (!gameOver) {
    const box_x = Math.floor((((width / 2 - spacing / 2)) - x) / spacing) * -1;
    const box_y = Math.floor(y / spacing);
    if (board[box_y][box_x] === "") {
      board[box_y][box_x] = turn;
      turn = turn === "X" ? "O" : "X";
    }
    clear();
    drawBoard(board);
  }
  if (!canKeepPlaying(board)) {
    console.log("Game Over")
    console.log(winner(board)===undefined ? "Stalemate" : winner(board) + " wins!")
    gameOver = true
  }
});


