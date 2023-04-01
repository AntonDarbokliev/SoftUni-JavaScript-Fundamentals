function sort(arr) {
  let ascendingArr = getAscendingNums(arr);
  let result = putTwoArraysIntoOne(ascendingArr);
  return result;
  
  
  function getAscendingNums(arr) {
    newArr = arr.sort((a, b) => a - b);
    return arr;
  }

  function putTwoArraysIntoOne(arr){
let newArr = []
for(let i = 0;i<arr.length /2 ;i++){
if(i== (arr.length / 2) - 1){
  newArr.push(arr[arr.length - i -1])
  break;
}

 newArr.push(arr[arr.length - i -1])
  newArr.push(arr[i])
}

return newArr
  }

 
}
console.log(sort([ 1,2,3,4,5,6,7,8,9]));
