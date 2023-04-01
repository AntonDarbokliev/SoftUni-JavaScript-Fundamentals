function nfs(arr){
let numsOfCarsToObtain = Number(arr.shift())
let i = 0
let carsMileage = new Map()
let carsFuel = new Map()
while(i<numsOfCarsToObtain){
let currentCar = arr[0]
let [car,mileage,fuel] = currentCar.split("|")
carsMileage.set(car,Number(mileage))
carsFuel.set(car,Number(fuel))
arr.shift()
i++
}

for(let command of arr){
    if(command == "Stop"){
break;
    }
    let[action,car,paramOne,paramTwo] = command.split(" : ")
    switch(action){
case"Drive":
drive(car,Number(paramOne),Number(paramTwo))
break;
case"Refuel":
refuel(car,Number(paramOne))
break;
case"Revert":
revert(car,Number(paramOne))
break
    }
}
let cars = [...carsMileage.keys()]
for(let car of cars){
    console.log(`${car} -> Mileage: ${carsMileage.get(car)} kms, Fuel in the tank: ${carsFuel.get(car)} lt.`);
}

function drive(car,distance,fuel){
if(carsFuel.get(car)<fuel){
    console.log("Not enough fuel to make that ride");
}else{
 let currentMileage = carsMileage.get(car)
 carsMileage.set(car,currentMileage + distance)
 let currentFuel = carsFuel.get(car)
 carsFuel.set(car,currentFuel - fuel) 
 console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
 if(carsMileage.get(car)>=100000){
    console.log(`Time to sell the ${car}!`);
    carsMileage.delete(car)
    carsFuel.delete(car)
 }
}

}
function refuel(car,fuel){
let neededFuel = 75 - carsFuel.get(car)
let fuelToFillUp = Math.min(neededFuel,fuel)
let currentFuel = carsFuel.get(car)
carsFuel.set(car,currentFuel + fuelToFillUp) 
console.log(`${car} refueled with ${fuelToFillUp} liters`);
}
function revert(car,kilometers){
    let currentMileage = carsMileage.get(car)
    carsMileage.set(car,currentMileage-kilometers)
    if(carsMileage.get(car)<10000){
        carsMileage.set(car,10000)
    }else{
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
    }
}

}nfs([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])