function heroes(arr){
let heroesToChoose = arr.shift()
let heroesHp = new Map()
let heroesMp = new Map()
for(let i = 0;i<heroesToChoose;i++){
    let [name,hp,mp] = arr[i].split(" ")
    heroesHp.set(name,Number(hp))
    heroesMp.set(name,Number(mp))
}
for(let i = 0;i<heroesToChoose;i++){
    arr.shift()
}

for(let command of arr){
    if(command === "End"){
        break;
    }
    let [message,name,amount,fourthParameter] = command.split(" - ")
switch(message){
case"Heal":
heal(name,Number(amount))
break;
case"Recharge":
recharge(name,Number(amount))
break;
case"TakeDamage":
takeDamage(name,Number(amount),fourthParameter)
break;
case"CastSpell":
castSpell(name,Number(amount),fourthParameter)
break


}
}

let names = [...heroesHp.keys()]
for(let name of names){
    console.log(`${name}
  HP: ${heroesHp.get(name)}
  MP: ${heroesMp.get(name)}`);
}


function heal(name,amount){
    let currentHp = heroesHp.get(name)
    let hpToHeal = Math.min(100 - currentHp,amount)
    heroesHp.set(name,currentHp+hpToHeal)
    console.log(`${name} healed for ${hpToHeal} HP!`);
}
function recharge(name,amount){
    let currentMp = heroesMp.get(name)
    let mpToRecharge = Math.min(200- currentMp,amount)
    heroesMp.set(name,currentMp+mpToRecharge)
    console.log(`${name} recharged for ${mpToRecharge} MP!`);
}
function takeDamage(name,damage,attacker){
    let currentHp = heroesHp.get(name)
    heroesHp.set(name,currentHp - damage)
    if( heroesHp.get(name)<=0){
        heroesHp.delete(name)
     heroesMp.delete(name)
     console.log(`${name} has been killed by ${attacker}!`);
    }else{
        console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroesHp.get(name)} HP left!`);
    }

}
function castSpell(name,mpNeeded,spell){
    let currentMp = heroesMp.get(name)
    if(currentMp>=mpNeeded){
        heroesMp.set(name,currentMp - mpNeeded)
    console.log(`${name} has successfully cast ${spell} and now has ${heroesMp.get(name)} MP!`);
    }else{
        console.log(`${name} does not have enough MP to cast ${spell}!`);
    }
  
}

}heroes([4 ,
    'Adela 90 150' ,
   'SirMullich 70 40',
    'Ivor 1 111' ,
    'Tyris 94 61' ,
    'Heal - SirMullich - 50' ,
    'Recharge - Adela - 100' ,
    'CastSpell - Tyris - 1000 - Fireball' ,
    'TakeDamage - Tyris - 99 - Fireball' ,
    'TakeDamage - Ivor - 3 - Mosquito' ,
    'End'])
