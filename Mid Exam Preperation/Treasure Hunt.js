function loot(arr){
    arr.pop()
let loot = arr.shift().split("|")

for(let i = 0;i<arr.length;i++){
let command = arr[i].split(" ")

switch(command[0]){
    case"Loot":
    lootItem(loot,command)
    break;
    case"Drop":
    drop(loot,command)
    break;
    case"Steal":
    steal(loot,command)
}

}
let sum = 0
if(loot.length>0){
    for(let i = 0;i<loot.length;i++){
        let currentLoot = loot[i]
        sum+=currentLoot.length
    }
    let averageGain = sum/loot.length
    
    return `Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`
    
}
return "Failed treasure hunt."

function lootItem(arr,items){
for(let i = 1;i<items.length;i++){
if(!arr.includes(items[i])){
    arr.unshift(items[i])
}
}

return arr
}

function drop(arr,items){
if(items[1]>=0&&items[1]<arr.length){
    arr.push(arr[items[1]])
    arr.splice(items[1],1)
}
return arr
}

function steal(arr,items){
    let printArr = []
    for(let i = 1;i<=items[1];i++){
        if(arr.length>0){
            printArr.unshift(arr.pop()) 
        }else{
            break;
        }   
    }
    console.log(printArr.join(", "));
    return arr
}


}
console.log(loot((["Diamonds|Silver|Shotgun|Gold",

 "Steal 6", 
 "Yohoho!"])));