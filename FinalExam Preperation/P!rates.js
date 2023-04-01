function pirates(arr){
let citiesPopulation = new Map()
let citiesGold = new Map()
for(let city of arr){
    if(city === "Sail"){
        break;
    }
    let[currentCity,population,gold] = city.split("||")
    if(citiesPopulation.has(currentCity)&&citiesGold.has(currentCity)){
let currentPopulation = citiesPopulation.get(currentCity)
let currentGold = citiesGold.get(currentCity)
citiesPopulation.set(currentCity,currentPopulation+Number(population))
citiesGold.set(currentCity,currentGold+Number(gold))
continue;
    }
    citiesPopulation.set(currentCity,Number(population))
    citiesGold.set(currentCity,Number(gold))
}

let command = arr[0]
while(command!=="Sail"){
    arr.shift()
    command = arr[0]
}
arr.shift()
for(let action of arr){
if(action === "End"){
    break;
}
    let [event,town,parameterThree,parameterFour] = action.split("=>")
    switch(event){
case"Prosper":
prosper(town,parameterThree)
break;
case"Plunder":
plunder(town,parameterThree,parameterFour)
break;
    }
}
let townsLeft = [...citiesPopulation.keys()]
if(townsLeft.length > 0){
    console.log(`Ahoy, Captain! There are ${townsLeft.length} wealthy settlements to go to:`);
    for(let town of townsLeft){
    console.log(`${town} -> Population: ${citiesPopulation.get(town)} citizens, Gold: ${citiesGold.get(town)} kg`);
    }
}else{
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
}
function plunder(town,people,gold){
        let currentPopulation = citiesPopulation.get(town)
        let currentGold = citiesGold.get(town)
        citiesPopulation.set(town,currentPopulation-Number(people))
        citiesGold.set(town,currentGold-Number(gold))
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        if(citiesPopulation.get(town)===0||citiesGold.get(town)===0){
            console.log(`${town} has been wiped off the map!`);
            citiesPopulation.delete(town)
            citiesGold.delete(town)
    }
}
function prosper(town,gold){
if(Number(gold)<0){
    console.log('Gold added cannot be a negative number!');
}else{
    let currentGold = citiesGold.get(town)
    citiesGold.set(town,Number(currentGold)+Number(gold))
    console.log(`${gold} gold added to the city treasury. ${town} now has ${citiesGold.get(town)} gold.`);
}
}
}pirates(["Nassau||95000||1000",

"San Juan||930000||1250",

"Campeche||270000||690",

"Port Royal||320000||1000",

"Port Royal||100000||2000",

"Sail",

"Prosper=>Port Royal=>-200",


"Plunder=>Nassau=>94000=>750",

"Plunder=>Nassau=>1000=>150",

"Plunder=>Campeche=>150000=>690",


"End"])