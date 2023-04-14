function rageQuit(line){
let digitsRegExp = /\d+/g
let symbolsRegExp = /\D+/g

let symbolsArr = line[0].match(symbolsRegExp)
let numbersArr = line[0].match(digitsRegExp)
let resultString = ""
for(let i = 0;i<numbersArr.length;i++){
    let currentNumber = Number(numbersArr[i])
    let currentSymbol = symbolsArr[i]
    for(let i = 0;i<currentNumber;i++){
resultString+=currentSymbol.toUpperCase()
    }
}
let uniqueSymbolString = ""
for(let letter of resultString){
    if(!uniqueSymbolString.includes(letter)){
uniqueSymbolString += letter
    }
}
console.log(`Unique symbols used: ${uniqueSymbolString.length}\n${resultString}`);
}
rageQuit([])