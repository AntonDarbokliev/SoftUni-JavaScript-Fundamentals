function sortNumbersArr(arr) {
  arr.map(Number);
  let sortedArr = []
  for(let i = 0;i<arr.length;i++){
let currentNum = arr[i]
if(currentNum<0){
    sortedArr.unshift(currentNum)
}else {
    sortedArr.push(currentNum)
}


  }
  return sortedArr.join("\n");
}
console.log(sortNumbersArr(['7', '-2', '8', '9']));
