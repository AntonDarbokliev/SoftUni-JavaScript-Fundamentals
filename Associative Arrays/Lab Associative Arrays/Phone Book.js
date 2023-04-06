function phoneBook(numbers){
let phoneBook = {}

    for(let number of numbers){
        let [name,nameNumber] = number.split(" ")
        phoneBook[name] = nameNumber
    }
    let resultArr = []

    for (const key in phoneBook) {
        resultArr.push(`${key} -> ${phoneBook[key]}`)
        }
  
        return resultArr.join(`\n`)

}console.log(phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']))