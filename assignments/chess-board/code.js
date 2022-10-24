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
  [['', 1], ['', 1], ['', 1], ['', 2], ['', 2], ['', 2], ['', 3], ['', 3], ['', 3]],
  [['', 1], ['', 1], ['', 1], ['', 2], ['', 2], ['', 2], ['', 3], ['', 3], ['', 3]],
  [['', 1], ['', 1], ['', 1], ['', 2], ['', 2], ['', 2], ['', 3], ['', 3], ['', 3]],
  [['', 4], ['', 4], ['', 4], ['', 5], ['', 5], ['', 5], ['', 6], ['', 6], ['', 6]],
  [['', 4], ['', 4], ['', 4], ['', 5], ['', 5], ['', 5], ['', 6], ['', 6], ['', 6]],
  [['', 4], ['', 4], ['', 4], ['', 5], ['', 5], ['', 5], ['', 6], ['', 6], ['', 6]],
  [['', 7], ['', 7], ['', 7], ['', 8], ['', 8], ['', 8], ['', 9], ['', 9], ['', 9]],
  [['', 7], ['', 7], ['', 7], ['', 8], ['', 8], ['', 8], ['', 9], ['', 9], ['', 9]],
  [['', 7], ['', 7], ['', 7], ['', 8], ['', 8], ['', 8], ['', 9], ['', 9], ['', 9]],
]


const canBePlaced = (ay, ax, sudostart1, placement) => {
  const sudostarttest = JSON.parse(JSON.stringify(sudostart1));
  if (sudostarttest[ax][ay][0] != '') {
    return false;
  }
  sudostarttest[ax][ay][0] = placement;
  let inVert = false;
  let inHort = false;
  let inBox = false;
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      if ((sudostarttest[x][y][1] === sudostarttest[ax][ay][1]) && (sudostarttest[x][y][0] === sudostarttest[ax][ay][0]) && !((ax === x) && (ay === y))) {
        inBox = true;
      }
      else {
        //console.log(y + ", " + x + " : " + sudostarttest[x][y][0])
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    if ((sudostarttest[ax][ay][0] === sudostarttest[i][ay][0]) && (sudostarttest[ax][ay][0] != undefined) && ax != i) {
      inVert = true;
    }
    else {
    }
  }
  for (let i = 0; i < 9; i++) {
    if ((sudostarttest[ax][i][0] === sudostarttest[ax][ay][0]) && (sudostarttest[ax][ay][0] != undefined) && ay != i) {
      inHort = true;
    }
    else {
    }
  }
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

const filled = (array) =>{
  for(let y = 0; y<9; y++){
    for(let x = 0; x<9; x++){
      if(array[y][x][0]===""){
        return [x, y]
      }
    }
  }
  return 'fill'
}

const solve = (array) => {
  
  const find = filled(array)
  let x;
  let y;
  if(find==='fill'){
    console.log('fill')
    return true
  }
  else{
    
    x = find[0]
    y = find[1]
  }

  for(let i = 1; i<=9; i++){
    if(canBePlaced(x, y, array, i)){ 
      array[y][x][0]=i
      drawSudo(array)
      if(solve(array)){
        
        return array
      }
      array[y][x] = ''
    }

  }
  return array
}


drawSudo(sudostart)
console.log(solve(sudostart))
drawSudo(sudostart)

