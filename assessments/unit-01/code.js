// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...

const averageWeight = (weight, num) => {
  return weight/num;
}

const hypotenuse = (a, b) => {
  return Math.sqrt(a**2 + b**2);
}

const maxRadius = (width, height) => {
  return width > height ? height/2 : width/2;
}

const numCircles = (r, width) => {
  return width/(r*2);
}

const offset = (width, fig_width) => {
  return (width-fig_width)/2;
}

const canSleepIn = (isWeekday, isVacation) => {
  return !isWeekday || isVacation;
}
