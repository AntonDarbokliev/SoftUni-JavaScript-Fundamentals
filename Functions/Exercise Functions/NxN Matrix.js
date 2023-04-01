function amountOfRows(number) {
  let buff = "";
  for (let i = 1; i <= number; i++) {
    buff += `${row(number)}\n`;
  }
  return buff;

  function row(number) {
    let buff = "";
    for (let i = 1; i <= number; i++) {
      buff += number + " ";
    }
    return buff.trim();
  }
}

console.log(amountOfRows(7));
