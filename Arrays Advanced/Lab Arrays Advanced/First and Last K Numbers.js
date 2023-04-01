function firstAndLastKNumbers(arr){
return printKNumbers()

function getFirstKNumbers(arr){
let k = arr[0]
let firstKNumbers = arr.slice(1,k+1)
return firstKNumbers.join(" ")
}

function  getLastKNumbers(arr){
let k = arr[0]
let lastKNumbers = arr.slice(arr.length-k)
return lastKNumbers.join(" ")
}

function printKNumbers(){
console.log(getFirstKNumbers(arr));
console.log(getLastKNumbers(arr));

}

}
firstAndLastKNumbers([5,7, 8, 9, 5, 6, 7])