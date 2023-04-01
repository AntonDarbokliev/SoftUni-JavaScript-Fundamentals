function limitationGame(arr) {
  let messageToDecipher = arr.shift();
  for (let command of arr) {
    if (command === "Decode") {
      console.log(`The decrypted message is: ${messageToDecipher}`);
      break;
    }
    let [type, parameterOne, parameterTwo] = command.split("|");
    switch (type) {
      case "ChangeAll":
        changeAll(parameterOne, parameterTwo);
        break;
      case "Insert":
        insert(parameterOne, parameterTwo);
        break;
      case "Move":
        move(parameterOne);
        break;
    }
  }
  function move(num) {
    let lettersToAdd = messageToDecipher.substring(0, num);
    messageToDecipher = messageToDecipher.substring(num);
    messageToDecipher += lettersToAdd;
  }
  function insert(index, value) {
    let firstPart = messageToDecipher.substring(0, index);
    let secondPart = messageToDecipher.substring(index);
    messageToDecipher = firstPart + value + secondPart;
  }
  function changeAll(substring, replacement) {
    while (messageToDecipher.includes(substring)) {
      messageToDecipher = messageToDecipher.replace(substring, replacement);
    }
  }
}
limitationGame([
  "owyouh",

  "Move|2",

  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
