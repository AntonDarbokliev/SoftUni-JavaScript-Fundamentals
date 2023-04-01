function solve(arr) {
  let newArr = [];
  let i = 0;
  while (arr.length > 1) {
    newArr.push(arr[i] + arr[i + 1]);
    i++;
    if (newArr.length == arr.length - 1) {
      arr = newArr;
      i = 0;
      newArr = [];
    }
  }

  console.log(arr[0]);
}
solve([1]);
