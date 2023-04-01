function barCodes(arr){
let totalBarCodes = arr.shift()
let regex = /@#+[A-Z][a-zA-Z0-9]{4,}[A-Z]@#+/
for(let code of arr){
    if(regex.test(code)){
    let productGroup = "00"
    let numRegex = /\d/g
if(numRegex.test(code)){
    let nums = code.match(numRegex)
    productGroup = nums.reduce((acu,num)=>acu + num)
}
console.log(`Product group: ${productGroup}`);
    }else{
        console.log(`Invalid barcode`);
    }
}
}barCodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])