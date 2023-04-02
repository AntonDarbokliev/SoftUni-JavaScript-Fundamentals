function city(obj){
    let cityArr = []
for(let key of Object.entries(obj)){
     cityArr.push(key.join(" -> "));
}
return cityArr.join(`\n`)

}
console.log(city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    }));