function solve(num){

let isAmazing = false

let sum = 0;
numberText = num.toString();


    for(let i = 0;i<= numberText.length-1;i++){
let currentDigit = Number(numberText[i])
sum+=currentDigit
}
let sumText = sum.toString();


for(let i = 0;i<=sumText.length;i++){
let currentDigit = sumText[i]

if(currentDigit === '9'){
    isAmazing = true
     break;
}
}


console.log(`${num} Amazing? ${isAmazing ? "True":"False"}`);

}
solve(999)