function lettersChangeNumbers(string) {
  let lettersAndNumbersArr = string.split(" ").filter((el)=> el!=='');

  let totalSum = 0;

  for (let combination of lettersAndNumbersArr) {
    let currentSum = 0;

    let number = Number(combination.substring(1, combination.length - 1));
    let firstLetter = combination.substring(0, 1);
    let lastLetter = combination.substring(combination.length - 1,combination.length);

    if (firstLetter == firstLetter.toUpperCase())currentSum += number / determineLetterPostionAlphabet(firstLetter);
    else currentSum += number * determineLetterPostionAlphabet(firstLetter);

    if (lastLetter == lastLetter.toUpperCase())currentSum -= determineLetterPostionAlphabet(lastLetter);
    else currentSum += determineLetterPostionAlphabet(lastLetter);

    totalSum += currentSum;
  }

  return totalSum.toFixed(2);

  function determineLetterPostionAlphabet(letter) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetArr = alphabet.split("");

    return alphabetArr.indexOf(letter.toLowerCase()) + 1;
  }
}
console.log(lettersChangeNumbers('P34562Z q2576f   H456z'));
