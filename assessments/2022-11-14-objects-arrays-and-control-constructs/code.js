// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height;
};

const higherPaid = (e1, e2) => {
  return e1.salary > e2.salary ? e1 : e2;
};

const isSamePoint = (p1, p2) => {
  return (p1.x === p2.x) && (p1.y === p2.y);
};

const totalWithTip = (bill, tipPercentage) => {
  return {"subtotal" : bill.subtotal, "tip" : bill.subtotal*tipPercentage, "total" : bill.subtotal+bill.subtotal*tipPercentage}
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {
  players.map(x => isWinner(x) ? x.wins++ : "")
  console.log(players)
};

const bigWinners = (players) => {
};

const fillTimesTable = (table) => {
};

const sums = (n) => {
};

const rule110 = (cells) => {
};
