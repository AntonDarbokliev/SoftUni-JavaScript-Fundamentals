function solve(arr,numRotations){
newArr = []
    for(let i = 0;i<numRotations;i++){
let firstElement = arr[0]
for(let j = 1;j < arr.length;j++){
let currentElement = arr[j]
    newArr.push(currentElement)

}
newArr.push(firstElement)
arr = newArr
newArr = []
}
console.log(arr.join(" "));

}
solve([51, 47, 32, 61, 21], 2)