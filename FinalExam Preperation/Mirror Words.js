function mirrorWords(arr){
let matchRegExp = /([#@])(?<firstWord>[a-zA-Z]{3,})\1\1(?<secondWord>[a-zA-Z]{3,})\1/g
let matchCount = 0
let matches = matchRegExp.exec(arr[0])
let mirrorWordsArr = []
while (matches !== null){
    matchCount++
    checkForMirror(matches.groups.firstWord,matches.groups.secondWord)
    matches = matchRegExp.exec(arr[0])
}
if(matchCount > 0){
    console.log(`${matchCount} word pairs found!`)
}else{
    console.log("No word pairs found!");
}

if(mirrorWordsArr.length > 0){
        console.log(`The mirror words are:\n${mirrorWordsArr.join(", ")}`); 
}else{
    console.log("No mirror words!");
}
function checkForMirror(word1,word2){
    if(word1 === word2.split("").reverse().join("")||word2 === word1.split("").reverse().join("")){
        mirrorWordsArr.push(`${matches.groups.firstWord} <=> ${matches.groups.secondWord}`)
    }
}

}mirrorWords([

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    
    ])