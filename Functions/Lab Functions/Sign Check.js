function determine(numOne,numTwo,numThree){
    if(numOne != 0 && numTwo!= 0 && numThree!= 0){
return countNegativeNums(numOne,numTwo,numThree) === 2 ?  "Positive":"Negative"
    }else{
        return"Positive"
    }


function countNegativeNums(numOne,numTwo,numThree){
let negativeNumsCount = 0;
if(numOne<0){
    negativeNumsCount++
} 
if(numTwo<0){
    negativeNumsCount++
} 
if (numThree<0){
negativeNumsCount++
}
return negativeNumsCount++
}




}

console.log(determine(-6,

    0,
    
    -14));