function santaHelper(arr){
let key = Number(arr.shift())
let end = arr.pop()
let newString = ""
let regExp = /@(?<name>[A-Za-z]+)[^@!:>-]+(?<behaviour>![G]!)/gm
for(let child of arr){
    for(let letter of child){
let letterCode = letter.charCodeAt(0)
newString += String.fromCharCode(letterCode - key)
    }
    let matches = newString.matchAll(regExp)
    for(let match of matches){
        console.log(match.groups.name);
    }
    newString = ""
}


}santaHelper(['3',

'N}eideidmk$\'(mnyenmCNlpamnin$J$',

'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',

'ppqmkkkmnolmnnCEhq/vkievk$Q$',

'yyegiivoguCYdohqwlqh/kguimhk$J$',

'end'])