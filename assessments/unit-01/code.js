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

const canGoToProm = (isSenior, isInvited, isExluded) => { 
  return (isSenior || isInvited) && !isExluded;
}

const getsSpeedingTicket = (mph, isGrouchy) => {
  return mph > 65 && isGrouchy || mph > 70 && !isGrouchy;
}

const moreThanTwiceAsLong = (str1, str2) => {
  return (str1.length*2) > str2.length;
}

const aFartherThanB = (num1, num2, num3) => {
  return Math.abs(num1-num2) > Math.abs(num3-num2);
}

const firstHalf = (str) => {
  return str.substring(0, str.length/2);
}


const secondHalf = (str) => {
  return str.substring(str.length/2, str.length);
}

const upDown = (str) => {
  return str.toUpperCase()+str;
}

const everyOther = (str) => {
  let str1 = '';
  for(let i = 0; i<str.length; i+=2){
    str1+=str.substring(i, i+1);
  }
  return str1;
}

const upDownLastCharacter = (str) => {
  const lastchar = str.substring(str.length-1, str.length-2);
  return lastchar.toUpperCase() + lastchar;
}