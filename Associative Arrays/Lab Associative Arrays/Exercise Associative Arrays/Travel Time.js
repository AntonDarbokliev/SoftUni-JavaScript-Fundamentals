function travelTime(arr) {
  let destinationsMap = new Map();

  for (let destination of arr) {
    let [country, town, travelCost] = destination.split(" > ");
    if (!destinationsMap.has(country)) {
      destinationsMap.set(country, new Map());
    }
    let innerMap = destinationsMap.get(country);

    if (!innerMap.has(town)) {
      innerMap.set(town, travelCost);
    }

    if (innerMap.get(town) > Number(travelCost)) {
      innerMap.set(town, travelCost);
    }
  }

  let sortedCountries = [...destinationsMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  for (let [country, town] of sortedCountries) {
    let sortedPrices = [...town.entries()].sort((a, b) => Number(a[1])-Number(b[1]));
    let output = sortedPrices.map((keys) => `${keys[0]} -> ${keys[1]}`).join(" ")
    console.log(`${country} -> ${output}`);
  }
}
travelTime([
    "Bulgaria > Sopot > 800",
    
    "Bulgaria > Sofia > 500",

  "France > Paris > 2000",

  "Albania > Tirana > 1000",

  "Bulgaria > Sofia > 200",
]);
