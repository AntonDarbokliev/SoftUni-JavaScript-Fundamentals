function inventory(arr) {
  let heroesArr = [];
  for (let heroStats of arr) {
    let hero = {};
    let [name, level, items] = heroStats.split(" / ");
    hero.name = name;
    hero.level = level;
    hero.items = items;
    heroesArr.push(hero);
  }
  console.table(heroesArr);

  let sortedHeroes = heroesArr.sort((a, b) => a.level - b.level);

  for (let hero of sortedHeroes) {
    console.log(
      `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
    );
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
