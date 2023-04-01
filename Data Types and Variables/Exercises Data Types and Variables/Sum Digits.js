function solve(num){
let numText = num.toString()
let sum = 0
for(let i = 0;i<= numText.length - 1;i++){
sum+=Number(numText[i])
}
console.log(sum);

}

solve(245678)