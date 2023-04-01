function mapper(string){
let regExp = /([=\/])(?<destination>[A-Z][a-zA-Z]{2,})\1/g
let destinations = []
let res = regExp.exec(string)

while(res!==null){
    destinations.push(res.groups.destination)
    res = regExp.exec(string)
}
let travelPoints = 0
if(destinations.length>0){
//  for(let el of destinations){
//     travelPoints+=el.length
//  }
 travelPoints = destinations.reduce((a,b)=> a + b.length,0)
}
    console.log(`Destinations: ${destinations.join(", ")}`);
console.log(`Travel Points: ${travelPoints}`);

}mapper("/Hawai//Bulgaria//India/")