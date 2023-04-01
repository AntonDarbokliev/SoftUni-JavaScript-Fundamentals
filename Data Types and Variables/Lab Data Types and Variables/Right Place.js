function solve(string,char,match){
let concatenated = ''
    for(let i = 0;i<string.length;i++){
        string[i] !='_' ? concatenated +=string[i] : concatenated += char
}
concatenated === match ? console.log("Matched"):console.log("Not Matched");
}
solve('Str_ng', 'I','Strong')