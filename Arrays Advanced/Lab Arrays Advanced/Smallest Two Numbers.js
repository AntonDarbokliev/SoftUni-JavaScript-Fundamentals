function smallestTwoNums(arr) {
  let sortedArr = sortArrayAscending(arr);
  let result = getFirstTwoNumsSortedArr(sortedArr);
  return result;

  function sortArrayAscending(arr) {
    arr.sort((a, b) => a - b);
    return arr;
  }

  function getFirstTwoNumsSortedArr(arr) {
    let result = String(arr[0]) + " " + String(arr[1]);
    return result;
  }
}
console.log(smallestTwoNums([3, 0, 10, 4, 7, 3]));
