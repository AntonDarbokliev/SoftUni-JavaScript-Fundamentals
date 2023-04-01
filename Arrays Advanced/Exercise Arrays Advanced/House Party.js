function houseParty(arr) {
  let result = addPeopleToList(arr);
  return result.join("\n");

  function addPeopleToList(arr) {
    let list = [];
    let promptList = [];
    for (let i = 0; i < arr.length; i++) {
      let announcment = arr[i].split(" ");
      announcment.splice(1,1);
      if (announcment.length === 2) {
        if (list.includes(announcment[0])) {
            promptList.unshift(`${announcment[0]} is already in the list!`);
        } else {
          list.push(announcment[0]);
        }
      } else if (announcment.length === 3) {
        if (list.includes(announcment[0])) {
       
          let nameIndex = list.indexOf(announcment[0]);
          list.splice(nameIndex, nameIndex);
        } else {
            promptList.unshift(`${announcment[0]} is not in the list!`);
        }
      }
    }
for(let el of promptList){
    list.unshift(el)
}

    return list;
  }
}
console.log(
  houseParty(['Allie is going!',

  'George is going!',
  
  'John is not going!',
  
  'George is not going!'])
);
