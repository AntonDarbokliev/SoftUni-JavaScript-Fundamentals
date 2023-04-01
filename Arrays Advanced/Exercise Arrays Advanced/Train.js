function train(arr) {
  let wagons = findWagons(arr);
  let result = arrangePassangers(wagons, arr);
  return result.join(" ");

  function findWagons(arr) {
    let wagons = arr[0].split(" ");
    return wagons;
  }

  function arrangePassangers(wagonsArr, arr) {
    let numWagon = wagonsArr.map(Number);
    let avaibleSeatsPerWagon = Number(arr[1]);
    for (let i = 2; i < arr.length; i++) {
      let currentCommand = arr[i].split(" ");
      if (currentCommand[0] === "Add") {
        numWagon.push(Number(currentCommand[1]));
      } else {
        let passangers = Number(currentCommand[0]);
        for (let i = 0; i < wagonsArr.length; i++) {
          if (numWagon[i] + passangers <= avaibleSeatsPerWagon) {
            numWagon[i] += passangers;
            break;
          }
        }
      }
    }
    return numWagon;
  }
}
console.log(
  train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"])
);
