function solve(number){
let division = 0;
 if(number%10 ==0){
    division = 10
}else if(number%7 == 0){
    division = 7
}else if(number%6 == 0){
    division = 6
}else if(number%3 == 0){
    division = 3
}else if(number%2 == 0){   
    division = 2
}else{
console.log("Not divisible");
}
if(division!==0){
console.log(`The number is divisible by ${division}`);
}
}
solve(2)