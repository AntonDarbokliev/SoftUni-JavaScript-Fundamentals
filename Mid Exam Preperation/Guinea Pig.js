function guineaRecources(arr) {
  arr.map(Number);
  let foodKg = arr[0];
  let hayKg = arr[1];
  let coverKg = arr[2];
  let pigWeightKg = arr[3];

  let isEnought = true;
  for (let i = 1; i <= 30; i++) {
    foodKg -= 0.3;
    if (i % 2 === 0) {
      hayKg -= foodKg * 0.05;
    }

    if (i % 3 === 0) {
      coverKg -= pigWeightKg / 3;
    }

    if (foodKg <= 0 || hayKg <= 0 || coverKg <= 0) {
      isEnought = false;
      return "Merry must go to the pet store!";
    }
  }

  if (isEnought) {
    return `Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(
      2
    )}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`;
  }
}
console.log(guineaRecources(["10", "5", "5.2", "1"]));
