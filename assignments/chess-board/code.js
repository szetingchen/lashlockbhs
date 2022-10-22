const WHITE_KING = '♔';
const WHITE_QUEEN = '♕';
const WHITE_ROOK = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN = '♙';
const BLACK_KING = '♚';
const BLACK_QUEEN = '♛';
const BLACK_ROOK = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN = '♟';

const startBoard = [
  [WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_KING, WHITE_QUEEN, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK],
  [WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
  [],
  [],
  [],
  [],
  [BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
  [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_KING, BLACK_QUEEN, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK],
]
const drawBoard = (board) => {
  for (let yAr = 0; yAr < 8; yAr++) {
    for (let xAr = 0; xAr < board[yAr].length; xAr++) {
      if (board[yAr][xAr] != undefined) {
        drawText(board[yAr][xAr], 40 * xAr, 50 + 40 * yAr, 'black', 64);
      }
    }
  }
}


//drawBoard(startBoard)
/*
const checkMove = (board, piecex, piecey, targetx, targety, mode) => {
  drawBoard(board)
  const piece = board[piecex][piecey]
  const targetEmpty = board[targetx][targety] === undefined
  const targetFriendly = board[targetx][targety]
  if (piece === BLACK_PAWN || WHITE_PAWN) {
    if (piecex - targetx === 1 || piecey - targety === 1){
      
    }
  }
}
checkMove(startBoard, 0, 1, 6, 0, null)
*/



//sudoku

let sudostart = [
  '1', '1', '1', '1', '1', '1', '1', '1', '1',
  '2', 't', '2', '2', 'e', '2', '2', 'b', '2',
  '3', '3', '3', '3', '3', '3', '3', '3', '3',
  '4', '4', '4', '4', '4', '4', '4', '4', '4',
  '5', 'g', '5', '5', 'e', '5', '5', 'b', '5',
  '6', '6', '6', '6', '6', '6', '6', '6', '6',
  '7', '7', '7', '7', '7', '7', '7', '7', '7',
  '8', 'we', '8', '8', 'E', '8', '8', 'j', '8',
  '9', '9', '9', '9', '9', '9', '9', '9', '9',
]

const convert = (mode, x, y, array) => {


  let convert2d = [];
  let convert2Box = []
  let newAr = [];
  let num = -1;
  for (let row = 0; row < 9; row++) {
    convert2d.push([])
    for (let rowx = 0; rowx < 9; rowx++) {
      num++;
      convert2d[row].push(array[num])
    }
  }
  if (mode === "box") {
    let boxnum = 0
    for (let boxnumy = 0; boxnumy < 3; boxnumy++) {
      for (let boxnumx = 0; boxnumx < 3; boxnumx++) {
        convert2Box.push([])
        for (let y = 0; y < 3; y++) {
          for (let x = 0; x < 3; x++) {
            convert2Box[boxnum].push(convert2d[y+3*boxnumy][x+3*boxnumx])
            console.log("boxnum: " + boxnum + " | " + y+3*boxnumy + ", " + x+3*boxnumx)
          }
        }
        boxnum++
      }
      
    }
    console.log(convert2d)
  }
  else if (mode === "vert") {
    for (let i = 0; i < 9; i++) {
      newAr.push(convert2d[x][i])

    }
  }
  else if (mode === "hort") {
    for (let i = 0; i < 9; i++) {
      newAr.push(convert2d[i][y])
    }
  }
  else {
    console.log("not valid mode: " + mode)
    console.log("valid modes are: box, vert, hort")
  }
}

convert('box', 0, 1, sudostart)




const canBePlaced = (ay, ax, vertAR, hortAR, boxAR, placement) => {

  sudostarttest[ax][ay][0] = placement;
  let inVert = false;
  let inHort = false;
  let inBox = false;

  if (!inHort && !inVert && !inBox) {
    return true;
  }
  return false;
}


const drawSudo = (array) => {
  let thickness = 3;
  const spacing = height < width ? height / 9 : width / 9;
  for (let i = 0; i < 10; i++) {
    thickness = i % 3 === 0 ? 3 : 1;
    drawLine(0, spacing * (i), height, spacing * (i), 'black', thickness)
  }
  for (let i = 0; i < 10; i++) {
    thickness = i % 3 === 0 ? 3 : 1;
    drawLine(spacing * (i), 0, spacing * (i), width, 'black', thickness)
  }
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (array[y][x][0] != undefined) {
        drawText(array[y][x][0], (x * spacing), (y * spacing) + spacing, 'black', spacing)
      }
    }
  }
}

const solve_aspossible = (array) => {
  const newarray = JSON.parse(JSON.stringify(array));
  return newarray;

}


