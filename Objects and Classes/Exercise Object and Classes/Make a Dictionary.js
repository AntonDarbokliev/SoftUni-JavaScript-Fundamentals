function dictionary(jsonArr) {
  let obj = {};


  for (let json of jsonArr) {
    let currentObj = JSON.parse(json);
 let key = Object.keys(currentObj)
obj[key] =  currentObj[key]
  }

  let sortedKeys = Object.keys(obj).sort((a,b)=> a.localeCompare(b))
for(let key of sortedKeys){
    console.log(`Term: ${key} => Definition: ${obj[key]}`);
}

}
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  '{"Boiler":"A fuel-burning apparatus or container for   heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
