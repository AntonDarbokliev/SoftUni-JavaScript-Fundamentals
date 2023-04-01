function solve(groupSize,typeOfGroup,day){

let studentsPrice = 0;
let buisnessPrice = 0;
let regularPrice = 0;

switch(day){
case"Friday":
studentsPrice = 8.45
buisnessPrice = 10.90
regularPrice = 15
break;
case"Saturday":
studentsPrice = 9.80
buisnessPrice = 15.60
regularPrice = 20
break;
case"Sunday":
studentsPrice = 10.46
buisnessPrice = 16
regularPrice = 22.50
break;
}
let totalPrice = 0;

switch(typeOfGroup){
case"Students":
totalPrice = groupSize * studentsPrice
break;
case"Business":
totalPrice = groupSize * buisnessPrice
break;
case"Regular":
totalPrice = groupSize * regularPrice
break;
}


if(typeOfGroup==="Students" && groupSize>=30 ){
    totalPrice *=  0.85
}else if(typeOfGroup==="Business"&&groupSize>=100 ){
    totalPrice -= (10 * buisnessPrice)
}else if (typeOfGroup==="Regular"&&groupSize>=10 && groupSize<=20 ){
    totalPrice = totalPrice* 0.95

}
console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
solve(40,"Regular","Saturday")