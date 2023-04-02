function flights(arr) {
  let flights = arr[0];
  let flightsToCancel = arr[1];
  let flightsStatusToPrint = arr[2][0];

  let flightsListArr = [];

  for (const currentFlight of flights) {
    let flightsList = {};
    let nameDestination = currentFlight.split(" ");
    flightsList.name = nameDestination[0];
    nameDestination.splice(0, 1);
    nameDestination = nameDestination.join(" ");
    flightsList.destination = nameDestination;
    flightsList.status = "Ready to fly";
    flightsListArr.push(flightsList);
  }

  for (const flightA of flightsToCancel) {
    let flightAName = flightA.split(" ");
    for (const flightB of flightsListArr) {
      if (flightB.name === flightAName[0]) {
        flightB.status = "Cancelled";
      }
    }
  }

  for (const flight of flightsListArr) {
    if (flight.status === flightsStatusToPrint) {
      console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
    }
  }
}
flights([
  [
    "WN269 Delaware",

    "FL2269 Oregon",

    "WN498 Las Vegas",

    "WN3145 Ohio",

    "WN612 Alabama",

    "WN4010 New York",

    "WN1173 California",

    "DL2120 Texas",

    "KL5744 Illinois",

    "WN678 Pennsylvania",
  ],

  [
    "DL2120 Cancelled",

    "WN612 Cancelled",

    "WN1173 Cancelled",

    "SK430 Cancelled",
  ],

  ["Cancelled"],
]);
