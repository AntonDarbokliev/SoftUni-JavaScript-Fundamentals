function solve(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      if (currentNum + arr[k] === target ) {
        console.log(`${currentNum} ${arr[k]}`);
      }
    }
  }
}
solve([1, 7, 6, 2, 19, 23],8);
