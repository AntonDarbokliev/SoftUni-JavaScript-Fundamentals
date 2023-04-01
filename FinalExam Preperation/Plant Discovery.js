function plantDiscovery(arr){
let numberOfPlants = Number(arr.shift())
let plantsRarity = new Map()
let command = arr[0]
let i = 0
let plantsRating = new Map()
while(i<numberOfPlants){
    let [plant,rating] = command.split("<->")
    plantsRarity.set(plant,Number(rating))
    plantsRating.set(plant,[])
    arr.shift()
    command = arr[0]
    i++
}
for(let command of arr){
    if(command === "Exhibition"){
        break;
    }
let [action,plant,delimeter,number] = command.split(" ")
if(!plantsRarity.has(plant)&&!plantsRating.has(plant)){
    console.log("error");
    continue
}
switch (action) {
    case "Rate:":
        
        rate(plant,number)
        break;
case"Update:":
update(plant,number)
break;
case"Reset:":
reset(plant)
        break;
}
}
let plants = [...plantsRarity.keys()]
console.log(`Plants for the exhibition:`);
for(let plant of plants){
let numberOfRatings = plantsRating.get(plant).length
let averageRating = 0
if(plantsRating.get(plant).length > 0){
    averageRating = plantsRating.get(plant).reduce((acu,b)=> acu + b,0) / numberOfRatings
}
console.log(`- ${plant}; Rarity: ${plantsRarity.get(plant)}; Rating: ${averageRating.toFixed(2)}`);
}
function rate(plant,rating){
let plantRatings = plantsRating.get(plant)
plantRatings.push(Number(rating))
}
function update(plant,newRarity){
    plantsRarity.set(plant,Number(newRarity))
}
function reset(plant){
     plantsRating.set(plant,[])
}
}plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
