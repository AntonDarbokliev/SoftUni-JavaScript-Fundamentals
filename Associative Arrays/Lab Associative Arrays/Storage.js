function storage(products){
let map = new Map()
for(let item of products){
    let [product,quantity] = item.split(" ")
    if(map.has(product)){
        let currentQuantity = map.get(product);
        map.set(product,Number(currentQuantity) + Number(quantity))
    }else{
        map.set(product,quantity)
    }
}


for(let [product,quantity]of map){
    console.log(`${product} -> ${quantity}`);
}
}
storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])