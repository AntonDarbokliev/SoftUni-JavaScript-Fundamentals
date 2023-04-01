function searchForNum(arr1,arr2){
let numsToTakeFromFirstArr = arr2[0]
let numsToTakeFromTakenArr = arr2[1]
let numToSearchFor = arr2[2]

let result = checkForNumInclusion(deleteNumsFromTakenElements(takeFirstNElements(arr1)))
return `Number ${numToSearchFor} occurs ${result} times.`

function takeFirstNElements(arr){
let result = arr.slice(0,numsToTakeFromFirstArr)
return result
}

function deleteNumsFromTakenElements(arr){
arr.splice(0,numsToTakeFromTakenArr)
return arr
}

function checkForNumInclusion(arr){
let result = arr.filter((a) => a === numToSearchFor)
return result.length
}


}
console.log(searchForNum([7, 1, 5, 8, 2, 7],

    [3, 1, 5]));