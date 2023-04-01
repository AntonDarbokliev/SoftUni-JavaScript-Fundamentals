function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let armorBrokenCount = 0;
  let swordBrokenCount = 0;
  let helmetBrokenCount = 0;
  let shieldBrokenCount = 0;
  let lostCount = 0;
  let shieldStreak = 0;
  for (let i = 1; i <= lostFights; i++) {
    
    lostCount++;
    if (lostCount % 2 === 0) {
        helmetBrokenCount++
    } 
    if(lostCount % 3 === 0){
        swordBrokenCount++
    }
     
    if (lostCount%6 == 0&&lostCount%3== 0){
        shieldBrokenCount++
        shieldStreak++
    }

    if(shieldStreak == 2){
        armorBrokenCount++
        shieldStreak = 0
    }
  }
let expenses = (helmetBrokenCount * helmetPrice) + (swordBrokenCount * swordPrice) + (shieldBrokenCount * shieldPrice) + (armorBrokenCount * armorPrice)
console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(7,

    2,
    
    3,
    
    4,
    
    5)
