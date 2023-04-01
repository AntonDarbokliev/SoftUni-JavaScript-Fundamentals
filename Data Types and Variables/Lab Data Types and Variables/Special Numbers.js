function solve(num) {
  for (let currentNum = 1; currentNum <= num; currentNum++) {
    let isSpeacial = false;

    let sum = 0;

    currentNum = currentNum.toString();
    for (let j = 0; j <= currentNum.length - 1; j++) {
      let currentDigit = Number(currentNum[j]);

      sum += currentDigit;
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      isSpeacial = true;
      
    }
    console.log(`${currentNum} -> ${isSpeacial ? "True" : "False"}`);
  }
}
solve(15);
