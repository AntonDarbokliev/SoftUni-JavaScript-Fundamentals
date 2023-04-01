function manOWar(arr) {
  let pirateSections = arr[0].split(">").map(Number);
  let warShipSections = arr[1].split(">").map(Number);
  let maxHealth = Number(arr[2]);

  let bothShipsAlive = true;

  let i = 3;
  let currentAction = arr[i].split(" ");
  while (currentAction[0] !== "Retire") {
    currentAction = arr[i].split(" ");
    switch (currentAction[0]) {
      case "Fire":
        if (
          fire(currentAction[1], currentAction[2]) ===
          "You won! The enemy ship has sunken."
        ) {
          console.log("You won! The enemy ship has sunken.");
          bothShipsAlive = false;
          return;
        }

        break;
      case "Defend":
        if (
          defend(currentAction[1], currentAction[2], currentAction[3]) ===
          "You lost! The pirate ship has sunken."
        ) {
          console.log("You lost! The pirate ship has sunken.");
          bothShipsAlive = false;
          return;
        }
        break;
      case "Repair":
        repair(currentAction[1], currentAction[2]);
        break;
      case "Status":
        console.log(status());
    }
    i++;
  }

  if (bothShipsAlive) {
    let pirateStatusSum = pirateSections.reduce((a, b) => a + b);
    let warShipStatusSum = warShipSections.reduce((a, b) => a + b);
    console.log(
      `Pirate ship status: ${pirateStatusSum}\nWarship status: ${warShipStatusSum}`
    );
  }

  function fire(index, damage) {
    if (index >= 0 && index <= warShipSections.length - 1) {
      let sectionUnderAttack = warShipSections[index];
      warShipSections.splice(index, 1, sectionUnderAttack - damage);

      if (warShipSections[index] <= 0) {
        return "You won! The enemy ship has sunken.";
      }
    }
    return warShipSections;
  }

  function defend(startIndex, endIndex, damage) {
    if (startIndex >= 0 && endIndex <= pirateSections.length - 1) {
      for (let i = startIndex; i <= endIndex; i++) {
        pirateSections[i] -= damage;
        //pirateSections.splice(i, 1, sectionUnderAttack - damage);
        if (pirateSections[i] <= 0) {
          return "You lost! The pirate ship has sunken.";
        }
      }
    }
    return pirateSections;
  }

  function repair(index, health) {
    if (index >= 0 && index <= pirateSections.length - 1) {
      let healthNeeded = maxHealth - pirateSections[index];
      let healthBoost = Math.min(health, healthNeeded);
      pirateSections[index] += healthBoost;
    }
    return pirateSections;
  }

  function status() {
    let criticalHealth = maxHealth * 0.2;
    let sectionsArr = [];
    sectionsArr = pirateSections.filter((a) => a < criticalHealth);
    return `${sectionsArr.length} sections need repair.`;
  }
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",

  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
