function solve(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (num % 2 === 0) {
      result += num;
    }
  }
  console.log(result);
}
solve(["1", "2", "3", "4", "5", "6"]);
