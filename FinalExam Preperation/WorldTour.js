function worldTour(arr){
let string = arr.shift()
for(let command of arr){
    if(command === "Travel"){
        break;
    }
    let [action,parameterOne,parameterTwo] = command.split(":")
    switch(action){
        case"Add Stop":
        addStop(Number(parameterOne),parameterTwo)
        console.log(string);
        break;
        case"Remove Stop":
        remove(Number(parameterOne),Number(parameterTwo))
        console.log(string);
        break;
        case"Switch":
        replace(parameterOne,parameterTwo)
        console.log(string);
    }
}
console.log(`Ready for world tour! Planned stops: ${string}`);

function addStop(index,stop){
if(string[index]!== undefined){
    let firstHalf = string.substring(0,index)
    let secondHalf = string.substring(index)
    string = firstHalf + stop + secondHalf
}
}
function remove(startIndex,endIndex){
 if(string[startIndex]!== undefined && string[endIndex]!== undefined){
   let stringToRemove = string.substring(startIndex,endIndex+ 1)
    string = string.replace(stringToRemove,"")
 }
}
function replace(oldString,newString){
    let regeExp = new RegExp(`${oldString}`,"g")
    string = string.replace(regeExp,newString)
}
}worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
