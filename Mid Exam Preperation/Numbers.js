function numbers(string){
let numbers = string.split(" ")


let averageNum = getAverageNum(numbers)
let result = getCriteriaNums(averageNum,numbers)
result.sort((a,b)=> b-a)
while(result.length>5){
result.pop()
}
if(result.length == 0){
    result = "No"
    return result
}
return result.join(" ")

function getAverageNum(numbers){
    let parsedNumbers = numbers.map(Number)
    let result = (parsedNumbers.reduce((a,b)=> a+b)) / numbers.length
    return result
}

function getCriteriaNums(averageNum,numbers){
    let parsedNumbers = numbers.map(Number)
let result  = parsedNumbers.filter(a => a > averageNum)
return result

}


}
console.log(numbers('1'))