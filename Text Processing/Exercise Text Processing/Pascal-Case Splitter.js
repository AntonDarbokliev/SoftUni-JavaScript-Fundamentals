function pascalCaseSplitter(text){
let start = 0
let wordsArr = []
for(let i= 1;i<text.length;i++){
if(text[i] === text[i].toUpperCase() ){
wordsArr.push(text.substring(start,i))
start = i
}
}
wordsArr.push(text.substring(start))
return wordsArr.join(", ")
}
console.log(pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'))