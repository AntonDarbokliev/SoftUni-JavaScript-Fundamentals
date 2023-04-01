function palidromeIntegers(arr){
for(let i = 0;i<arr.length;i++){
let numberBackwards = getNumberBackwards(arr[i])
let numberForwards = getNumber(arr[i])
 numberBackwards == numberForwards ? console.log("true"):console.log("false");

}

function getNumberBackwards(number){
    let numString = String(number)
    let numberBackwards = ""
    for(let i = numString.length - 1;i>=0;i--){
        numberBackwards+=numString[i]
    }
    
    return Number(numberBackwards)
    
    }

function getNumber(number){
    let numString = String(number)
    let numberForwards = ""
    for(let i = 0;i<numString.length;i++){
        numberForwards+=numString[i]
    }
    
    return Number(numString)

}


}
palidromeIntegers([32,2,232,1010]);

