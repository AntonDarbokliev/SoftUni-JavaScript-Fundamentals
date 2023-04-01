function solve(num, array) {
  let result = "";
  for (let i = num - 1; i >= 0; i--) {
    let currentElement = array[i];
    result += currentElement + " ";
  }
  console.log(result);
}
solve(3, [10, 20, 30, 40, 50]);
