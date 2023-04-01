function reciveOddAndEvenSum(number){
return `Odd sum = ${loopNumberGetOddSum(number)}, Even sum = ${loopNumberGetEvenSum(number)}`


function loopNumberGetEvenSum(number){
let numString = String(number)
let evenSum = 0;
    for(let i = 0;i<numString.length;i++){
if(Number(numString[i])% 2 === 0){
evenSum +=Number(numString[i])
}
    }
    return evenSum

}

function loopNumberGetOddSum(number){
    let numString = String(number)
    let OddSum = 0;
        for(let i = 0;i<numString.length;i++){
    if(Number(numString[i])% 2 !== 0){
        OddSum +=Number(numString[i])
    }
        }
        return OddSum
    
    }

}
console.log(reciveOddAndEvenSum(1000435));

