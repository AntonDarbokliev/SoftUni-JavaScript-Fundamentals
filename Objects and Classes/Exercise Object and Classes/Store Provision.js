function storeProvision(store,delivery){
    let storage = {}
iterateStock(store)
iterateStock(delivery)

for(let key of Object.keys(storage)){
console.log(`${key} -> ${storage[key]}`);
}

function iterateStock(arr){
    for(let i = 0;i<arr.length;i+=2){
        let currentItem = arr[i]
        let quantity = Number(arr[i+1])
        if(!storage.hasOwnProperty(currentItem)){
            storage[currentItem] = quantity
        }else{
            storage[currentItem] = quantity + storage[currentItem]
        }
     
    }
}

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        
        'Tomatoes', '70', 'Bananas', '30'
        ])