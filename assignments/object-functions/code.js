const getX = (object) =>{
  return object.x
}

const point = (x, y) =>{
  return {"x" : x, "y" : y}
}

const emptyObject = () =>{
  return {}
}

const distance = (point1, point2) =>{
  return Math.sqrt((point1.x - point2.x)**2 + (point1.y - point2.y)**2)
}

const midpoint = (point1, point2) =>{
  return {"x" : (point2.x+point1.x)/2, "y" : (point2.y+point1.y)/2}
}

const sumSalaries = (array) => {
  let sum = 0;
  for(let i = 0; i<array.length; i++){
    sum+=array[i].salary
  }
  return sum
}