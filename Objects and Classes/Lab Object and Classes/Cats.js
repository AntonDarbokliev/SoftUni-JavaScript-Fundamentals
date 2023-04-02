function cats(arr){
class Cat {
constructor(name, age){
    this.name = name
    this.age = age
}
meow(){
    console.log(`${this.name}, age ${this.age} says Meow`);
}
}

let arrCats = []
for(let cat of arr){
    let [name,age] = cat.split(" ")
    let newCat = new Cat(name,age)
    arrCats.push(newCat)
newCat.meow()
}

}
cats(['Mellow 2', 'Tom 5'])