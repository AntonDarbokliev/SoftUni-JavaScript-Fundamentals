function cardGame(arr) {
  let playerSum = 0;
  let players = new Map();
  let playersWithCards = new Map();

  for (let player of arr) {
    let [name, card] = player.split(": ");
    let seperatedCards = card.split(", ");

    if (!playersWithCards.has(name)) {
      playersWithCards.set(name, new Set());
    }
    let currentCardsSet = playersWithCards.get(name);
    for (let card of seperatedCards) {
      currentCardsSet.add(card);
    }
    playersWithCards.set(name, currentCardsSet);
  }
  for (let arr of playersWithCards.entries()) {
    let name = arr[0];
    let cards = arr[1];

    for (let card of cards) {
      let firstNum = 0;
      let secondNum = 0;
      let splitCards = card.split("");
      let type = splitCards.pop();
      let power = splitCards.join("");
      switch (power) {
        case "J":
          firstNum = 11;
          break;
        case "Q":
          firstNum = 12;
          break;
        case "K":
          firstNum = 13;
          break;
        case "A":
          firstNum = 14;
          break;
        default:
          firstNum = Number(power);
      }

      switch (type) {
        case "S":
          secondNum = 4;
          break;
        case "H":
          secondNum = 3;
          break;
        case "D":
          secondNum = 2;
          break;
        case "C":
          secondNum = 1;
          break;
      }

      playerSum += firstNum * secondNum;
      if (players.has(name)) {
        let currentSum = players.get(name);
        players.set(name, currentSum + playerSum);
      } else {
        players.set(name, playerSum);
      }

      playerSum = 0;
    }
  }

  for (let [name, score] of players.entries()) {
    console.log(`${name}: ${score}`);
  }
}

cardGame([
  "John: 2C, 4H, 9H, AS, QS",

  "Slav: 3H, 10S, JC, KD, 5S, 10S",

  "Alex: 6H, 7S, KC, KD, 5S, 10C",

  "Thomas: QH, QC, JS, JD, JC",

  "Slav: 6H, 7S, KC, KD, 5S, 10C",

  "Thomas: QH, QC, JS, JD, JC",

  "Alex: 6H, 7S, KC, KD, 5S, 10C",

  "Thomas: QH, QC, JS, JD, JC",

  "John: JD, JD, JD, JD",
]);