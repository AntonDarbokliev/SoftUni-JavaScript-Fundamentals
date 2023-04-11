function hashtag(text){
let wordsFoundArr= []
let wordIsValid = true
for(let word of text.split(" ")){
   if(word.length>1&& word.startsWith("#")){
    word = word.substring(1)
for(let letter of word){
    letter = letter.toLowerCase()
    if(letter.charCodeAt(0)< 96 || letter.charCodeAt(0) > 123){
        wordIsValid = false
    }
}
if(wordIsValid){
    wordsFoundArr.push(word)
}
wordIsValid = true
   }
}
return wordsFoundArr.join("\n")
}
console.log(hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign'));
