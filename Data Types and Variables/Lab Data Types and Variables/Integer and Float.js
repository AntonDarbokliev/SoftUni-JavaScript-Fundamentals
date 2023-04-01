function solve(first,second,third){
let sum = first + second + third
let type = ''
if(sum % 1 ===0){
type = "Integer"
}else{
    type = "Float"
}

console.log(`${sum} - ${type}`);

}
solve(100, 200, 303)