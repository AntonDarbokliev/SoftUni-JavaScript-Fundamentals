function arena(gladiatorsArr) {
  let gladiators = new Map();
  let innerMap = new Map();
  for (let gladiator of gladiatorsArr) {
    let versusScenario = gladiator.split(" ")
    if(gladiator === "Ave Cesar"){
        break;
    }else if(versusScenario[1]==="vs"){
if(gladiators.has(versusScenario[0]) && gladiators.has(versusScenario[2])){
let gladiatorATechniques = [...gladiators.get(versusScenario[0]).keys()]
let gladiatorBTechniques = [...gladiators.get(versusScenario[2]).keys()]
if(checkForCommonTechniques(gladiatorATechniques,gladiatorBTechniques)){
  if([...gladiators.get(versusScenario[0]).values()].reduce((a,b)=> Number(a)+Number(b)) <
   [...gladiators.get(versusScenario[2]).values()].reduce((a,b)=> Number(a)+Number(b))){
    gladiators.delete(versusScenario[0])
   }else{
    gladiators.delete(versusScenario[2])
   }
}
}
continue
  }
    let [name, technique, skill] = gladiator.split(" -> ");
    if (!gladiators.has(name)) {
      gladiators.set(name, new Map());
      innerMap = gladiators.get(name);
      innerMap.set(technique, skill);
    } else {
        let valuesArr = [...innerMap.values()]
        let currentTechnicalSkill = [...gladiators.get(name).values()].reduce((a,b)=> Number(a)+Number(b))
        if(innerMap.get(technique)<Number(skill) || innerMap.get(technique) === undefined){
            innerMap.set(technique, skill);
      
        }
    }
  }



let gladiatorPoints = new Map()

 for(let [name,map] of gladiators){
  let skillSum = [...gladiators.get(name).values()].reduce((a,b)=> Number(a)+Number(b))
gladiatorPoints.set(name,skillSum)

 }
gladiatorPoints =  [...gladiatorPoints].sort((a,b)=>{
return b[1] - a[1] || a[0].localeCompare(b[0])
})

for(let [name,skill]of gladiatorPoints){
  console.log(`${name}: ${skill} skill`);
  let techniqueAndSkill = [...gladiators.get(name)].sort((a,b)=> {
    return b[1] - a[1]|| a[0].localeCompare(b[0])
  })
  for(let [technique,skill]of techniqueAndSkill){
    console.log(`- ${technique} <!> ${skill}`);

  }
}



function checkForCommonTechniques(gladiatorATechniques,gladiatorBTechniques){
    let result = false
    let arrToCheck = []
    let arrToBeChecked = []
    if(Math.max(gladiatorATechniques.length,gladiatorBTechniques.length) === gladiatorATechniques.length){
      arrToCheck  = gladiatorATechniques
      arrToBeChecked = gladiatorBTechniques
  }else{
      arrToBeChecked = gladiatorATechniques
      arrToCheck = gladiatorBTechniques
  }
  for(let i = 0;i<Math.max(gladiatorATechniques.length,gladiatorBTechniques.length);i++){   
        if(arrToCheck.includes(arrToBeChecked[i])){
            result = true
            return result
        }
        
    }
    return result
}


}
arena([ 'Peter -> Duck -> 400', 'Julius -> Shield -> 150', 
'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius',
 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar' ])






//Number(valuesArr[innerMap.size-1]