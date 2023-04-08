function minorTask(arr) {
  let rescources = new Map();
  let name = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      let currentQuantity = rescources.get(name);
      rescources.set(name, currentQuantity + Number(arr[i]));
    } else {
      name = arr[i];
      if(!rescources.has(name)){
        rescources.set(name,0);
      }
    }
  }

  for (let [resource, quantity] of rescources.entries()) {
    console.log(`${resource} -> ${quantity}`);
  }
}
minorTask(["Gold", "155", "Silver", "10", "Copper", "17","Gold", "15"]);
