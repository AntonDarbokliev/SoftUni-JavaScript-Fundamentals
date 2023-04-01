function proccessOddNums(arr){
let result = getNumsAtOddPostions(arr)
return result.join(" ")

function getNumsAtOddPostions(arr){
    let newArr = []
for(let i = 1;i<arr.length;i +=2 ){
newArr.unshift(arr[i])
}
let result = newArr.map((a) => a*2)
return result
}


}
console.log(proccessOddNums([10, 15, 20, 25]));