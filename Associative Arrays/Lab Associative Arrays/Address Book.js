function addressBook(book){
let addresses = {}
for(let address of book){
    let [name,nameAddress] = address.split(":")
    addresses[name] = nameAddress
}

let arr = Object.entries(addresses).sort(([aKey,aValue],[bKey,bValue]) => aKey.localeCompare(bKey))

for(let [name,address] of arr){
console.log(`${name} -> ${address}`);
}

}addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);