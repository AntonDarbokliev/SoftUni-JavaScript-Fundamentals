function DungeonestDark(arr) {
  let health = 100;
  let coins = 0;
  let concatanation = "";
  let number = "";
  let flagForNumber = false;
  let flagForWord = false
  let isAlive = true;
  let concatanationForWords = "";
  let roomCounter = 1;
  for (let i = 0; i < arr[0].length; i++) {
    if(isAlive === false){
      break;
    }
    let string = arr[0];
    let currentLetter = string[i];
    concatanation += currentLetter;
    if (currentLetter == "|"|| i == string.length - 1) {
      for (let j = 0; j < concatanation.length; j++) {   //-for cycle to get the number
        flagForWord = false
        let symbolJ = concatanation[j];
        flagForNumber = true;
        switch (symbolJ) {
          case "0":
            number += symbolJ;
            break;
          case "1":
            number += symbolJ;
            break;
          case "2":
            number += symbolJ;
            break;
          case "3":
            number += symbolJ;
            break;
          case "4":
            number += symbolJ;
            break;
          case "5":
            number += symbolJ;
            break;
          case "6":
            number += symbolJ;
            break;
          case "7":
            number += symbolJ;
            break;
          case "8":
            number += symbolJ;
            break;
          case "9":
            number += symbolJ;
            break;
        }
      }
    }
    if (flagForNumber == true) {
      for (let k = 0; k < concatanation.length; k++) {
        // - for cycle to get the word
        let symbolK = concatanation[k];

        if (symbolK === " ") {
          flagForNumber = false;
          flagForWord = true;
          switch (concatanationForWords) {
            case "potion":
              let healedWith = number;
              health += Number(number);
              if (health > 100) {
                healedWith =  number - (health - 100)
                health = 100;
              }
              console.log(`You healed for ${healedWith} hp.`);              
              console.log(`Current health: ${health} hp.`);
              
              break;
            case "chest":
              console.log(`You found ${Number(number)} coins.`);
              coins += Number(number);
              break;
            default:
              health -= Number(number);
              if (health > 0) {
                console.log(`You slayed ${concatanationForWords}.`);
              } else {
                console.log(`You died! Killed by ${concatanationForWords}.`);
                console.log(`Best room: ${roomCounter}`);
                isAlive = false;
              }
             
              break;
          }
         
        }else{
          concatanationForWords += symbolK;
        }
           if(flagForWord === true){
            concatanation = ""
            concatanationForWords = ""
            number = ""
            roomCounter++
          break;
        }
        
      }
    }
  }
if(health>0){
console.log("You've made it!");
console.log(`Coins: ${coins}`);
console.log(`Health: ${health}`);
}

}
DungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);