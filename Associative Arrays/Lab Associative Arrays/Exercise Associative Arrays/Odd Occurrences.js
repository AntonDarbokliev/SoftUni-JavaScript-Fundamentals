function occurrences(string){
    let wordsArr = string.split(" ")
let map = new Map()
    for(let word of wordsArr){
if(!map.has(word.toLowerCase())){
map.set(word.toLowerCase(),1)
}else{

    map.set(word.toLowerCase(),map.get(word.toLowerCase())+1)
}
    }
    let printArr = []
for (const key of map) {
    if(key[1]%2!==0){
        printArr.push(key[0]);
    }
}

console.log(printArr.join(" "));

}occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
