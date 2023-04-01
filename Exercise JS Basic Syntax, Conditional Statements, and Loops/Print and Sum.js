function solve(number1,number2){
    let sum =0
    let concatanetedNums = ""
for(let i =number1;i<=number2;i++){
sum += i
    concatanetedNums += i + " "
}
console.log(concatanetedNums.trim());
console.log(`Sum: ${sum}`);

}
solve(5,10)