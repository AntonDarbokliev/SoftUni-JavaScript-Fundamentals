function calculate(firstNum, secondNum, operator) {
  let multiply = (firstNum, SecondNum) => firstNum * SecondNum;
  let divide = (firstNum, SecondNum) => firstNum / SecondNum;
  let add = (firstNum, SecondNum) => firstNum + SecondNum;
  let subtract = (firstNum, SecondNum) => firstNum - SecondNum;

  switch (operator) {
    case "multiply":
      return multiply(firstNum, secondNum);
    case "divide":
      return divide(firstNum, secondNum);
    case "add":
      return add(firstNum, secondNum);
    case `subtract`:
      return subtract(firstNum, secondNum);
  }
}
console.log(calculate(5, 5, "multiply"));
