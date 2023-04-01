function arrayManipulations(arr){
let firstElArr = getArray(arr)
let result = performManipulations(firstElArr,arr)
return result.join(" ")

function getArray(arr){
let result = []
result = arr[0].split(" ").map(Number)
return result;
}

function performManipulations(firstElement,OriginalArr){

for(let i = 1;i<OriginalArr.length;i++){
let currentManipulation = OriginalArr[i].split(" ")
switch(currentManipulation[0]){
    case"Add":
    firstElement.push(Number(currentManipulation[1]))
    break;
    case"Remove":
    firstElement =  firstElement.filter((a)=>a !== Number(currentManipulation[1]))
    break;
    case "RemoveAt":
        firstElement.splice(Number(currentManipulation[1]),1)
     break;
     case"Insert":
     firstElement.splice(Number(currentManipulation[2]),0,Number(currentManipulation[1]))
     break;
}

}
return firstElement
}


}
console.log(arrayManipulations(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2']));