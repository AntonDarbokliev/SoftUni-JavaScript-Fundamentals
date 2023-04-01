function solve(num){
let isPrime = true
    if(num % 2 === 0 & num!==2){
        isPrime = false
}else if(num % 3 === 0 & num !== 3 ){
    isPrime = false
}else if(num % 4 === 0 & num !== 4 ){
    isPrime = false
}else if(num % 5 === 0 & num !== 5 ){
    isPrime = false
}else if(num % 6 === 0 & num !== 6 ){
    isPrime = false
}else if(num % 7 === 0 & num !== 7 ){
    isPrime = false
}else if(num % 8 === 0 & num !== 8 ){
    isPrime = false
}else if(num % 9 === 0 & num !== 9 ){
    isPrime = false
}
console.log(isPrime);

}
solve(4)