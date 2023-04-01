function solve(num){
let j = 1;
let sum = 0;

    for(let i = 1;j<=num;i+=2){
console.log(i);
j++
sum+=i
}
console.log(`Sum: ${sum}`);

}
solve(5)