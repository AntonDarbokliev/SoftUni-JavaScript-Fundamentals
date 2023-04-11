function findWord(word,text){
let wordArr = text.split(' ')
let isFound = false
for (let currentWord of wordArr){
    if(currentWord.toLowerCase() === word.toLowerCase()){
        console.log(word);
        isFound = true
    }
}
if(!isFound){
    console.log(`${word} not found!`)
}

}
findWord('python',

'JavaScript is the best programming language')