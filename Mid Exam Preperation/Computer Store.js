function computerStore(arr){
let sumWithNoTax = 0;
let tax  = 0

let i = 0
let command = arr[i]

while(command!=="special" && command!=="regular"){
command = Number(arr[i])
if(command<0){
    console.log("Invalid price!");
    i++
    continue;
}
sumWithNoTax += command
tax += command * 0.20
i++
command = arr[i]
}
let totalPrice = sumWithNoTax + tax
if(arr[arr.length - 1]==="special"){
    totalPrice*=0.90
}

if(totalPrice === 0){
    console.log("Invalid order!");
}else{
    console.log(`Congratulations you've just bought a new computer!` + 
    `\nPrice without taxes: ${sumWithNoTax.toFixed(2)}$`+
    `\nTaxes: ${(tax).toFixed(2)}$`+
    `\n-----------`+
    `\nTotal price: ${totalPrice.toFixed(2)}$`) 
}




}
computerStore(([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ]))