function distinctArr(arr) {
    let result = addNonRepeatingElementsInNewArr(arr)
    return result
  function addNonRepeatingElementsInNewArr(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length; i++) {
      if (newArr.includes(arr[i])) {
        continue;
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr.join(" ");
  }

}
console.log(distinctArr([7, 8, 9, 7, 2, 3,

    4, 1, 2]));
