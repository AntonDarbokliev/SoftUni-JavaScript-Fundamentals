function solve(arr){
let result = ""
    for(let i = arr.length - 1;i>=0;i--){
let element = arr[i]
result+=element + " "
    }
console.log(result.trim());

}
solve(['a', 'b', 'c', 'd', 'e'])