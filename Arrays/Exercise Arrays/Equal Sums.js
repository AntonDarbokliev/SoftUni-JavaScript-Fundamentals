function solve(arr) {
  let flag = false
  
    for (let i = 1; i < arr.length; i++) {
    let rightSum = 0;
    let leftSum = 0;
    let currentNum = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      leftSum += arr[j];
    }

    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
        console.log(i);
        flag = true
        break;
    }
  }

if(arr.length===1){
console.log(0);
}else if(flag === false){
    console.log("no");
}


}
solve([1,2]);
