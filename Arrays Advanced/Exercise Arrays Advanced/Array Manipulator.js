function manipulateArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    let splitString = arr2[i].split(" ");
    let command = splitString[0];

    switch (command) {
      case "add":
        add(splitString);
        break;
      case "addMany":
        addMany(splitString);
        break;
      case "contains":
        contains(splitString);
        break;
      case "remove":
        remove(splitString);
        break;
      case "shift":
        shift(splitString);
        break;
      case "sumPairs":
        sumPairs(arr1);
        break;
      case "print":
        logEveryThing(arr1);
        break;
    }
  }

  function add(splitString) {
    let index = splitString[1];
    let element = Number(splitString[2]);
    return arr1.splice(index, 0, element);
  }

  function addMany(splitString) {
    let index = Number(splitString[1]);
    for (let i = 2; i < splitString.length; i++) {
      arr1.splice(index, 0, Number(splitString[i]));
      index++;
    }
  }

  function contains(splitString) {
    let element = Number(splitString[1]);
    console.log(arr1.indexOf(element));
  }

  function remove(splitString) {
    let index = splitString[1];
    return arr1.splice(index, 1);
  }

  function shift(splitString) {
    let positions = splitString[1];

    for (let i = 0; i < positions; i++) {
      arr1.push(arr1.shift());
    }
    return arr1;
  }

  function sumPairs(arr1) {
    let pairsSumArr = [];
    for (let i = 0; i < arr1.length; i += 2) {
      let currentNum = arr1[i];
      let nextNum = arr1[i + 1];
      if (typeof nextNum === `number`) {
        pairsSumArr.push(currentNum + nextNum);
      } else {
        pairsSumArr.push(currentNum);
      }
    }

    while (arr1.length > 0) {
      arr1.shift();
    }

    for (let i = 0; i < pairsSumArr.length; i++) {
      arr1.push(pairsSumArr[i]);
    }
    return arr1;
  }

  function logEveryThing(arr) {
    console.log(`[ ${arr.join(", ")} ]`);
  }
}
manipulateArray([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
