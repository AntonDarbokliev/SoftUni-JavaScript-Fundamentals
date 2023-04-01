function finalPrice(product, quantity) {
  let result = (determineProductPrice(product) * quantity).toFixed(2);

  return result;

  function determineProductPrice(product) {
    let price = 0;
    switch (product) {
      case "coffee":
        price = 1.5;
        break;
      case "water":
        price = 1;
        break;
      case "coke":
        price = 1.4;
        break;
      case "snacks":
        price = 2.0;
        break;
    }
    return price;
  }
}
console.log(finalPrice("coffee", 2));
