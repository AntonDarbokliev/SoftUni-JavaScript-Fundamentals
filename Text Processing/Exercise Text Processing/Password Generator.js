function passwordGenerator(arr){
let vowels = [`a`, `e`, `i`, `o`, `u`,]
let [firstString,secondString,thirdString] = arr
let concatenatedString = firstString + secondString

let res = ""
let vowelIndexCounter = 0
for(let i = 0;i<concatenatedString.length;i++){
    let letter = concatenatedString[i]
    if(i == 12){
        debugger
    }
if(vowels.includes(letter)){
    if(res === ''){
        res = concatenatedString.replace(letter,(thirdString[vowelIndexCounter]).toUpperCase())
    }else{
        if(vowelIndexCounter > thirdString.length - 1){
            vowelIndexCounter = 0
        }
        res = res.replace(letter,(thirdString[vowelIndexCounter]).toUpperCase())
    }
    vowelIndexCounter++
}
}
return `Your generated password is ${res.split('').reverse().join('')}`
}
console.log(passwordGenerator([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ]));