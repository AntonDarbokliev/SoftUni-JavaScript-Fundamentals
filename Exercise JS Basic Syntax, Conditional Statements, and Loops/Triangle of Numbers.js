function solve (number){
for(let currentNum = 1 ; currentNum<=number ; currentNum++){
let row = ""
    for(let j=1 ; j<=currentNum ; j++){
row += `${currentNum} `
}
console.log(`${row} `);
}
}
solve (10)