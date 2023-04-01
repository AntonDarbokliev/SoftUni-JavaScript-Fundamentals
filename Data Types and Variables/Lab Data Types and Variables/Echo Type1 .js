function solve(parameter){
console.log(typeof parameter);
let isSuitable = typeof parameter === 'string'|| typeof parameter === 'number'
isSuitable ? console.log(parameter) : console.log('Parameter is not suitable for printing')
}
solve(14)