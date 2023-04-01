function adAstra(arr){
let string = arr[0] 
let regExp = /([#|])(?<item>[a-zA-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
let matches = string.matchAll(regExp)
let totalCalories = 0
let resultArr = []
for(let match of matches){
let item = match.groups.item
let expirationDate =  match.groups.date
let calories = Number(match.groups.calories)
totalCalories += calories
resultArr.push(`Item: ${item}, Best before: ${expirationDate}, Nutrition: ${calories}`)
}
let daysLasting = Math.floor(totalCalories / 2000)
console.log(`You have food to last you for: ${daysLasting} days!`);
console.log(resultArr.join("\n"));
}adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])