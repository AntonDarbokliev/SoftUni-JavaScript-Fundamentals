function solve(arr1,arr2){
let newArr = []
    for(let i  = 0;i<arr1.length;i++){
let firstArrChar = arr1[i]
let secondArrChar = arr2[i]
if(i % 2 === 0){
newArr.push(Number(firstArrChar) + Number(secondArrChar))
}else{
newArr.push(firstArrChar + secondArrChar)
}
}
console.log(newArr.join(" - "));

}
solve(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])