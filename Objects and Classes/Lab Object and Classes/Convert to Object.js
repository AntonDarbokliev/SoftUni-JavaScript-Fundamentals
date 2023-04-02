function convert(jsonFormat){
let convertedObj = JSON.parse(jsonFormat)
let resultArr = []
for(let [key,value] of Object.entries(convertedObj)){
    resultArr.push(`${key}: ${value}`);
}
return resultArr.join('\n')
}
console.log(convert('{"name": "George", "age": 40, "town": "Sofia"}'));