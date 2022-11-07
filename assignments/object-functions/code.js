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