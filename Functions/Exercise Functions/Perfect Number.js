function perfectNum(number) {
  let result = checkDivideableNums(number);
  return result;

  function checkDivideableNums(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        sum += i;
      }
      if (sum == number) {
        return `We have a perfect number!`
      }
    }
    return "It's not so perfect."
  }
}
console.log(perfectNum(28));
