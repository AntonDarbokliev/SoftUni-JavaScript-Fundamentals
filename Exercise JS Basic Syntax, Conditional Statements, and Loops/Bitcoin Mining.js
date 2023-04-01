function solve(array) {
  let totalMoney = 0;
  let dayOfFirstCoin = 0;
  let daysPassed = 0;
  let coinsBought = 0;
  let flag = false;

  for (let i = 0; i <= array.length - 1; i++) {
    let currentDay = array[i];
    daysPassed++;
    if (daysPassed % 3 === 0) {
      currentDay *= 0.7;
    }
    totalMoney += currentDay * 67.51;
    while (totalMoney >= 11949.16) {
      totalMoney -= 11949.16;
      coinsBought++;
    }

    if (coinsBought >= 1 && flag != true) {
      dayOfFirstCoin = daysPassed;
      flag = true;
    }
  }
  console.log(`Bought bitcoins: ${coinsBought}`);
  if (coinsBought > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstCoin}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124]);
