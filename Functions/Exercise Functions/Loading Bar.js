function loadingBar(number){

let arr = putInPercentSignsAndStartBracket(number)

let result = `${number}% ` + putInDotsAndEndBracket(arr) + `\n${determineLoadingPhaseAndPrint(number)}`
if(number===100){
    result = `${determineLoadingPhaseAndPrint(number)}` + `\n${putInDotsAndEndBracket(arr)}` 
}

return result


function putInPercentSignsAndStartBracket(number){
let amountOfSigns = number / 10
let string = "["
for(let i = 1;i<=amountOfSigns;i++){
    string += "%"
}
return string
}

function putInDotsAndEndBracket(string){
for(let i = string.length - 1;i<10;i++){
string += "."
}
string += "]"
return string
}

function determineLoadingPhaseAndPrint(number){
    if(number<100){
         return 'Still loading...'
    }
       return '100% Complete!';
    
}


    

}
console.log(loadingBar(100));