function listProducts(arr){
let result = sortAlphabetical(arr)
result = numberProducts(result)

return result
function sortAlphabetical(arr){
    let result = arr.sort()
    return result
}

function numberProducts(arr){
let result = []
    for(let i = 0;i<arr.length;i++){
result.push(`${i+1}.${arr[i]}`)
}
return result.join("\n")

}


}
console.log(listProducts(['Watermelon', 'Banana', 'Apples']));