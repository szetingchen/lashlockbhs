
let sudostart = [
  ['5','3','','','7','','','',''],
  ['6','','','1','9','5','','',''],
  ['','9','8','','','','','6',''],
  ['8','','','','6','','','','3'],
  ['4','','','8','','3','','','1'],
  ['7','','','','2','','','','6'],
  ['','6','','','','','2','8',''],
  ['','','','4','1','9','','','5'],
  ['','','','','8','','','7','9'],
]

const canBePlaced = (ay, ax, sudostart1, placement) => {
  const box_x = Math.floor(ax/3)
  const box_y = Math.floor(ay/3)
  for(let y = box_y*3;  y < box_y*3+3; y++){
    for(let x = box_x*3;  x < box_x*3+3; x++){
      //console.log("box x, y: " + box_x + ", " + box_y + " | check x, y: "+ sudostart1[x][y] + " : " + x + ", " + y + " | placement x, y: " + placement + " : " + ax + " ," + ay)
      if((sudostart1[x][y]+"")===(placement+"")&&!((ay===y)&&(ax===x))){
        //console.log("in box")
        return false
      }
    }
  }

  for(let i = 0; i<sudostart1[0].length; i++){
    if((sudostart1[i][ay]+"")===(placement+"")&&i!=ax){
      //console.log("in vert")
      return false
    }
  }
  for(let i = 0; i<sudostart1[0].length; i++){
    if((sudostart1[ax][i]+"")===(placement+"")&&i!=ay){
      //console.log("in hort")
      return false
    }
  }
  return true
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
      if (array[y][x] != undefined) {
        drawText(array[y][x], (x * spacing), (y * spacing) + spacing, 'black', spacing)
      }
    }
  }
}

const printSudo = (array) => {
  let str = "";
  let line = "-----------------"

  for (let y = 0; y < 9; y++) {

    if (y % 3 === 0 && y != 0) {
      str += line + "\n"
    }

    for (let x = 0; x < 9; x++) {

      if ((x) % 3 === 0) {
        str += "|"
      }
      else {
        str += " "
      }
      if (array[y][x][0] === "") {
        str = (str + "-")
      }
      else {
        str = (str + array[y][x])
      }
    }
    str = (str + "|" + "\n")
  }
  console.log(str)
}


const filled = (array) => {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (array[y][x]=== "") {
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
  if (find === 'fill') {
    return true
  }
  else {

    x = find[0]
    y = find[1]
  }

  for (let i = 1; i <= 9; i++) {
    let canbeplaced = canBePlaced(x, y, array, i)
    //printSudo(array)
    //console.log(x + ", " + y + " : " + i + " : " + canbeplaced)
    if (canbeplaced) {
      //console.log("placed")
      //console.log("_____________________")
      array[y][x] = i
      if (solve(array)) {
        return true
      }
      array[y][x] = ''
    }
    else {
      //console.log("_____________________")
    }


  }
  return false
}

solve(sudostart)
drawSudo(sudostart)