function solve(arr) {
  let evenNums = 0;
  let oddNums = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element % 2 === 0) {
      evenNums += element;
    } else {
      oddNums += element;
    }
  }

  console.log(evenNums - oddNums);
}
solve([2,4,6,8,10]);
