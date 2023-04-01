function solve(arr) {
  let newArr = [];
  let longestSequence = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    let lastNumber = arr[i - 1];
    let nextNumber = arr[i + 1];

    if (lastNumber === currentNumber || currentNumber == nextNumber) {
      if (currentNumber !== newArr[0]) {
        newArr = [];
      }
      newArr.push(currentNumber);
    } else {
      if (newArr.length > longestSequence) {
        longestSequence = newArr;
        newArr = [];
      }
    }
  }
  if (newArr.length > longestSequence.length){
    longestSequence = newArr
  }
  console.log(longestSequence.join(" "));
}
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
