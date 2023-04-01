function solve(arr){
let sum = 0;
let sumModifiedArr = 0;
for(let i = 0;i<arr.length;i++){
let currentNum = arr[i]
sum += currentNum
if(currentNum % 2 == 0 ){
    arr[i] += i
}else{
    arr[i] -= i
}
sumModifiedArr += arr[i]
}
console.log(arr);
console.log(sum);
console.log(sumModifiedArr);
}
solve([5, 15, 23, 56, 35])