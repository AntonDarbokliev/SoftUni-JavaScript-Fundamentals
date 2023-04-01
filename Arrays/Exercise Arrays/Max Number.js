function solve(arr){
let newArr = []
    for(let i = 0;i<arr.length;i++){
let flag = true
let currentNum = arr[i]
for(let j = i + 1;j<arr.length;j++){
if(currentNum<=arr[j]){
flag = false
    break;
}
}
if(flag === true){
   newArr.push(currentNum)
}

}

console.log(newArr.join(" "));

}
solve([14, 24, 3, 19, 15, 17])