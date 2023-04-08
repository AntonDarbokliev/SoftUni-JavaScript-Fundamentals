function piccolo(arr) {
  let parkingLot = new Set();

  for (let car of arr) {
    let [direction, licensePlate] = car.split(" ");
    if (direction === "IN,") {
      parkingLot.add(licensePlate);
    } else {
      parkingLot.delete(licensePlate);
    }
  }
  let sortedLicensePlates = [...parkingLot].sort((a, b) =>a.localeCompare(b));

  if (sortedLicensePlates.length > 0) {
    console.log(sortedLicensePlates.join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}
piccolo([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);
