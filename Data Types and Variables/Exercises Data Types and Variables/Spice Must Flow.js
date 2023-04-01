function solve(yield){
let day = 0;
let totalSpice = 0;
let workerConsumption = 26;
while(yield>=100){
totalSpice+=(yield - workerConsumption)
yield-=10
day++

}
totalSpice-=workerConsumption
console.log(day);
console.log(totalSpice);

}
solve(111)