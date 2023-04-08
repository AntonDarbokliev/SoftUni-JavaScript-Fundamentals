function farming(string) {
  let valuableMaterials = new Map();
  let junk = new Map();
  valuableMaterials.set("motes", 0);
  valuableMaterials.set("shards", 0);
  valuableMaterials.set("fragments", 0);

  let stringIntoArr = string.split(" ");
  let isItemAcquired = false;
  let legendaryItem = "";

  for (let i = 0; i < stringIntoArr.length; i += 2) {
    let quantity = stringIntoArr[i];
    let material = stringIntoArr[i + 1].toLowerCase();

    let checkMaterial =
      material === "motes" || material === "shards" || material === "fragments";

    if (checkMaterial) {
      valuableMaterials.set(
        material,
        valuableMaterials.get(material) + Number(quantity)
      );
    } else {
      if (!junk.has(material)) {
        junk.set(material, Number(quantity));
      } else {
        junk.set(material, junk.get(material) + Number(quantity));
      }
    }

    if (isItemAcquired === false) {
      if (valuableMaterials.get("motes") >= 250) {
        legendaryItem = "Dragonwrath";
        valuableMaterials.set(material, valuableMaterials.get(material) - 250);
        isItemAcquired = true;
        break;
      } else if (valuableMaterials.get("shards") >= 250) {
        legendaryItem = "Shadowmourne";
        valuableMaterials.set(material, valuableMaterials.get(material) - 250);
        isItemAcquired = true;
        break;
      } else if (valuableMaterials.get("fragments") >= 250) {
        legendaryItem = "Valanyr";
        valuableMaterials.set(material, valuableMaterials.get(material) - 250);
        isItemAcquired = true;
        break;
      }
    }
  }

  console.log(`${legendaryItem} obtained!`);
  let sortedValueables = Array.from(valuableMaterials).sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  });
  let sortedJunk = Array.from(junk).sort((a, b) => a[0].localeCompare(b[0]));

  for (let junk of sortedJunk) {
    sortedValueables.push(junk);
  }

  for (let [item, quantity] of sortedValueables) {
    console.log(`${item}: ${quantity}`);
  }
}
farming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
