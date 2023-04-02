function town(arr){
let obj = {}

for(let currentTown of arr){
let [town,latitude,longitude] = currentTown.split(" | ")
latitude = Number(latitude)
longitude = Number(longitude)
obj.town = town
obj.latitude = latitude.toFixed(2)
obj.longitude = longitude.toFixed(2)
console.log(obj);
}

}
town(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])