function hardWord(arr){
let text = arr[0]
let wordsArr = arr[1]
let holesInText = text.split(" ").filter(word => word.startsWith("_"))
let res = ""
 for(let hole of holesInText){
    if(!hole.endsWith("_")){
        hole = hole.substring(0,hole.lastIndexOf("_") + 1)
    }
    let rightWord = wordsArr.filter(word => word.length === hole.length)
    if(res === ""){
        res = text.replace(hole,rightWord[0])
    }else{
        res = res.replace(hole,rightWord[0])
    }
 }

return res

} console.log( hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]));