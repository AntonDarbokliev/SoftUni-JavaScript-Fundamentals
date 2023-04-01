function muOnline(stringLine) {
  let health = 100;
  let bitCoins = 0;
  let isAlive = true;

  let seperateRooms = takeEachRoom(stringLine);
  for (let i = 0; i < seperateRooms.length; i++) {
    let currentRoom = seperateRooms[i];
    let roomElements = currentRoom.split(" ");
    let roomCounter = i + 1;

    switch (roomElements[0]) {
      case "potion":
        console.log(potion(roomElements));
        break;
      case "chest":
        console.log(chest(roomElements));
        break;
      default:
        console.log(monster(roomElements));
        if (isAlive == false) {
          console.log(`Best room: ${roomCounter}`);

          return;
        }
    }
  }

  if (isAlive) {
    console.log(`You've made it!\nBitcoins: ${bitCoins}\nHealth: ${health}`);
  }

  function takeEachRoom(stringLine) {
    let resultArr = stringLine.split("|");
    return resultArr;
  }

  function potion(arr) {
    let healthBoost = Number(arr[1]);
    let healthNeeded = 100 - health;
    let healthRegenerated = Math.min(healthBoost, healthNeeded);
    health += healthRegenerated;
    return `You healed for ${healthRegenerated} hp.\nCurrent health: ${health} hp.`;
  }

  function chest(arr) {
    let coinsFound = Number(arr[1]);
    bitCoins += coinsFound;
    return `You found ${coinsFound} bitcoins.`;
  }

  function monster(arr) {
    let monster = arr[0];
    let monsterDamage = Number(arr[1]);
    health -= monsterDamage;
    if (health > 0) {
      return `You slayed ${monster}.`;
    } else {
      isAlive = false;
      return `You died! Killed by ${monster}.`;
    }
  }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
