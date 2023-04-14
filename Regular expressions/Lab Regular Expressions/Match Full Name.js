function matchFullName(names){
let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
let result = regex.exec(names)
let arr = []
 while(result !== null){
arr.push(result[0])
result = regex.exec(names)
 }
return arr.join(" ")

} console.log(matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"));