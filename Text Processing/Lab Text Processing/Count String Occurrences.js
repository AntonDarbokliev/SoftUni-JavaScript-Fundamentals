function countOccurrences(string,word){
let stringArr = string.split(` `)
let count = 0
for(let wordArr of stringArr){
    if(wordArr === word){
        count++
    }
}
return count
}
console.log(countOccurrences('softuni is great place for learning new programming languages',
 
`softuni`)); 