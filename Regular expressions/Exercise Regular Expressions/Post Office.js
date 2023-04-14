function postOffice(arr){
let string = arr[0]
let capitalLetters = string.match(/([#$%*&])[A-Z]+\1/g)
let capitalLettersString = ""
for(let i = 0;i<capitalLetters.length;i++){
 let CurrentcapitalLettersString = capitalLetters[i].substring(1,capitalLetters[0].length - 1)
 capitalLettersString+=CurrentcapitalLettersString
}
let wordLenghtAndCodeReg = string.match(/[6-9][0-9]:\d{2}/g)
let wordsToLookFor = new Map()
for(let el of wordLenghtAndCodeReg){
    let [ascii,length] = el.split(":")
if(capitalLettersString.includes(String.fromCharCode(ascii))){
wordsToLookFor.set(String.fromCharCode(ascii),Number(length) + 1)
}

}
let wordsToCheck = string.split("|")[2]
for(let word of wordsToCheck.split(" ")){
    let wordLength = word.length
    let firstLetter = word[0]
    if(wordsToLookFor.has(firstLetter) && wordsToLookFor.get(firstLetter) === wordLength){
        console.log(word);
    }
}

}postOffice(['Urgent"Mes$NASKO$sage.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])